[react-csv文件导出](https://blog.csdn.net/Welkin_qing/article/details/122667116#jsonExcel_1) 

CSVDownload:打开页面自动下载，受浏览器拦截影响

CSVLink：点击下载

```jsx
import { CSVDownload, CSVLink } from "react-csv";

<CSVDownload
    data={list} //要导出的数据list
    target='_blank' //以打开新标签页形式进行下载
    filename='文本数据表.csv'
    style={{ float: "right", marginTop: "50px", marginRight: "35px" }}>
    下载
</CSVDownload>
<CSVLink data={array} enclosingCharacter={`'`} filename='文本数据表2.xlsx'>
    Download me //Link形式
</CSVLink>
```



- [一、json数据导出Excel]() 
  - [（1）react-csv插件](https://blog.csdn.net/Welkin_qing/article/details/122667116#1reactcsv_2) 
  - [（2）使用方法](https://blog.csdn.net/Welkin_qing/article/details/122667116#2_5) 
- [二、通过文件流形式导出](https://blog.csdn.net/Welkin_qing/article/details/122667116#_29) 
  - [（1）文件流导出形式和方法介绍 ](https://blog.csdn.net/Welkin_qing/article/details/122667116#1_30) 
    - [1. 文件流导出两种方式](https://blog.csdn.net/Welkin_qing/article/details/122667116#1__31) 
    - [2. 文件流形式](https://blog.csdn.net/Welkin_qing/article/details/122667116#2__35) 
  - [（2）利用浏览器直接下载](https://blog.csdn.net/Welkin_qing/article/details/122667116#2_42) 
  - [（3）创建a标签下载](https://blog.csdn.net/Welkin_qing/article/details/122667116#3a_47) 