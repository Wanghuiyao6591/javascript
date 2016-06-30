function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	while((next.nodeType==3&&!(/^s+$/.test(obj.nextSibling))||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
			return false;
		}
	}
	return next;
}
function getBefore(obj){
	var next=obj.previousSibling;
	if(next==null){
		return false;
	}
	while((next.nodeType==3&&!(/^s+$/.test(obj.nextSibling))||next.nodeType==8){
		next=next.previousSibling;
		if(next==null){
			return false;
		}
	}
	return next;
}