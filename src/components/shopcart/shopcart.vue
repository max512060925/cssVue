<template>
	<div class="shopcart">
		<div class="content">
			<div class="content_left">
				<div class="logo_container">
					<div class="logo" :class="{hasPrice: totlePrice>0}">
						<i class="icon-shopping_cart"></i>
					</div>
					<div class="num" v-show="totleCount>0">
						{{totleCount}}
					</div>
				</div>
				<div class="price" :class="{hasPrice: totlePrice>0}">
					¥{{totlePrice}}
				</div>
				<div class="desc">
					另需配送费¥{{deliveryPrice}}元
				</div>
			</div>
			<div class="content_right">
				<div class="pay" :class="{toBuy: totlePrice >= minPrice}">
					{{payDesc}}
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
export default {
	props: {
		select: {
			type: Array,
			default() {
				return [{
					price: 8,
					count: 2
				}]
			}
		},
		deliveryPrice: {
			type: Number
		},
		minPrice: {
			type: Number
		}
	},
	computed: {
		totlePrice() {
			let res = 0
			this.select.forEach((v,i) => {
				res += v.price * v.count
			})
			return res
		},
		totleCount() {
			let res = 0
			this.select.forEach((v,i) => {
				res += v.count
			})
			return res
		},
		payDesc() {
			if (this.totlePrice === 0) {
				return `¥${this.minPrice}起送`
			} else if (this.totlePrice < this.minPrice) {
				return `还差¥${this.minPrice - this.totlePrice}起送`
			} else {
				return '去结算'
			}
		}
	},
	name: 'shopcart'
}

</script>
<style lang="stylus" type="stylesheet/stylus">
	.shopcart
		position: fixed;
		left: 0;
		bottom: 0;
		height: 48px;
		width: 100%;
		z-index: 50;
		.content
			display: flex;
			background: #141d27;
			color: rgba(255,255,255,0.4);
			.content_left
				flex: 1;
				font-size: 0;
				.logo_container
					display: inline-block;
					position: relative;
					top: -10px;
					margin: 0 12px;
					padding: 6px;
					width: 56px;
					height: 56px;
					box-sizing: border-box;
					vertical-align: top;
					border-radius: 50%;
					background: #141d27;
					.logo
						width: 100%;
						height: 100%;
						border-radius: 50%;
						background: #2b343c;
						text-align: center;
						color: #80858a;
						&.hasPrice
							background: rgb(0,160,220);
							color: #fff;
						.icon-shopping_cart
							font-size: 24px;
							line-height: 44px;
					.num
						position: absolute;
						top: 0;
						right: 0;
						width: 24px;
						height: 16px;
						line-height: 16px;
						text-align: center;
						border-radius: 16px;
						font-size: 9px;
						background: rgb(240,20,20);
						font-weight: 700;
						color: #fff;
						box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
				.price
					display: inline-block;
					line-height: 24px;
					vertical-align: top;
					margin-top: 12px;
					padding-right: 12px;
					box-sizing: border-box;
					border-right:1px solid rgba(255,255,255,0.1)
					font-size: 16px;
					font-weight: 700;
					&.hasPrice
						color: #fff;
				.desc
					display: inline-block;
					vertical-align: top;
					line-height: 24px;
					margin: 12px 0 0 12px
					font-size: 10px;
					font-weight: 700;
			.content_right
				float: 0 0 105px;
				width: 105px;
				.pay
					height: 48px;
					line-height: 48px;
					text-align: center;
					font-size: 12px;
					background: #2b333b;
					font-weight: 700;
					&.toBuy
						background: #00b43c;
						color: #fff;
</style>
