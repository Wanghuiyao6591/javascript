# javascript概述

## 程序语言

### 基础逻辑处理 部分

  * 变量 数据类型           (数据)

##### 数据类型
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
        ```

  * 分支和循环 运算符       (逻辑操作部分)

##### 运算符
   
   * + - * / %
   * === == !== > < >= <= 
   * && || !

##### 循环语句

   * for(var i=0,k=12;i<=100;i++){}
   * while(){}
   * do{}while()

##### 分支结构
	
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

  * 函数                   （对语言的拓展）

##### 函数

  ```function XX(){}
     var xx=function(x1,x2){
	//arguments
      }     xx(a,b)

     function a（c）{
	          this.x=c;
               }
     function 
     ```

##### 数组的常用方法
##### 字符串中的常用方法
##### 函数对象中的方法
##### 对象的增删改查 原型链
##### 数字对象身上的方法 toFixed（）
##### Math对象身上的方法

### 针对特定用途的部分
> 当js来浏览器运行的那一刻
> 浏览器会创建一个window对象
> window对象中很多方法和属性
> 这些属性和方法不用加window.就可以使用
>dom中的大部分读写属性都是用get和set方法构造的

##### 获取元素

##### 选取元素

   * var el=document.creatElementById();
   * var el=document.getElementById();
   * var el=document.querySelector();

   * var el=document.getElementsByClassName();
   * var el=document.getElementsByTagName();
   * var el=document.getElementsName();
   * var el=document.querySelectorAll();

   经过这一步我们会得到一个dom元素或dom集合

   dom对象
   js会用一个很大的对象来代表页面中我们看到的那个元素

   ```javascript
   var obj={
       offsetWidth:111;
       offsetWidth:111;
       style{
           color:null;
           width:null;
           }
           nextSibling:domobj,
           _proto_:{
               getAttribute:function();
               }
           }
        }

   dom集合
   在一个类数组对象中存储很多dom对象构成一个集合

   ```javascript
   var obj={

   }


##### 筛选元素

>父元素

   * el.parentNode
   * el.parentElement

>子元素

   * el.lastChild
   * el.lastElementchild

   * el.firstChild
   * el.firstElementchild

   * el.childen
   * el.childNode

>兄弟元素

   * el.nextSibling
   * el.next

##### 获取元素信息   （htmlElement）

   * el.offsetTop();
   * el.offsetHeight
   * el.offsetLeft();
   * el.offsetWidth();
   * el.offsetParent()；//具有定位属性的父元素
   * el.getBoundingCliectRect();//计算元素距离窗口位置
   * el.innerHTML;
   * getComputedStyle(el,null).width  

##### 样式操作

   * el.style(读取行内样式的值和，设置行内样式的值)

##### 操作属性

   * el.setAttribute();
   * el.getAttribute();
   * el.removeAttribute();
   * el.hasAttribute();
   * el.className();
   * el. id;
   * el.classList;


##### 节点操作       （Node）

   * el.appendChild();
   * el.removeChild();
   * el.insertBefore();
   * el.cloneNode();
   * el.replaceChild();


