export const toInlineImgSvgString = (svg: string) =>
    `data:image/svg+xml;charset=utf-8,${svg.replace(/#/g, "%23")}`;
