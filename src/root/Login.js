//登陆页面
import React from 'react'
import pxPage from './pxPage'
import { withRouter } from "react-router-dom";

const deviceHight = document.documentElement.clientHeight
const Login = (props) => {
    const loginimgone = {
        width: pxPage(164),
        height: pxPage(164),
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
        top: pxPage(5),
        right: pxPage(5),
    }
    const loginbutton = {
        width: pxPage(60),
        height: pxPage(60),
        position: 'absolute',
        right: pxPage(16),
        bottom: pxPage(270)
    }
    const logintextone = {
        position: 'absolute',
        left: pxPage(36),
        top: pxPage(200),
    }
    const logindiv = {
        width: pxPage(375),
        height: pxPage(300),
        backgroundColor: '#fff',
        position: 'absolute',
        left: pxPage(0),
        bottom: pxPage(0),
    }
    const loginimgtwo = {
        width:pxPage(24),
        height:pxPage(24),
        position: 'absolute',
        left: pxPage(35),
        top: pxPage(46),
        transform: [{ rotate: '180deg' }],
    }
    //前后端交互函数
    const getuser = (props) => {
        fetch('http://www.h5weixin.club:8080/api/users', {
            method: 'GET',
            mode: 'cors',
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
            })
    }
    //最后的成品应该将进入的button去掉，改成数据fetch到的时候进入首页亦或是登陆页面
    //这个个页面负责的是获取登录页的信息并fetch到数据库
    return <>
        {/*  deviceHight*/}
        <div className='login' style={{ height: pxPage(deviceHight), backgroundColor: "black" }}>
            <img
                className='login-img-one'
                src='./images/v2_qdoinr.png'
                alt=''
                style={loginimgone}
            ></img>
             <img
                className='login-img-two'
                src='./images/fas fa-arrow-right Copy 2.svg'
                alt=''
                style={loginimgtwo}
                onClick={()=>{
                    props.history.goBack()
                }}
            ></img>
            <div className='login-text-one' style={logintextone}>你好</div>

            <div className='login-div' style={logindiv}>
                <button
                    className='login-button'
                    style={loginbutton}
                    onClick={() => {//跳转前先进行判断，如果说没有登陆就跳转到登陆页面
                        localStorage.getItem('user')
                        ?props.history.push('/home')
                        // :console.log('请登录')
                        :props.history.push('/home')
                    }}
                >
                    <img
                        className='login-img-four'
                        src='./images/fas fa-arrow-right.svg'
                        alt=''
                    ></img>
                </button>
            </div>
        </div>
    </>
}

export default withRouter(Login)
