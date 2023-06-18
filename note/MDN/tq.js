/**
 * 随机返回指定范围内的数
 * @param {*} min 最小数
 * @param {*} max 最大数
 * @returns number
 */
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
/**
 *
 * @returns 随机颜色
 */
function randomColor() {
  return "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";
}

/**
 * 球球构造器
 * @param {*} x 横坐标
 * @param {*} y 竖坐标
 * @param {*} velX 水平速度
 * @param {*} velY 垂直速度
 * @param {*} color 颜色
 * @param {*} size 半径大小，单位像素
 */
class Ball{
  constructor(x, y, velX, velY, color, size){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
  /**
   * 原型方法 实例渲染
   */
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    // 坐标 大小 起始弧度，终点弧度 2PI = 360deg
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  };
  /** 原型方法 实例更新 */
  update() {
    // 右触边
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }
    // 左触边
    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
    // 下触边
    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }
    // 上触边
    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }
    // 更新
    this.x += this.velX;
    this.y += this.velY;
  };
  // 两个小球中心的距离是否小于两个小球的半径之和
  /** 碰撞检测 */
  collisionDetect() {
    for (let j = 0; j < balls.length; j++) {
      if (this !== balls[j]) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = randomColor();
        }
      }
    }
  }
}


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

/** 所有球集合 */
let balls = [];

/** 球数量 */
const length = 15;

/** 水平速度 */
const velX = 3;

/** 垂直速度 */
const velY = 2;

while (balls.length < length) {
  let size = random(10, 20);
  let ball = new Ball(
    // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-velX, velX),
    random(-velY, velY),
    randomColor(),
    size
  );
  balls.push(ball);
}

/** 遍历进行渲染 */
function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();