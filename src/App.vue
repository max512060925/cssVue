<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
a:link {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

a:active {
    text-decoration: none;
}

a:focus {
    outline: 0;
}

input:focus {
    outline: none;
}

input,
button,
select,
textarea {
    outline: none;
}

textarea {
    resize: none;
}

img {
    border: none;
    display: block;
    -webkit-touch-callout: inherit;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

article,
aside,
footer,
header,
hgroup,
nav,
section,
figure,
figcaption {
    display: block;
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
    padding: 0;
}

.hover {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

.f_l {
    float: left;
}

.f_r {
    float: right;
}

.clear {
    clear: both;
}

.hide {
    display: none;
}

.show {
    display: block;
}

html {
    height: 100vh;
    width:100vw;
    min-height: 100vh;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%!important;
    -ms-text-size-adjust: 100%!important;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: inherit;
    -webkit-user-select: none;
    font-family: "SimHei", "Heiti SC", "微软雅黑", "Microsoft YaHei", "黑体";
    overflow: visible;
    position: relative;
}

body {
    height: 100vh;
    width:100vw;
    margin: 0 auto;
    padding: 0;
    overflow: visible;
}

input,
select,
.span_input {
    border: none;
    background: #FFFFFF;
    border: 1px solid #545454;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    font-size: 24px;
    color: #000;
    padding-left: 10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.span_input {
    line-height: 60px;
}

select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
}

.mt_10 {
    margin-top: 10px;
}

.mt_20 {
    margin-top: 20px;
}

.mt_30 {
    margin-top: 30px;
}

.mt_40 {
    margin-top: 40px;
}

.mt_50 {
    margin-top: 50px;
}

.mt_80 {
    margin-top: 80px;
}

.ml_10 {
    margin-left: 10px;
}

.ml_20 {
    margin-left: 20px;
}

.ml_30 {
    margin-left: 30px;
}

.ml_190 {
    margin-left: 190px;
}

.mr_8 {
    margin-right: 8px;
}

.mr_10 {
    margin-right: 10px;
}

.mb_40 {
    margin-bottom: 40px;
}

.mb_50 {
    margin-bottom: 50px;
}

.mb_30 {
    margin-bottom: 30px;
}

.mb_10 {
    margin-bottom: 10px;
}

.mb_20 {
    margin-bottom: 20px;
}

.mb_80 {
    margin-bottom: 80px;
}

.pb_30 {
    padding-bottom: 30px;
}

.pb_50 {
    padding-bottom: 50px;
}

.f_18 {
    font-size: 18px;
}

.f_20 {
    font-size: 20px;
}

.f_22 {
    font-size: 22px;
}

.f_24 {
    font-size: 24px;
}

.f_28 {
    font-size: 28px;
}

.f_36 {
    font-size: 36px;
}

.bold {
    font-weight: bold;
}

.gold {
    color: #C5AA7C;
}

.d_gold {
    color: #5A2D26;
}

.black {
    color: #000;
}

.brown {
    color: #5A2E26;
}

.red {
    color: #D0021B;
}

.forbidden {
    color: #545454;
}

.ta_r {
    display: inline-block;
    text-align: right;
    float: right;
    margin-right: 20px;
}
#app {
    position: relative;
    width: 100vw;
    height: auto;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0;
    overflow: visible;
    z-index: 1;
}
.footer {
    position: absolute;
    width: calc(100vw*(400/640));
    height: calc(100vh*(28/1039));
    line-height: calc(100vh*(28/1039));
    background: url(../resource/img_css/line.jpg) center center no-repeat;
    /*background-size: 100% 100%;*/ 
    margin-left: calc(100vw*(120/640));
    bottom: calc(100vh*(40/1039));
}

.footer p {
    font-size: calc(100vh*(20/1039));
    color: #000000;
    letter-spacing: 0px;
}
.msgbox,
.mail_forbidden,
.msgbox_signIn {
    margin-top: calc(100vh*(10/1039));
    margin-left: calc(100vw*(30/640));
    height: auto;
    width: auto;
    font-size: calc(100vw*(20/640));
    letter-spacing: 0;
}
.forget,
.changeMailTel,
.changeMailTel_active {
    color: #4A90E2;
    text-decoration: underline;
}
</style>
