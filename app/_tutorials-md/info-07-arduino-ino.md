---
tag: info
src: info-07-arduino-ino.html
title: Arduino 韌體下載與燒錄
banner: info-07-01.jpg
img: info-07-01s.jpg
date: 20151210
---

<!-- @@master  = ../../_layout.html-->

<!-- @@block  =  meta-->

<title>Arduino 韌體下載與燒錄 :::: Webduino = Web × Arduino</title>

<meta name="description" content="因為 Webduino 要使用 JavaScript 操控 Arduino 開發板，因此要走 Arduino Firmata 的通訊協定，所以必須「要燒錄具有 Firmata 通訊協定的韌體」，這篇文章將敘述基本的 Arduino 燒錄韌體教學，也會提供目前 Webduino 已經支援所有傳感器元件的韌體程式讓大家下載燒錄。">

<meta itemprop="description" content="因為 Webduino 要使用 JavaScript 操控 Arduino 開發板，因此要走 Arduino Firmata 的通訊協定，所以必須「要燒錄具有 Firmata 通訊協定的韌體」，這篇文章將敘述基本的 Arduino 燒錄韌體教學，也會提供目前 Webduino 已經支援所有傳感器元件的韌體程式讓大家下載燒錄。">

<meta property="og:description" content="因為 Webduino 要使用 JavaScript 操控 Arduino 開發板，因此要走 Arduino Firmata 的通訊協定，所以必須「要燒錄具有 Firmata 通訊協定的韌體」，這篇文章將敘述基本的 Arduino 燒錄韌體教學，也會提供目前 Webduino 已經支援所有傳感器元件的韌體程式讓大家下載燒錄。">

<meta property="og:title" content="Arduino 韌體下載與燒錄" >

<meta property="og:url" content="https://webduino.io/tutorials/info-07-arduino-ino.html">

<meta property="og:image" content="https://webduino.io/img/tutorials/info-07-01s.jpg">

<meta itemprop="image" content="https://webduino.io/img/tutorials/info-07-01s.jpg">

<include src="../_include-tutorials.html"></include>

<!-- @@close-->



<!-- @@block  =  tutorials-->
# Arduino 韌體下載與燒錄

因為 Webduino 要走 Arduino Firmata 的通訊協定，所以必須「**要燒錄具有 Firmata 通訊協定的韌體**」，這篇文章將敘述基本的 Arduino 燒錄韌體教學，也會提供目前 Webduino 已經支援所有傳感器元件的韌體程式讓大家下載燒錄。

如果對於 Webduino UNO 雲端擴充板、序列埠或是藍芽有興趣的，可以參考這兩篇文章：

(1) [Webduino UNO 雲端擴充板初始化設定](https://webduino.io/tutorials/info-04-uno-setup.html)  
(2) [Chrome API Proxy 使用說明](https://webduino.io/tutorials/info-05-chrome-api-proxy.html)

## 下載韌體與程式庫

我們已經把要燒錄在 Arduino 裡的韌體程式碼以及要引入的程式庫，公開於 Github 上頭，你可以直接 clone ，或是 fork 我們的這個開源專案，對於不會使用 Github 的朋友，可以直接點選右邊的「Download Zip」的按鈕，或直接由這個下面的網址下載。

Github：[https://github.com/webduinoio/wafirmata](https://github.com/webduinoio/wafirmata)  
Download：[https://github.com/webduinoio/wafirmata/archive/master.zip](https://github.com/webduinoio/wafirmata/archive/master.zip)

![Webduino UNO 雲端擴充板初始化設定](../img/tutorials/info-07-02.jpg)

下載之後解壓縮檔案，就會看到待會會引入的程式庫和要燒錄的韌體檔。

![Webduino UNO 雲端擴充板初始化設定](../img/tutorials/info-07-03.jpg)

## 引入程式庫 ( Include Library )

如果 Arduino 官方的程式庫沒有我們想要的元件，我們就必須要引入外部的程式庫，因為要燒錄 Arduino 韌體，所以要先安裝 Arduino 的 IDE ( 可以從 Arduino [官方網站](https://www.arduino.cc/)下載 )，打開 Arduino IDE，從上方選單選擇「草稿碼」，接著選擇「Include Library」，選擇「**Add .ZIP library**」。

![Webduino UNO 雲端擴充板初始化設定](../img/tutorials/info-07-04.jpg)

選擇剛剛解壓縮檔案內，把 Library 資料夾裡頭的 zip 檔案一一引入。

![Webduino UNO 雲端擴充板初始化設定](../img/tutorials/info-07-05.jpg)

這些程式庫壓縮檔案分別是：

(1) DHT.zip：溫濕度傳感器  
(2) Joypad.zip：搖桿  
(3) MaxMatrix.zip：LED 點矩陣  
(4) MFRC522.zip：RFID  
(5) IRremote.zip：紅外線發射/接收

## 燒錄韌體

有了這些程式庫之後，我們就可以打開 .ino 的韌體檔案來燒錄，直接在 .ino 檔案上頭點兩下就可以打開，通常第一次打開的時候會詢問你「必須位於...的草稿碼資料夾中...」，直接選擇「好」或「確認」即可。

![Webduino UNO 雲端擴充板初始化設定](../img/tutorials/info-07-06.jpg)

打開 .ino 檔之後，將你的 Arduino 用 USB 線和電腦連接，確認序列埠已經連接上 ( 如果沒有出現在序列埠裡，最大的可能性是沒有正確安裝 Arduino UNO 的驅動程式 )

![Webduino UNO 雲端擴充板初始化設定](../img/tutorials/info-07-07.jpg)

確認之後，點選「上傳」，就會開始將程式燒錄進 Arduino 內。

![Webduino UNO 雲端擴充板初始化設定](../img/tutorials/info-07-08.jpg)

等待下方訊息出現「上傳完畢」，就表示已經燒錄完成，恭喜你，你已經可以開始使用 Webduino 的所有開發模式囉！

![Webduino UNO 雲端擴充板初始化設定](../img/tutorials/info-07-09.jpg)


## 韌體清單簡介

這是目前 Webduino 已經公開釋出的 Arduino 韌體 ( 只要檔名有包含，就是具有這個傳感器或電子零件，舉例來說：buzzer_ultrasonic 就包含蜂鳴器和超音波傳感器 )，之後會再陸續增加，也歡迎大家 Fork 我們的開源專案，一起來將 Webduino 的技術發揚光大！

(1) buzzer：蜂鳴器  
(2) ultrasonic：超音波傳感器  
(3) MaxMatrix：LED 點矩陣  
(4) dht：溫濕度傳感器  
(5) MFRC522：RFID  
(6) Joypad：搖桿  
(7) IR：紅外線發射/接收


<!-- @@close-->