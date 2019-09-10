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
		$(this).find(".weui-tabbar__icon img").attr("src","../html/images/menu_04@2x.png");
		$(".weui-tabbar a:eq(0)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_1@2x.png");
		$(".weui-tabbar a:eq(1)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_2@2x.png");
		$(".weui-tabbar a:eq(2)").find(".weui-tabbar__icon img").attr("src","../html/images/menu_3@2x.png");
	}
})
$("#jqyy").click(function(){
	$(".weui-tabbar a:eq(1)").trigger('click');
})
$("#me").click(function(){
	$(".weui-tabbar a:eq(3)").trigger('click');
})
//tabbar
$(".tap h2").click(function(){
	a = $(this).index();
	var tap = $(this);
	$(this).addClass("active").siblings().removeClass("active");
	
	if(a == 0){
		$("#city").toggle();
		$("#mouth").css("display","none");

	}
	if(a == 1){
		$("#mouth").toggle();
		$("#city").css("display","none");
		
	}
})
//省份
for(var i=1; i< 13 ; i++){
		var y =  i + "省";
		$("#city .tcnr").append("<span>" + y + "</span>");
	}
// 月份
for(var i=1; i< 13 ; i++){
		var y =  i + "月";
		$("#mouth .tcnr").append("<span>" + y + "</span>");
	}
$("#city span").click(function(){
	console.log(a);
	$(".tap h2:first").text($(this).text());
	$(this).removeClass("active");
	$(".tap h2:first").removeClass("active");
})

$("#mouth span").click(function(){
	console.log(a);
	$(".tap h2:last").text($(this).text());
	$(this).removeClass("active");
	$(".tap h2:last").removeClass("active");
})	
$(".tc").on("click",function(){
		$(".tc").css("display","none");
		$(".tap h2").removeClass("active");
})