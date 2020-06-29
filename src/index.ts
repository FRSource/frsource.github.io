import './index.scss';

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const loadEls = document.body.querySelectorAll('.load-fadeinup');

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => 
            loadEls.forEach((el, i) => {
                setTimeout(() => el.classList.add('in'), 300 * i);
            }),
            5500
        );
    });
    
    import('./logo.ctrl').then((module) => {
        const logo = document.querySelector<SVGElement>('.icon-logomark');
        const logoType = document.querySelector<HTMLDivElement>('.icon-logotype--logo');
        const logoTypeText = logoType.querySelector<SVGElement>('.icon');
        const paths = Array.from(logo.querySelectorAll<HTMLElement | SVGElement>('path'));
        const canvas = document.createElement('canvas');
        canvas.className = 'icon-logomark icon-logomark--canvas';
        logo.parentElement.appendChild(canvas);

        let canvasSize = {w: window.innerWidth - 30, h: 86};
        let imgSize = {w: 84, h: 72};
        
        if (matchMedia('(min-width:920px)').matches) {
            canvasSize = {w: window.innerWidth/2 - 30, h: window.innerHeight * .45 + 40};
            imgSize = {w: window.innerHeight / 2 * 1.666667, h: window.innerHeight * .45};
        }

        paths.push(logoType, logoTypeText);
        paths.forEach(path => path.style.display = 'none');
        document.querySelector<HTMLDivElement>('.logo-wrapper').style.display = 'block';
        new module.LogoCtrl(
            logo,
            canvas,
            paths,
            canvasSize,
            imgSize
        ).init();
    });
}
