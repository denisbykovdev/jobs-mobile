import layout from "./layout";

const scale = layout.width < 600 ? 200 : 900;

const scaleFontSize = (fontSize) => {
    const ratio = fontSize / scale;
    const newSize = Math.round(ratio * layout.width);
    return newSize;
}

//fontSize
const extrasmall = scaleFontSize(5);
const xxxsmall = scaleFontSize(6);
const xxsmall = scaleFontSize(7);
const xsmall = scaleFontSize(8);
const small = scaleFontSize(9);
const regular = scaleFontSize(11);
const medium = scaleFontSize(12);
const large = scaleFontSize(13);
const xlarge = scaleFontSize(15);
const semilarge = scaleFontSize(17.5);
const xxlarge = scaleFontSize(22.5);

export default {
    extrasmall,
    xxxsmall,
    xxsmall,
    xsmall,
    small,
    regular,
    medium,
    large,
    xlarge,
    semilarge,
    xxlarge
}