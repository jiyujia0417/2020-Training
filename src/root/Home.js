//首页，组件在Home文件下
import React from 'react'
import { withRouter } from "react-router-dom";
import Position from '../home/Position'
import Choise from '../home/Choise'
import Mycarousel from '../home/Mycarousel'
const Home = () => {
    return (
        <div style={{backgroundColor:"black"}}>
            Home
            <Position/>
            <Choise/>
            <Mycarousel/>
            {/* 数据先自己创建本地数据 */}
            
            {/* 近期和热门其实是一个组件只是传入的参数不同从赛选的标准不一样 */}
            {/* 这块是根据点击事件加载不同的组件一共两个<Hot/><Recebt/> */}
        </div>
    )
}

export default withRouter(Home)
