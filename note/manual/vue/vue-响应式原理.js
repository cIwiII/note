/**
 * 数据转化成以 `get/set` 的方式取值，转化成响应式数据；
 */
class Reactive {
  constructor({ el, data }) {
    // 获取到真实的挂载点元素
    this.$el = document.querySelector(el);
    this.$data = data();
    this.init();
    return this.proxy;
  }
  // 初始化方法
  init() {
    // 将 data 转化成以 get/set 的方式进行取值
    this.defineProperties();
  }
  // 将 data 转化
  defineProperties() {
    // 响应式对象
    this.proxy = {};
    // vue 2.x 中使用 Object.defineProperty
    for (let key in this.$data) {
      Object.defineProperty(this.proxy, key, {
        get: () => {
          return this.$data[key];
        },
        set: newVal => {
          if (newVal !== this.$data[key]) {
            this.$data[key] = newVal;
          }
        }
      });
    }
    console.log(this.proxy);
  }
}

var vm = new Reactive({
  el: '#app',
  data() {
    return { msg: 'hello world', count: 1 };
  }
});

// ===========
/**
 * 2、当数据发生更新，视图需要更新：去建立状态和视图之间的映射关系
 */
class Reactive {
  constructor({ el, data }) {
    // 获取到真实的挂载点元素
    this.$el = document.querySelector(el);
    this.$data = data();
    this.init();
    return this.proxy;
  }
  // 创建一个观察者  // 观察者
  createObserver() {
    // this 就是我们 vm
    const that = this;
    return {
      // 添加监听的方法 状态 -> 元素
      addWatcher(key, cb) {
        if (this.watchers[key]) {
          this.watchers[key].push(cb);
        } else {
          // watchers 第一次初始化
          this.watchers[key] = [cb];
        }
      },
      // 监听列表
      watchers: {}, // 订阅方法：告诉观察者，我现在需要订阅哪个状态
      subscribe(key) {
        // 状态和元素之间的关系是一个一对多的关系
        that.$el.querySelectorAll(`[data-on=${key}]`).forEach(el => {
          const cb = text => (el.innerText = text);
          // 在这里已经成功的拿到了当前状态对应的所有元素
          this.addWatcher(key, cb);
        });
        that.$el.querySelectorAll(`input[i-model=${key}]`).forEach(el => {
          const cb = text => (el.value = text);
          el.addEventListener('input', e => {
            that.proxy[key] = e.target.value;
          });
          this.addWatcher(key, cb);
        });
        this.emit(key);
      },
      // 触发 watchers 更新视图
      emit(key) {
        this.watchers[key].forEach(cb => cb(that.proxy[key]));
      }
    };
  }
  // 初始化方法
  init() {
    // 观察者
    this.$ob = this.createObserver();
    // 将 data 转化成以 get/set 的方式进行取值
    this.defineProperties();
  } // 将 data 转化
  defineProperties() {
    // 响应式对象    this.proxy = {};
    // vue 2.x 中使用 Object.defineProperty
    for (let key in this.$data) {
      Object.defineProperty(this.proxy, key, {
        get: () => {
          return this.$data[key];
        },
        set: newVal => {
          if (newVal !== this.$data[key]) {
            this.$data[key] = newVal;
            this.$ob.emit(key);
          }
        }
      });
      this.$ob.subscribe(key);
    }
  }
}
var vm = new Reactive({
  el: '#app',
  data() {
    return { msg: 'hello world', count: 1 };
  }
});
