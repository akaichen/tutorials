$(function(){function n(){i.scrollTop(1),i.scrollTop(0)}var i=$(window),l=$(".content>div"),c=$(".filter div"),o=$(".filter"),s=$(".filter-new"),e=$(".filter-info"),t=$(".filter-component"),f=$(".filter-sensor"),d=$(".filter-example"),r=$(".btn-all"),a=$(".btn-new"),k=$(".btn-info"),p=$(".btn-component"),b=$(".btn-sensor"),u=$(".btn-example");i.scroll(function(){i.scrollTop()>0?o.addClass("scroll"):o.removeClass("scroll")}),c.on("click",function(){c.removeClass("click"),$(this).addClass("click")}),r.on("click",function(){l.css({display:"inline-block"}),n()}),a.on("click",function(){l.hide(),s.css({display:"inline-block"}),n()}),k.on("click",function(){l.hide(),e.css({display:"inline-block"}),n()}),p.on("click",function(){l.hide(),t.css({display:"inline-block"}),n()}),b.on("click",function(){l.hide(),f.css({display:"inline-block"}),n()}),u.on("click",function(){l.hide(),d.css({display:"inline-block"}),n()})});