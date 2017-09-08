<template>
  <div class="tab border-1px">
    <router-link class="tab-item" to="/goods">商品</router-link>
    <router-link class="tab-item" to="/ratings">评论</router-link>
    <router-link class="tab-item" to="/seller">商家</router-link>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'tab'
}
</script>
<style lang="stylus" type="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .tab
    display: flex;
    height: 40px;
    width: 100%;
    line-height: 40px;
    border-1px(rgba(7,17,27,0.1));
    .tab-item
      display: block;
      flex:1;
      text-align: center;
      font-size: 14px;
      color: rgb(77,85,93);
      &.active
        color: rgb(240,20,20)
</style>
