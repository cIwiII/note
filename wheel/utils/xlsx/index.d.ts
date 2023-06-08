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
/**
 * excel表数据
 */
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
export declare const exportExcel: (fileName: string, sheets: ExcelSheet[]) => void;
/**
 * 导入excel文件
 * @param file 文件
 * @param options 选项 (对应表)
 */
export declare const importExcel: (file: any, options?: {
    props?: string[] | undefined;
    startDataRow?: number | undefined;
}[] | undefined) => Promise<ExcelSheetData[]>;
