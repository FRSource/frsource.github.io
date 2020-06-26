import './index.scss';

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    import('./logo.ctrl').then((module) => {
        const logo = document.querySelector<SVGElement>('.icon-logomark');
        const logoType = document.querySelector<HTMLDivElement>('.icon-logotype--logo');
        const logoTypeText = logoType.querySelector<SVGElement>('.icon');
        const paths = Array.from(logo.querySelectorAll<HTMLElement | SVGElement>('path'));
        const canvas = document.createElement('canvas');
        canvas.className = 'icon-logomark icon-logomark--canvas';
        logo.parentElement.appendChild(canvas);

        paths.push(logoType, logoTypeText);
        paths.forEach(path => path.style.display = 'none');
        new module.LogoCtrl(
            logo,
            canvas,
            paths,
            {w: window.innerWidth - 30, h: 86},
            {w: 84, h: 72}
        ).init();
    });
}
