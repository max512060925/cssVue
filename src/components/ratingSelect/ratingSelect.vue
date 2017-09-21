<template>
	<div class="ratingSelect">
		<div class="rating-tap">
			<span class="block positive" :class="{active:selectType===2}" @click="select(2,$event)">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
			<span class="block positive" :class="{active:selectType===0}" @click="select(0,$event)">{{desc.positive}}<span class="count">{{positive.length}}</span></span>
			<span class="block negative" :class="{active:selectType===1}" @click="select(1,$event)">{{desc.negative}}<span class="count">{{negative.length}}</span></span>
		</div>
		<div class="switch" :class="{on:onlyContent}" @click="toggleContent">
			<i class="icon-check_circle"></i>
			<span class="text">只看内容的评价</span>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
const ALL = 2;
const	POSITIVE = 0;
const NEGATIVE = 1;
export default {
	props: {
		ratings:{
			type: Array,
			default() {
				return [];
			}
		},
		selectType: {
			type: Number,
			default: ALL
		},
		onlyContent: {
			type: Boolean,
			default: false
		},
		desc: {
			type: Object,
			default() {
				return {
					all: '全部',
					positive: '满意',
					negative: '不满意'
				}
			}
		}
	},
	computed: {
		positive() {
			return this.ratings.filter((v) => {
				return v.rateType === POSITIVE
			})
		},
		negative() {
			return this.ratings.filter((v) => {
				return v.rateType === NEGATIVE
			})
		}
	},
	methods: {
		select(n,e) {
			if (!e._constructed) {
				return false
			}
			this.$emit('type',n)
		},
		toggleContent(e) {
			if (!e._constructed) {
				return false
			}
			this.$emit('switch',!this.onlyContent)
		}
	},
  name: 'default'
}
</script>
<style lang="stylus" type="stylesheet/stylus">
@import	"../../common/stylus/mixin";
.ratingSelect
	.rating-tap
		padding: 18px 0;
		margin: 0 18px;
		border-1px(rgba(7,17,27,0.1));
		font-size: 0;
		.block
			display: inline-block;
			padding: 8px 12px;
			border-radius: 1px;
			margin-right: 8px;
			color: rgb(77,85,93);
			font-size: 12px;
			line-height: 16px;
			&.active
				color: #fff;
			.count
				font-size: 8px;
				margin-left: 2px;
			&.positive
				background:  rgba(0,160,220,0.2);
				&.active
					background: rgb(0,160,220);
			&.negative
				background: rgba(77,85,93,0.2)
				&.active
					background: rgb(77,85,93)
	.switch
		padding: 12px 18px;
		line-height: 24px;
		border-1px(rgba(7,17,27,0.1));
		color: rgb(147,153,159);
		font-size: 0;
		&.on
			.icon-check_circle
				color: #00c850;
		.icon-check_circle
			display: inline-block;
			vertical-align: top;
			font-size: 24px;
			margin-right: 4px;
		.text
			display: inline-block;
			vertical-align: top;
			font-size: 12px;
</style>
