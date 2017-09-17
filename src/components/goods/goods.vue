<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(vel,index) in goods" class="menu-item" :class="{current:currentIndex===index}" @click="selectMenu(index,$event)"><span class="text border-1px"><span v-show="vel.type>0" class="icon" :class="classMap[vel.type]"></span>{{vel.name}}</span></li>
			</ul>
		</div>
		<div class="food-wrapper" ref="foodWrapper">
			<ul>
				<li v-for="(vel,index) in goods" class="food-list food-hook">
					<h1 class="title">{{vel.name}}</h1>
					<ul>
						<li v-for="(food,i) in vel.foods" class="food-item border-1px">
							<div class="icon">
								<img width="57" :src="food.icon">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}</span>
									<span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">¥{{food.price}}</span>
									<span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
								</div>
								<div class="btnPositon">
									<btn @add="addFood" class="" :food="food"></btn>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<shopcart ref="shopcart" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" :select="select"></shopcart>
	</div>

</template>
<script type="text/ecmascript-6">
import	axios	from	'axios'
import	BScroll	from	'better-scroll'
import	shopcart	from	'@/components/shopcart/shopcart'
import	btn	from	'@/components/btn/btn'
export	default {
	props: {
		classMap: {
			type: Array
		}
	},
	data() {
		return {
			goods: [],
			seller: [],
			listH: [],
			scrollY: 0
		}
	},
	computed: {
		currentIndex() {
			for (let i = 0; i < this.listH.length; i++) {
				let h1 = this.listH[i]
				let h2 = this.listH[i + 1]
				if ((this.scrollY >= h1 && this.scrollY < h2) || !h2) {
					return i
				}
			}
			return 0
		},
		select() {
			let arr = []
			this.goods.forEach((good) => {
				good.foods.forEach((food) => {
					if (food.count > 0) {
						arr.push(food)
					}
				})
			})
			return arr
		}
	},
	methods: {
		selectMenu(i,e) {
			if (!e._constructed) {
				return false
			}
			let foodLi = this.$refs.foodWrapper.getElementsByClassName('food-hook')
			this.foodScroll.scrollToElement(foodLi[i],300)
		},
		_initScroll() {
			this.menuScroll = new BScroll(this.$refs.menuWrapper,{
				click: true
			})
			this.foodScroll = new BScroll(this.$refs.foodWrapper,{
				click: true,
				probeType: 3
			})
			this.foodScroll.on('scroll',(p) => {
				this.scrollY = Math.abs(Math.round(p.y))
			})
		},
		_calcliheight() {
			let foodLi = this.$refs.foodWrapper.getElementsByClassName('food-hook')
			let height = 0
			this.listH.push(height)
			for (let i = 0; i < foodLi.length; i++) {
				height += foodLi[i].clientHeight
				this.listH.push(height)
			}
		},
		addFood(target) {
			this._drop(target)
		},
		_drop(target) {
			this.$refs.shopcart.drop(target)
		}
	},
	created()	{
		let getGoods = () => {
			return axios.get('/api/goods')
		}
		let getSeller = () => {
			return axios.get('/api/seller')
		}
		axios.all([getGoods(),getSeller()]).then(axios.spread((goodsData,sellerData) =>	{
				let	goodsD	=	goodsData.data.data
				let sellerD = sellerData.data.data
				if	(goodsData.data.errno	===	0)	{
						this.goods	=	goodsD
						this.$nextTick(() => {
							this._initScroll()
							this._calcliheight()
						})
				}
				if (sellerData.data.errno	===	0) {
					this.seller = sellerD
				}
		}))
	},
	components: {
		shopcart,
    btn
	},
  name: 'goods'
}

</script>
<style lang="stylus" type="stylesheet/stylus">
@import	"../../common/stylus/mixin";
.goods
	display: flex;
	position: absolute;
	width: 100%;
	top: 174px;
	bottom: 46px;
	overflow: hidden;
	.menu-wrapper
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7
		.menu-item
			display: table;
			height: 54px;
			width: 56px;
			line-height: 14px;
			padding: 0 12px;
			&.current
				position: relative
				background: #fff
				margin-top:-1px
				z-index:10

				.text
					font-weight:700
					border-none()
			.icon
				display:	inline-block;
				vertical-align:	top;
				width:	12px;
				height:	12px;
				margin-right:	2px;
				background-size:100%	100%!important;
				&.decrease
						bg-img('img/decrease_3');
				&.discount
						bg-img('img/discount_3');
				&.guarantee
						bg-img('img/guarantee_3');
				&.invoice
						bg-img('img/invoice_3');
				&.special
						bg-img('img/special_3');
			.text
				font-size: 12px;
				display: table-cell;
				width: 56px;
				vertical-align: middle;
				border-1px(rgba(7,17,27,0.1))
	.food-wrapper
		flex: 1;
		.title
			padding-left: 14px;
			height: 26px;
			line-height: 26px;
			border-left: 2px solid #d9dde1;
			font-size: 12px;
			color: rgb(147,153,159);
			background: #f3f5f7
		.food-item
			display: flex;
			margin: 18px;
			padding-bottom: 18px;
			border-1px(rgba(7,17,27,0.1))
			&:last-child
				boder-none()
				margin-bottom: 0;
			.icon
				flex: 0 0 57px;
				width: 57px;
				margin-right: 10px;
			.content
				flex:1;
				.name
					font-size: 14px;
					margin: 2px 0 8px 0;
					height: 14px;
					line-height: 14px;
					color: rgb(7,17,27);
					font-weight: 700;
				.desc,.extra
					line-height: 10px;
					font-size: 10px;
					color: rgb(147,153,159);
				.desc
					margin-bottom: 8px;
				.extra
					.count
						margin-right: 12px;
				.price
					font-weight: 400;
					line-height: 24px;
					.now
						margin-right: 8px;
						font-size: 14px;
						color:rgb(240,20,20);
					.old
						text-decoration: line-through;
						font-size: 10px;
						color: rgb(147,153,159);
				.btnPositon
					position: absolute;
					right: 0;
					bottom: 12px;
</style>
