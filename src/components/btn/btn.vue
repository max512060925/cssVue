<template>
	<div class="btn">
    <div class="car-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decr($event)"></div>
    <div class="cart-count" v-show="food.count>0">
      {{food.count}}
    </div>
    <div class="cart-add icon-add_circle" @click="add($event)"></div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
	created() {
		console.log(11)
	},
	methods: {
		add(e) {
			if (!e._constructed) {
				return
			}
			this.food.count = (this.food.count ? this.food.count + 1 : Vue.set(this.food,'count',1))
			console.log(this.food.count)
		},
		decr(e) {
			if (!e._constructed) {
				return
			}
			this.food.count = this.food.count && this.food.count - 1
		}
	},
  name: 'btn'
}
</script>
<style lang="stylus" type="stylesheet/stylus">
.btn
	font-size: 0;
	.car-decrease,.cart-add
		display: inline-block;
		padding: 6px;
		line-height: 24px;
		font-size: 24px;
		color: rgb(0,160,220);
	.cart-count
		display: inline-block;
		width: 12px;
		vertical-align: top;
		padding-top: 6px;
		line-height: 24px;
		text-align: center;
		font-size: 10px;
		color: rgb(147,153,159);
</style>
