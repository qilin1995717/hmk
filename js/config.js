var token = sessionStorage.getItem('token');
var QURL = 'http://user.yangergou.com';

function GetQueryString(name)
{
    var reg = new RegExp("\\b"+ name +"=([^&]*)");
    var r = location.href.match(reg);
    if (r!=null) return unescape(r[1]);
}
 function getQueryString(name){
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
	  var r = window.location.search.substr(1).match(reg);  
	  if (r != null) return unescape(r[2]); return null;              
 }
 $("input").on("blur",function(){
 	window.scroll(0,0);//失焦后强制让页面归位
 });