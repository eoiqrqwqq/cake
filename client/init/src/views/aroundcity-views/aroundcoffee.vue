<template>
	<div class="aroundcoffee">
		<div class="coffee-content" @click="fn('coffee1')">
			<img src="https://www.21cake.com/upload/images/889d77b8d54b9d6d85ef8356ceeac158.jpg" alt="">
			<p>巴布亚新几内亚挂耳咖啡</p>
			<p style="color: #BB9772;font-size: 12px;">￥10/10g(包)</p>
			<button>订购</button>
		</div>
		<div class="coffee-content" @click="fn('coffee2')">
			<img src="https://www.21cake.com/upload/images/13f039bff90a542ba3486d219dd0215d.jpg" alt="">
			<p>巴西挂耳咖啡盒装（10包入）</p>
			<p style="color: #BB9772;font-size: 12px;">¥100/100g(盒)</p>
			<button>订购</button>
		</div>
		<div class="coffee-content" @click="fn('coffee3')">
			<img src="https://www.21cake.com/upload/images/0045a0d885929ce4fa9c384242a04037.jpg" alt="">
			<p>耶加雪菲挂耳咖啡盒装（10包入）...</p>
			<p style="color: #BB9772;font-size: 12px;">¥100/100g(盒)（</p>
			<button>订购</button>
		</div>
		<div class="coffee-content" @click="fn('coffee4')">
			<img src="https://www.21cake.com/upload/images/df61205aa1ceabd43295969b82eb7c9c.jpg" alt="">
			<p>巴布亚新几内亚盒装（10包入）</p>
			<p style="color: #BB9772;font-size: 12px;">¥100/100g(盒)</p>
			<button>订购</button>
		</div>
		<div class="coffee-content" @click="fn('coffee5')">
			<img src="https://www.21cake.com/upload/images/71e29a5d9c2e83bcea31aa4d38bb19f2.jpg" alt="">
			<p>苏门答腊挂耳咖啡</p>
			<p style="color: #BB9772;font-size: 12px;">¥10/10g(包)</p>
			<button>订购</button>
		</div>
		<div class="coffee-content" @click="fn('coffee6')">
			<img src="https://www.21cake.com/upload/images/2f79dc40fd2db4fdad5c52f2c7dfedd2.jpg" alt="">
			<p>四口味挂耳咖啡混合装（4包入）</p>
			<p style="color: #BB9772;font-size: 12px;">¥40/40g(份)</p>
			<button>订购</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			fn(str){
				this.$router.push(`/${str}`)
			}
		}
	}
</script>

<style scoped="scoped">
	.aroundcoffee {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
	}
	img{
		width: 228px;
		margin: 0 15px;
	}
	.coffee-content{
		width: 250px;
		padding: 10px;
		margin: 10px 25px;
	}
	p{
		text-align: center;
		font-size: 14px;
		color: #684029;
	}
	button{
		margin-left: 60px;
		margin-top: 10px;
		width: 136px;
		height: 30px;
		background-color: #684029;
		color: #FFFFFF;
		outline: none;
		border: none;
	}
</style>
