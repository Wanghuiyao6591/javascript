
/*兼容性*/
/*
	getClass(className)
	获取指定的类名
	className  指定的类名
	range 指定的范围
	如果传入范围，就是指定的范围
	如果不传入范围，就是document
*/
/*function getClass(className,range){
	// 设置范围
	var range=range?range:document;
	// 判断浏览器
	if(document.getElementsByClassName){
		// w3c
		return range.getElementsByClassName(className);
	}else{
		// ie6~8
		// arr 保存指定的className对象
		// 获取所有的元素
		var all=range.getElementsByTagName("*");
		// 挑选指定的元素
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(all[i].className==className){
				arr.push(all[i]);
			}
		}
		// 挑选完毕。将数组输出
		return arr;

	}
}*/




function getClass(className,range){
	// 设置范围
	var range=range?range:document;
	// 判断浏览器
	if(document.getElementsByClassName){
		// w3c
		return range.getElementsByClassName(className);
	}else{
		// ie6~8
		// arr 保存指定的className对象
		// 获取所有的元素
		var all=range.getElementsByTagName("*");
		// 挑选指定的元素
		var arr=[];
		for(var i=0;i<all.length;i++){
			// 函数：判断当前元素的className是否包含指定的className
			if(checkClass(all[i].className,className)){
				arr.push(all[i]);
			}
		}
		// 挑选完毕,将数组输出
		return arr;
	}
}
function checkClass(obj,className){
	// 检查obj里面是否包含className
	// obj one two
	// className  "one"
	var arr=obj.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==className){
			return true;
		}
	}
	return false;
}
/* 
	getContent(obj,[val])
	获取或者设置对象的文本
	obj 指定的对象
	val 要设置的内容
*/
function getContent(obj,val){
	if(obj.innerText){
		if(val==undefined){
			return obj.innerText;
		}else{
			obj.innerText=val;
		}
	}else{
		if(val==undefined){
			return obj.textContent;
		}else{
			obj.textContent=val;
		}
	}
}

/*
	getStyle(obj,attr)
	获取指定元素的样式
	obj 指定的元素
	attr 指定的样式
*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}



/*
	$("")
	.one 获取类名
	#one 获取id
	div 获取标签
*/

// function $(selecter,ranges){
// 	var ranges=ranges?ranges:document;
// 	if(selecter.charAt(0)=="."){
// 		return getClass(selecter.slice(1),ranges);
// 	}else if(selecter.charAt()=="#"){
// 		return document.getElementById(selecter.slice(1));
// 	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
// 		return ranges.getElementsByTagName(selecter);
// 	}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
// 		return document.createElement(selecter.slice(1,-1));
// 	}
// }

function $(selecter,ranges){
	if (typeof selecter=='string') {
		selecter=trim(selecter);
		var ranges=ranges?ranges:document;
		if(selecter.charAt(0)=="."){
			return getClass(selecter.slice(1),ranges);
		}else if(selecter.charAt(0)=="#"){
			return document.getElementById(selecter.slice(1));
		}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
			return ranges.getElementsByTagName(selecter);
		}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
			return document.createElement(selecter.slice(1,-1));
		}
	} else if(typeof selecter=='function'){
		addEvent(window,'load',selecter);
	}
}

function getChilds(obj,type){
    var childs=obj.childNodes;
    var newArr=[]
    var type=type?type:false;
    for(var i=0;i<childs.length;i++){
    	if(type===true){
    		if(childs[i].nodeType==1){
    			newArr.push(childs[i]);
    		}
    	}
    	if(type===false){
    		if(childs[i].nodeType==1||(childs.nodeType==3&&!(/^s+$/.test(childs[i].nodeValue)))){
    			newArr.push(childs[i]);
    		}
    	}
    }
    return newArr;
}


function firstChild(obj,type){
    return getChilds(obj,type)[0];
}
function lastChild(obj,type){
    var length=getChilds(obj,type).length;
    return getChilds(obj,type)[length-1];
}
function randomChild(obj,type,num){
    var length=getChilds(obj,type).length;
    if(num>=length){
      	return error;
    }
    return getChilds(obj,type)[num];
}



// ***********************************************获取下一个有意义的兄弟节点********************************************
function getNext1(obj){//获得元素节点
	var next=obj.nextSibling;
	if (next==null) {
		return false;
	}
	while(next.nodeType!=1){
		next=next.nextSibling;//更新next
		if (next==null) {
			return false;
		}
	}
	return next;
}	
function getNext2(obj){//获得元素节点或有意义文本
	var next=obj.nextSibling;
	if (next==null) {
		return false
	}
	while ((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8) {
		next=next.nextSibling;
		if (next==null) {
			return false
		}
	} 
	return next;
}
function getNext(obj,type){
	var type=type?type:false;
	if (type==1) {
		return getNext1(obj);
	}
	if (type==false){
		return getNext2(obj);
	}
}


// ***********************************************获取上一个有意义的兄弟节点********************************************
function getBefore1(obj){//获得元素节点
	var next=obj.previousSibling;
	if (next==null) {
		return false;
	}
	while(next.nodeType!=1){
		next=next.previousSibling;//更新next
		if (next==null) {
			return false;
		}
	}
	return next;
}
function getBefore2(obj){//获得元素节点或有意义文本
	var next=obj.previousSibling;
	if (next==null) {
		return false
	}
	while ((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8) {
		next=next.previousSibling;
		if (next==null) {
			return false;
		}
	} 
	return next;
}
function getBefore(obj,type){
	var type=type?type:false;
	if (type==1) {
		return getBefore1(obj);
	}
	if (type==false){
		return getBefore2(obj);
	}
}



//    newobj表示要插入的元素，obj表示要插入到哪个元素之前
//把newobj插入到obj之后
function insertAfter(newobj,obj,type){
	var parent=obj.parentNode;//获取父元素
	var type=type?type:false;
	var next=getNext(obj,type);
	if (!next) {
		 parent.appendChild(newobj);
	} else{
		parent.insertBefore(newobj,next);
	}
}
//把newobj插入到obj之前
function insertBefore(newobj,obj){
	var parent=obj.parentNode;
	parent.insertBefore(newobj,obj);
}
//把newobj插入到最后
function appendChild(newobj,parent){
	parent.appendChild(newobj);
}
//把newobj插入到最前面
function appendBefore(newobj,parent){
	var first=parent.firstChild;
	if(first){
		parent.insertBefore(newobj,first);
	}else{
		parent.appendChild(newobj);
	}
}

// addEvent(obj,type,fn)
// obj 对象  type 事件类型 fn事件处理程序
//  
function addEvent(obj,type,fn){
	if (obj.attachEvent) {
		obj.attachEvent('on'+type,fn)
	} else{
		obj.addEventListener(type,fn,false)
	}
}
function removeEvent(obj,type,fn){
	if (obj.detachEvent) {
		obj.detachEvent('on'+type,fn)//click--onclick
	} else{
		obj.removeEventListener(type,fn,false)
	}
}



//offset(obj)获取元素到浏览器的实际位置
//返回值result={left:xx,top:xx}
//1.获取具有定位属性的父元素和自己
//2.left=所有父元素的offsetLeft+自己offsetLeft+所有父元素的左边框宽度
function offset(obj){
	var result={left:0,top:0}
	var arr=[];
	arr.push(obj);
	var parent=obj.parentNode;
	while(parent.nodeName!='BODY'){//nodeName返回的就是大写
		if (getStyle(parent,'position')=='relative'||getStyle(parent,'position')=='absolute') {
			arr.push(parent);
		}
		parent=parent.parentNode;
	}
	for (var i = 0; i < arr.length; i++) {
		var leftw=parseInt(getStyle(arr[i],'borderLeftWidth'));
		leftw=leftw?leftw:0;
		var topw=parseInt(getStyle(arr[i],'borderTopWidth'));
		topw=topw?topw:0;
		if(i==0){
			leftw=0;
			topw=0;
		}
		result.left+=arr[i].offsetLeft+leftw;
		result.top+=arr[i].offsetTop+topw;
	}
	return result;
}

//    鼠标滚轮

function onMousewheel(obj,upcallback,downcallback){
	if(obj.attachEvent){
		obj.attachEvent("onmousewheel",scrollFn);
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
	}
	function scrollFn(e){
		var ev=e||window.event;
		var val=ev.wheelDelta||ev.detail;
		if(val==120||val==-3||val==-1){
			// upcallback.call(obj);
			upcallback&&upcallback();
		}if(val==-120||val==3||val==1){
			// downcallback.call(obj);
			downcallback&&downcallback();
		}if (ev.preventDefault){
			ev.preventDefault(); //阻止默认浏览器动作(W3C)
		}else{
			ev.returnValue = false;//IE中阻止函数器默认动作的方式
		}
	}
}


function trim(str,type){
	type=type?type:"both";
	if(type=="left"){
		var reg=/^\s*/;
		return str.replace(reg,"");
	}else if(type=="right"){
		var reg=/\s*$/;
		return str.replace(reg,"");
	}else if(type=="both"){
		var reg=/^\s*|\s*$/g;
		return str.replace(reg,"");
	}else if(type=="all"){
		var reg=/\s*/g;
		return str.replace(reg,"");
	}
}
// ******************************AJAX*************************************
/*
   ajax{
	  type:"get/post"    设置请求的方式get/post
	  url:"**.php"       地址
	  data:{"name":"zhangsan"}{"age":"18"}   "name=zhangsan"&"age=18"
	  dataType:"json"/"text"/"string"/"xml"
	  asynch:true/false  是否异步
	  success:function(data){
			//数据获取成功以后，处理数据
	  }
   }
*/
function ajax(option){
	if(!option.url){
		return;
	}
	var type=option.type==undefined?"get":option.type;
	var url=option.url;
	var asynch=option.asynch==undefined?true:option.asynch;
	var dataType=option.dataType==undefined?"string":option.dataType;
	var data="";
	if(typeof option.data=="string"){
		data=option.data;
	}else if(option.data instanceof Object){
		for(var i in option.data){
			data+=i+"="+option.data[i]+"&";
		}
		data=data.slice(0,-1);
	}
	var xml=XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	//打开请求
	if(type=="get"){
		if(data){
			xml.open("get",url+"?"+data,asynch);
		}else{
			xml.open("get",url,asynch);
		}
		
	}else if(type=="post"){
		xml.open("post",url,asynch);
	}
	//发送请求
	if(type=="get"){
		xml.send(null);
	}else if(type=="post"){
		xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xml.send(data);
	}
	//设置监听
	xml.onreadystatechange=function(){
		if(xml.readyState==4){
			if(xml.status==200){
				if(dataType=="string"){
					option.success(xml.responseText);
				}else if(dataType=="json"){
					var data=JSON.parse(xml.responseText);
					option.success(data);
				}else if(dataType=="xml"){
					option.success(xml.responseXML);
				}
				
			}
		}
	}
}