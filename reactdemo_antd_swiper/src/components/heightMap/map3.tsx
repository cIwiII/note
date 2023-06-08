import React, { Component } from 'react'
import s from './.module.scss'

// 
/**
 * 内嵌url： start:起点，dest：终点，naviBy：路线方式 car/bus/walk
 * destName：终点名字，hideRouteIcon：路线方式，key：开发者密钥
 */
export default class map3 extends Component {
    state = {
        url1: 'https://m.amap.com/navi/?dest=104.013609,30.670211&destName=优品道小米授权店&key=a08e01f19632deea3f4861d20980db9a',
        url2: 'https://m.amap.com/navi/?start=104.017748,30.63251&dest=104.013609,30.670211&naviBy=walk&destName=目的地&key=a08e01f19632deea3f4861d20980db9a'
    }
    render() {
        const { url1, url2 } = this.state
        return (
            <>
                <p>地点查看</p>
                <div id="container" className={s.map}>
                    <iframe src={`${url1}`} className={s.iframe32} title="title-none"></iframe>
                </div>
                <p>线路规划</p>
                <div className={s.map}>
                    {/* <iframe src={url2} className={s.iframe32} title="title-none"></iframe> */}
                </div>
            </>
        )
    }
}
