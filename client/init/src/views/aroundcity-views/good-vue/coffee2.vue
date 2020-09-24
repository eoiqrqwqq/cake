<template>
	<div>
		<goodmodule :masg="arr"></goodmodule>
		<goodmasg :detail="arr1[0]"></goodmasg>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
						url: "https://static.21cake.com//upload/images/250fc13e49fce06e8eaf21a34e0cf262.jpg",
						id: "1"
					},
					{
						url: "https://static.21cake.com//upload/images/c0436455f9cebba04b1d1fccb6dc44f8.jpg",
						id: "2"
					},
					{
						url: "https://static.21cake.com//upload/images/5941b38059606f07661242f0081ff12e.jpg",
						id: "3"
					},
					{
						url: "https://static.21cake.com//upload/images/40ddf5e3c308b3f273caba4386ed4655.jpg",
						id: "4"
					},
				],
				arr1:[{name:"巴西挂耳咖啡盒装（10包入）",red:"",smallprice:"100",bigprice:"200",bignum:"2",smallnum:"1",bigweight:"200",smallweight:"100",unit:"盒"},]
			}
		},
	}
</script>

<style>
</style>