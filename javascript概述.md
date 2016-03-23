# javascript概述

## 程序语言

* 基础逻辑处理部分

  * 变量 数据类型           (数据)
  * 分支和循环 运算符       (逻辑操作部分)
  * 函数                   （对语言的拓展）

### 数据类型
```javascript
var vr=4;                   //num
var vr=1.2;                 //num
var vr='string';            //string
var vr=[1,2,3,4];           //arry
var vr={a:1,b:2};           //object
var vr=function(){}         //function
var vr=true/false           //boolean
var vr=undefined            //undefined
var vr=null                 //none

### 运算符
	* + - * / %
	* === == !== > < >= <= 
	* && || !
### 分支结构
	
	* if()
	* if()else
	* if()else if()else if()

	* ```switch(){
		   case 1:
		   break;
		   case 2:
		   break;
		   default:
		   break;
		}```
### 循环语句

	* for(var i=0,k=12;i<=100;i++){}
	* while(){}
	* do{}while()

### 函数

```function XX(){}
var xx=function(x1,x2){
	//arguments
}     xx(a,b)

function a（c）{
	this.x=c;
}
function 
```

### 数组的常用方法
### 字符串中的常用方法
### 函数对象中的方法
### 对象的增删改查 原型链
### 数字对象身上的方法 toFixed（）
### Math对象身上的方法

## 针对特定用途的部分
> 当js来浏览器运行的那一刻
> 浏览器会创建一个window对象
> window对象中很多方法和属性
> 这些属性和方法不用加window.就可以使用

### 选取元素
	* var el=document.getElementById();
	* var el=document.getElementsByClassName();
	* var el=document.getElementsByTagName();
	* var el=document.getElementsName();
### 筛选元素
	* el.parentNode
	* el.

### 操作样式
	* el.style.color='red';
### 获取位置信息
	* el.style.position="";
### 操作属性
### 节点操作


 