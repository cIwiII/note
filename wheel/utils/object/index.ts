

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};


/**
 * 获取对象数据
 * @param object 对象
 * @param prop 字段 (支持以.分隔的N级字段，如: a.b.c或a.b.[0].c)
 */
export function getObjectValue<T = any>(object: Record<string, any>, prop: string): T {
  var props = prop.split('.');
  var value = object[props[0]];
  props.slice(1).forEach(function (prop) {
    // 针对数组做截取
    value = value === null || value === void 0 ? void 0 : value[/\[\d+]/.test(prop) ? prop.slice(1, prop.length - 1) : prop];
  });
  return value;
};


/**
 * 设置对象数据
 * @type T 对象类型
 * @param object 对象
 * @param prop 字段 (支持以.分隔的N级字段，如: a.b.c或a.b.[0].c)
 * @param value 字段数据
 */
export function setObjectValue<T extends Record<string, any>>(object: T, prop: string, value: any): T {
  var _a, _b;

  var props = prop.split('.');
  if (props.length === 1) return __assign(__assign({}, object), (_a = {}, _a[props[0]] = value, _a));
  var propValue = /\[\d+]/.test(props[1]) ? __spreadArrays(object[props[0]] || []) : __assign({}, object[props[0]] || {});

  var newObject = __assign(__assign({}, object), (_b = {}, _b[props[0]] = propValue, _b));

  props.slice(1).forEach(function (prop, index) {
    // 数组
    var isArray = /\[\d+]/.test(prop);
    if (isArray) prop = prop.slice(1, prop.length - 1); // 写入最后一级

    if (index === props.length - 2) {
      propValue[prop] = value;
    } // 记录上一级
    else {
        // 下一级是否为数组
        var nextIsArray = /\[\d+]/.test(props[index + 2]);
        propValue[prop] = nextIsArray ? __spreadArrays(propValue[prop] || []) : __assign({}, propValue[prop] || {});
        propValue = propValue[prop];
      }
  });
  return newObject;
}
/**
 * 删除对象键
 * @param object 对象
 * @param props 键
 */


export function deleteObjectKeys<T extends Record<string, any>>(object: T, props: string[]): T{
  var newObject = __assign({}, object);

  props.forEach(function (prop) {
    delete newObject[prop];
  });
  return newObject;
};


/**
 * 深拷贝对象
 * @param object 目标对象
 * @return 新对象
 */
export function deepCloneObject<T extends Record<string, any> = Record<string, any>>(object: T): T {
  var result;

  if (_typeof(object) === 'object') {
    if (Array.isArray(object)) {
      result = [];

      for (var i = 0; i < object.length; i++) {
        // 递归克隆数组
        result.push(deepCloneObject(object[i]));
      }
    } else if (object === null) {
      result = null;
    } else if (object.constructor === RegExp) {
      result = object;
    } else {
      result = {};
      Object.keys(object).forEach(function (key) {
        // 递归克隆对象
        result[key] = deepCloneObject(object[key]);
      });
    }
  } else {
    result = object;
  }

  return result;
};

/**
 * 删除对象undefined值
 * @param object 目标对象
 * @return 新对象
 */
export function removeObjectUndefined<T extends Record<string, any> = Record<string, any>>(object?: T): T {
  if (object === void 0) {
    object = {};
  }

  var result = {};
  Object.keys(object).forEach(function (key) {
    if (object[key] !== undefined) result[key] = object[key];
  });
  return result;
};


/**
 * 对象深度监听
 * @param obj 对象
 * @param option 选项
 */

export function deepProxy <T extends Record<string, any> = Record<string, any>>(obj: T, option?: {
  /**
   * 获取数据
   * @param newValue 新数据
   * @param oldValue 旧数据
   * @return 返回原数据将不更新
   */
  getValue?: ((newValue: any, oldValue: any) => any) | undefined;
  /**
   * 数据改变后
   */
  onChanged?: (() => void) | undefined;
} | undefined):T {
  if (obj && _typeof(obj) === 'object') {
    Object.keys(obj).forEach(function (key) {
      if (_typeof(obj[key]) === 'object') {
        obj[key] = deepProxy(obj[key], option);
      }
    });
    return new Proxy(obj, {
      set: function set(target, key, value, receiver) {
        var _a;

        if (option === null || option === void 0 ? void 0 : option.getValue) value = option.getValue(value, target[key]);
        if (target[key] === value) return true;

        if (_typeof(value) === 'object') {
          value = deepProxy(value, option);
        }

        var result = Reflect.set(target, key, value, receiver);
        if (result) (_a = option === null || option === void 0 ? void 0 : option.onChanged) === null || _a === void 0 ? void 0 : _a.call(option);
        return result;
      },
      deleteProperty: function deleteProperty(target, key) {
        var _a;

        var result = Reflect.deleteProperty(target, key);
        if (result) (_a = option === null || option === void 0 ? void 0 : option.onChanged) === null || _a === void 0 ? void 0 : _a.call(option);
        return result;
      }
    });
  }

  return obj;
};