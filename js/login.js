var code = sessionStorage.getItem('code');
if(code === null){
	var redirect_urls= location.href;
	var urls =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcee11a1999c96735&redirect_uri="+ redirect_urls +"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
	window.location.href = urls;
}else{
	console.log(code);
	
}
	var code = getQueryString("code");
	sessionStorage.setItem('code', code);
function getQueryString(name){  
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
     var r = window.location.search.substr(1).match(reg);  
     if (r != null) return unescape(r[2]); return null;              
} 