import 'regenerator-runtime/runtime';
import type ResizeObserverType from 'resize-observer-polyfill';
import './index.scss';
import type { ContactDialogCtrl } from './contactDialog';

declare global {
    interface Window {
        ResizeObserver: typeof ResizeObserverType;
    }
}

(async () => {
    if (!window.ResizeObserver) {
        const {default: ResizeObserver} = await import('resize-observer-polyfill');
        window.ResizeObserver = ResizeObserver;
    }

    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const loadEls = document.body.querySelectorAll('.load-fadeinup');

        import('domready').then((domready) => (domready as unknown as typeof domready['default'])(() => {
            setTimeout(() => 
                loadEls.forEach((el, i) => {
                    setTimeout(() =>  el.classList.add('in'), 300 * i);
                }),
                5500
            );
        }));

        import('./logo.ctrl').then(({LogoCtrl}) => {
            const logo = document.querySelector<SVGSVGElement>('.icon-logomark');
            const logoWrapper = logo.parentElement;
            const logoText = logo.querySelector<SVGSVGElement>('use');
            const paths = Array.from(logo.querySelectorAll<HTMLElement | SVGElement>('path'));
            const canvas = document.createElement('canvas');
            canvas.className = 'icon-logomark icon-logomark--canvas';
            logoWrapper.appendChild(canvas);

            paths.push(logoText);
            paths.forEach(path => path.style.visibility = 'hidden');
            logoWrapper.style.display = 'flex';
            
            new LogoCtrl(
                logo,
                canvas,
                paths
            ).init();
        });
    }

    let contactDialogCtrl: ContactDialogCtrl; 

    document.body.querySelector<HTMLButtonElement>('.btn--contact').addEventListener('click', async function () {
        if (!contactDialogCtrl) {
            this.disabled = true;
            const contactDialogModule = await import('./contactDialog')
                .catch(() => this.disabled = false as false);
            if (!contactDialogModule) return;
            contactDialogCtrl = new contactDialogModule.ContactDialogCtrl();
            document.body.querySelector('.content').insertAdjacentElement('afterbegin', contactDialogCtrl.element);
            this.disabled = false;
        }

        contactDialogCtrl.isShown
            ? contactDialogCtrl.show()
            : contactDialogCtrl.hide();
    });

    const themes = [];
    document.body.querySelectorAll('.btn[data-theme]').forEach(btn => {
        const theme = btn.getAttribute('data-theme');
        themes.push(theme);
        btn.addEventListener('click', () => {
            localStorage.setItem('FRS:theme', theme);
            themes.forEach(theme => document.body.classList.remove('t-' + theme));
            document.body.classList.add('t-' + theme);
        });
    });
})();
