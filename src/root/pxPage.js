// import { Dimensions } from 'react-native'
const deviceWidth = document.documentElement.clientWidth
const uiWidth = 375
const pxPage = (px) => {
    return px * deviceWidth / uiWidth;
}

export default pxPage;
//获取屏幕宽度传入设计宽度来计算实际宽度，以达到适应不同的手机屏幕大小