import React from "react";
import "../assets/scss/test.scss";

function Test() {
  // const outEle = document.getElementById("out");
  // outEle.ondragstart = function (event) {
  //   event.dataTransfer.setData("dragEleId", event.target.id);
  // };

  const over = function (event) {
    event.preventDefault();
  };

  const drop = function (event) {
    var dragEleId = event.dataTransfer.getData("dragEleId");
    // const ele = event.target;
    console.log(dragEleId);
    var dragEle = document.getElementById(dragEleId);
    if (event.target.id === "out") {
    }
    console.log(dragEle);
    // outEle.appendChild(dragEle);
    // outEle.appendChild(ele);
  };

  return (
    <div className='test'>
      <ul id='out' onDragOver={over} onDrag={drop}>
        <li id='i1' draggable='true'>
          <span>1</span>
        </li>
        <li id='i2' draggable='true'>
          <span>2</span>
        </li>
        <li id='i3' draggable='true'>
          <span>3</span>
        </li>
        <li id='i4' draggable='true'>
          <span>4</span>
        </li>
      </ul>
    </div>
  );
}

export default Test;
