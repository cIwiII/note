import React, { Component } from 'react'
import AMapLoader from '@amap/amap-jsapi-loader';
import s from './.module.scss';

/* 高德地图js-API */
interface State {
    map: any;
}
class MapComponent extends Component {
    /* 释放index.html中的全局变量 */
    map: any = {}
    constructor(a: any) {
        super(a);
        this.map = {};
    }
    state: State = {
        map: {}
    }
    // 2.dom渲染成功后进行map对象的创建
    componentDidMount() {
        AMapLoader.load({
            key: "c7f74207b16bafd5d1cc2a33bc6f2d7d",
            version: "2.0",
            plugins: ['AMap.ToolBar', 'AMap.marker', 'AMap.ElasticMarker', 'AMap.Scale', 'AMap.Text', 'AMap.Driving',],
        }).then((AMap) => {
            this.map = new AMap.Map("container", {
                viewMode: "3D",
                zoom: 16,
                // center: [104.051159, 30.556181],
                center: [116.379028, 39.865042],
            })
            this.map.addControl(new AMap.Scale());
            const marker = new AMap.Marker({
                // position: [104.051159, 30.556181],
                position: [116.379028, 39.865042],
                title: '成都龙泉世贸广场'
            })
            this.map.add(marker)
            /*  const text = new AMap.Text({
                 text: '纯文本标记',
                 anchor: 'center', // 设置文本标记锚点
                 draggable: true,
                 cursor: 'pointer',
                 angle: 10,
                 style: {
                     'padding': '.75rem 1.25rem',
                     'margin-bottom': '1rem',
                     'border-radius': '.25rem',
                     'background-color': 'white',
                     'width': '15rem',
                     'border-width': 0,
                     'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
                     'text-align': 'center',
                     'font-size': '20px',
                     'color': 'blue'
                 },
                 position: [116.379028, 39.865042]
             }) */
            // text.setMap(this.map);
            // console.log(this.state.map)
            //构造路线导航类
            var driving = new AMap.Driving({
                map: this.map,
                panel: "panel"
            });

            // 根据起终点经纬度规划驾车导航路线
            var startLngLat = [116.379028, 39.865042]
            var endLngLat = [116.427281, 39.903719]
            driving.search(startLngLat, endLngLat, function (status: any, result: any) {
                // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                if (status === 'complete') {
                    console.log('绘制驾车路线完成')
                } else {
                    console.log('获取驾车数据失败：' + result)
                }
            });
        }).catch(e => {
            console.log(e);
        })
    }
    render() {
        return (
            <>
                <p>线路规划</p>
                <div id="container" className={s.map}>
                </div>

            </>

        );
    }
}



export default MapComponent;