### Github Page 對 SPA 支援性有問題，在首頁以外部分重新整理會發生 404 的情況，準備部署到別的地方中。

# 個人專案介紹

<br>
此專案為販售文具的線上商店，從前後端到介面皆為自製，無參考教學製作。
使用者可以瀏覽、搜尋商品，註冊會員，加入、編輯購物車，進行結帳，之後會陸續增加其他功能。

使用前後端分離的架構，前端目前部署在 Github Pages，後端 API 部屬在 HEROKU，此部分為前端部分的程式碼。

專案連結:[https://ishitora.github.io/stationery-online-shop-client/](https://ishitora.github.io/stationery-online-shop-client/)

後端部分程式碼:[https://github.com/ishitora/stationery-online-shop-server](https://github.com/ishitora/stationery-online-shop-server)

<br>

## 畫面

在 Full HD (1920px X 1080px)尺寸螢幕打開的首頁

<br>

![PC首頁](https://i.imgur.com/iL7kgHw.png)

<br>

在 IPHONE7 (375px X 667px)打開的首頁

<br>

![手機首頁](https://i.imgur.com/lQJR06H.jpg)

<br>

# 使用技術

<br>

### 前端:

<br>

介面呈現使用了 React ，將各介面拆成小的元件，以 Hook API 進行各自的 state 管理，
全域的 state 管理使用了 Redux，加上了 Redux-thunk 發送非同步 action。

樣式部分，使用了 CSS 自刻和 Material-UI 的元件各一半，並利用了 CSS in JS 技術( Material-UI 的 makestyles API )使元件樣式不會互相干擾，排版使用 CSS 的 flex，做了 RWD 使網頁在不同裝置上都有好的觀看體驗。

表單的驗證純自刻，理解到在 React 資料驗證的麻煩後下次可能會使用現成表單套件。
使用 Axios 發送非同步請求。

<br>

### 後端:

<br>

Node.js 搭配 Express 建立 RESTful API，用 MongoDB 作為資料庫，並以 Mongoose 做資料建模。
使用 bcryptjs 避免資料庫直接儲存使用者密碼。
以 JWT ( JSON Web Token ) 做身分認證。

<br>
<br>

# 未來會更新的部分

<br>

部署在別的位置，解決 SPA 不能在 Github Pages 正常使用的問題
將 JWT 改以 cookie 儲存，並加入記住使用者登入功能
使用者的個人頁面，包含查看訂單和修改個人資料
加入測試案例
加入信用卡付款

<br>

# 更新紀錄

2021/09/14 正式上線
