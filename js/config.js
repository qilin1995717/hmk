$(".weui-tabbar a").click(function(){
	console.log($(this).index());
	var tab = $(this).index();
	if(tab === 0 ){
		$(this).children(".weui-tabbar__icon img").attr("src","./images/menu_01@2x.png");
	}
})