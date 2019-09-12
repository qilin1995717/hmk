$(function(){
	var getRequest = this.getRequest();
	 if (getRequest.code) {
	   this.code = getRequest.code;
	 } else {
	   var pageUrl = window.location.href
	   .replace(/[/]/g, "%2f")
	   .replace(/[:]/g, "%3a")
	   .replace(/[#]/g, "%23")
	   .replace(/[&]/g, "%26")
	   .replace(/[=]/g, "%3d");
	 var url =
	 "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
	 "填写网页授权回调域名所对应的那个公众号的AppId" +
	 "&redirect_uri=" +
	 pageUrl + //这里放当前页面的地址
	 "&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect";
	 window.location.href = url;
	}
	 console.log("CODE：" + getRequest.code);
})