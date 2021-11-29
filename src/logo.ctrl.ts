export class LogoCtrl {
    private static maxGlitchTime = 600;
    private static dpi = window.devicePixelRatio;

    private static randInt (a: number = 0, b: number = 1) { return Math.random() * (b - a) + a; }
    private static randIntNormalDistributed (a: number = 0, b: number = 1) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        const num = Math.abs(Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )) + .1;
        return (num > 3.8 ? 1 : (num > 1 ? num % 1 : (num > .1 && num < .4 ? num + Math.random() * .5 : (num < 0 ? 0 : num)))) * (b - a) + a;
    }
    private static asyncTimeout (timeout: number) {
        return new Promise(resolve =>
            setTimeout(resolve, timeout)
        );
    }

    private lastVisibleItem = -1;

    private resizeObserver = new window.ResizeObserver(this.onResize.bind(this));

    private img: HTMLImageElement;
    private ctx: CanvasRenderingContext2D;
    private imgSize: {width: number; height: number};
    private canvasSize: {width: number; height: number};

    constructor (
        public logo: SVGElement,
        public canvas: HTMLCanvasElement,
        public itemsToReveal: (HTMLElement | SVGElement)[],
        public onFinish?: () => void
    ) {
        this.ctx = this.canvas.getContext('2d');
        this.resizeObserver.observe(logo);
        this.resizeObserver.observe(canvas);
    }

    private async onResize () {
        await this.refreshSvgImage();
        this.imgSize = this.logo.querySelector('g').getBoundingClientRect();
        this.canvasSize = {width: this.canvas.offsetWidth, height: this.canvas.offsetHeight};
        this.canvas.width = this.canvasSize.width * LogoCtrl.dpi;
        this.canvas.height = this.canvasSize.height * LogoCtrl.dpi;
        this.ctx.scale(LogoCtrl.dpi, LogoCtrl.dpi);
    }

    async init () {
        await this.onResize();
        
        this.glitchTimeouted();
        setTimeout(this.progressReveal.bind(this), 2500); // starting timeout
    }

    glitchImg () {
        const imgWidth = this.imgSize.width * LogoCtrl.dpi;
        const imgHeight = this.imgSize.height * LogoCtrl.dpi;
        const canvasScale = Math.max(this.canvas.clientHeight/this.logo.clientHeight, this.canvas.clientWidth/this.logo.clientWidth);
        if (Math.random() < .2) {
            this.logo.style.visibility = 'hidden';
        } else {
            this.logo.style.visibility = null;
            this.logo.style.transform = Math.random() < .7
                ? `translate(${LogoCtrl.randIntNormalDistributed(-10, 10)}%, ${LogoCtrl.randIntNormalDistributed(-10, 10)}%)`
                : 'none';
        }

        for (let i = 0; i < LogoCtrl.randInt(1, 13); ++i) {
            const x = LogoCtrl.randIntNormalDistributed(0, 1);
            const y = LogoCtrl.randIntNormalDistributed(0, 1);
            const spliceWidth = LogoCtrl.randIntNormalDistributed(0, 1);
            const spliceHeight = LogoCtrl.randIntNormalDistributed(0, 1);

            this.ctx.drawImage(
                this.img,
                (x - 0.5) * imgWidth + imgWidth,
                y * imgHeight,
                spliceWidth * imgWidth * canvasScale,
                spliceHeight * imgHeight * canvasScale,
                LogoCtrl.randIntNormalDistributed(0, this.canvasSize.width - this.imgSize.width),
                LogoCtrl.randIntNormalDistributed(0, this.canvasSize.height - this.imgSize.height),
                spliceWidth * this.imgSize.width,
                spliceHeight * this.imgSize.height
            );
        }
    }

    async glitchTimeouted () {
        this.logo.style.visibility = null;
        await Promise.all(new Array(Math.round(LogoCtrl.randInt(.5, 3.4))).fill(0).map(async () => {
            await LogoCtrl.asyncTimeout(LogoCtrl.randInt(550, 2500));
            this.glitchImg();
            await LogoCtrl.asyncTimeout(LogoCtrl.randInt(50, LogoCtrl.maxGlitchTime));
        }));

        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        this.glitchTimeouted();
    }

    async progressReveal () {
        if (this.lastVisibleItem === this.itemsToReveal.length - 1) {
            return this.onFinish?.();
        }

        this.itemsToReveal[++this.lastVisibleItem].style.visibility = 'visible';
        await this.refreshSvgImage();
        setTimeout(this.progressReveal.bind(this), LogoCtrl.randInt(200, 700));
    }

    async refreshSvgImage () {
        const image = new Image();
        const img = await new Promise<typeof image>(resolve => {
            image.onload = resolve.bind(void 0, image);
            if (this.canvasSize) {
                this.logo.setAttribute('width', (this.canvasSize.width * LogoCtrl.dpi).toString());
                this.logo.setAttribute('height', (this.canvasSize.height * LogoCtrl.dpi).toString());
            }
            const svgURL = new XMLSerializer().serializeToString(this.logo);
            image.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgURL);
        });
        return this.img = img;
    }
}
