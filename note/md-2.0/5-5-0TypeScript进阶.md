


## TSX常用类型汇总

地址：https://jishuin.proginn.com/p/763bfbd7bd87



基本prop类型示例

有用的 React Prop 类型示例

函数组件

类组件

form和event

Context

forwardRef/createRef

有用的hooks

HOC

Linting



## TS内置包装类型

TS 里几个常用的内置工具类型（Record、Partial 、 Required 、 Readonly、 Pick 、 Exclude 、 Extract 、 Omit）的使用

### Record：键值对类型

- Record的内部定义，接收两个泛型参数；Record后面的泛型就是对象键和值的类型
  源码定义：

```js
Record<key type, value type> 
```

>作用 :义一个对象的 key 和 value 类型

- Record<string, never> 空对象

- Record<string, unknown> 任意对象

- {} 任何不为空的对象

```js
type Record<K extends string | number | symbol, T> = {
    [P in K]: T;
}
```

- 逐步解析:
  - 泛型K即为第一次参数
  - p in xx 又是什么意思呢？
  - in的意思就是遍历，如上就是将 类型string进行遍历，也就是string
  - 每个属性都是传入的T类型，如 string: PersonModel
- 结论：
  - 1、Record定义的类型，我们传递的参数必须是一个对象

  - 2、所传参数的属性，就是recode第一个参数定义的属性，而值则是第二个参数决定的

  - 3、它传参数应和record定义的第一个参数包吃一致，（顺序无关）

### Partial：生成所有可选类型

源码定义：

```js
type Partial<T> = {
    [P in keyof T]?: T[P]
}
```

>作用：生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为可选项

```js
interface Foo {
    name: string
    age: number
}
type Bar = Partial<Foo>
// 相当于
type Bar = {
    name?: string
    age?: number
}
```

### Required：生成所有必选类型

源码定义：

```js
type Require<T> = {
    [p in keyof T]-?: T[P]
}
```

>作用：生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为必选项

```js
interface Foo {
    name: string
    age?: number
}
type Bar = Required<Foo>
// 相当于
type Bar = {
    name: string
    age: number
}

```

### Readonly:-?生成只读类型

源码定义：

```js
type Readonly<T> = {
    [p in keyof T]-?: T[P]
}
```

>作用：生成一个新类型，T 中的 K 属性是只读的，K 属性是不可修改的。

```js
interface Foo {
    name: string
    age: number
}
type Bar = Readonly<Foo>
// 相当于
type Bar = {
    readonly name: string
    readonly age: number
}

```

### Pick：生成共有交集

源码定义：

```js
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

>作用：生成一个新类型，该类型拥有 T 中的 K 属性集 ; 新类型 相当于 T 与 K 的交集

```js
interface Foo {
    name: string;
    age?: number;
    gender: string;
}
type Bar = Pick<Foo, 'age' | 'gender'>
// 相当于
type Bar = {
    age?: number
    gender: string
}

const todo: Bar= {
   age?: 3,
   gender: 男
};
console.log(todo)
```

### Exclude:差集或前者

```js
type Exclude<T, U> = T extends U ? never : T
```

>作用：如果 T 是 U 的子类型则返回 never 不是则返回 T

```js
type A = number | string | boolean
type B = number | boolean

type Foo = Exclude<A, B>
// 相当于
type Foo = string

```

### Extract:前者(后者)或差集

源码定义：

```js
type Extract<T, U> = T extends U ? T(应该是U) : never
```

>作用： 和 Exclude 相反

```js
type A = number | string | boolean
type B = number | boolean

type Foo = Extract<A, B>
// 相当于
type Foo = number | boolean

```

### Omit:差集（前-后）

源码定义：

```js
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>> 
```

>作用：生成一个新类型，该类型拥有 T 中除了 K 属性以外的所有属性

```js
type Foo = {
	name: string
	age: number
}

type Bar = Omit<Foo, 'age'>
// 相当于
type Bar = {
	name: string
}
```

### NonNullable：排除n-u

源码定义：

```js
NonNullable<T>
```

>作用：从泛型 T 中排除掉 null 和 undefined

```js
type NonNullable<T> = T extends null | undefined ? never : T;

type t = NonNullable<'name' | undefined | null>;
/* type t = 'name' */
```

### Parameters：根据参数获取元组类型

源码定义：

```js
Parameters<T extends (...args: any) => any>
```

>作用：以元组的方式获得函数的入参类型

```js
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type t = Parameters<(name: string) => any>; // type t = [string]

type t2 = Parameters<((name: string) => any)  | ((age: number) => any)>; // type t2 = [string] | [number]
```

### ConstructorParameters：构造函数的参数元组

源码定义：

```js
ConstructorParameters<T extends new (...args: any) => any>
```

>作用：以元组的方式获得构造函数的入参类型

```js
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
 
type t = ConstructorParameters<(new (name: string) => any)  | (new (age: number) => any)>;
// type t = [string] | [number]
```

### ReturnType：获取函数返回值类型

源码定义：

```js
ReturnType<T extends (...args: any) => any>
```

>作用：获得函数返回值的类型

```js
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
 
type t = ReturnType<(name: string) => string | number>
// type t = string | number
```

### InstanceType：获取构造函数返回值类型

源码定义：

```js
InstanceType<T extends new (...args: any) => any>
```

>作用：获得构造函数返回值的类型

```js
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
 
type t = InstanceType<new (name: string) => {name: string, age: number}>
/* 
type h = {
    name: string;
    age: number;
}
*/
```

12