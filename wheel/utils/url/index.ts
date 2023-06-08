

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * 格式化链接参数
 * @param obj 请求参数对象
 */
export function formatUrlParams(obj: any) : string {
  var params = [];

  var paramHandle = function paramHandle(paramObj, keyName) {
    if (paramObj === void 0) {
      paramObj = {};
    }

    var type = Object.prototype.toString.call(paramObj);

    if (type === '[object String]' || type === '[object Number]' || type === '[object Boolean]') {
      params.push([keyName, paramObj]);
    } else if (type === '[object Undefined]' || type === '[object Null]') {
      params.push([keyName, '']);
    } else {
      Object.keys(paramObj).forEach(function (key) {
        type = Object.prototype.toString.call(paramObj[key]);

        if (type === '[object Object]') {
          paramHandle(paramObj[key], keyName ? keyName + "[" + key + "]" : key);
        } else if (type === '[object Array]') {
          paramObj[key].forEach(function (v, k) {
            paramHandle(v, keyName ? keyName + "[" + key + "][" + k + "]" : key + "[" + k + "]");
          });
        } else if (type === '[object Undefined]' || type === '[object Null]') {
          params.push([keyName ? keyName + "[" + key + "]" : key, '']);
        } else {
          params.push([keyName ? keyName + "[" + key + "]" : key, paramObj[key]]);
        }
      });
    }
  };

  paramHandle(obj);
  return params.map(function (v) {
    if (v[0]) {
      var key = v[0];
      var value = v[1];

      try {
        key = decodeURIComponent(key);
      } catch (e) {//
      }

      try {
        value = decodeURIComponent(value);
      } catch (e) {//
      }

      return encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }

    return '';
  }).filter(function (v) {
    return v !== '';
  }).join('&');
};


/**
 * 获取链接参数
 * @param url 链接
 * @param check 参数检查（当默认转换违背了你的意愿时，你可以在这里自行转换）
 */
export function getParams<T extends Record<string, any>>(
    url: string, 
    check?: ((param: string, value: any, originalValue: any) => any) | undefined
  ): T{
  var params = {};
  url.split('?')[1].split('&').map(function (param) {
    return param.split('=');
  }).forEach(function (param) {
    var value = decodeURIComponent(param[1]);
    var originalValue = param[1]; // 默认转换

    if (/^(-?\d+)(\.\d+)?$/.test(value)) {
      value = Number(value); // 可能发生了科学计数法转换

      if (value.toString() !== originalValue) value = originalValue;
    } else if (value === 'true') value = true;else if (value === 'false') value = false;else if (value === 'null') value = null;else if (value === 'undefined') value = undefined;

    if (check) value = check(param[0], value, originalValue);
    params[param[0]] = value;
  });
  return params;
};


/**
 * 获取链接参数
 * @param check 参数检查（当默认转换违背了你的意愿时，你可以在这里自行转换）
 */
export function getUrlParams<T extends Record<string, any>>(check?: ((param: string, value: any, originalValue: any) => any) | undefined) : T {
  if (!window.location.search) return {};
  return getParams(window.location.search, check);
};


/**
 * 获取请求链接
 * @param baseUrl 请求url
 * @param params 请求参数数据
 * @return 请求链接
 */
export function getUrl(baseUrl: string, params: Record<string, any>): string {
  if (_typeof(params) !== 'object' || Object.keys(params).length === 0) {
    return baseUrl;
  }

  var connector = '?';

  if (baseUrl.indexOf(connector) > -1) {
    connector = '&';
  }

  return baseUrl + connector + formatUrlParams(params);
};



/**
 * 比对pathname和设定的路径是否匹配
 * @param pathname location的pathname
 * @param path 路径 (遵循路由路径规则 /xxx/:param)
 * @param basename 基础路由 (默认为/)
 * @return 是否匹配
 */
export function isEqualPath(pathname: string, path: string, basename?: string) : boolean{
  if (basename === void 0) {
    basename = '/';
  }

  path = path.split('?')[0];
  if (path[0] !== '/') path = "/" + path;
  if (basename !== '/') path = "" + (basename[0] === '/' ? basename : "/" + basename) + path;
  var pathnameList = pathname.split('/');
  var pathList = path.split('/');
  if (pathnameList.length > pathList.length) return false;

  for (var i = 0; i < pathnameList.length; i++) {
    // :为匹配参数
    if (pathnameList[i] !== pathList[i] && pathList[i][0] !== ':') return false;
  }

  if (pathnameList.length !== pathList.length) {
    pathList = pathList.slice(pathnameList.length);

    for (var i = 0; i < pathList.length; i++) {
      // 检查可选参数
      if (pathList[i].indexOf('?') === -1) return false;
    }
  }

  return true;
};


// =================
/**
 * 
 * @param query {}
 * @returns a=b&c=d;
 */
export const toURLStr = (query={}) => {
  const str = JSON.stringify(query)
      .replace(/:/g, "=")
      .replace(/"/g, '')
      .replace(/,/g, '&')
      .match(/\{([^)]*)\}/);
  return str?.[1];
};

const query = { news_id: "144", scorce: "seo" }
toURLStr(query);