//这是第一个页面
import React from 'react';
import pxPage from './pxPage'
import { withRouter } from "react-router-dom";

const deviceHight = document.documentElement.clientHeight
const First = (props) => {
    const Appimgone = {
        width: pxPage(164),
        height: pxPage(164),
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
        top: pxPage(5),
        right: pxPage(5),
    }
    const Appimgtwo = {
        width: pxPage(164),
        height: pxPage(164),
        position: 'absolute',
        bottom: pxPage(5),
        left: pxPage(5)
    }
    const Appimgthree = {
        width: pxPage(66),
        height: pxPage(66),
        position: 'absolute',
        right: pxPage(27),
        top: pxPage(235)
    }
    const Appbutton = {
        width: pxPage(60),
        height: pxPage(60),
        position: 'absolute',
        right: pxPage(33),
        bottom: pxPage(21)
    }
    const Apptextone = {
        position: 'absolute',
        left: pxPage(61),
        top: pxPage(250)
    }
    const Apptexttwo = {
        position: 'absolute',
        left: pxPage(65),
        top: pxPage(400)
    }
    //最后的成品应该将进入的button去掉，改成数据fetch到的时候进入首页亦或是登陆页面
    return <>
    {/*  */}
        <div className='App' style={{ height: pxPage(deviceHight) }}>
            <img
                className='App-img-one'
                src='./images/v2_qdoinr.png'
                alt=''
                style={Appimgone}
            ></img>
            <img
                className='App-img-two'
                src='./images/v2_qdoinr.png'
                alt=''
                style={Appimgtwo}
            ></img>
            <div className='App-text-one' style={Apptextone}>百果园</div>
            <div className='App-text-two' style={Apptexttwo}>一起去采摘~</div>
            <img
                className='App-img-three'
                src='./images/fas fa-leaf.svg'
                alt=''
                style={Appimgthree}
            ></img>
            <button 
                className='App-button' 
                style={Appbutton}
                onClick={() => {//跳转前先进行判断，如果说没有登陆就跳转到登陆页面
                    localStorage.getItem('user')?props.history.push('/home'):props.history.push('/login')
                }}
            >
                <img
                    className='App-img-four'
                    src='./images/fas fa-arrow-right.svg'
                    alt=''
                ></img>
            </button>
        </div>
    </>
}
export default withRouter(First);
//进入前的页面