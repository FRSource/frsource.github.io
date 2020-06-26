
export class LogoCtrl {
    static maxGlitchTime = 900;
    static dpi = window.devicePixelRatio;
    static max = 0;
    static min = 0;

    static randInt (a: number = 0, b: number = 1) { return Math.random() * (b - a) + a; }
    static randIntNormalDistrubuted (a: number = 0, b: number = 1) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        const num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
        if (num < LogoCtrl.min) LogoCtrl.min = num;
        if (num > LogoCtrl.max) LogoCtrl.max = num;
        return (num > 1 ? 1 : (num < 0 ? 0 : num)) * (b - a) + a;
    }
    static asyncTimeout (timeout: number) {
        return new Promise(resolve =>
            setTimeout(resolve, timeout)
        );
    }

    private lastVisibleItem = -1;

    glitchInterval: ReturnType<typeof window.setInterval>;
    img: HTMLImageElement;
    imgOffset = {w: 0, h: 0};
    imgScaleRatio = 1;
    ctx: CanvasRenderingContext2D;

    constructor (
        public logo: SVGElement,
        public canvas: HTMLCanvasElement,
        public itemsToReveal: (HTMLElement | SVGElement)[],
        public canvasSize: {w: number; h: number},
        public imgSize: {w: number; h: number},
        public onFinish?: () => void
    ) {
        this.ctx = this.canvas.getContext('2d');
    }

    async init () {
        this.img = await this.refreshSvgImage();
        this.imgInit();
    }

    imgInit () {
        clearInterval(this.glitchInterval);
        this.prepareCanvas(); 

        this.glitchInterval = setInterval(this.prepareImgAndGlitch.bind(this), 500);
        setTimeout(this.progressReveal.bind(this), 1500); // starting timeout
    }

    prepareCanvas () {
        this.imgScaleRatio = Math.min(this.img.width / this.imgSize.w, this.img.height / this.imgSize.h);
        this.canvas.width = this.canvasSize.w * LogoCtrl.dpi;
        this.canvas.height = this.canvasSize.h * LogoCtrl.dpi;
        this.imgOffset.w = (this.canvasSize.w - this.imgSize.w) / 2;
        this.imgOffset.h = (this.canvasSize.h - this.imgSize.h) / 2;
        this.canvas.style.width = this.canvasSize.w + 'px';
        this.canvas.style.height = this.canvasSize.h + 'px';
        this.ctx.scale(LogoCtrl.dpi, LogoCtrl.dpi);
        this.canvas.style['margin-top'] = -this.imgOffset.h + 'px';
        // this.canvas.style['margin-left'] = -offsetSizes.width + 'px';
    }

    prepareImgAndGlitch () {
        this.reinitImg();
        setTimeout(this.glitchImg.bind(this), LogoCtrl.randInt(250, LogoCtrl.maxGlitchTime));
    }

    reinitImg () {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    }

    glitchImg () {
        for (let i = 0; i < LogoCtrl.randInt(1, 13); ++i) {
            const x = Math.random();
            const y = Math.random();
            const spliceWidth = Math.random() * (1 - x);
            const spliceHeight = Math.random() * (1 - y);
            const imgWidth = this.img.width + 27;
            const imgHeight = this.img.height + 22;
            this.ctx.drawImage(this.img, x * imgWidth, y * imgHeight, spliceWidth * imgWidth, spliceHeight * imgHeight, LogoCtrl.randIntNormalDistrubuted(this.imgOffset.w / 2, (this.canvas.width - this.imgOffset.w) / 2), this.imgSize.h * y + this.imgOffset.h, spliceWidth * this.imgSize.w, spliceHeight * this.imgSize.h);
        }
    }

    async progressReveal () {
        if (this.lastVisibleItem === this.itemsToReveal.length - 1) {
            this.onFinish?.();
            await LogoCtrl.asyncTimeout(2000);
            clearInterval(this.glitchInterval);
            await LogoCtrl.asyncTimeout(LogoCtrl.maxGlitchTime + 50);
            this.reinitImg();

            this.glitchInterval = setInterval(async () => {
                await LogoCtrl.asyncTimeout(LogoCtrl.randInt(250, LogoCtrl.maxGlitchTime));
                this.glitchImg();
                const end = LogoCtrl.randInt(150, LogoCtrl.maxGlitchTime);
                LogoCtrl.asyncTimeout(end).then(this.glitchImg.bind(this));
                await LogoCtrl.asyncTimeout(LogoCtrl.randInt(end + 50, end + LogoCtrl.maxGlitchTime * .7));
                return this.reinitImg();
            }, 5000);

            return;
        }

        this.itemsToReveal[++this.lastVisibleItem].style.display = null;
        this.img = await this.refreshSvgImage();
        setTimeout(this.progressReveal.bind(this), LogoCtrl.randInt(200, 700));
    }

    async refreshSvgImage () {
        const image = new Image();
        return new Promise<typeof image>(resolve => {
            image.onload = resolve.bind(void 0, image);
            const svgURL = new XMLSerializer().serializeToString(this.logo);
            image.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgURL);
        });
    }
}
