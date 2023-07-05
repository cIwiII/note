## 一、TS类型注解：

1、3种原始类型： number, string, boolean,

2、number[] 或者 Array<number>，

3、any类型，

4、函数 function a(ur: {id: number}, p:number):number{}

5、对象 pt: { x: number; y?: number }  ?:指可选属性

6、 联合类型(或类型)-合并 |  

7、& 交集类型  type B = A & C，合并后的类型

7、类型别名 `type` ID = number | string;

8、接口：类型别名本身无法添加新的属性，而接口是可以扩展(相同名字合并)的

7、枚举enum，

8、元组 （数组具体定义）let point:[number,string,boolean] = [1,"xiaowang",true]

9、never(错误)类型：表示会抛出错误，其他可以赋值为never，但never不可赋值为其他类型

10、object类型，表示值为{}、[]、function

11、unknown未知类型，和any相反，unknown更加严谨

13、函数类型：type successType = (msg:string)=>void；interface IType {success:successType；error?:()=>void；error:()=>number；}

14、type 称为类型声明，管理其他接口，如inteface接口，你可以指定一个新的数据类型

15、交差类型：type mixinType = {id:number} & {name:string}

16、函数泛型：function play2<T>(params1:T):T{return params1}；play2<number>(12)//12

17、类-泛型：class Compare<T>{}

18、函数多个泛型：function computedData<T,K,M>(arg1:T,arg2:K):T{let newpar:T = arg1；return arg1；}；computedData<number,string,number>(1,"xiaowang")；

19、泛型继承-extends：function tranalate<T extends IMyUser>(arg:T){}

(32)[https://www.typescriptlang.org/]

(h)[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

## 二、ts关键字

extends: 继承，



### keyof

- 作用：将类型的key取出来

```ts
interface IProps {
    name: string;
    age: number;
}
type IPropsKey = { [K in keyof IProps]: IProps[K] };
// 等同于：k in ['name','age'],  IPropsKey == IProps
```



### infer

- 作用：提取内部类型，需要针对不同 外层类型单独定义方法，如下 EleOf

```ts
// 推断数组
type EleOf<T> = T extends Array<infer E> ? E : T;
type Tuple = string[];
type TupleToUnion = EleOf<Tuple>;//  TupleToUnion =》string

// 推断对象
type Foo<T> = T extends { a: infer U } ? U : never;
type T10 = Foo<{ a: string }>; // T10类型为 string

// 推断联合类型
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T11 = Foo<{ a: string; b: number }>; // T11类型为 string | number

// 推断交叉类型
type T1 = {name: string};
type T2 = {age: number};
type K2<T> = T extends {a: (x: infer U) => void, b: (x: infer U) => void} ? U : never;
interface Props {
  a: (x: T1) => void;
  b: (x: T2) => void;
}
type k3 = K2<Props>

// 自己实现 =================
type Ids = number[];
type Names = string[];
。。。其他内部类型。。。

type Unpacked<T> = T extends Names ? string : 
	T extends Ids ? number :
        T;

type idType = Unpacked<Ids>; // idType 类型为 number
type nameType = Unpacked<Names>; // nameType 类型为string

```



### declare:

- 作用：提供ts声明
- 举个例子，在个ts项目中，使用 npm 包，如果npm包中变量或函数没有使用 declare 声明，或者使用js来编写，在ts项目中就会有ts警告提示，npm包中导出的变量不存在，从而ts项目中会划上红色波浪线
- 在tsconfig.json文件中 allowJs 编译器选项应该设置为 false，即不编译

```js
declare let module: any
declare function foo(name: string): strin
```



## 三、接口编程

1. 属性-类型接口：
   - interface IUser{name：string;}
   - ？号：表示可以不存在：interface IUser{name？：string;}
   - 两种数组表示法：Array<number>或者number[]
   - 定义函数：interface IType { error:()=>number  }
2. 函数-类型接口：
   - function（params:number):void{}
3. 可索引-接口
   - 可索引-接口：[index:number]:string

4. 类-类型接口：面向对象开发

## 四、TS断言

1、类型断言：(<IManager>item).menus、(item as IManager).menus

2、非空断言：! 意思是必定不是null或者undefined

3、链式调用：?.判断元素是否可用

## 五、泛型工具类型

1、typeof：类型推断符：js中基本数据检测，ts中：type man = typeof polic  //man = { name:string,age:number}

2、keyof：指定对象中所有属性的名字，是一个联合类型。

```js
interface IPeople {id:number,name:string}；
const array = [{id:1},{id:2}]
type K1 = keyof IPeople //  id | name
type K2 = keyof IPeople[] // length | toString | push | pop 等等
type K3 = keyof array[0] // id


/** 动态获取一个对象中指定的属性.  */
//解决方案1：//将obj对象进行断言,赋值为any.不推荐
interface IObj {
    id:number,
    name:string,
    address:string
}
function ObjectKey(obj:IObj,key:string){
    return (obj as any)[key]
}

//解决方案2：
interface IObj {
    id:number,
    name:string,
    address:string
}
// 如果key值能明确下来. key = id | name | address
// key as keyof IObj = key = id | name | address
function ObjectKey(obj:IObj,key:string){
    return obj[key as keyof IObj]
}

// 解决方案3：
function objectKey2<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}
objectKey2({id:1,name:"xiaowang",address:"wuhouqu"},"name")
objectKey2({id:1,name:"xiaowang",address:"wuhouqu"},"address")
```


## TS-内置方法

### Partial 所有可选

```ts
type MyPartial<T> = { [K in keyof T]?: T[K] };
```





## TS-环境搭建

**一、基本概念**

TypeScript编程语言-微软推出的JS的超集。TS- 编译为-JS

**二、搭建环境**

(1)安装nodejs

(2)全局安装TypeScript：npm install typescript -g ，查看 ：tsc -v

(3)创建一个项目，在项目中编写ts代码： var id:number =1

(4)编译指定的ts文件为js文件

```javascript
tsc index.ts --->默认同级目录下面创建index.js文件
tsc --noEmitOnError index.ts       
tsc --target es2015 index.ts
```

(5)在编译报错时仍然会产出文件，`--noEmitOnError`  错误时不再产生或更新文件

(6)默认编译为es3版本，使用 --target 字段可更改编译降级的版本

三.配置项目自动编译**

(1)项目初始化ts配置文件  tsc --init

```javascript
tsconfig 配置文件中配置
// 编译后的文件位置
"outDir": "./js",

 // 推断为any报错配置
noImplicitAny

// null undefined 处理，报错配置
strictNullChecks
```

编译时，默认将js代码放在项目js目录下

vscode自动编译配置流程:

vscode终端——运行任务—-typescript—-监视xxx任务.（自动编译）







## 类型别名-type

interface 和 type区别:

- 都可以定义数据类型，interface专注于对某个具体对象进行约束。

- type一般用于针对多个类型合并的情况，重新定义新类型。

- type来管理多个interface

### 联合类型-或

```javascript
type message = string
let  username:message = "message就是string类型"

//多个类型合并起来表达
type message = number | string | undefined
let password:message = "xiaowang"
```

### 交叉类型-合并

```javascript
type mixinType = {id:number} & {name:string}
// minixType最终结果等于 {id:number,name:string}
let data:mixinType = { id:1, name:"xiaowang" }

//合并引用类型
interface IA {obj:{a:boolean}}
interface IB {obj:{b:string }}
type AB = IA & IB
//AB={obj:{a:boolean,b:string}}
let result:AB = {
    obj:{ a:true, b:"xiaowang"}
}
```

## TS-泛型-动态参数类型

### TS开发问题：

```js
//两个数字参数累加，返回给外部
function computed(params1:number,params2:number):number{
    const result = params1 + params2;
    return result
}
//两个字符串相加，返回到外面
function computed2(params1:string,params2:string){
    const result = params1+params2
    return result
}
```

### 函数泛型编程

```js
function play2<T>(params1:T,params2:T):T{
    return params1
}
play2<number>(12,34)
play2<string>("xiaowang","xiaozhang")
//T-占位符，代表数据类型。

//编写一个函数，接受一个数组，返回数组中最大值
 function getMaxValue3<T>(arr:T[]):T{
    let max = arr[0]
    arr.forEach(item => max = item > max ? item : max)
    return max
}
const mydata = [1,4,7,9,0]
const value = getMaxValue3<number>(mydata)
const value2 = getMaxValue3(['a','b','c'])
```

### 类的泛型编程

```js
class Compare<T>{
    list: T[] = []
    add(num: T) {
        this.list.push(num)
    }
    max(): T {
        let max = this.list[0]
        this.list.forEach(item => max = item > max ? item : max)
        return max
    }
}
const comp = new Compare<number>()
comp.add(1)
comp.add(2)
comp.add(3)
console.log(comp.max());//3
const comp2 = new Compare<string>()
comp2.add("a")
comp2.add("b")
comp2.add("c")
console.log(comp.max());//c
```

### 定义多个泛型

```js

function computedData<T,K,M>(arg1:T,arg2:K):T{
    console.log(arg1);
    console.log(arg2);
    let newpar:T = arg1
    return arg1
}
computedData<number,string,number>(1,"xiaowang")
```

### 泛型约束

```js
/**
存在问题：T是变化部分，编写时，无法推断类型
 */
function tranalate<T>(arg:T){
    console.log(arg.length);
}
interface IMyUser {
    id:number,
    name:string,
    length:number
}
const user:IMyUser = {
    id:1,
    name:"xiaowang",
    length:2
}
tranalate<IMyUser>(user)
// tranalate<number>(1)
```

### 泛型继承

<T extends IMyUser>

```js

interface IMyUser {
    id:number,
    name:string,
    length:number
}
interface IMyUser2 {
    id:number,
    name:string,
    length:number,
    address:string
}
//继承
function tranalate<T extends IMyUser>(arg:T){
    console.log(arg.length);
    console.log(arg.name);
    console.log(arg.id);
}
const user:IMyUser = {
    id:1,
    name:"xiaowang",
    length:2
}
const user2:IMyUser2 = {
    id:1,
    name:"xiaowang",
    length:2,
    address:"武侯区"
}
tranalate<IMyUser>(user)
tranalate<IMyUser>(user2)
//直接写死这种有可能会出现类型丢失情况。不利于扩展我们代码
```

## TS-面向对象编程

### 类定义

类的属性不能动态生成，必须要提前将属性定义出来

``` js
class Student{
    // 类的属性必须要明确声明 属性：数据类型
    id:number
    name:string
    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }
    show(msg:string):void{
    }
}
export default {}
```

### 类属性和行为

静态属性和静态行为-类属性和类行为,只能通过类名调用

```js
class Student{
    ......
    show(msg:string):void{
    }
    static play(){
    }
}
const stu = new Student(1,"xiaowang")
console.log(stu.name);
console.log(Student.address);
console.log(Student.play());
```

### 类的继承

访问修饰符。ts提出的对属性和行为进行修饰的关键字。

| 访问修饰  | 含义       | 范围             |
| :-------- | :--------- | :--------------- |
| private   | 私有类型   | 本类             |
| protected | 受保护类型 | 本类、子类       |
| public    | 公有类型   | 本类、子类、外部 |

只读属性，readonly

``` js
class People{
    type:string
    constructor(type:string){
        this.type = type
    }
}
class Police extends People{
    name:string
    constructor(type:string,name:string){
        //执行父类的构造器--,第一句话必须super
        super(type)
        this.name = name
    }
}
const man = new Police("人类","xiaozhang")

class Police extends People{
    // public代表公共。name属性任何地方都可以使用
    public readonly name:string
    constructor(type:string,name:string){
        super(type)
        this.name = name
    }
    show(){
        // private设计的私有属性，在子类也调用
        console.log(this.type);
        console.log(this.name);
    }
}
const man = new Police("人类","xiaozhang")
console.log(man.name);
man.name = "xiaofeifei"
```

在React中的props属性，在TS代码中设置的就是只读。只能获取数据，不能修改这个属性

### 类多继承 implements

一个类只能继承另外一个类。不能实现多继承。

但是一个类可以实现多个接口。将无法多继承用接口来解决，重写接口中的方法，接口中负责定义规范，不负责具体实现，具体实现需要类来完成。

```js
class Phone {
    call() {
        console.log("打电话");
    }
}
class Game {
    play() {
    }
}
// 接口的名字，和类的名字是可以重复
interface Phone {
    call():void  // 定义一个call方法
}
interface Game {
    play():void  //只能有函数的定义，不能有函数实现代码
}
// 游戏设备
class PSP extends Game {
}
new PSP().play()
// 苹果手机
class IPhone implements Phone,Game {
    call(): void {
        console.log("这是打电话的功能");
    }
    play(): void {
        console.log("打游戏");
    }
}
```

#### 实例1、React.Component

```js
// Component 类只定义，不负责具体实现
class Component{
    render(){
        return <div>
    }
}
class Login extends Component{
    render(){
        return (
            <div></div>
        )
    }
}
```

---通过接口的方式来编程

```js
interface Game  {
    play():void
}
//XBox这个类如果实现了Game这个接口，那就意味着必须要在XBox这个类中重写play方法
class XBox implements Game{
    play(){
        //子类定义好完整的业务
    }
}
```

#### 实例2、Nodejs连接数据库

MongoDB

mysql

oracle

Nodejs要连接这些数据库，Nodejs要做一个规范，只提供方法，具体由数据库重写通信的代码来链接

```js
//数据库
interface DB {
    connect(url:string):boolean
    close():void
}
    //数据库产商
class MongoDB implements DB{
    connect(url:string):void{
        //拿着你的url来进行网络通信
        return true
    }
    close():void
}   
//使用，Nodejs以后开发过程中
1.下载mongodb
2.Nodejs代码连接数据，mongose
import {md} from "mongodb"
const boo = md.connect("http://127.0.0.1:27017")
```



mysql这个数据想要跟Nodejs结合起来使用，mysql数据库产生自己实现连接数据库的代码

```js 
class Mysql implements DB{
    connect(url:string):boolean{
        //实现Nodejs代码中连接mysql数据
    }
}
Nodejs代码中我们要连接mysql
1. 下载依赖 mysql
2. 引入依赖
import {mq} from "mysql"
mq.connect()
```

## 【完】

