import React, { Component } from 'react'
import { Map, Marker } from 'react-amap';
import {PluginConfig,PluginList} from 'react-amap/types'
import s from './.module.scss'
/* 依赖二次封装的react，npm install --save react-amap */
export default class map2 extends Component {
    state = {
        mapCenter: { longitude: 104.051159, latitude: 30.556181 },
        dict:undefined,//dict={geocodes:[{location:'维度，经度'}]}
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.onSearchAddress();
    }
    private markerEvents = () => {
        console.log('地图事件触发');

    }
    private onSearchAddress = () => {
        var address = this.state.mapCenter;
        console.log(123456);
        fetch(`https://restapi.amap.com/v3/geocode/geo?key=c7f74207b16bafd5d1cc2a33bc6f2d7d&address=${address}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        this.setState({ dict: data });
                        var list = data.geocodes;
                        var geocodes = list[0]['location'].split(',');

                        const mapCenter = {
                            longitude: parseFloat(geocodes[0]),
                            latitude: parseFloat(geocodes[1]),
                        }
                        
                        
                        this.setState({ mapCenter })
                    })
                }
            });
        // this.setState({})
    };
    private plugins:Array<PluginList | PluginConfig>=['ToolBar', 'Scale']
    render() {
        const { mapCenter } = this.state
        return (
            <div>
                <p>react-amap组件包</p>
                <div className={s.map}>
                    <Map amapkey='c7f74207b16bafd5d1cc2a33bc6f2d7d' center={mapCenter}
                        plugins={this.plugins} zoom={16}>
                        <Marker position={mapCenter} events={this.markerEvents} />
                    </Map>
                </div>
            </div>
        )
    }
}
