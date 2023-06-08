var myajax = params => {
  // （1）创建ajax的核心对象
  const xmlhttp = new XMLHttpRequest();
  // (2)和服务器进行连接
  xmlhttp.open(params.url, params.method);
  // (3)发送请求,发送请求接受到结果
  xmlhttp.send(params.data);
  // (4)监控状态码变化，获取响应结果. 判断成功还是失败  x 100-200  200
  xmlhttp.onreadystatechange = function (resp) {
    //状态码等于200，readyState=4代表后端已经将数据传输完毕，前端可以获取
    if (resp.status == 200 && resp.readyState == 4) {
      const result = resp.responseText;
      params.success(result);
    } else {
      //获取失败结果
      params.error(result2);
    }
  };
  // 设置请求失败时的监听函数
  xmlhttp.onerror = function () {
    console.error(this.statusText);
  };
  // 设置请求头信息
  xmlhttp.responseType = "json";
  xmlhttp.setRequestHeader("Accept", "application/json");
};

//去注释
const myajax = params => {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open(params.url, params.method, true);
  xmlhttp.send(params.data);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.state == 200 && xmlhttp.readyState == 4) {
      params.success(xmlhttp.responseText);
    } else {
      params.error(this.statusText);
    }
  };
  xmlhttp.onerror = function () {
    console.error(this.statusText);
  };
  xmlhttp.responseType = "json";
  xmlhttp.setRequestHeader("Accept", "application/json");
};

// 使用自己的ajax
myajax({
  url: "",
  method: "GET",
  data: { id: 1 },
  success(result) {},
  error() {}
});

// promise 封装实现：
function getJSON(url) {
  // 创建一个 promise 对象
  let promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    // 新建一个 http 请求
    xhr.open("GET", url, true);
    // 设置状态的监听函数
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      // 当请求成功或失败时，改变 promise 的状态
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    // 设置错误监听函数
    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };
    // 设置响应的数据类型
    xhr.responseType = "json";
    // 设置请求头信息
    xhr.setRequestHeader("Accept", "application/json");
    // 发送 http 请求
    xhr.send(null);
  });
  return promise;
}

// promise 技术
const promise = new Promise((reslove, reject) => {
  ajax({
    url: "",
    method: "GET",
    data: "",
    success(res) {
      reslove(res);
    },
    fail(error) {
      reject(error);
    }
  });
});
promise.then(res => {});

// axios 封装请求
axios.get();
axios.post();
axios({
  url: "",
  method: ""
});
await axios.get();
axios.get("/url").then(res => {});

// jquery封装的ajax请求代码。
$.ajax({ url: "", method: "", data: {}, success(res) {} });
// 使用
const p = new Promise((resolve, reject) => {
  $.ajax({
    url: "",
    method: "",
    data: {},
    success(res) {
      resolve(res);
    },
    error(error) {
      reject(error);
    }
  });
});
p.then(res => {}).catch(err => {});
