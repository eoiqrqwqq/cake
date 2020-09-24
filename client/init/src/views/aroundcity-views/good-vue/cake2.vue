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
						url: "https://static.21cake.com//upload/images/9c221d017a2f7754f2a84bfc3c4f225b.jpg",
						id: "1"
					},
					{
						url: "https://static.21cake.com//upload/images/0462c52f8888122dccb8c55509d8dce5.jpg",
						id: "2"
					},
					{
						url: "https://static.21cake.com//upload/images/b87ffab73988ab92c1a64caadb0ec20c.jpg",
						id: "3"
					},
				],
				arr1:[{name:"新杰瑞（增区配送）",red:"",smallprice:"198",bigprice:"298",bignum:"1.2",smallnum:"1.0",bigweight:"600",smallweight:"454",unit:"磅"},]
			}
		},
	}
</script>

<style>
</style>
