// 获取非行间样式函数
// 使用方法：getStyle(odiv,'width')
// 缺点：没办法取复合样式，每次只能取单一样式，如不能取background，可以取backgroundColor
function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}

// 