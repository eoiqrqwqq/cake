<template>
	<div class="aroundcity-content">
		<div class="back"></div>
		<div class="aroundcity-nav">
			<router-link to="">月饼</router-link>
			<router-link to="">蛋糕</router-link>
			<router-link to="">咖啡</router-link>
			<router-link to="">坚果/果干</router-link>
		</div>
		<router-view></router-view>
		<p>已选择的商品(0)</p>
		<p>订单信息</p>
		<div class="aroundcity-shop">
			<span style="margin-right: 36px;">收货人：</span><input type="text"><br>
			<span>联系方式：</span><input type="text"><br>
			<cityselect><span>城市:</span></cityselect>
			<span>详细地址:</span><textarea name="" id="" cols="30" rows="10"style="resize:none;vertical-align: middle;"></textarea>
		</div>
	</div>
</template>

<script>
	import cityselect from "@/components/cityselect.vue"
	export default {
		data() {
			return {}
		},
		components: {
			cityselect
		}
	}
</script>

<style scoped="scoped">
	.back {
		background: url(../assets/back.jpg) no-repeat center;
		height: 350px;
		width: 100%;
	}

	.aroundcity-content {
		width: 100%;
		border-bottom: 1px solid #e9e9e9;
	}

	.aroundcity-nav {
		text-align: center;
		height: 55px;
		line-height: 55px;
		border-bottom: 1px solid #E9E9E9;
	}

	a {
		text-decoration: none;
		color: #584133;
	}

	.aroundcity-shop {
		padding-bottom: 20px;
		background-color: #fafafa;
		border: 1px solid #E9E9E9;
	}
	p{
		padding: 10px 50px;
		background-color: #FAFAFA;
		margin: 10px 0;
		border: 1px solid #E9E9E9;
		font-size: 12px;
	}
	.aroundcity-shop span{
		margin: 20px; 
	}
</style>
