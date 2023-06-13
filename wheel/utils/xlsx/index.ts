

var xlsx =require("xlsx");
var object = require("../object");


/**
 * excel表列
 */
export interface ExcelSheetColumn {
  /**
   * 标题
   */
  title: string;
  /**
   * 字段 (支持a.b.c)
   */
  prop: string;
}

export interface ExcelSheetData {
  /**
   * 表名
   */
  sheet: string;
  /**
   * 数据
   */
  data: Record<string, any>[];
}
/**
* excel表
*/
export declare type ExcelSheet = ExcelSheetData & {
  /**
   * 列
   */
  columns: ExcelSheetColumn[];
};

/**
 * 导出excel文件
 * @param fileName excel文件名
 * @param sheets 表
 */
export function exportExcel(fileName: string, sheets: ExcelSheet[]):void {
  var wb = xlsx.default.utils.book_new();

  sheets.forEach(function (sheet) {
    // 表头数据
    var headerData = sheet.columns.map(function (column) {
      return column.title;
    }); // 行数据

    var rowData = sheet.data.map(function (data) {
      return sheet.columns.map(function (column) {
        return (0, object.getObjectValue)(data, column.prop);
      });
    });
    rowData.unshift(headerData);

    xlsx.default.utils.book_append_sheet(wb, xlsx.default.utils.aoa_to_sheet(rowData), sheet.sheet);
  });

  xlsx.default.writeFile(wb, fileName + ".xlsx");
};


/**
 * 导入excel文件
 * @param file 文件
 * @param options 选项 (对应表)
 */
export function importExcel(file: any, options?: {
  props?: string[] | undefined;
  startDataRow?: number | undefined;
}[] | undefined): Promise<ExcelSheetData[]> {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader(); // 二进制打开

    fileReader.readAsBinaryString(file);

    fileReader.onload = function (event) {
      var _a; // 二进制读取


      var workbook = xlsx.default.read((_a = event.target) === null || _a === void 0 ? void 0 : _a.result, {
        type: 'binary'
      }); // 遍历sheet


      resolve(workbook.SheetNames.map(function (sheetName, index) {
        var _a, _b;

        var data = xlsx.default.utils.sheet_to_json(workbook.Sheets[sheetName], {
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