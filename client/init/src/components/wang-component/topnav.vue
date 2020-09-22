<template>
	<div class="top-nav">
		<div class="nav-left">
			<div>logo</div>
			<div class="nav-mid">
				<router-link to="/home">首页</router-link>
				<router-link to="/cake">蛋糕</router-link>
				<router-link to="/bread">面包</router-link>
				<router-link to="/ice">冰淇淋</router-link>
				<router-link to="/coffice">咖啡下午茶</router-link>
				<router-link to="/aroundcity">全球送</router-link>
				<router-link to="/business">企业专区</router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	a {
		color: #584133;
		text-decoration: none;
		padding: 10px 20px;
		line-height: 65px;
		font-size: 14px;
	}

	a:hover {
		color: #be9b78;
	}

	.nav-left {
		display: flex;
		width: 1200px;
		margin: 0 auto;
	}

	.nav-left div {
		line-height: 80px;
	}

	.nav-mid {
		margin-left: 50px;
	}
	.top-nav{
		position: fixed;
		top: 0;
		padding-left:100px ;
		background-color: white;
		width: 100%;
		box-shadow:5px 5px 5px #E9E9E9 ;
	}
</style>
