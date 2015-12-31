$(function(){
	var file = location.href.split('/'),
			fileName = file[file.length-1].split('.'),
			jsonURL,
			$window = $(window),
			$header = $('header'),
			$menu = $('header .menu'),
			$mobileMenu = $('header .mobile-menu'),
			$body = $('body'),
			$closeArea = $('div,footer').not('.mobile-menu,.slide-menu div,header .menu'),
			$slideMenu = $('.slide-menu');
			$a = $('a');

	console.log('被我發現你在偷看我的原始碼喔~ 啾咪~ ╭(′▽`)╭(′▽`)╯');

	$('header .menu a').removeClass('actived');
	
	if($('img.lazy')){
		$('img.lazy').lazyload();
	}

	if(fileName[0]=='index'||fileName[0]==''){
		jsonURL='json/tutorials.json';
		$('a.index').addClass('actived');
	}else{
		jsonURL='../json/tutorials.json';
		$('a.'+fileName[0]).addClass('actived');
	}

	$window.scroll(function(){
		if($window.scrollTop() > 0){
			$header.addClass('scroll');
			
		}else{
			$header.removeClass('scroll');
		}
	});

	$mobileMenu.on('click',_menuToggle);

	$a.on('click',function(){
		var linkUrl = $(this).attr('href');
		var name = $(this).attr('data-name');
		 if(name==''||!name){
		 	name = file[file.length-1];
		 }
		_gaTrack(name,'a click',linkUrl);
	});

	$a.on('mouseenter',function(){
		var linkUrl = $(this).attr('href');
		var name = $(this).attr('data-name');
		if(name==''||!name){
		 	name = file[file.length-1];
		}
		_gaTrack(name,'a hover',linkUrl);
	});

	function _menuToggle(){
		if(!$mobileMenu.hasClass('menuopen')){
			$menu.addClass('menuopen');
			$mobileMenu.addClass('menuopen');

		}
		else{
			$menu.removeClass('menuopen');
			$mobileMenu.removeClass('menuopen');
		}
	}

  function _gaTrack(e,d,l) {
    ga('send', 'event', e, d ,l);
  }

});