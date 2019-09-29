console.log(QURL);
$.ajax({
	url:QURL+'/api/Index/bannerlist',
	type:'post',
	async:false,
	dataType:'json',
	data:{},
	success:function(data){
		console.log(data);
		var imgl = data.data.list;
		for(i=0; i < imgl.length; i++){
			if(imgl[i].clumn_id == 1){
				$('.swiper-wrapper').append("<div class='swiper-slide'><img src="+ data.data.list[i].img +"></div>");
			}else{
				$('#imgl2').attr('src',imgl[i].img);
			}
			
		}
	},
	error:function(e){
		console.log(e);
	}
})
$(".weui-tabbar a").on("click",function(){
	var tab = $(this).index();
	if(tab === 0 ){
		$(this).find(".weui-tabbar__icon img").attr("src","../html/images/menu_01@2x.png");
		$(".weui-tabbar a:eq(1)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_2@2x.png");
		$(".weui-tabbar a:eq(2)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_3@2x.png");
		$(".weui-tabbar a:eq(3)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_4@2x.png");
	}
	if(tab === 1 ){
		$(this).find(".weui-tabbar__icon img").attr("src","../html/images/menu_02@2x.png");
		$(".weui-tabbar a:eq(0)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_1@2x.png");
		$(".weui-tabbar a:eq(2)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_3@2x.png");
		$(".weui-tabbar a:eq(3)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_4@2x.png");
	}
	if(tab === 2 ){

		$(this).find(".weui-tabbar__icon img").attr("src","../html/images/menu_03@2x.png");
		$(".weui-tabbar a:eq(0)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_1@2x.png");
		$(".weui-tabbar a:eq(1)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_2@2x.png");
		$(".weui-tabbar a:eq(3)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_4@2x.png");
	}
	if(tab === 3 ){

				if(!token){
					window.location.href = '../html/loogin.html'

				}else{
					
						$.ajax({
							url:QURL+'/api/user/userinfo',
							type:'post',
							dataType:'json',
							data:{
								token:token,
							},
							success:function(data){
								console.log(data);
								$('#tx').attr('src',data.data.list.avatar);
								$('#nikename').text(data.data.list.nickname);
								$('#grade1').text(data.data.list.is_agent_one);
								$('#grade2').text(data.data.list.is_agent_two);
							},
						})
						
				}
			
			
		// 
		$(this).find(".weui-tabbar__icon img").attr("src","../html/images/menu_04@2x.png");
		$(".weui-tabbar a:eq(0)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_1@2x.png");
		$(".weui-tabbar a:eq(1)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_2@2x.png");
		$(".weui-tabbar a:eq(2)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_3@2x.png");
	}
})
			

		
		


			wx.ready(function(){
				
				wx.getLocation({
				type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				success: function (res) {
				latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
				longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
				var speed = res.speed; // 速度，以米/每秒计
				var accuracy = res.accuracy; // 位置精度
				
				$.ajax({
					url: QURL+'/api/scenic/scenicList',
					type:'post',
					async:false,
					dataType:'json',
					data:{
						lat:longitude,
						lng:latitude,
					},
					success:function(data){
						console.log(data);
						var homejq=document.querySelector('#homejq');
						homejq.innerHTML='';
						var data = data.data.rows;
						for(i=0; i < data.length ; i++){
							
							homejq.innerHTML +="<div class='jq' scenic_sn='"+ data[i].scenic_sn +"'><div class='img'><img src='"+ data[i].picture +"'></div>"
							+"<div class='jqboy'><h2>"+ data[i].name +"</h2><div class='jqico'><span>"+ data[i].grade +"</span>"+
							
							// +"<span>"+ data[i].price +"</span>
							"<h3><b>"+ data[i].price +"</b>元</h3></div><p>"+data[i].province+ data[i].city+"距您："+ data[i].distance +"km</p><p>游览日期："+ data[i].subscribe_start_time +'~'+ data[i].subscribe_end_time +"</p></div></div>"
							
						}
						
						//景区
						$(".jq").click(function(){
						var scenic_sn = $(this).attr('scenic_sn');
							
							window.location.href="page.html?valus="+ JSON.stringify(scenic_sn);
						})
						
						
					},
					error:function(e){
						console.log(e);
					}
				})
				
				}
				});
			  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
			});
//tab2景区






$('.listcar').click(function(){
	var card = $(this).index();
	if(card == 0){
		window.location.href = 'nkjh.html';
	}
	if(card == 1){
		window.location.href = "../html/jq.html";
	}
	if(card == 2){
		window.location.href = "../html/nk.html";
	}
	if(card == 3){
		$.confirm({
		  title: '潮带劲',
		  text: '是否拨打客服电话',
		  onOK: function () {
		    //点击确认
			window.location.href = 'tel:10086';
		  },
		  onCancel: function () {
			  
		  }
		});
	}
})






function GetQueryString(name)
			{
			    var reg = new RegExp("\\b"+ name +"=([^&]*)");
			    var r = location.href.match(reg);
			    if (r!=null) return unescape(r[1]);
			}
// console.log(login());

$("#jqyy").click(function(){
	window.location.href = "../html/jq.html";
})
$("#me").click(function(){
	window.location.href = "../html/jq.html";
})
$("#nk").click(function(){
	window.location.href = "../html/nk.html";
})








//页面取值
$(function(){
var url=window.location.search;
var str = url.substr(1);
   strs = str.split("&"); 
   var key=new Array(strs.length);
   var value=new Array(strs.length);
   for(i=0;i<strs.length;i++){
    key[i]=strs[i].split("=")[0]
    value[i]=unescape(strs[i].split("=")[1]); 
  } 
  var val =JSON.parse(value);
  console.log(val.id);
  if(val.id == 1 ){
	  $(".weui-tabbar a:eq(2)").trigger('click');
  }
  if(val.id == 3 ){
  	  $(".weui-tabbar a:eq(3)").trigger('click');
  }
})








//景区
$(".jq").click(function(){
var scenic_sn = $(this).attr('scenic_sn');
	
	window.location.href="page.html?valus="+ JSON.stringify(scenic_sn);
})


 	 

 
 
 
 
 