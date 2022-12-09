import { PowerGlitch } from 'powerglitch'

const emptyElement = (element: HTMLElement) => {
    while(element.firstChild) element.removeChild(element.firstChild);
};
const randInt = (a: number = 0, b: number = 1) => Math.random() * (b - a) + a;

const glitchDefaults = PowerGlitch.getDefaultOptions();


export const startLogoAnimation = (logo: SVGElement, itemsToReveal: (HTMLElement | SVGElement)[]) => {
    let lastVisibleItem = -1;
    let url: string;

    itemsToReveal.forEach(item => item.style.visibility = 'hidden');

    const glitchWrapper = document.createElement('div');
    glitchWrapper.className = 'icon icon-logomark icon-logomark--img';
    logo.parentElement.appendChild(glitchWrapper);
    logo.remove();

    const progressReveal = async () => {
        let timeout: number;
        if (lastVisibleItem === itemsToReveal.length - 1) {
            logo = undefined;
            reinitGlitch(true);
            timeout = randInt(1000, 6000);
        } else {
            itemsToReveal[++lastVisibleItem].style.visibility = 'visible';
            refreshSvgImage();
            timeout = randInt(200, 700);
        }

        setTimeout(progressReveal.bind(this), timeout);
    };

    const reinitGlitch = (itemsRevealed = false) => {
        const slice = glitchDefaults.slice && {
            ...glitchDefaults.slice,
            count: randInt(2, 8)
        }

        emptyElement(glitchWrapper);
        return PowerGlitch.glitch(glitchWrapper, {
            imageUrl: url,
            timing: {
                duration: randInt(300, 2000),
                iterations: 1,
            },
            slice,
        });
    };

    const refreshSvgImage = () => {
        const svgURL = new XMLSerializer().serializeToString(logo).replace(/<use[^>]+ style=".*?visible;"\/>/, `<g style="color:#fefefe;fill:#fefefe">${document.querySelector('#logotype').innerHTML}</g>`);
        url = '"data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgURL) + '"';

        reinitGlitch();
    }

    setTimeout(progressReveal.bind(this), 2500); // starting timeout
};
