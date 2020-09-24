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
						url: "https://static.21cake.com//upload/images/0d3e13abee8529b98cfc2bb9b453f2d8.jpg",
						id: "1"
					},
					{
						url: "https://static.21cake.com//upload/images/7189ba6db41e975d55815cb068ecbf95.jpg",
						id: "2"
					},
					{
						url: "https://static.21cake.com//upload/images/125ca283af35924f40252c030690fe2c.jpg",
						id: "3"
					},
					{
						url: "https://static.21cake.com//upload/images/606be8c0b49e655b2eb00e72a29741e5.jpg",
						id: "4"
					}
				],
				arr1:[{name:"21cake赏光月饼礼盒",red:"见到月亮，也见到了人；2020中秋，情赏光",smallprice:"198",bigprice:"298",bignum:"8",smallnum:"6",bigweight:"410",smallweight:"300",unit:"枚"},]
			}
		},
	}
</script>

<style>
</style>
