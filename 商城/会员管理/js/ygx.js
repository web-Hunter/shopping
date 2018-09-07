function chen(){
	var ch=document.getElementById("ch");
	if(ch.checked==true){
		document.getElementById("btn1").style.backgroundColor="#90EE90";
		document.getElementById("btn1").removeAttribute("disabled");
		
		
	}else{
		document.getElementById("btn1").disabled="disabled";
	}
	
}
function Btn(){
	$("#ygx_right").css("display","none");
	$(".ygx_1").css("display","block");
	
	
}
function Bu(){
	$("#ygx_right").css("display","none");
	$(".ygx_1").css("display","none");
	$(".ygx_3").css("display","block");
	

}
function ty(){
	$("#ygx_right").css("display","none");
	$(".ygx_1").css("display","none");
	$(".ygx_3").css("display","none");
	$(".ygx_5").css("display","block");
}
function BBt(){
	document.getElementById("a22").style.backgroundColor="#90EE90";
}
function init(){
	$(".ygx_1").css("display","block");
	$(".ygx_3").css("display","none");
}
