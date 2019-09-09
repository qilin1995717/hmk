$(".weui-tabbar a").click(function(){
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
//tabbar
