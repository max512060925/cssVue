<template>
    <div id="login_page">
      <div class="login_head"></div>
      <div id="login_btn" class="btn"></div>
      <div class="msgbox"><span class="forget">忘记密码？</span></div>
      <div class="activation_box">
        <h3>激活账户</h3>
        <p>您已经是会员？全新周生生之友计划已经推出，请激活您的帐户。</p>
        <div class="active_btn" id="active_btn"></div>
      </div>
      <div class="signup_box">
        <p>加入周生生之友，获得更多贵宾级礼遇及服务。</p>
        <div id="signup_btn" class="signup_btn btn"></div>
      </div>
      <div class="footer">
        <p class="vip_btn f_l">会员特权</p>
        <p class="qa f_r">常见问题</p>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'login_page'
}

</script>
<style lang="stylus" type="stylesheet/stylus">
  #login_page
    position: absolute;
    height: 100vh;
    width:100vw;
    background: #fff url(../../../resource/img_css/bg.jpg) center center no-repeat
    background-size:100% 100%
    overflow: hidden;
    position: relative;
    .login_head 
        margin-top: calc(100vh*(100/1039));
        margin-left: calc(100vw*(115/640));
        width: calc(100vw*(410/640));
        height: calc(100vh*(77/1039));
        background: url(../../../resource/img_css/logo.png) center center no-repeat;
        background-size:100% 100%;
    .login_top 
        margin-top: calc(100vh*(100/1039));
        margin-left: calc(100vw*(30/640));
        font-size: calc(100vh*(24/1039));
        color: #000000;
        letter-spacing: 0px;
        width: calc(100vw*(540/640));
    #login_btn 
        margin: 0 auto;
        margin-top: calc(100vh*(100/1039));
        background: url(../../../resource/img_css/login_btn.png) center center no-repeat;
    .activation_box 
        margin: calc(100vh*(30/1039)) auto 0;
        width: calc(100vw*(580/640));
        border: 1px solid #545454;
        box-sizing: border-box;
        border-radius: 6px;
        padding: calc(100vh*(20/1039)) calc(100vw*(30/640));
        margin-left: calc(100vw*(30/640));
        background: #fff;
    .activation_box h3 
        font-size: calc(100vh*(28/1039));
        color: #000000;
        letter-spacing: 0px;
        font-weight: bold;
    .activation_box p 
        font-size: calc(100vh*(24/1039));
        color: #000000;
        letter-spacing: 0px;
        margin-top: calc(100vh*(20/1039));
        width: calc(100vw*(528/640));
        line-height: calc(100vh*(33/1039));
    #active_btn 
        margin-bottom: calc(100vh*(10/1039));
        margin-top: calc(100vh*(10/1039));
        width: calc(100vw*(520/640));
        height: calc(100vh*(72/1039));
        background: url(../../../resource/img_css/active_btn.png) left center no-repeat;
        background-size:100% 100%;
    #login_activeBtn 
        width: calc(100vw*(580/640));
        height: calc(100vh*(72/1039));
        background: url(../../../resource/img_css/activeBtn_ok.png) left center no-repeat;
        background-size:100% 100%;
    .signup_box 
        margin-top: calc(100vh*(30/1039));
        margin-left: calc(100vw*(30/640));
    .signup_box p 
        float: left;
        font-size: calc(100vh*(24/1039));
        color: #000000;
        letter-spacing: 0;
        width: calc(100vw*(288/640));
        height: calc(100vh*(66/1039));
        line-height: calc(100vh*(33/1039));
    .signup_box #signup_btn 
        width: calc(100vw*(280/640));
        height: calc(100vh*(72/1039));
        margin-left: calc(100vw*(12/640));
        float: left;
        background: url(../../../resource/img_css/signuo_btn.png) center center no-repeat;
        background-size:100% 100%;
</style>
