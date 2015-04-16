$(function(){
	var $window = $(window),
			$youtubeIframe = $('.youtube');

	
	var youtubeWidth = $youtubeIframe.width();
	$youtubeIframe.css({'height':(youtubeWidth*9/16)+'px'});

	$window.resize(function(){
			youtubeWidth = $youtubeIframe.width();
			$youtubeIframe.css({'height':(youtubeWidth*9/16)+'px'});
	});

});