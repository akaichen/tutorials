$(function(){function t(){r.scrollTop()>c.height()&&r.scrollTop()<n.height()-r.height()-600?h.show():h.hide()}function a(t,a,e){ga("send","event",t,a,e)}var e=location.href.split("/").pop(),r=$(window),n=$(document),i=$("pre"),s=$(".youtube"),o=$(".tutorials-content"),l=$(".tutorials-content a").not(".pre-next a"),c=$(".tutorials-content .banner");$("a.tutorials").addClass("actived"),o.append('<a class="arrow arrow-r pre-next-button" data-name="pre-next-arrow"></a><a class="arrow arrow-l pre-next-button" data-name="pre-next-arrow"></a><div class="pre-next"><div><div class="pre"></div><div class="next"></div></div></div><div class="others"></div>');var h=$(".arrow"),d=$(".arrow-r"),p=$(".arrow-l");r.width()>800?(t(),r.scroll(t)):h.hide(),$.getJSON("../json/tutorials.json",function(t){for(var r=$.map(t,function(t,a){return[t]}),n=r.length,i=0;n>i;i++)r[i].src==e&&(c.append('<img src="../img/tutorials/'+r[i].banner+'">'),i>0&&n-1>i?($(".pre").append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a class="pre-next-button" data-name="pre-next-button" href="'+r[i-1].src+'">'+r[i-1].title+"</a>"),$(".next").append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a class="pre-next-button" data-name="pre-next-button" href="'+r[i+1].src+'">'+r[i+1].title+"</a>"),d.attr("href",r[i+1].src).attr("title","下一篇："+r[i+1].title),p.attr("href",r[i-1].src).attr("title","上一篇："+r[i-1].title)):0==i?($(".next").append('下一篇 <i class="fa fa-hand-o-right"></i><br/><a class="pre-next-button" data-name="pre-next-button" href="'+r[1].src+'">'+r[1].title+"</a>"),p.css({left:"-100px"}),d.attr("href",r[1].src).attr("title","下一篇："+r[i+1].title)):($(".pre").append('<i class="fa fa-hand-o-left"></i> 上一篇<br/><a class="pre-next-button" data-name="pre-next-button" href="'+r[i-1].src+'">'+r[i-1].title+"</a>"),p.attr("href",r[i-1].src).attr("title","上一篇："+r[i-1].title),d.css({right:"-100px"})));var s=$(".pre-next-button");s.on("click",function(){var t=$(this).attr("href"),r=$(this).attr("data-name");""!=r&&r||(r=e[e.length-1]),a(r,"a click",t)}),s.on("mouseenter",function(){var t=$(this).attr("href"),r=$(this).attr("data-name");""!=r&&r||(r=e[e.length-1]),a(r,"a hover",t)})}),i.addClass("prettyprint"),l.attr("target","_blank");var f=s.width();s.css({height:9*f/16+"px"}),r.resize(function(){f=s.width(),s.css({height:9*f/16+"px"}),r.width()>800?t():h.hide()})});