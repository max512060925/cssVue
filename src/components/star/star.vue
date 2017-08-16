<template>
<div class="star" :class="starType">
  <span v-for="stat in stars" :class="stat" class="star-item"></span>
</div>
</template>
<script type="text/ecmascript-6">
const L = 5
const ON = 'on'
const HALF = 'half'
const OFF = 'off'
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size
    },
    stars() {
      let res = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        res.push(ON)
      }
      if (hasDecimal) {
        res.push(HALF)
      }
      while (res.length < L) {
        res.push(OFF)
      }
      return res
    }
  }
}
</script>
<style lang="stylus" type="stylesheet/stylus">
@import "../../common/stylus/mixin";
  .star
    .star-item
      display: inline-block;
      background-size: 100% 100%!important;
    &.star-48
      .star-item
        width: 20px;
        height: 20px;
        margin-right: 22px;
        &:last-child
          margin-right: 0;
        &.on
          bg-img('star48_on');
        &.half
          bg-img('star48_half');
        &.off
          bg-img('star48_off');
    &.star-36
      .star-item
        width: 15px;
        height: 15px;
        margin-right: 16px;
        &:last-child
          margin-right: 0;
        &.on
          bg-img('star36_on');
        &.half
          bg-img('star36_half');
        &.off
          bg-img('star36_off');
    &.star-24
      .star-item
        width: 10px;
        height: 10px;
        margin-right: 3px;
        &:last-child
          margin-right: 0;
        &.on
          bg-img('star24_on');
        &.half
          bg-img('star24_half');
        &.off
          bg-img('star24_off');
</style>
