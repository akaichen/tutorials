$(function(){function e(){i.hasClass("menuopen")?(d.removeClass("menuopen"),i.removeClass("menuopen")):(d.addClass("menuopen"),i.addClass("menuopen"))}{var s,n=location.href.split("/"),o=n[n.length-1].split("."),a=$(window),l=$("header"),d=$("header .menu"),i=$("header .mobile-menu");$("body"),$("div,footer").not(".mobile-menu,.slide-menu div,header .menu"),$(".slide-menu")}$("header .menu a").removeClass("actived"),"index"==o[0]||""==o[0]?(s="json/tutorials.json",$("a.index").addClass("actived")):(s="../json/tutorials.json",$("a."+o[0]).addClass("actived")),a.scroll(function(){a.scrollTop()>0?l.addClass("scroll"):l.removeClass("scroll")}),i.on("click",e)});