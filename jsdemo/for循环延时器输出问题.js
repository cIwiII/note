let lg = 6;

/* 问题原型是，同时输出 66666  提示：setTimeout不写延迟时间参数默认值为0*/

//间隔输出 012345
for (var i = 0; i < lg; i++) {
  (function (a) {
    setTimeout(function () {
      console.log(a);
    }, a * 1000);
  })(i);
}

//同时输出 012345，函数生成了闭包的效果，新建了一个作用域，
//这个作用域接收到每次循环的i值保存了下来，即使循环结束，闭包形成的作用域也不会被销毁
for (var i = 0; i < lg; i++) {
  (function (a) {
    setTimeout(function () {
      console.log(a);
    }, 1000);
  })(i);
}

//同时输出 012345 ，let关键字劫持了for循环的块作用域，每次都是一个新变量
for (let i = 0; i < lg; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// 同时输出 012345 
for (var i = 0; i < lg; i++) {
  try {
    throw i;// throw(i),将i传给j
  } catch (j) {
    setTimeout(function () {
      console.log(j);
    });
  }
}
