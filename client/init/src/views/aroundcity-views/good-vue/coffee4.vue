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
						url: "https://static.21cake.com//upload/images/1ff19c8d1ffc51497522b6f21a1e7a9d.jpg",
						id: "1"
					},
					{
						url: "https://static.21cake.com//upload/images/c4bf0dd4b1bd7b764dbdb7d0bc12d472.jpg",
						id: "2"
					},
					{
						url: "https://static.21cake.com//upload/images/45498c5c21397185d15e029eee48e95f.jpg",
						id: "3"
					},
					{
						url: "https://static.21cake.com//upload/images/3200c43e366992e1ef60c20044d41d97.jpg",
						id: "4"
					},
				],
				arr1:[{name:"巴布亚新几内亚盒装（10包入）",red:"",smallprice:"100",bigprice:"200",bignum:"2",smallnum:"1",bigweight:"200",smallweight:"100",unit:"盒"},]
			}
		},
	}
</script>

<style>
</style>