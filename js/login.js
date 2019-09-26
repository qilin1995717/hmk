// var openid = sessionStorage.getItem('openid');

var historyurl = sessionStorage.getItem('historyurl');
var code = getQueryString("code");
sessionStorage.setItem('code', code);
if(code === null){
	var redirect_urls= location.href;
	var urls =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7deaa0209dc5a0fd&redirect_uri="+ redirect_urls +"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
	window.location.href = urls;
	
	
	
	
	
	// var code = getQueryString("code");
	// console.log(code);
	



}else{
 // console.log(openid);
 console.log(code);
 $.ajax({
 	url:QURL+'/api/wxlogin/wxindex',
 	type:'post',
 	dataType:'json',
 	data:{
 		code:code,
 	},
 	success:function(data){
 		console.log(data);
		var nickname = data.data.list.nickname;
		var avatar = data.data.list.avatar;
		var openid = data.data.list.openid;
		console.log(avatar);
		console.log(nickname);
		console.log(openid);
		sessionStorage.setItem('nickname', nickname);
		sessionStorage.setItem('avatar', avatar);
		sessionStorage.setItem('openid', openid);
		$.ajax({
			url:QURL+'/api/Login/login',
			type:'post',
			dataType:'json',
			data:{
				nickname:nickname,
				avatar:avatar,
				openid:openid,
			},
			success:function(data){
				console.log(data);
				var token = data.data.list.token;
				console.log(token);
				sessionStorage.setItem('token', token);
				if(token){
					if(historyurl){
						window.location.href = historyurl;
					}else{
						window.location.href = "index.html";
					}
					
				}else{
					
					$.alert('请绑定手机号',function(){
						window.location.href = '../html/login.html'
					});
				}
				
			}
		})
 	},
 	error:function(e){
 		console.log(e);
 	}
 })





}