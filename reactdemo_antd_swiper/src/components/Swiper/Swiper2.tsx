import React from 'react'
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
import { EffectCube, EffectFade, FreeMode, Navigation, Pagination, Scrollbar, Mousewheel, Keyboard } from 'swiper';
// 当前组件和scss
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss'; // core Swiper
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/scss/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import './sty2.scss';

function Swiper2() {
    // 自定义页码,只在生成时触发，后续不再触发 line 88 
    const pagination7 = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className}">${(index + 1)}</span>`;
        },
    };
    const click = (e: any, index?: number) => {
        console.log(e.activeIndex)
    }
    return (
        <div className='contentPage'>
            <p>21、Grab cursor抓手+嵌套 - grabCursor=true</p>
            <>
                <Swiper
                    className="mySwiper21"
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                >
                    <SwiperSlide>Horizontal Slide 1</SwiperSlide>
                    <SwiperSlide>
                        <Swiper
                            className="mySwiper2 swiper-v"
                            direction={"vertical"}
                            slidesPerView={2}
                            spaceBetween={0}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={true}
                            modules={[Pagination, Mousewheel]}
                        >
                            <SwiperSlide>Vertical Slide 1</SwiperSlide>
                            <SwiperSlide>Vertical Slide 2</SwiperSlide>
                            <SwiperSlide>Vertical Slide 3</SwiperSlide>
                            <SwiperSlide>Vertical Slide 4</SwiperSlide>
                            <SwiperSlide>Vertical Slide 5</SwiperSlide>
                        </Swiper>
                    </SwiperSlide>
                    <SwiperSlide>Horizontal Slide 3</SwiperSlide>
                    <SwiperSlide>Horizontal Slide 4</SwiperSlide>
                </Swiper>
            </>
            <p>
                22、 Infinite loop 首尾可循环 loop=true</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

            <p>
                23、 Infinite loop with slides per group每组幻灯片无限循环 slidesPerGroup={3}</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            <p>
                24、 Slides per group skip  每组幻灯片跳过,slidesPerGroupSkip=n，前n张视为一组,分页依然分开（作用依次后移），breakpoints：响应式断点参数对象</p>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper24"
            >
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
                </SwiperSlide>
            </Swiper>

            <p>25、动画淡化切换 effect="fade"</p>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
            <p>26、Effect cube:立方体效果,cubeEffect添加设置对象属性，如：
                shadow，slideShadows，shadowOffset，shadowScale,默认会溢出显示，需要设置css样式限制</p>
            <div className="mySwiper26">
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    loop={true}
                    pagination={true}
                    modules={[EffectCube, Pagination]}

                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>


            <p>N垂直方向</p>
            <div className='swiperN'>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={'auto'}
                    slideToClickedSlide={true}
                    spaceBetween={30}
                    mousewheel={true}
                    centeredSlides={true}
                    onSlideChange={(e) => click(e)}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                <button onClick={(e) => click(e, 1)}>
                    点击
                </button>
            </div>
            <br /><br /><br /><br />
        </div>

    )
}

export default Swiper2