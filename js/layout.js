$(function(){
	var $menu = $('header .menu'),
			$slideMenu = $('.slide-menu');

	$menu.on('click',function(){
		if(!$(this).hasClass('menuopen')){
			$(this).addClass('menuopen');
			$slideMenu.addClass('menuopen');

		}
		else{
			$(this).removeClass('menuopen');
			$slideMenu.removeClass('menuopen');
		}
	});

});