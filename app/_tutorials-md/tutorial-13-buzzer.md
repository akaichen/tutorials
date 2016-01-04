---
tag: tutorial
src: tutorial-13-buzzer.html
title: 蜂鳴器播放自製音樂
banner: tutorial-13-01.jpg
img: tutorial-13-01s.jpg
date: 20150604
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>教學範例 13：蜂鳴器播放自製音樂 :::: Webduino = Web × Arduino</title>

<meta name="description" content="蜂鳴器是一個可以產生聲音信號的裝置，使用直流電供電，接通訊號源之後，音訊信號電流通過電磁線圈，使電磁線圈產生磁場，造成 振動膜片週期性地振動發聲，而 Webduino 更可以藉由 HTML5 Attribute 來填入音符代碼，每個代碼都會對應到一個數值，這個數值相對應蜂鳴器聲音的頻率，因此藉由純粹的 HTML5 或 javascript 就可以編輯音樂，透過蜂鳴器發聲。">

<meta itemprop="description" content="蜂鳴器是一個可以產生聲音信號的裝置，使用直流電供電，接通訊號源之後，音訊信號電流通過電磁線圈，使電磁線圈產生磁場，造成 振動膜片週期性地振動發聲，而 Webduino 更可以藉由 HTML5 Attribute 來填入音符代碼，每個代碼都會對應到一個數值，這個數值相對應蜂鳴器聲音的頻率，因此藉由純粹的 HTML5 或 javascript 就可以編輯音樂，透過蜂鳴器發聲。">

<meta property="og:description" content="蜂鳴器是一個可以產生聲音信號的裝置，使用直流電供電，接通訊號源之後，音訊信號電流通過電磁線圈，使電磁線圈產生磁場，造成 振動膜片週期性地振動發聲，而 Webduino 更可以藉由 HTML5 Attribute 來填入音符代碼，每個代碼都會對應到一個數值，這個數值相對應蜂鳴器聲音的頻率，因此藉由純粹的 HTML5 或 javascript 就可以編輯音樂，透過蜂鳴器發聲。">

<meta property="og:title" content="教學範例 13：蜂鳴器播放自製音樂" >

<meta property="og:url" content="https://webduino.io/tutorials/tutorial-13-buzzer.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/tutorial-13-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/tutorial-13-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->

<!-- @@block  =  tutorials-->

# 教學範例 13：蜂鳴器播放自製音樂

蜂鳴器是一個可以產生聲音信號的裝置，使用直流電供電，接通訊號源之後，音訊信號電流通過電磁線圈，使電磁線圈產生磁場，造成 振動膜片週期性地振動發聲，而 Webduino 更可以藉由 HTML5 Attribute 來填入音符代碼，每個代碼都會對應到一個數值，這個數值相對應蜂鳴器聲音的頻率，因此藉由純粹的 HTML5 或 javascript 就可以編輯音樂，透過蜂鳴器發聲。
 
## 範例影片展示

影片對應範例：[http://blockly.webduino.io/?page=tutorials/buzzer-1](http://blockly.webduino.io/?page=tutorials/buzzer-1) 

<iframe class="youtube" src="https://www.youtube.com/embed/StNG2NHS240" frameborder="0" allowfullscreen></iframe>

## 接線與實作

蜂鳴器在電路板的附近，有標示「+」和「-」的符號，「-」接在開發板的 GND，「+」接在 11 的腳位 ( 其實接反也沒關係 )，可以用杜邦線接出來，如果是馬克 1 號，也可以直接安插在上面。

![](../img/tutorials/tutorial-13-02.jpg)

實際接線照片：

![](../img/tutorials/tutorial-13-03.jpg)

![](../img/tutorials/tutorial-13-04.jpg)

## Webduino Blockly 操作解析

打開 Webduino Blockly 編輯工具 ( [http://blockly.webduino.io](http://blockly.webduino.io) )，因為這個範例會用網頁「網頁按鈕」來點選不同按鈕播放不同音樂，所以要先點選右上方「網頁互動測試」的按鈕，打開內嵌測試的網頁，用下拉選單選擇「按鈕行為」，這邊的按鈕跟實體的按鈕開關是不一樣的，這邊的按鈕指的是網頁上面的按鈕。

![](../img/tutorials/tutorial-13-05.jpg)

把開發板放到編輯畫面裡，填入對應的 Webduino 開發板名稱，開發板內放入蜂鳴器積木，名稱設定為 buzzer，腳位設定為 11。

![](../img/tutorials/tutorial-13-06.jpg)

再來建立我們的第一首音樂，放入「建立音樂」的積木，名稱命名為 m1，裏頭擺入音符與節奏，音符與節奏積木的「音調」有「無聲、C、CS、D、DS、E、F、FS、G、GS、A、AS、B」，可以想像成鋼琴的黑鍵與白鍵，有 S 的就是黑鍵，「音高」就是有幾個八度音，這裏可以設定七個八度音，數字越大聲越高，「節奏」就是幾分之一秒，最少可以到 1/10 秒。

![](../img/tutorials/tutorial-13-07.jpg)

建立了音樂，接著就設定按下按鈕 1 的事件，當按下按鈕 1，就用 buzzer 播放 m1。

![](../img/tutorials/tutorial-13-08.jpg)

如果要用另外一種製作音樂的方式，可以選擇「快速建立音樂」的積木，這裏就只是把剛剛的音符與節奏，合併成兩個欄位，如果節奏沒有按照音符數量填寫 ( 如果節奏比較少 )，則多出來的音符會預設用 1/8 秒的節奏播放，用這種方式做的第二首音樂 m2，點選按鈕 2 來播放。

![](../img/tutorials/tutorial-13-09.jpg)

接著按下按鈕 3 的事件，就直接播放一首系統預設的超級馬力音樂即可。

![](../img/tutorials/tutorial-13-10.jpg)

按鈕 4 綁定停止播放的行為。

![](../img/tutorials/tutorial-13-11.jpg)

到這邊大致上已經完成了一個點選按鈕控制播放的蜂鳴器程式積木，但最後一步我們要在按鈕 1 到 3 多加一段停止播放的行為，避免按下按鈕的時候，如果前一首還沒播完，就會重疊在一起播放。

![](../img/tutorials/tutorial-13-12.jpg)

完成後，確認開發板上線 ( 點選「[檢查連線狀態](https://webduino.io/device.html)」查詢 )，點選紅色的執行按鈕，分別按下不同按鈕，就會聽到蜂鳴器播放出不同的音樂。

## 程式碼解析 ( [jsbin 範例](http://bin.webduino.io/beze/edit?html,js,output)、[檢查連線狀態](https://webduino.io/device.html) )

HTML 的 header 引入 `webduino-all.min.js`，目的在讓瀏覽器可以支援 WebComponents 以及 Webduino 所有的元件，如果是用 Blockly 編輯工具產生的程式碼，則要額外引入 `webduino-blockly.js`。

	<script src="https://webduino.io/components/webduino-js/dist/webduino-all.min.js"></script>
	<script src="http://webduinoio.github.io/webduino-blockly/webduino-blockly.js"></script>

HTML 裡有五個按鈕，分別有各自的 id，屆時就可以由 id 來判斷按下哪顆按鈕。

	<button id="demo-area-05-btn1" class="db5">按鈕 1</button>
	<button id="demo-area-05-btn2" class="db5">按鈕 2</button>
	<button id="demo-area-05-btn3" class="db5">按鈕 3</button>
	<button id="demo-area-05-btn4" class="db5">按鈕 4</button>
	<button id="demo-area-05-btn5" class="db5">按鈕 5</button>

JavaScript 看起來很多，但實際上很單純，先看到 m1 這首歌，其實就是建立兩個陣列 ( notes 和 tempos )，然後把音符和節奏分別拋到這兩個陣列裡，如果是 m2 的話就更單純，直接就可以看到兩個陣列的長相，至於直接播放系統預設的超級馬力，就可以看到一大串的超級馬力音樂數值在陣列裡，然後只要設定按鈕的 click 事件來播放就可以了。

	var buzzer;
	var m1;
	var m2;

	boardReady('', function (board) {
	  board.samplingInterval = 20;
	  buzzer = getBuzzer(board, 11);
	  var m1={};
	  (function(){
	    var musicNotes = {};
	    musicNotes.notes = [];
	    musicNotes.tempos = [];
	    musicNotes.notes.push("C6");
	    musicNotes.tempos.push("6");
	    musicNotes.notes.push("D6");
	    musicNotes.tempos.push("7");
	    musicNotes.notes.push("E6");
	    musicNotes.tempos.push("8");
	    musicNotes.notes.push("F6");
	    musicNotes.tempos.push("6");
	    musicNotes.notes.push("G6");
	    musicNotes.tempos.push("7");
	    musicNotes.notes.push("A6");
	    musicNotes.tempos.push("8");

	    m1.notes = musicNotes.notes;
	    m1.tempos = musicNotes.tempos;
	  })();
	  document.getElementById("demo-area-05-btn1").addEventListener("click",function(){
	    buzzer.stop();
	    buzzer.play(m1.notes, m1.tempos);
	  });
	  var m2={};
	  (function(){
	    m2.notes = ['C6','D6','E6','F6','G6','A6','B6'];
	    m2.tempos = ['8'];
	  })();
	  document.getElementById("demo-area-05-btn2").addEventListener("click",function(){
	    buzzer.stop();
	    buzzer.play(m2.notes, m2.tempos);
	  });
	  document.getElementById("demo-area-05-btn3").addEventListener("click",function(){
	    buzzer.stop();
	    buzzer.play(["E7","E7","0","E7","0","C7","E7","0","G7","0","0","0","G6","0","0","0","C7","0","0","G6","0","0","E6","0","0","A6","0","B6","0","AS6","A6","0","G6","E7","0","G7","A7","0","F7","G7","0","E7","0","C7","D7","B6","0","0","C7","0","0","G6","0","0","E6","0","0","A6","0","B6","0","AS6","A6","0","G6","E7","0","G7","A7","0","F7","G7","0","E7","0","C7","D7","B6","0","0"],["8"].notes, ["E7","E7","0","E7","0","C7","E7","0","G7","0","0","0","G6","0","0","0","C7","0","0","G6","0","0","E6","0","0","A6","0","B6","0","AS6","A6","0","G6","E7","0","G7","A7","0","F7","G7","0","E7","0","C7","D7","B6","0","0","C7","0","0","G6","0","0","E6","0","0","A6","0","B6","0","AS6","A6","0","G6","E7","0","G7","A7","0","F7","G7","0","E7","0","C7","D7","B6","0","0"],["8"].tempos);
	  });
	  document.getElementById("demo-area-05-btn4").addEventListener("click",function(){
	    buzzer.stop();
	  });
	});

以上就是利用蜂鳴器和網頁的按鈕，來製作與播放音樂。  
完整程式碼：[http://bin.webduino.io/beze/edit?html,js,output](http://bin.webduino.io/beze/edit?html,js,output)  
解答：[http://blockly.webduino.io/#-K7AbLdWpQrrSWJ8kIPs](http://blockly.webduino.io/#-K7AbLdWpQrrSWJ8kIPs)

## 蜂鳴器的延伸教學：

[Webduino Blockly 課程 9-2：蜂鳴器播放音樂](http://blockly.webduino.io/?lang=zh-hant&page=tutorials/buzzer-2#-Jw0aEoyT2sxCaftUdTD)  
[Webduino Blockly 課程 9-3：切換音樂，用蜂鳴器播放](http://blockly.webduino.io/?lang=zh-hant&page=tutorials/buzzer-3#-Jw13yiSFLrZJEVyJ2Ej)  
[Webduino Blockly 課程 9-4：蜂鳴器的播放、暫停、停止 ( 按鈕開關控制 ) ](http://blockly.webduino.io/?lang=zh-hant&page=tutorials/buzzer-4#-Jw17HU-K0zaz6OVpCd2)


<!-- @@close-->