//��װ
// ��ȡָ���ַ���������λ�÷���1
//str Ŀ���ַ���
//str1  Ҫ�ҵ����ַ���

function pos(str,str1){
	for(var i=0;i<str.length;i++){
	if(str.substr(i,str1.length)==str1){
	document.write(i+'<br/>')}
}
}
// 	pos(str,'www');

//��װ2  ����2
//str Ŀ���ַ���
//str1  Ҫ�ҵ����ַ���
function pos2(str,str1){
var pos=0;
var num=0;
while(str.match(str1)){
   pos=str.indexOf(str1);
   pos+=num;
   num+=str1.length;
   document.write(pos+'<br/>');
   str=str.slice(0,str.indexOf(str1))+str.slice(str.indexOf(str1)+5)
}
}
// pos2(str,'www');


//push ����  ������������µ�ֵ
// var arr=[1,2,3,4,5,6]
function push(arr){
		if(!(arguments[0] instanceof Array)|| arguments.length<=1)
		{
		return '������һ������';
		}
		else
		{ for(var i=1;i<arguments.length;i++)
			{
				//arguments[0][arguments[0].length]=arguments[i];
				arr[arr.length]=arguments[i];
			}
				return arr.length;
		}
}

//document.write(push(arr,1,2,3,4));



//������Ŀ�ֵȥ��
// var arr=[1,2, , ,5,7,]
function delnull(arr){
	var newArr=[];
	for(var i=0;i<arr.length;i++){
		if(checkNull(arr[i])){
		push(newArr,arr[i]);
		}
	}
	return newArr;
}

 function checkNull(num){
 	if(num==undefined){
 			return false;
 	}else{
 		return true;
 	}
 }

//  alert(delnull(arr))


//���������ǰ��λ�÷����µ���
 // var arr=[100,200,300,400,500,100]
 function unshift(arr){
 	if(!(arr instanceof Array)||arguments.length<=1)
		{
		return '������һ������';
		}
		else{
			var newArr=[];
			for(var i=0;i<arr.length;i++){
				newArr[i]=arr[i];				
			}
			//alert(newArr.length);
			// var arr=[];
			arr.length=0;
			for(var j=1;j<arguments.length;j++){
			push(arr,arguments[j]);
			}
			
			for(var k=0;k<newArr.length;k++){
			push(arr,newArr[k]);
			}
		}
		 // alert(arr.length);
		 return arr.length;
 }
    // unshift(arr,0,20,30,40);

//���ȡȡ�����е����֣������ظ�
    // var arr=[2,4,5,6,2,8,9];
    function ranArr(arr,num){
    	var newArr=[];
    	var index;
    	for(var i=0;i<num;i++){
    		index=Math.floor(Math.random()*arr.length);
    		while(panduan(newArr,arr[index])){
    			index=Math.floor(Math.random()*arr.length);
    		}
    		newArr.push(arr[index]);
    	}
    	return newArr;
    }
    function panduan(obj,num){
    		for(var i=0;i<obj.length;i++){
    			if (obj[i]==num){
    				return true;
    			}
    		}
    		return false;
    }
    // ranArr(arr,4);
    // document.write(ranArr(arr,4));

//ȥ���������ظ�����
// var arr=[2,4,5,5,6,8,6,5,2,10,11,11,8,9];
    function qccf(arr){
    	var newArr=[];
    	for(var i=0;i<arr.length;i++){
    		while(!panduan(newArr,arr[i])){
    			newArr.push(arr[i]);
    		}
    		
    	}
    	return newArr;
    }
    function panduan(obj,num){
    		for(var i=0;i<obj.length;i++){
    			if (obj[i]==num){
    				return true;
    			}
    		}
    		return false;
    }
//     // qccf(arr);
//     document.write(qccf(arr));


//��� ��ȡclass������ʱ  �����Ե����� 
// className   Ҫ��ȡ��class�� 
// range ��Χ
function getClass(className,range){
	var range=range?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(className);

	}else{
		var all=range.getELementsByTagName('*');
		var newarr=[];
		for(var i=0;i<all.length;i++){
// 			if(all[i].className==className)
			if(checkClass(all[i],className))//���class������û��Ҫ�ҵ�class���ַ���
			{
					newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
////���class������û��Ҫ�ҵ�class���ַ���
function checkClass(obj,classname){
	var arrC=obj.className.split("");//���ո�ָ�  �ַ����ָ������
	for(var i=0;i<arrC.length;i++){
		if(arrC[i]==classname){
			return true;
		}
	}
	return false;
}




//������ �����ʼ �������
//��ʱִ�к��� setInterval
// window.onload=function(){
// 	var flag=true;
//     var t;
// document.documentElement.onclick=function(){	
	
// 	if(flag){
// 	    t=setInterval(function(){
// 		scrollBy(0,30)
// 	},1000)
// 		flag=false;
// 	}else{
// 		clearInterval(t)
// 		flag=true;
// 	}
	
// }
// }


//��ȡĿ����������ֵ ��������Ե�����
// obj  Ҫ�����Ķ���
// attr   ���������  "width"
function getStyle(obj,attr){
			// return getComputedStyle(obj,null)[attr];
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}
			else{
				return getComputedStyle(obj,null)[attr];
			}
		}



		//���� ���� id�� ��ǩ���ĺ���
		// var aa=$(".one");
		//�������
		// #one
		// .one
		// div
		//<div> ����һ��div
		// alert(aa)
		// selecter  ָ���ı�ǩ�� ����  id�� 
		// ranges  �����ķ�Χ  
		// function $(selecter,ranges){
		// 	var ranges=ranges?ranges:document;
		// 	var first=selecter.charAt(0);//������ָ��λ�õ��ַ���
		// 	if(first=='#'){
		// 		return document.getElementById(selecter.substring(1));//��ȡ�ַ��� substring(��ʼ������)����������λ��
		// 	}
		// 	else if(first=='.'){
		// 		return getClass(selecter.substring(1),ranges);//�ຯ��
		// 	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){//ƥ�������Ƿ���ϱ�׼//������ʽ
		// 		return ranges.getElementsByTagName(selecter);

		// 	}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
		// 		//�ж��������һ��<div>�µ�divʱ
		// 		return ranges.createElement(selecter.slice(1,-1));
		// 	}
		// 	}
		function $(selecter,ranges){
			if(typeof selecter=="string"){
			var ranges=ranges?ranges:document;
			var first=selecter.charAt(0);//������ָ��λ�õ��ַ���
			if(first=='#'){
				return document.getElementById(selecter.substring(1));//��ȡ�ַ��� substring(��ʼ������)����������λ��
			}
			else if(first=='.'){
				return getClass(selecter.substring(1),ranges);//�ຯ��
			}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){//ƥ�������Ƿ���ϱ�׼//������ʽ
				return ranges.getElementsByTagName(selecter);

			}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
				//�ж��������һ��<div>�µ�divʱ
				return ranges.createElement(selecter.slice(1,-1));
			}
			}else if(typeof selecter=="function"){
		        	addEvent(window,"load",selecter)
		        }
		        }

			



			//��װ  ����class��  �������ݵĸ���
			//��һ�������е����ݸ��Ƶ���һ��������
			//obj  Ŀ���еĶ���
			//obj1  Ҫ�����������ݵĶ���
	function setContent(obj,obj1){
		var one=document.getElementById(obj);
		var inputs=document.getElementsByTagName('input')[0];
		var two=document.getElementById(obj1);
		alert(one.innerHTML);
		inputs.onclick=function(){

		var con=one.innerHTML;//ԭ�����ݸ�ֵ ����css��ʽ
		two.innerHTML=con;
		// var con=one.textContent;//ֻ�û��ı� ������css
		// two.textContent=con;
		// var con=one.innerText;//ֻ�û��ı� ������css
		// two.innerText=con;
	}
	
}


//��ȡ Ŀ������е��ı�����
// val  ���� Ҫд������
function getContent(obj,val){
	if(obj.textContent){
		if(val==undefined){
			return obj.textContent;
		}
		else{
			 obj.textContent=val;
		}
	}else{
		if(val===undefined){
			return obj.innerText;
		}
		else{
			 obj.innerText=val;
		}
	}
}


//����
//obj   Ŀ���������
//attrObj   ����������

//animate(one,{width:500,height:500,left:1000})
// function animate(obj,attrObj,callback){
// 	var t=setInterval(function(){
// 		var speed=10;
// 		for(var i in attrObj){
// 			var begin=parseInt(getstyle(obj,i))
		

// 		if(begin>attrObj[i]){
// 			clearInterval(t);
// 			if(callback){
// 				callback();
// 			}
// 		}
// 		obj.style[i]=begin+speed+"px";
// }

// 	},60)
// }
	


//��������
//obj   Ŀ���������
//attrObj   ����������

//animate(one,{width:500,height:500,left:1000},10000)
// 	function animate(obj,attrObj,dur,callback){
// 			var time=0;
// 			var end={};
// 			for(var i in attrObj){
// 				end[i]=attrObj[i];
// 			}

// 		var t=setInterval(function(){
// 			for(var i in attrObj){
// 				var cha=end[i]-parseInt(getstyle(obj,i));
// 				if(time>=dur){
// 					clearInterval(t);
// 					obj.style[i]=end[i];
// 					if(callback){
// 						callback();
// 						}
// 				}

// 				//  cha    dur
// 				//change   time   //cha/dur = change/time
// 				obj.style[i]=cha*time/dur+parseInt(getstyle(obj,i))+"px";
// 			}
// 		},60)
// 		time+=60;
// } 


//��ȡĳ���������Ԫ�� 
// getChilds(obj,type)
// obj   ��Ԫ��
// type  true   ��ȡ��Ԫ�������Ԫ�ؽڵ� ����������ı�
//       false   ֻ��ȡ��Ԫ�������Ԫ�ؽڵ�

		function getChilds(obj,type){
			var type=type?type:false
			var childs=obj.childNodes;
			var temp=[];
			if(type===false){
				for(var i=0;i<childs.length;i++){
						if(childs[i].nodeType==1){
								temp.push(childs[i]);
				
					}
				}
			}else if(type===true){
				for(var i=0;i<childs.length;i++){
                if(childs[i].nodeType==1||(childs[i].nodeType==3 && !(/^\s+$/.test(childs[i].nodeValue)))){
						temp.push(childs[i]);
						alert(temp.length)
								}
							}
						}
				
				return temp;
			}

//��ȡĿ��Ԫ��������������һ���ڵ�
// function getlast(obj,type){
// 	var childs=getChilds[obj];
// 	return childs[childs.length-1];
// 	//return getChilds(obj)[getChilds[obj].length-1]
// 	}
	// function getlast(obj,type){
	// 		var type=type?type:false
	// 		var childs=obj.childNodes;
	// 		var temp=[];
	// 		if(type===false){
	// 			for(var i=0;i<childs.length;i++){
	// 					if(childs[i].nodeType==1){
	// 							temp.push(childs[i]);
				
	// 				}
	// 			}
	// 		}else if(type===true){
	// 			for(var i=0;i<childs.length;i++){
 //                if(childs[i].nodeType==1||(childs[i].nodeType==3 && !(/^\s+$/.test(childs[i].nodeValue)))){
	// 					temp.push(childs[i]);
	// 					alert(temp.length)
	// 							}
	// 						}
	// 					}
				
	// 			return temp.lastChild;
	// 		}

//��ȡĿ��Ԫ����������ĵ�һ���ڵ�
function getFirst(obj,type){
	return getChilds(obj)[0]
	}
function getLast(obj,type){
	return getChilds(obj)[getChilds[obj].length-1]
}
//��ȡĿ��Ԫ�����������ָ���ڵ�	
function getNum(obj,num){
			return getChilds(obj)[num];
		}





		//getNext(obj ,type)
       //type   true    ʶ����������ı�
               // false    �����ı�

       function getNext(obj,type){
       		var type=type?type:false;
       		var next=obj.nextSibling;
       		if(type===false){
       			if(!next){
       				return false;
       			}
       			while(next.nodeType==3||next.nodeType==8){
       				next=next.nextSibling;
       				if(!next){
       				return false;
       			}
       			}

       		}
       		else if(type===true){
       			if(!next){
       				return false;
       			}
       			while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
       				next=next.nextSibling;
       				if(!next){
       				return false;
       			}

       		}
       		return next;
       }

}
       //insertAfter(obj,next,type)
       // obj:Ҫ�����Ԫ��  ����
       // next:Ҫ�����λ��
       // type true ʶ����������ı�
       //      false  �����ı�

       //
       function insertAfter(obj,next,type){
       	var type=type?type:false;
       	var pos=getNext(next,type);
       	var parent=next.parentNode;
       	if(!pos){
       		parent.appendChild(obj);

       	}else{
       		parent.insertBefore(obj,pos);
       	}
       }
   







   /*����¼�
   addEvent(obj,type,fn)
   obj ����
   type �¼�������
   fn ������
*/
function addEvent(obj,type,fn){
	if(obj.addEventListener){
                       obj.addEventListener(type,fn,false);
	}else if(obj.attachEvent){
                       obj.attachEvent("on"+type,fn);
	}

}


//ɾ���¼�
function removeEvent(obj,type,fn){
	if(obj.addEventListener){
                       obj.removeEventListener(type,fn,false);
	}else if(obj.attachEvent){
                       obj.detachEvent("on"+type,fn);
	}

}