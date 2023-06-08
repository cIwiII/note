/**
 * 深拷贝
 * @param {*} p 
 * @param {*} c 
 * @returns 
 */
function deepCopy(p, c) {
  var c = c || {};

  for (var i in p) {
    if (typeof p[i] === "object") {
      c[i] = p[i].constructor === Array ? [] : {};

      deepCopy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }

  return c;
}

// jquery ajax应用
function getPromise(url) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url,
      success: function (data) {
        resolve(data);
      },
      error: function () {
        reject();
      }
    });
  });
}

//获取类型数据的Promise对象
let typePromise = getPromise("https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllTypes");
//获取演艺数据的Promise对象
let artPromise = getPromise("https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllArts");

typePromise
  .then(function (type) {
    //   数据处理
    return artPromise;
  })
  .then(function (art) {
    //   数据处理
  });