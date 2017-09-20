<template>
	<div class="shopcart">
		<div class="content" @click="toggleList">
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
		<div class="ball-container">
			<div v-for="(ball,i) in balls">
				<transition name="drop" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
					<div class="ball" v-show="ball.show">
						<div class="inner inner-hook"></div>
					</div>
				</transition>
			</div>
		</div>
		<transition name="list">
			<div class="shopcart-list" v-show="ls">
				<div class="list-header">
					<h1 class="carTitle">购物车</h1>
					<span class="empty" @click="empty">清空</span>
				</div>
				<div class="list-content" ref="list">
					<ul>
						<li class="food" v-for="food in select">
							<span class="name">{{food.name}}</span>
							<div class="price">
								<span>¥{{food.price*food.count}}</span>
							</div>
							<btn :food="food" class="cartcontrol-warapper"></btn>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>
<script type="text/ecmascript-6">
import	btn	from	'@/components/btn/btn'
import	BScroll	from	'better-scroll'
export default {
	props: {
		select: {
			type: Array,
			default() {
				return []
			}
		},
		deliveryPrice: {
			type: Number
		},
		minPrice: {
			type: Number
		}
	},
	data() {
		return {
			balls: [
				{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				}
			],
			dropBalls: [],
			listShow: false
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
		},
		ls() {
			if (this.listShow && this.totleCount) {
				if (!this.scroll) {
					this.$nextTick(() => {
						this.scroll = new BScroll(this.$refs.list,{
							click: true
						})
					})
				} else {
					this.$nextTick(() => {
						this.scroll.refresh()
					})
				}
			}
			return this.listShow
		}
	},
	methods: {
		drop(el) {
			this.balls.forEach((ball,i) => {
				if (!ball.show) {
					ball.show = true
					ball.el = el
					this.dropBalls.push(ball)
					return
				}
			})
		},
		beforeEnter(el) {
			let count = this.balls.length
			while (count--) {
				let ball = this.balls[count]
				if (ball.show) {
					let rect = ball.el.getBoundingClientRect()
					let x = rect.left - 32
					let y = -(window.innerHeight - rect.top - 22)
					el.style.display = ''
					el.style.webkitTransform = `translate3d(0,${y}px,0)`
					el.style.transform = `translate3d(0,${y}px,0)`
					let inner = el.getElementsByClassName('inner-hook')[0]
					inner.style.webkitTransform = `translate3d(${x}px,0,0)`
					inner.style.transform = `translate3d(${x}px,0,0)`
				}
			}
		},
		enter(el,done) {
			let rf = el.offsetHeight
			console.log(rf)
			el.style.display = ''
			el.style.webkitTransform = 'translate3d(0,0,0)'
			el.style.transform = 'translate3d(0,0,0)'
			let inner = el.getElementsByClassName('inner-hook')[0]
			inner.style.webkitTransform = 'translate3d(0,0,0)'
			inner.style.transform = 'translate3d(0,0,0)'
			el.addEventListener('transitionend',done)
			el.addEventListener('webkitTransitionEnd',done)
		},
		afterEnter(el) {
			let ball = this.dropBalls.shift()
			if (ball) {
				ball.show = false
				el.style.display = 'none'
			}
		},
		toggleList() {
			if (!this.totleCount) {
				return false
			}
			this.listShow = !this.listShow
		},
		empty() {
			this.$emit('clear')
		}
	},
	components: {
		btn
	},
	name: 'shopcart'
}

</script>
<style lang="stylus" type="stylesheet/stylus">
@import	"../../common/stylus/mixin";
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
	.ball-container
		.ball
			position: fixed
			left: 32px
			bottom: 22px
			z-index: 200
			transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
			.inner
				width: 16px
				height: 16px
				border-radius: 50%
				background: rgb(0, 160, 220)
				transition: all 0.4s linear
	.shopcart-list
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		transform:translate3d(0,-100%,0);
		&.list-enter,&.list-leave-to
			transform: translate3d(0,0,0);
		&.list-enter-active,&.list-leave-active
			transition: all 0.5s;
		.list-header
			height: 40px;
			line-height: 40px;
			padding: 0 18px;
			background: #f3f5f7;
			box-sizing: border-box;
			border-1px(rgba(7,17,27,0.1));
			.carTitle
				float: left;
				font-size: 14px;
				color: rgb(7,17,27);
			.empty
				float: right;
				font-size: 12px;
				color: rgb(0,160,220);
		.list-content
			padding: 0 18px;
			max-height: 217px;
			background: #fff;
			overflow: hidden;
			.food
				position: relative;
				padding: 12px 0;
				box-sizing: border-box;
				border-1px(rgba(7,17,27,0.1));
				.name
					line-height: 24px;
					font-size: 14px;
					color: rgb(7,17,27);
				.price
					position: absolute;
					right: 90px;
					bottom: 12px;
					line-height: 24px;
					font-weight: 700;
					font-size: 14px;
					color: rgb(240,20,20);
				.cartcontrol-warapper
					position: absolute;
					right: 0;
					bottom: 6px;
</style>
