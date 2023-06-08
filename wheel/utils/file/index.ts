
// eslint-disable-next-line
var fsSync = require('fs-sync');

/**
 * 下载
 * @param fileUrl 文件地址
 */
export function download(fileUrl: string): void {
  var a = document.createElement('a');
  a.href = fileUrl;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

/**
 * 加载图片
 * @param src 图片地址
 * @return 图片
 */
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      return resolve(image);
    };

    image.onerror = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return reject(args);
    };

    image.src = src;
  });
};

export interface moveFilesOptions{
    /**
   * 包含文件后缀
   */
    includeSuffixes?: string[] | undefined;
    /**
     * 不包含文件后缀 (优先级低于includeSuffixes)
     */
    excludeSuffixes?: string[] | undefined;
    /**
     * 包含关键字
     */
    includeKeywords?: string[] | undefined;
    /**
     * 不包含关键字
     */
    excludeKeywords?: string[] | undefined;
}

/**
 * 移动文件夹文件
 * @param srcPath 目标文件夹路径
 * @param tarPath 目的文件夹路径
 * @param option 选项
 */
export function moveFiles(srcPath: string, tarPath: string, option?: moveFilesOptions | undefined): void {
  var _a;

  srcPath = _path.default.resolve(srcPath);
  tarPath = _path.default.resolve(tarPath);
  var pathList = (0, _klawSync.default)(srcPath);

  for (var i = 0; i < pathList.length; i++) {
    if (fsSync.isFile(pathList[i].path)) {
      var path_1 = pathList[i].path.replace(/\\/g, '/');
      var isMove = true;
      var paths = path_1.split('.');
      var suffix = paths.length > 1 ? (_a = paths.pop()) !== null && _a !== void 0 ? _a : '' : '';

      if (option === null || option === void 0 ? void 0 : option.includeSuffixes) {
        isMove = option.includeSuffixes.includes(suffix);
      } else if (option === null || option === void 0 ? void 0 : option.excludeSuffixes) {
        isMove = !option?.excludeSuffixes?.includes(suffix);
      }

      if (isMove && (option === null || option === void 0 ? void 0 : option.includeKeywords)) {
        for (var j = 0; j < option.includeKeywords.length; j++) {
          if (!isMove) break;
          isMove = path_1.indexOf(option.includeKeywords[j]) !== -1;
        }
      }

      if (isMove && (option === null || option === void 0 ? void 0 : option.excludeKeywords)) {
        for (var j = 0; j < option.excludeKeywords.length; j++) {
          if (!isMove) break;
          isMove = path_1.indexOf(option.excludeKeywords[j]) === -1;
        }
      }

      if (isMove) {
        fsSync.copy(pathList[i].path, tarPath + pathList[i].path.split(srcPath)[1], {
          force: true
        });
      }
    }
  }
};