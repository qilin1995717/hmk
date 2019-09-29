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
  var scenic_sn =JSON.parse(value);
  console.log(scenic_sn);
  
  
  var latitude = '';
  var longitude= '';
  $.ajax({
	  url:QURL+'/api/scenic/scenicDetails',
	  type:'post',
	  async:false,
	  dataTypr:'json',
	  data:{
		  scenic_sn:scenic_sn,
	  },
	  success:function(data){
		  console.log(data);
		  var data = JSON.parse(data);
		  var data =data.data.rows;
		  var price = data.service_price;
		  console.log(price);
		  if( price > 0){
			  $('.money').css('display','block');
			  $('#pirce').text(price);
			  $('#next').html('支付预约');
			  $("#next").click(function(){
				  sessionStorage.removeItem('price');
			  	if(!token){
			  		var historyurl = window.location.href;
			  		sessionStorage.setItem('historyurl',historyurl);
			  		window.location.href='../html/loogin.html'
			  	}else{
					sessionStorage.setItem('price',price);
			  		window.location.href="jqyy.html?valus="+ scenic_sn;
			  	}
			  
			  })
			  
		  }else{
			  $("#next").click(function(){
				  sessionStorage.removeItem('price');
			  	if(!token){
			  		var historyurl = window.location.href;
			  		sessionStorage.setItem('historyurl',historyurl);
			  		window.location.href='../html/loogin.html'
			  	}else{
			  		window.location.href="jqyy.html?valus="+ scenic_sn;
			  	}
			  
			  })
		  }
		  $('#picture').attr('src',data.picture);
		  $('#name').text(data.name);
		  $('#grade1').text(data.grade);
		   // $('#grade2').text(data.grade);
		   console.log(data.address);
		   $('#dtwz').text(data.address);
		   $('#activity_date').text(data.remarks.activity_date);
		    $('#ticket_price').text(data.remarks.ticket_price);
			 $('#opening_hours').text(data.remarks.opening_hours);
			 
			  $('#other_expenses').text(data.remarks.other_expenses);
			   $('#attention').text(data.remarks.attention);
			    $('#contact_number').text(data.remarks.contact_number);
		   
		   $('#body').html(data.body);
		 
		 latitude = Number(data.ycode);
		 longitude =Number(data.xcode);
		 
	  }
  })
	console.log(latitude);
	console.log(latitude);
  
  // wx.ready(function(){
  $('#diw').click(function () {
      wx.openLocation({
          latitude: latitude, // 纬度，浮点数，范围为90 ~ -90。如果是动态获取的数据，使用parseFloat()处理数据
          longitude: longitude, // 经度，浮点数，范围为180 ~ -180。如果是动态获取的数据，使用parseFloat()处理数据；
          name: '景区位置', // 位置名
          address: '潮得劲', // 地址详情说明
          scale: 10, // 地图缩放级别,整形值,范围从1~28。默认为最大
      });
  })

  // });
  

  
  
  console.log(token);

  
})

$("#go").click(function(){
	
	var getval =  {
	   "id":"1",
	}
	
	    window.location.href="index.html?valus="+JSON.stringify(getval);  
})


	



			 
		 