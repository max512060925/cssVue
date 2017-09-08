<template>
<div	v-bind:seller="seller"	class="header">
		<div	class="content-warapper">
				<div	class="avatar">
						<img	v-bind:src="seller.avatar"	width="64"	height="64">
				</div>
				<div	class="content">
						<div	class="title">
								<span	class="brand"></span>
								<span	class="name">{{seller.name}}</span>
						</div>
						<div	class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送到
						</div>
						<div	v-if="seller.supports"	class="supports">
								<span	class="icon"	v-bind:class="classMap[seller.supports[0].type]"></span>
								<span	class="text">{{seller.supports[0].description}}</span>
						</div>
				</div>
				<div	v-if="seller.supports"	class="support-count"	v-on:click="detailShow">
						<span	class="count">{{seller.supports.length}}个</span>
						<i	class="icon-keyboard_arrow_right"></i>
				</div>

		</div>
		<div	class="bulletin-wrapper"	v-on:click="detailShow">
				<span	class="bulletin_title"></span><span	class="bulletin_text">{{seller.bulletin}}</span>
				<i	class="icon-keyboard_arrow_right"></i>
		</div>
		<div	class="background">
				<img	v-bind:src="seller.avatar"	width="100%"	height="100%">
		</div>
		<transition	name="fade">
				<div	class="detail"	v-show="detail">
						<div	class="detail-wrapper	clearfix">
								<div	class="detail-main">
										<h1	class="name">{{seller.name}}</h1>
										<v-star	:size="48"	:score="seller.score"	class="star-wrapper"></v-star>
										<v-title	:mes="mes_1"></v-title>
										<ul	class="supports"	v-if="seller.supports">
												<li	class="support-item"	v-for="(item,index)	in	seller.supports">
														<span	class="icon"	:class="classMap[seller.supports[index].type]"></span>
														<span	class="text">{{seller.supports[index].description}}</span>
												</li>
										</ul>
										<v-title	:mes="mes_2"></v-title>
										<div	class="bulletin">
											<p	class="content">{{seller.bulletin}}</p>
										</div>
								</div>
						</div>
						<div	class="detail-close"	@click="hideDetail">
								<i	class="icon-close"></i>
						</div>
				</div>
		</transition>
</div>
</template>
<script	type="text/ecmascript-6">
import	axios	from	'axios'
import	star	from	'@/components/star/star'
import	headerTitle	from	'@/components/headerTitle/headerTitle'
import $ from 'jquery'
export	default	{
		data()	{
				return	{
						seller:	{},
						detail:	false,
						mes_1:	'优惠信息',
						mes_2:	'商家公告'
				}
		},
		methods:	{
				detailShow:	function()	{
						this.detail	=	true
            console.log($('.text').text())
				},
				hideDetail:	function()	{
						this.detail	=	false
				}
		},
    props: {
      classMap: {
        type: Array
      }
    },
		created()	{
        console.log(this.classMap)
				axios.get('/api/seller').then((res)	=>	{
						let	data	=	res.data.data
						if	(res.data.errno	===	0)	{
								this.seller	=	data
						}
				})
        // this.classMap = ['decrease','discount','guarantee','invoice','special']
        console.log(this.classMap)
		},
		components:	{
				'v-star':	star,
				'v-title':	headerTitle
		},
		name:	'header'
}
</script>
<style	lang="stylus"	type="stylesheet/stylus">
@import	"../../common/stylus/mixin";
.header
		position:	relative;
		color:	#fff;
		background:	rgba(7,17,27,0.5);
		overflow:	hidden;
		.content-warapper
				position:	relative;
				padding:	24px	12px	18px	24px
				.avatar
						display:	inline-block;
						vertical-align:	top;
						img
								border-radius:	2px;
				.content
						display:	inline-block
						margin-left:	14px;
						.brand
							display: inline-block;
							vertical-align: top;
							width: 30px;
							height: 18px;
							bg-img('img/brand');
							background-size: 100%;
						.description
								margin-bottom:	10px;
								line-height:	12px;
								font-size:	12px;
						.supports
								.icon
										display:	inline-block;
										vertical-align:	top;
										width:	12px;
										height:	12px;
										margin-right:	4px;
										background-size:100%	100%!important;
										&.decrease
												bg-img('img/decrease_1');
										&.discount
												bg-img('img/discount_1');
										&.guarantee
												bg-img('img/guarantee_1');
										&.invoice
												bg-img('img/invoice_1');
										&.special
												bg-img('img/special_1');
								.text
										line-height:	12px;
										font-size:	10px;
										vertical-align:	top;
				.support-count
						position:	absolute;
						right:	12px;
						bottom:	14px;
						padding:	0	8px;
						line-height:	24px;
						border-radius:	14px;
						background:	rgba(0,	0,	0,	0.2);
						text-align:	center;
						font-size:	10px;
						.count
								vertical-align:	top;
						.icon-keyboard_arrow_right
								line-height:	24px;
								margin-left:	2px;
		.background
				position:	absolute;
				top:	0;
				left:	0;
				width:	100%;
				height:	100%;
				z-index:	-1;
				filter:blur(10px);
		.bulletin-wrapper
				position:	relative;
				height:	28px;
				line-height:	28px;
				padding:0	22px	0	12px;
				white-space:	nowrap;
				overflow:	hidden;
				text-overflow:	ellipsis;
				background:rgba(7,17.27.0.2);
				.bulletin_title
						vertical-align:	top;
						display:	inline-block;
						width:	22px;
						height:	12px;
						bg-img('img/bulletin');
						background-size:	100%	100%;
						margin-top:	8px;
				.bulletin_text
						vertical-align:	top;
						font-size:	10px;
						margin-left:	4px;
				.icon-keyboard_arrow_right
						position:	absolute;
						font-size:10px;
						right:	12px;
						top:	8px;
		.detail
				position:	fixed;
				top:0;
				left:	0;
				z-index:	100;
				width:	100%;
				height:	100%;
				overflow:	auto;
				background:	rgba(7,17,27,0.8);
				backdrop-filter:	blur(10px);
				&.fade-enter-active,	&.fade-leave-active
						transition:	all	.5s
						opacity:	1
				&.fade-enter,	&.fade-leave-to
						opacity:	0
				.detail-wrapper
						min-height:	100%;
						width:	100%;
						.detail-main
								margin-top:	64px;
								padding-bottom:	64px;
								.name
										line-height:	16px;
										text-align:	center;
										font-size:	16px;
										font-weight:	bolder;
								.star-wrapper
										margin-top:	18px;
										padding:	2px	0;
										text-align:	center;
								.title
										display:	flex;
										width:	80%;
										margin:	28px	auto	24px;
										.line
												flex:	1;
												position:	relative;
												top:	-6px;
												border-1px(rgba(255,	255,	255,	0.2));
										.text
												padding:	0	12px;
												font-size:	14px;
												font-weight:	700;
								.supports
										width:80%;
										margin:0	auto;
										.support-item
												padding:	0	12px;
												margin-bottom:	12px;
												font-size:0
												&:last-child
														margin-bottom:0;
												.icon
														display:	inline-block;
														width:	16px;
														height:	16px;
														vertical-align:	top;
														margin-right:	6px;
														background-size:	100%	100%!important;
														background-repeat:	no-repeat;
														&.decrease
																bg-img('img/decrease_2');
														&.discount
																bg-img('img/discount_2');
														&.guarantee
																bg-img('img/guarantee_2');
														&.invoice
																bg-img('img/invoice_2');
														&.special
																bg-img('img/special_2');
												.text
														line-height:	16px;
														font-size:	12px;
														vertical-align:	top;
								.bulletin
										width:	80%;
										margin:	0	auto;
										.content
												padding:	0	12px;
												line-height:	24px;
												font-size:	12px;
				.detail-close
						position:	relative;
						height:	32px;
						width:	32px;
						margin:	-64px	auto;
						clear:both;
						font-size:	32px;

</style>
