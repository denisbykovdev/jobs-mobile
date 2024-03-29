import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const widthScale = width < 600 ? 200 : 900;

export const responsiveWidth = (length) => {
    const ratio = length / widthScale;
    const newLength = Math.round(ratio * width);
    return newLength;
}

export const responsiveHeight = (length) => {
    const scale = 430;
    const ratio = length / scale;
    const newLength = Math.round(ratio * height);
    return newLength;
}

export default {
    width,
    height,
    responsiveWidth,
    responsiveHeight
};