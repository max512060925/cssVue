<template>
  <div class="footer">
    <p class="vip_btn f_l">会员特权</p>
    <p class="qa f_r">常见问题</p>
  </div>
</template>
<script>
export default {
  name: 'footer'
}
</script>
<style lang="stylus" type="stylesheet/stylus">
.footer
    position: absolute;
    width: calc(100vw*(400/640));
    height: calc(100vh*(28/1039));
    line-height: calc(100vh*(28/1039));
    background: url(../../../resource/img_css/line.jpg) center center no-repeat;
    margin-left: calc(100vw*(120/640));
    bottom: calc(100vh*(40/1039));
.footer p
    font-size: calc(100vh*(20/1039));
    color: #000000;
    letter-spacing: 0px;
</style>
