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
						url: "https://static.21cake.com//upload/images/f702966adb858972a862c8823648be7c.jpg",
						id: "1"
					},
					{
						url: "https://static.21cake.com//upload/images/043ec33b3f3e40a2ba72b8c2783d2494.jpg",
						id: "2"
					},
					{
						url: "https://static.21cake.com//upload/images/981788f200e55fcffa5ec95c01464a98.jpg",
						id: "3"
					},
				],
				arr1:[{name:"百香果酸乳酪慕斯蛋糕（增区配送）",red:"",smallprice:"198",bigprice:"298",bignum:"1.2",smallnum:"1.0",bigweight:"600",smallweight:"454",unit:"磅"},]
			}
		},
	}
</script>

<style>
</style>
