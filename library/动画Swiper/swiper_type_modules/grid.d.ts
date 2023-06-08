export interface GridMethods {}

export interface GridEvents {}

export interface GridOptions {
  /**
   * Number of slides rows, for multirow layout
   * 幻灯片行数，用于多行布局
   * @note `rows` > 1 is currently not compatible with loop mode (`loop: true`)
   * `rows` > 1 时与循环模式（“loop:true”）不兼容
   * @default 1
   */
  rows?: number;

  /**
   * Can be `'column'` or `'row'`. Defines how slides should fill rows, by column or by row
   * 可以是“column”或“row”。定义幻灯片应如何按列或按行填充行
   * @default 'column'
   */
  fill?: 'row' | 'column';
}
