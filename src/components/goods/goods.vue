<template>
	<div class="goods">
		<div class="menu-wrapper">
			<ul>
				<li v-for="(vel,index) in goods" class="menu-item"><span class="text border-1px"><span v-show="vel.type>0" class="icon" :class="classMap[vel.type]"></span>{{vel.name}}</span></li>
			</ul>
		</div>
		<div class="food-wrapper">
			<ul>
				<li v-for="(vel,index) in goods" class="food-list">
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
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>

</template>
<script type="text/ecmascript-6">
import	axios	from	'axios'
export default {
	props: {
		seller: {
			type: Object
		},
		classMap: {
			type: Array
		}
	},
	data() {
		return {
			goods: []
		}
	},
	created()	{
		axios.get('/api/goods').then((res)	=>	{
				let	data	=	res.data.data
				if	(res.data.errno	===	0)	{
						this.goods	=	data
						console.log(this.goods)
				}
		})
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
					&.count
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


</style>
