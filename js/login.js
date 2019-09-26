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
 	url:'http://user.yangergou.com/api/wxlogin/wxindex',
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
			url:'http://user.yangergou.com/api/Login/login',
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
$('#go').click(function(){
	var phone = $('#phone').val();
	
	if (!(/^1[34578]\d{9}$/.test(phone))) {
	            $.toptip('手机号输入有误');
	        }else{
				console.log(123456);
				$('#go').css('pointer-events','none');
				countDown();
				$.ajax({
					url:'http://user.yangergou.com/api/Login/getCode',
					type:'post',
					dataType:'json',
					data:{
						phone:phone,
						event:'register',
					},
					success:function(data){
						console.log(data);
						$.alert(data.msg);
					}
				})
			}
})

	var flag = 1;  
	var i = 60;  
	function countDown() {  
	    i = i - 1;  
	    $("#go").html(i+"秒后重新发送");  
	    if (i == 0) {  
	        $("#go").html("重新发送");  
	        flag = 1;  
	        i = 60;  
			$('#go').css('pointer-events','auto');
	        return;  
	    }  
	    setTimeout('countDown()',1000);  
	} 
	

$('#login').click(function(){
	var nickname = sessionStorage.getItem('nickname');
	var avatar = sessionStorage.getItem('avatar');
	var openid = sessionStorage.getItem('openid');
	var phone = $('#phone').val();
	var code = $('#num').val();
	console.log(code);
	if(code != ''){
		$.ajax({
			url:'http://user.yangergou.com/api/Login/register',
			type:'post',
			dataType:'json',
			data:{
				code:code,
				phone:phone,
				nickname:nickname,
				avatar:avatar,
				openid:openid,
			},
			success:function(data){
				console.log(data);
				var token = data.data.list.token;
				console.log(token);
				sessionStorage.setItem('token', token);
				if(data.code == 200){
						if(token){
							if(historyurl){
								window.location.href = historyurl;
							}else{
								window.location.href = "index.html";
							}
						}
				}else{
					$.alert(data.msg);
				}
				
			}
		})
	}else{
		$.alert('请输入验证码');
	}
	
})	
function getQueryString(name){  
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
     var r = window.location.search.substr(1).match(reg);  
     if (r != null) return unescape(r[2]); return null;              
} 