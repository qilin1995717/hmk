
						var URL = window.location.href;
						// encodeURIComponent();
						console.log(URL);
						var appid = '';
						var nonceStr = '';
						var signature = '';
						var timestamp = '';
						$.ajax({
							url:QURL+'/api/wechat/fandata',
							async:false,
							type:'post',
							dataType:'json',
							data:{
								url:URL,
							},
							success:function(data){
								// console.log(data);
								// console.log(data.data.wxticket);
								appid = data.data.appId;
								nonceStr = data.data.nonceStr;
								signature = data.data.signature;
								timestamp = data.data.timestamp;
								sessionStorage.setItem('appid', appid);
								sessionStorage.setItem('nonceStr', nonceStr);
								sessionStorage.setItem('signature', signature);
								sessionStorage.setItem('timestamp', timestamp);
							}
						})
						// console.log(appid);
					
		 			
					wx.config({
					    debug: false,
					    appId: appid,
					    timestamp: timestamp,
					    nonceStr: nonceStr,
					    signature:signature,
					    jsApiList: [
					      'chooseImage', 'uploadImage', 'downloadImage','translateVoice',
					      					'previewImage', 'openLocation', 'getLocation',
					      					'scanQRCode', 'checkJsApi', 'onMenuShareTimeline',
					      					'onMenuShareAppMessage', 'updateAppMessageShareData',
					      					'onMenuShareWeibo', 'updateTimelineShareData',
					      ]
					});
					
					var url = window.location.href;
						wx.ready(function () {
							//需在用户可能点击分享按钮前就先调用
						  wx.updateAppMessageShareData({ 
						    title: '潮得劲', // 分享标题
						    desc: '', // 分享描述
						    link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						    imgUrl: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM6TiaaeagWjL1pianEeNaSHYH7IVHBgHQDZrCD8TpDL2aew/0', // 分享图标
						    success: function () {
						      // 设置成功
						    }
						  })
						  wx.updateTimelineShareData({ 
						      title: '潮得劲', // 分享标题
						      link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						      imgUrl: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM6TiaaeagWjL1pianEeNaSHYH7IVHBgHQDZrCD8TpDL2aew/0', // 分享图标
						      success: function () {
						        // 设置成功
						      }
						    })
						});