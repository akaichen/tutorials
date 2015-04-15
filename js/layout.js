$(function(){
	var $menu = $('header .menu'),
			$all = $('body,header,.slide-menu');

	$menu.on('click',function(){
		if(!$(this).hasClass('menuopen')){
			$(this).addClass('menuopen');
			$all.addClass('menuopen');

		}
		else{
			$(this).removeClass('menuopen');
			$all.removeClass('menuopen');
		}
	});

});