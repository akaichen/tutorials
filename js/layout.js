$(function(){
	var $menu = $('header .menu'),
			$body = $('div,footer').not('.slide-menu,.slide-menu div,header .menu'),
			$slideMenu = $('.slide-menu');

	$menu.on('click',_menuToggle);
	$body.on('click',function(){
		$menu.removeClass('menuopen');
		$slideMenu.removeClass('menuopen');
	});

	function _menuToggle(){
		if(!$menu.hasClass('menuopen')){
			$menu.addClass('menuopen');
			$slideMenu.addClass('menuopen');

		}
		else{
			$menu.removeClass('menuopen');
			$slideMenu.removeClass('menuopen');
		}
	}

});