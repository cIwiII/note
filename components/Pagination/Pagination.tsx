import React, { useMemo, useState, useCallback } from 'react';
import s from './.module.scss';

export interface Props {
  pageNum?: number;
  totalSize: number;
  pageSize?: number;
  length?: number;
  isPageBack?: boolean;
  onChangePage: (num: number) => void;
}
/**
 * 默认显示页 pageNum = 1;
 * 默认显示条数 pageSize = 30;
 * 默认分页器可显示页数长度 length = 5;
 * 默认在分页长度为偶数时，选中激活页是否靠后 pageBack = true
 * 分页条数选择器是否显示 isPageSize = false;
 * 返回被点击的页数 onChangePage: (num: number){};
 * @param
 * @returns JSX
 */
export default function Index({
  pageNum = 1,
  pageSize = 10,
  length = 4,
  isPageBack = true,
  ...props }: Props) {
  // const [proPageNum, setProPageNum]=useState(pageNum)
  /* 最大页数 */
  const maxPage = useMemo(() => {
    return Math.ceil(props.totalSize / pageSize);
  }, [props.totalSize, pageSize]);
  /* 获取分页数组 */
  const getPagList = useCallback((maxItem: number, slice: number) => {
    return Array.from(Array(maxItem), (v, k) => k + 1).slice(slice);
  }, []);
  /* 需要渲染的分页 */
  const showPageArray = useMemo(() => {
    const halfLength = Math.ceil(length / 2);
    /* 总页数小于显示长度，当前页小于等于长度一半，末尾页，偶数页显示位置，偶数页激活页靠前 */
    if (maxPage <= length) {
      return getPagList(maxPage, 0);
    }
    if (pageNum <= halfLength) {
      return getPagList(length, -length);
    }
    if (halfLength > maxPage - pageNum) {
      return getPagList(maxPage, -length);
    }
    if (isPageBack && length % 2 === 0 || length % 2 === 1) {
      return getPagList(pageNum + halfLength - 1, -length);
    }
    return getPagList(pageNum + halfLength, -length);
    // eslint-disable-next-line
  }, [pageNum, length, maxPage]);
  /* 返回父组件的页数 */
  const changePage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) return;
    const num = parseInt((e.target as HTMLOptionElement).value, 10);
    if (num < 1) return;
    if (num > maxPage) return;
    if (num === pageNum) return;
    props.onChangePage(num);
  };
  return (
    <div className={s.page} onClick={changePage} >
      <option value={1} className={pageNum === 1 ? s.disabled : ''}>{'<<'}</option>
      <option value={pageNum - 1} className={pageNum === 1 ? s.disabled : ''}>{'<'}</option>
      {
        showPageArray!.map((item: number) => (
          <option value={item} className={item === pageNum ? s.active : ''}>{item}</option>
        ))
      }
      <option value={pageNum + 1} className={pageNum === maxPage ? s.disabled : ''}>{'>'}</option>
      <option value={maxPage} className={pageNum === maxPage ? s.disabled : ''}>{'>>'}</option>
    </div>
  );
}
