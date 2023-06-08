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
import { FreeMode, Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, Grid } from 'swiper';
// 当前组件和scss
import { Swiper, SwiperSlide } from 'swiper/react';
import Swipers from 'swiper/types/swiper-class';
import 'swiper/scss'; // core Swiper
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/scss/grid";
import "swiper/scss/free-mode";
import './sty1_1.scss';
import css1 from '../../assets/scss/swiper1.module.scss'



/* 文件已整理 */
function Swiper1() {
    // 自定义页码,只在生成时触发，后续不再触发 line 88 
    const pagination7 = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className}">${(index + 1)}</span>`;
        },
    };

    return (
        <div className={css1.content}>
            <p>1--默认:宽度width:100%,可滑动,可添加class</p>
            <Swiper>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
            <p>2--navigation:左右导航</p>
            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
            <p>3--pagination:页码，pagination需要自行配置在pagination属性中，
                默认页码无点击,默认距离底部bottom:10px,<br />
                clickable: true,设置是否可点击，默认原点样式，pagination-7：自定义</p>
            <Swiper pagination={{ clickable: true, }} modules={[Pagination]}>
                <SwiperSlide><div className={css1.na1}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na1}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na1}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na1}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na1}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na1}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na1}>Slide 7</div></SwiperSlide>
                <SwiperSlide><div className={css1.na1}>Slide 8</div></SwiperSlide>
                <SwiperSlide><div className={css1.na1}>Slide 9</div></SwiperSlide>
            </Swiper>
            <p>4--虚化页码dynamicBullets: true,显示左右两格页码</p>
            <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>5--页码转顶部进程type:progress</p>
            <Swiper pagination={{ type: "progressbar", }} navigation={true} modules={[Pagination, Navigation]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>6--分数页码如：1/7 type:fraction</p>
            <Swiper pagination={{ type: "fraction", }} navigation={true} modules={[Pagination, Navigation]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>7--常用页码-custom-带点击，自定义变量</p>
            <Swiper pagination={pagination7} navigation={true} modules={[Pagination, Navigation]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>8--页码转底部横线，内部可滚动</p>
            <Swiper scrollbar={{ hide: true, }} navigation={true} modules={[Scrollbar, Navigation]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>9--垂直方向-Vertical,模板无误，操作异常堆叠（缺少样式）,<br />还需主要外部盒子限高且溢出隐藏，否则高度3050.4万px</p>
            <div className={css1.naDiv9}>
                <Swiper direction={"vertical"} pagination={{ clickable: true, }} modules={[Pagination]}>
                    <SwiperSlide><div className={css1.na9}>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className={css1.na9}>Slide 2</div></SwiperSlide>
                    <SwiperSlide><div className={css1.na9}>Slide 3</div></SwiperSlide>
                    <SwiperSlide><div className={css1.na9}>Slide 4</div></SwiperSlide>
                    <SwiperSlide><div className={css1.na9}>Slide 5</div></SwiperSlide>
                    <SwiperSlide><div className={css1.na9}>Slide 6</div></SwiperSlide>
                    <SwiperSlide><div className={css1.na9}>Slide 7</div></SwiperSlide>
                </Swiper>
            </div>
            <p>10--Space between:带间隙间隔间隔类型number,spaceBetween不在modules中</p>
            <Swiper spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>11--Slides per view:视图张数，同框多张(如3张),slidesPerView={3},不在modules中</p>
            <Swiper slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>12--Slides per view auto:视图张数自适应，.swiper-slide:nth-child(2n)的宽度3n,
                <br />根据SwiperSlide本身宽度来确定，并非由内容而来</p>
            <Swiper slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na12}>Slide 2</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>13--Centered:选中的居中(即使是边缘)centeredSlides=true</p>
            <Swiper slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 8</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 9</div></SwiperSlide>
            </Swiper>
            <p>14--Centered auto:选中的居中(大小不一致,即使是边缘) centeredSlides=auto <br />
                根据SwiperSlide本身宽度来确定，并非由内容而来</p>
            <Swiper slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na12}>Slide 2</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide className={css1.na12_1}><div className={css1.na2}>Slide 7</div></SwiperSlide>
            </Swiper>
            <p>15--css mode:键盘操作，左右方向键keyboard:关键 (cssMode:禁用滑动、mousewhee:是否滚动)</p>
            <Swiper
                cssMode={false}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                onSlideChangeTransitionStart={(index) => {
                    // console.log('start',index);
                }}
                onTouchEnd={(index) => {
                    console.log('start', index);
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 8</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 9</div></SwiperSlide>
            </Swiper>
            <p>16--Freemode:全自由模式,任意位置停止</p>
            <Swiper slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}>
                <SwiperSlide><div className={css1.na2}>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 7</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 8</div></SwiperSlide>
                <SwiperSlide><div className={css1.na2}>Slide 9</div></SwiperSlide>
            </Swiper>
            <p>17--Scroll container:垂直文本滚动，全自由模式，垂直方向，mousewheel：鼠标滚动
                <br />模型正常，swiper-slide  需要  height: auto;


            </p>
            <div className={css1.naDiv17}>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={"auto"}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
                    className='mySwiper17'

                >
                    <SwiperSlide>
                        <h4>Scroll Container</h4>
                        <>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                                volutpat. Vivamus vestibulum quam ut ultricies pretium.
                            </p>
                            <p>
                                Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna
                                consectetur convallis non vel mi. Donec libero dolor, volutpat ut
                                urna sit amet, aliquet molestie purus. Phasellus faucibus, leo vel
                                scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis
                                ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque
                                iaculis bibendum mauris. Cras ut egestas orci. Cras odio risus,
                                sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare
                                nunc vel tellus facilisis, quis dictum elit tincidunt. Donec
                                accumsan nisi at laoreet sodales. Cras at ullamcorper massa.
                                Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                            </p>
                            <p>
                                Curabitur eget aliquam erat. Curabitur a neque vitae purus volutpat
                                elementum. Vivamus quis vestibulum leo, efficitur ullamcorper velit.
                                Integer tincidunt finibus metus vel porta. Mauris sed mauris congue,
                                pretium est nec, malesuada purus. Nulla hendrerit consectetur arcu
                                et lacinia. Suspendisse augue justo, convallis eget arcu in, pretium
                                tempor ligula. Nullam vulputate tincidunt est ut ullamcorper.
                            </p>
                            <p>
                                Curabitur sed sodales leo. Nulla facilisi. Etiam condimentum, nisi
                                id tempor vulputate, nisi justo cursus justo, pellentesque
                                condimentum diam arcu sit amet leo. Cum sociis natoque penatibus et
                                magnis dis parturient montes, nascetur ridiculus mus. In placerat
                                tellus a posuere vehicula. Donec diam massa, efficitur vitae mattis
                                et, pretium in augue. Fusce iaculis mi quis ante venenatis, sit amet
                                pellentesque orci aliquam. Vestibulum elementum posuere vehicula.
                            </p>
                            <p>
                                Sed tincidunt diam a massa pharetra faucibus. Praesent condimentum
                                id arcu nec fringilla. Maecenas faucibus, ante et venenatis
                                interdum, erat mi eleifend dui, at convallis nisl est nec arcu. Duis
                                vitae arcu rhoncus, faucibus magna ut, tempus metus. Cras in nibh
                                sed ipsum consequat rhoncus. Proin fringilla nulla ut augue tempor
                                fermentum. Nunc hendrerit non nisi vitae finibus. Donec eget ornare
                                libero. Aliquam auctor erat enim, a semper risus semper at. In ut
                                dui in metus tincidunt euismod eget et lacus. Aenean et dictum urna,
                                sed rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut
                                nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit amet
                                lorem hendrerit venenatis sollicitudin ut dui. Quisque rhoncus nibh
                                in massa pretium scelerisque.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                                volutpat. Vivamus vestibulum quam ut ultricies pretium.
                            </p>
                            <p>
                                Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna
                                consectetur convallis non vel mi. Donec libero dolor, volutpat ut
                                urna sit amet, aliquet molestie purus. Phasellus faucibus, leo vel
                                scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis
                                ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque
                                iaculis bibendum mauris. Cras ut egestas orci. Cras odio risus,
                                sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare
                                nunc vel tellus facilisis, quis dictum elit tincidunt. Donec
                                accumsan nisi at laoreet sodales. Cras at ullamcorper massa.
                                Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                            </p>
                            <p>
                                Curabitur eget aliquam erat. Curabitur a neque vitae purus volutpat
                                elementum. Vivamus quis vestibulum leo, efficitur ullamcorper velit.
                                Integer tincidunt finibus metus vel porta. Mauris sed mauris congue,
                                pretium est nec, malesuada purus. Nulla hendrerit consectetur arcu
                                et lacinia. Suspendisse augue justo, convallis eget arcu in, pretium
                                tempor ligula. Nullam vulputate tincidunt est ut ullamcorper.
                            </p>
                            <p>
                                Curabitur sed sodales leo. Nulla facilisi. Etiam condimentum, nisi
                                id tempor vulputate, nisi justo cursus justo, pellentesque
                                condimentum diam arcu sit amet leo. Cum sociis natoque penatibus et
                                magnis dis parturient montes, nascetur ridiculus mus. In placerat
                                tellus a posuere vehicula. Donec diam massa, efficitur vitae mattis
                                et, pretium in augue. Fusce iaculis mi quis ante venenatis, sit amet
                                pellentesque orci aliquam. Vestibulum elementum posuere vehicula.
                            </p>
                            <p>
                                Sed tincidunt diam a massa pharetra faucibus. Praesent condimentum
                                id arcu nec fringilla. Maecenas faucibus, ante et venenatis
                                interdum, erat mi eleifend dui, at convallis nisl est nec arcu. Duis
                                vitae arcu rhoncus, faucibus magna ut, tempus metus. Cras in nibh
                                sed ipsum consequat rhoncus. Proin fringilla nulla ut augue tempor
                                fermentum. Nunc hendrerit non nisi vitae finibus. Donec eget ornare
                                libero. Aliquam auctor erat enim, a semper risus semper at. In ut
                                dui in metus tincidunt euismod eget et lacus. Aenean et dictum urna,
                                sed rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut
                                nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit amet
                                lorem hendrerit venenatis sollicitudin ut dui. Quisque rhoncus nibh
                                in massa pretium scelerisque.
                            </p>
                        </>
                    </SwiperSlide>
                </Swiper>
            </div>
            <p>18--Grid:纵向排列2列,grid= rows: 2,SwiperSlide高度应为100% - 间隔高后/n </p>
            <Swiper
                grid={{ rows: 2 }}
                slidesPerView={3}
                spaceBetween={30}
                // freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className='naSwiper18'
            >
                <SwiperSlide><div>Slide 1</div></SwiperSlide>
                <SwiperSlide><div>Slide 2</div></SwiperSlide>
                <SwiperSlide><div>Slide 3</div></SwiperSlide>
                <SwiperSlide><div>Slide 4</div></SwiperSlide>
                <SwiperSlide><div>Slide 5</div></SwiperSlide>
                <SwiperSlide><div>Slide 6</div></SwiperSlide>
                <SwiperSlide><div>Slide 7</div></SwiperSlide>
                <SwiperSlide><div>Slide 8</div></SwiperSlide>
                <SwiperSlide><div>Slide 9</div></SwiperSlide>
            </Swiper>

            <p>19、每列幻灯片数
                Slides per column启用，改为grid-rows中</p>
            <>
                <Swiper
                    slidesPerView={3}
                    // slidesPerColumn={2}
                    spaceBetween={30}
                    pagination={{
                        "clickable": true
                    }}
                    className="mySwiper">
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
            </>
            <p>20、Nested 嵌套 swiper,垂直方向可以通过子元素高度和slidesPerView={2}来控制单页的幻灯片数量</p>
            <>
                <Swiper
                    className="mySwiper20 swiper-h"
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
            <br /><br /><br />
            <ul>
                <li>
                    <p><strong>提示：</strong> modules:添加组件类型的属性是否生效</p>
                    <p><strong>提示：</strong>水平方向，高度尽可能小，宽度尽可能大，垂直相反</p>
                    <p><strong>提示：</strong>slideToClickedSlide=true:启用点击图片切换，会触发onSlideChange:(e.activeIndex为图片索引)
                        <br /> onActiveIndexChange,函数</p>
                </li>
            </ul>
        </div >
    )
}

export default Swiper1