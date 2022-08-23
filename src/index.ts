import 'regenerator-runtime/runtime';
import type ResizeObserverType from 'resize-observer-polyfill';
import './index.scss';
import type { ContactDialogCtrl } from './contactDialog';
import domready from 'domready';
import { startLogoAnimation } from './logo.ctrl';

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

        domready(() => setTimeout(() =>
            loadEls.forEach((el, i) =>  setTimeout(() =>  el.classList.add('in'), 300 * i)),
            3500
        ));

        let logo = document.querySelector<SVGSVGElement>('.icon-logomark');
        const paths = Array.from(logo.querySelectorAll<HTMLElement | SVGElement>('path'));

        paths.push(logo.querySelector<SVGSVGElement>('use'));

        startLogoAnimation(logo, paths);
        // dereference element to allow garbade collect to collect it
        logo = undefined;
    }

    let contactDialogCtrl: ContactDialogCtrl;

    document.body.querySelector<HTMLButtonElement>('.btn--contact').addEventListener('click', async function () {
        if (!contactDialogCtrl) {
            this.disabled = true;
            const contactDialogModule = await import('./contactDialog')
                .catch(() => this.disabled = false as false);
            if (!contactDialogModule) return;
            contactDialogCtrl = new contactDialogModule.ContactDialogCtrl();
            await contactDialogModule.ContactDialogCtrl.templateLoader;

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

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register(new URL('./serviceWorker.ts', import.meta.url))
            .catch(err => console.log('Service worker registration failed: ' + err));
    }
})();
