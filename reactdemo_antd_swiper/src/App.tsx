import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Event1 from "./components/event/event1";

// import Swiper1 from "./components/Swiper/Swiper1";//1-20
// import Swiper2 from "./components/Swiper/Swiper2";//21-40
// import Swiper1try from "./components/Swiper/Autoplay_effect";//自动轮播+动画和自定义动画

// import Map1 from "./components/heightMap/map1"
// import Map2 from "./components/heightMap/map2"
import Map3 from "./components/heightMap/map3"
import Index from './pages/antd'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* 路由匹配器 */}
        <Routes>
          {/* 映射关系 */}
          <Route path='/' element={<Index />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
