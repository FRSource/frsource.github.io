import tpl from 'bundle-text:./contactDialog.tpl.html';

export class ContactDialogCtrl {
    static grecaptchaScriptLoader: Promise<HTMLElement>;

    private grecaptchaCallbackResolver: (token: string)=> void = () => {};
    element: HTMLDialogElement;

    constructor () {
        if (!ContactDialogCtrl.grecaptchaScriptLoader) this.createScriptElement();
        this.element = document.createElement('dialog');
        this.element.innerHTML = tpl;
        this.element.querySelector('.dialog__btn-close').addEventListener('click', this.hide.bind(this));

        this.element.querySelector<HTMLFormElement>('.gform').addEventListener('submit', this.onFormSubmit.bind(this))
    }
    
    private createScriptElement () {
        ContactDialogCtrl.grecaptchaScriptLoader = new Promise((resolve) => {
            const script = document.createElement('script');
            script.onload = () => {
                const container = document.createElement('div');
                container.className = 'grecaptcha-wrapper';
                document.body.appendChild(container);
                (window as any).grecaptcha.ready(() => {
                    (window as any).grecaptcha.render(container, {
                        sitekey: '6LdQaM8ZAAAAAJwBCtGEYIyh9u6be1rBOlsd-FWj',
                        size: 'invisible',
                        callback: (token) => this.grecaptchaCallbackResolver(token)
                    });
                    resolve();
                });
            };
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
            script.defer = true;
            script.async = true;

            document.body.appendChild(script);
        });
    }

    private async executeGrecaptcha () {
       const token = await new Promise<string>((resolve) => {
            this.grecaptchaCallbackResolver = resolve;
           (window as any).grecaptcha.execute();
        });
        (window as any).grecaptcha.reset();

        return token;
    }

    private async sendContactData (data: string, attempt = 0) {
        return new Promise(async (resolve, reject) => {
            const url = 'https://script.google.com/macros/s/AKfycbzrISB5QwRuuwGTgkxgKp7DGENDHPcxZTcka2_LRQ0zULSf5Ec/exec?' + data;

            const token = await this.executeGrecaptcha();
            const req = new XMLHttpRequest();
            req.open('POST', url + '&token=' + encodeURIComponent(token));
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.onreadystatechange = () => {
                if(req.readyState === 4 && req.status === 200) {
                    const res = JSON.parse(req.responseText);
                    if (res.result === 'success') return resolve();
                    else if (++attempt < 3) resolve(this.sendContactData(data, attempt))
                    else reject();
                }
            }
            req.send();
        });
    }

    isShown () {
        return this.element.getAttribute('open') === 'open';
    }

    show() {
        this.element.setAttribute('open', 'open');
    }

    hide() {
        this.element.removeAttribute('open');
    }

    async onFormSubmit (e: Event) {
        await ContactDialogCtrl.grecaptchaScriptLoader;

        const form = e.currentTarget as HTMLFormElement;
        const button = form.querySelector('button');
        button.disabled = true;
        e.preventDefault();

        const url = Array.prototype.slice.apply(form.querySelectorAll('input,textarea'))
                .map(
                    (el: HTMLInputElement | HTMLTextAreaElement) =>
                    encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value)
                )
                .join('&');

        await this.sendContactData(url).then(
            () => {
                button.textContent = 'THX!';
            },
            () => {}
        );
        button.querySelector('button').disabled = false;
    }
}
