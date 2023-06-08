import React, { useState } from 'react'
// 原始
// import "swiper/css";
// import "./styles.css";
// import { Pagination } from "swiper";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/free-mode";

//旧版组件和scss：带配置
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import 'swiper/swiper.scss'; 
// import 'swiper/modules/navigation/navigation.scss';
// import 'swiper/modules/pagination/pagination.scss';

// 未配置
import {
    FreeMode, Navigation,
    Pagination, Autoplay,
    EffectFade, EffectCube, EffectCoverflow, EffectFlip, EffectCards, EffectCreative,
    Scrollbar, Mousewheel,
    Keyboard, Grid,
} from 'swiper';
// 当前组件和scss
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/scss'; // core Swiper
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';
import "swiper/scss/effect-fade";
import "swiper/scss/effect-cube";
import "swiper/scss/effect-coverflow";
import "swiper/scss/effect-flip";
import "swiper/scss/effect-cards";
import "swiper/scss/effect-creative";
import "swiper/scss/grid";
import "swiper/scss/free-mode";
import './sty1_1.scss';

/* 文件已整理 */
function Swiper1() {
    /* 在实例中使用. line67
    特性
    swiper.autoplay.paused	布尔值	
    自动播放是否暂停
    
    swiper.autoplay.running	布尔值	
    是否启用并运行自动播放
    
    方法
    swiper.autoplay.pause（速度）	
    暂停自动播放
    
    swiper.autoplay.run()	
    运行自动播放逻辑
    
    swiper.autoplay.start()	
    开始自动播放
    
    swiper.autoplay.stop()	
    停止自动播放
    */
    const [index, setIndex] = useState(2);
    const start = (swiper: any) => {
        console.log('开始', swiper);

    }
    const stop = (swiper: any) => {
        console.log('停止', swiper);

    }
    const tempstart = (swiper: any) => {
        console.log('恢复开始', swiper);
        // swiper.autoplay.stop()	//方法使用
    }
    const tempstop = (swiper: any) => {
        console.log('临时停止', swiper);
        console.log(swiper.autoplay.paused);//特性使用boolean

    }
    const all = (swiper: any) => {
        console.log('自动切换即触发的高频事件', swiper);

    }

    return (
        <div className="autoplay">
            <p>动画轮播相关</p>
            <Swiper
                // 滑动,导航显示类型
                pagination={{ clickable: true, }}
                // 左右箭头
                navigation={true}
                // 循环
                loop={true}
                // 初始值
                initialSlide={index}
                // 是否居中
                centeredSlides={true}
                // 动画速度
                speed={1000}
                // 宽度
                spaceBetween={0}
                // 视图内显示张数，默认1
                slidesPerView={3}
                // 自动播放设置--在配合动画effect切换时不可暂停，但可以停止，再重新开始---------------
                autoplay={{
                    // 间隔
                    delay: 2000,
                    // 设置为false和用户交互（滑动）后不会禁用自动播放，每次交互后都会重新启动
                    waitForTransition: false,
                    // 启用此参数，当播放到最后一张幻灯片时将停止自动播放（在循环模式下无效）
                    // stopOnLastSlide: true,
                    // 启用反向自动播放
                    // reverseDirection: true,
                    // 配合鼠标进入(Swiper容器)确定是暂停还是停止，false暂停，true停止
                    disableOnInteraction: false,
                    // 进入暂停
                    pauseOnMouseEnter: true
                }}
                // 开始,事件名没有on，小驼峰写法
                onAutoplayStart={start}
                // autoplayStop,动画停止时执行，而非暂停，默认接收swiper实例
                onAutoplayStop={stop}
                // 自动播放恢复（鼠标/指针离开
                onAutoplayResume={tempstart}
                // 自动播放暂停（鼠标/指针进入
                onAutoplayPause={tempstop}
                // 当幻灯片通过自动播放更改时将触发事件,高频事件
                // onAutoplay={all}

                // 淡入淡出 //----------------------------
                /*   effect={'fade'}// fade|cube|coverflow|flip|cards|creative
                  fadeEffect={{
                      // 启用幻灯片淡入淡出
                      crossFade: true,
                      // 内部css选择器，配合cssMode
                      // transformEl: undefined,
                  }} */
                // 立体切换-----------
                /* effect={'cube'}
                // 配置
                cubeEffect={{
                    // 启用主滑块阴影
                    shadow: true,
                    // 启用幻灯片阴影
                    slideShadows: true,
                    // 	以 px 为单位的主阴影偏移
                    shadowOffset: 20,
                    // 主阴影比例
                    shadowScale: 0.94,
                }} */
                // 流盖,------------在视图内显示多张幻灯片，作用较大，配合slidesPerView>=2
                /*  effect={'coverflow'}
                 coverflowEffect={{
                     // 以 px 为单位的深度偏移（幻灯片沿 Z 轴平移）
                     depth: 100,
                     // 效果乘数
                     modifier: 1,
                     // 幻灯片以度数旋转
                     rotate: 50,
                     // 幻灯片缩放效果
                     scale: 1,
                     // 启用幻灯片阴影
                     slideShadows: true,
                     // 拉伸幻灯片之间的空间（以 px 为单位）
                     stretch: 0,
                     // 内部css选择器，配合cssMode
                     transformEl: undefined
                 }} */
                // 翻转flip----------------
                /*  effect={'flip'}
                 flipEffect={{
                     // 限制边缘幻灯片反转，即只翻转活动页
                     limitRotation:true,
                     // 启用幻灯片阴影
                     slideShadows:true,
                     // 内部css选择器，配合cssMode
                     transformEl:undefined,
                 }} */
                // 卡牌切换 cards,---------需要配合居中，否则左边看不到历史播放
                /* effect={'cards'}
                cardsEffect={{
                    // 每张幻灯片的偏移距离（以 px 为单位）
                    perSlideOffset: 8,
                    // 每张幻灯片的旋转角度（以度为单位）
                    perSlideRotate: 60,
                    // 启用卡片轮换
                    rotate: true,
                    // 启用幻灯片阴影
                    slideShadows: true,
                    // 内部css选择器，配合cssMode
                    transformEl: undefined,
                }} */
                // 自定义-creative---默认立体挤压 --------
                effect={'creative'}
                creativeEffect={{
                    // 将进度/偏移限制为侧滑的数量。
                    // 如果1，则在 prev/next 之后的所有幻灯片都将具有相同的状态。
                    // 如果2，则在活动之前/之后的第二张幻灯片之后的所有幻灯片将具有相同的状态
                    limitProgress: 1,
                    // 下一张幻灯片转换
                    next: {
                        // 数组坐标轴过渡px [X, Y , Z],translate: (string | number)[];
                        // translate: ['100%', 0, 0],//at1
                        // translate: ["120%", 0, -500],//at2
                        // translate: ["100%", 0, 0],//at3
                        // translate: [0, 0, -800],//at4,后翻
                        // translate: ["125%", 0, -800],//at5, 翻滚
                        origin: "right center",//at6,内开门式
                        translate: ["5%", 0, -200],//at6
                        rotate: [0, -100, 0],//at6
                        // 数组坐标轴过渡 deg [X, Y , Z] rotate?: number[];
                        // rotate: [-180, 0, 0],//at4
                        // rotate: [0, 0, 90],//at5
                        // 透明度 opacity?: number;
                        opacity: 0,
                        // 缩放大小 scale?: number;
                        // scale: 0,
                        // 阴影启用 shadow?: boolean;
                        shadow: true,
                        // 动画基点,origin?: string; e.g. `left bottom`
                        // origin: "left center"
                    },
                    // 自定义变换需要 3D 变换 ( translateZ, rotateX, rotateY) ，启用此参数
                    perspective: true,
                    // 上一张，translate必须，其他可选
                    prev: {
                        // 数组坐标轴过渡px [X, Y , Z],translate: (string | number)[];
                        // translate: [0, 0, -400],//at1
                        // translate: ["-120%", 0, -500],//at2
                        // translate: ["-20%", 0, -1],//at3
                        // translate: [0, 0, -800],//at4
                        // translate: ["-125%", 0, -800],//at5
                        origin: "left center",//at6
                        translate: ["-5%", 0, -200],//at6
                        rotate: [0, 100, 0],//at6
                        // 数组坐标轴过渡 deg [X, Y , Z] rotate?: number[];
                        // rotate: [180, 0, 0],//at4
                        // rotate: [0, 0, -90],//at5
                        // 透明度 opacity?: number;
                        opacity: 0,
                        // 缩放大小 scale?: number;
                        scale: 0,
                        // 阴影启用 shadow?: boolean;
                        shadow: true,
                        // 动画基点,origin?: string; e.g. `left bottom`
                        // origin: "left center"
                    },
                    // 允许将幻灯片转换和不透明度相乘。
                    progressMultiplier: 1,
                    // 根据每张幻灯片拆分阴影“不透明度” limitProgress（仅在启用转换阴影的情况下）。
                    // 例如设置limitProgress: 2和启用shadowPerProgress，
                    // 会将阴影不透明度设置为活动旁边的两张幻灯片0.5。1禁用此参数后，
                    // 活动旁边的所有幻灯片都将具有1不透明度的阴影
                    shadowPerProgress: false,
                    // 内部css选择器，配合cssMode
                    transformEl: undefined,
                }}
                modules={[
                    Pagination, Navigation, Autoplay,
                    EffectFade, EffectCube, EffectCoverflow, EffectFlip, EffectCards, EffectCreative
                ]}

            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}
export default Swiper1