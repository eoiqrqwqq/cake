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
						url: "https://static.21cake.com//upload/images/c6cbe20e666b0f5aed2622dc8fb11a54.jpg",
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
				arr1:[{name:"Sumatra coffee 苏门答腊挂耳咖啡（全国）",red:"",smallprice:"10.00",bigprice:"20.00",bignum:"2",smallnum:"1",bigweight:"20",smallweight:"10",unit:"包"},]
			}
		},
	}
</script>

<style>
</style>