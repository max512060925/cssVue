<template>
	<transition name="move">
		<div class="food" v-show="showFlag" ref="food">
			<div class="food-content">
				<div class="image-header">
					<img :src="food.image">
					<i class="icon-arrow_lift back" @click="hide"></i>
				</div>
				<div class="content">
					<h1 class="title">{{food.name}}</h1>
					<div class="detail">
						<span class="sell-count">月售{{food.sellCount}}</span>
						<span class="rating">好评率{{food.rating}}%</span>
					</div>
					<div class="price">
						<span class="now">¥{{food.price}}</span>
						<span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
					</div>
					<btn :food="food" class="cartcontrol-warapper" @add="add($event)"></btn>
					<div class="buy" v-show="!food.count||food.count===0" @click.stop="addOne($event)">加入购物车</div>
				</div>
				<split></split>
				<div class="info" v-if="food.info">
					<h1 class="title">商品信息</h1>
					<p class="text">{{food.info}}</p>
				</div>
				<split></split>
				<div class="rating">
					<h1 class="title">商品评价</h1>
					<ratingSelect @type="changeType" @switch="switchType" :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"></ratingSelect>
					<div class="rating-wrapper">
						<ul v-if="food.ratings && food.ratings.length">
							<li v-for="rating in food.ratings" v-show="showList(rating.rateType,rating.text)" class="rating-item border-1px">
								<div class="user">
									<span class="name">{{rating.username}}</span>
									<img class="avatar" :src="rating.avatar" width="12" height="12">
								</div>
								<div class="time">
									{{rating.rateTime | date('YYYY-MM-DD HH:mm')}}
								</div>
								<p class="text">
									<span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>
									{{rating.text}}
								</p>
							</li>
						</ul>
						<div class="no-rating" v-else>
							暂无评价
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>
<script type="text/ecmascript-6">
import	Vue	from	'vue'
import	BScroll	from	'better-scroll'
import	btn	from	'@/components/btn/btn'
import	split	from	'@/components/split/split'
import	ratingSelect	from	'@/components/ratingSelect/ratingSelect'
const ALL = 2
export default {
	props: {
		food: {
			type: Object
		}
	},
	data() {
		return {
			showFlag: false,
			selectType: ALL,
			onlyContent: true,
			desc: {
				all: '全部',
				positive: '推荐',
				negative: '吐槽'
			}
		}
	},
	methods: {
		show() {
			this.showFlag = true
			this.selectType = ALL
			// this.onlyContent = false
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll = new BScroll(this.$refs.food,{
						click: true
					})
				} else {
					this.scroll.refresh()
				}
			})
		},
		hide() {
			this.showFlag = false
		},
		addOne(e) {
			if (!e._constructed) {
				return;
			}
			Vue.set(this.food,'count',1)
			this.$emit('add',event.target)
		},
		add(e) {
			this.$emit('add',event.target)
		},
		changeType(n) {
			this.selectType = n
			this.$nextTick(() => {
				this.scroll.refresh()
			})
		},
		switchType(n) {
			this.onlyContent = n
			this.$nextTick(() => {
				this.scroll.refresh()
			})
		},
		showList(type,text) {
			if (this.onlyContent && !text) {
				return false
			}
			if (this.selectType === ALL) {
				return true
			} else {
				return type === this.selectType
			}
		}
	},
	components: {
		btn,
		split,
		ratingSelect
	},
  name: 'food'
}
</script>
<style lang="stylus" type="stylesheet/stylus">
@import	"../../common/stylus/mixin";
.food
	position: fixed;
	left: 0;
	top: 0;
	bottom: 48px;
	z-index: 30;
	width: 100%;
	background: #fff;
	transform: translate3d(0,0,0);
	&.move-enter,&.move-leave-to
		transform: translate3d(100%,0,0);
	&.move-enter-active,&.move-leave-active
		transition: all 0.4s;
	.image-header
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 100%;
		img
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		.back
			position: absolute;
			top: 10px;
			left: 0;
			display: block;
			padding: 10px;
			font-size: 20px;
			color:#fff;
	.content
		position: relative;
		padding: 18px;
		.title
			line-height: 14px;
			margin-bottom: 8px;
			font-size: 14px;
			font-weight: 700;
			color:rgb(7, 17, 27);
		.detail
			margin-bottom: 18px;
			line-height: 10px;
			height: 10px;
			font-size: 0;
			.sell-count,.rating
				font-size: 10px;
				color:rgb(147,153,159);
			.sell-count
				margin-right: 12px;
		.price
			font-weight: 700;
			line-height: 24px;
			.now
				margin-right: 8px;
				font-size: 14px;
				color:rgb(240,20,20);
			.old
				text-decoration: line-through;
				font-size: 10px;
				color: rgb(147,153,159);
		.cartcontrol-warapper
			position: absolute;
			right: 12px;
			bottom: 12px;
		.buy
			position: absolute;
			right: 18px;
			bottom: 18px;
			z-index: 10;
			height: 24px;
			line-height: 24px;
			padding: 0 12px;
			box-sizing: border-box;
			font-size: 10px;
			border-radius: 12px;
			color: #fff;
			background: rgb(0,160,220);
	.info
		padding: 18px;
		.title
			line-height: 14px;
			margin-bottom: 6px;
			font-size: 14px;
			color: rgb(7,17,27);
		.text
			line-height: 24px;
			padding:0 8px;
			font-size: 12px;
			color: rgb(77,85,93);
	.rating
		padding-top: 18px;
		.title
			line-height: 14px;
			margin-left: 18px;
			font-size: 14px;
			color: rgb(7,17,27);
		.rating-wrapper
			padding: 0 18px;
			.rating-item
				position: relative;
				padding: 16px 0;
				border-1px(rgba(7,17,27,0.1))
				.user
					position: absolute;
					right: 0;
					top: 16px;
					font-size: 0;
					line-height: 12px;
					.name
						display: inline-block;
						vertical-align: top;
						margin-right: 6px;
						font-size: 10px;
						color: rgb(147,153,159);
					.avatar
						border-radius: 50%;
				.time
					line-height: 12px;
					font-size: 10px;
					color: rgb(147,153,159);
					margin-bottom: 6px;
				.text
					line-height: 16px;
					font-size: 12px;
					color: rgb(7,17,27);
					.icon-thumb_up,.icon-thumb_down
						margin-right: 4px;
						line-height: 16px;
						font-size: 12px;
					.icon-thumb_up
						color: rgb(0,160,220);
					.icon-thumb_down
						color: rgb(147,153,159);
			.no-rating
				padding: 16px 0
				font-size: 12px;
				color: rgb(147,153,159)
</style>
