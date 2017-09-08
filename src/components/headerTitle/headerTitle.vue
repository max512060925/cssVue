<template>
	<div class="title">
		<div class="line"></div>
		<div class="text">{{mes}}</div>
		<div class="line"></div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		props: {
			mes: {
				type: String
			}
		},
		name: 'headerTitle'
}
</script>
<style lang="stylus" type="stylesheet/stylus">
.title
	margin: 2px 0 8px 0
	.brand
		display: inline-block;
		vertical-align: top;
		width: 30px;
		height: 18px;
		bg-img('img/brand');
		background-size: 100%;
	.name
		margin-left: 6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: bold;
</style>
