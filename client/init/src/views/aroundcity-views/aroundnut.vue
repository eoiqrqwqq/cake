<template>
	<div class="aroundnut">
		<div class="nut-content" @click="fn('nut1')">
			<img src="https://www.21cake.com/upload/images/899d3d1a869b6818bcad3b24c39dfac4.jpg" alt="">
			<p>灰枣全国送（1包）</p>
			<p style="color: #BB9772;font-size: 12px;">¥45/196g(一份)</p>
			<button>订购</button>
		</div>
		<div class="nut-content" @click="fn('nut2')">
			<img src="https://www.21cake.com/upload/images/a6dd76ecabd8face7700a29a0fd1f529.jpg" alt="">
			<p>蔓越莓干全国送（1包）</p>
			<p style="color: #BB9772;font-size: 12px;" @click="fn('nut2')">¥45/244g(一份)</p>
			<button>订购</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			fn(str){
				this.$router.push(`/${str}`)
			}
		}
	}
</script>

<style>
	.aroundnut{
		width: 1200px;
		margin: 0 auto;
		display: flex;
	}
	img{
		width: 228px;
	}
	.nut-content{
		width: 250px;
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
