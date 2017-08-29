//李舒雨ajax
//页面加载时
$.get("json/news.json",function(data){															//传出成功时运行函数
	var item=data;
	var html="";					
			for(var i=0;i<item.companynews.length;i++){
				html+='<li><a href="##">'+item.companynews[i].title+'<span>'+item.companynews[i].date+'</span></a></li>';
			}												
	$('.news ul').append(html);
},"json");
//点击侧边导航时
$(function(){

	$('#hangye').click(function(){
		$('.news ul').html(' ');
		$.get("json/news.json",function(data){															//传出成功时运行函数
			var item=data;
			var html="";					
					for(var i=0;i<item.companynews1.length;i++){
						html+='<li><a href="##">'+item.companynews1[i].title+'<span>'+item.companynews1[i].date+'</span></a></li>';
					}												
			$('.news ul').append(html);
		},"json")
	});
	$('#companynews').click(function(){
		$('.news ul').html(' ');
		$.get("json/news.json",function(data){															//传出成功时运行函数
			var item=data;
			var html="";					
					for(var i=0;i<item.companynews.length;i++){
						html+='<li><a href="##">'+item.companynews[i].title+'<span>'+item.companynews[i].date+'</span></a></li>';
					}												
			$('.news ul').append(html);
		},"json")
	});
	
//点击新闻内容时	
	$('.news ul').on('click','li',function(ev){
		var n=$(this).index();
		console.log(n)
		$('.news ul').html(' ');		
		console.log(n)
		$.get("json/news.json",function(data){															//传出成功时运行函数
		var item=data;
		var html="";					
		html+='<li>'+item.companynews[n].content+'</li>';												
		$('.news ul').append(html);
	},"json")
	})
})



$.get("json/news.json",function(data){
	for(var a =0;a<companynews.date.length;a++){
		
	}
}