"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importExcel = exports.exportExcel = void 0;

var _xlsx = _interopRequireDefault(require("xlsx"));

var _object = require("../object");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 导出excel文件
 * @param fileName excel文件名
 * @param sheets 表
 */
var exportExcel = function exportExcel(fileName, sheets) {
  var wb = _xlsx.default.utils.book_new();

  sheets.forEach(function (sheet) {
    // 表头数据
    var headerData = sheet.columns.map(function (column) {
      return column.title;
    }); // 行数据

    var rowData = sheet.data.map(function (data) {
      return sheet.columns.map(function (column) {
        return (0, _object.getObjectValue)(data, column.prop);
      });
    });
    rowData.unshift(headerData);

    _xlsx.default.utils.book_append_sheet(wb, _xlsx.default.utils.aoa_to_sheet(rowData), sheet.sheet);
  });

  _xlsx.default.writeFile(wb, fileName + ".xlsx");
};
/**
 * 导入excel文件
 * @param file 文件
 * @param options 选项 (对应表)
 */


exports.exportExcel = exportExcel;

var importExcel = function importExcel(file, options) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader(); // 二进制打开

    fileReader.readAsBinaryString(file);

    fileReader.onload = function (event) {
      var _a; // 二进制读取


      var workbook = _xlsx.default.read((_a = event.target) === null || _a === void 0 ? void 0 : _a.result, {
        type: 'binary'
      }); // 遍历sheet


      resolve(workbook.SheetNames.map(function (sheetName, index) {
        var _a, _b;

        var data = _xlsx.default.utils.sheet_to_json(workbook.Sheets[sheetName], {
          header: ((_a = options === null || options === void 0 ? void 0 : options[index]) === null || _a === void 0 ? void 0 : _a.props) || 'A'
        }) // 截取数据起始行
        .slice((_b = options === null || options === void 0 ? void 0 : options[index]) === null || _b === void 0 ? void 0 : _b.startDataRow); // 处理浮点运算的精度问题


        data.forEach(function (columnData) {
          Object.keys(columnData).forEach(function (key) {
            var _a, _b;

            var signIndex = (_b = (_a = String(columnData[key]).split('.').pop()) === null || _a === void 0 ? void 0 : _a.indexOf('999999')) !== null && _b !== void 0 ? _b : -1;

            if (typeof columnData[key] === 'number' && signIndex > 0) {
              columnData[key] = Number(columnData[key].toFixed(signIndex + 1));
            }
          });
        });
        return {
          sheet: sheetName,
          data: data
        };
      }));
    };

    fileReader.onerror = function (event) {
      reject(event);
    };
  });
};

exports.importExcel = importExcel;