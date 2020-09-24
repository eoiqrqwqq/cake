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
						url: "https://static.21cake.com//upload/images/72bd3226fe684aa5875826587fd721ca.jpg",
						id: "1"
					},
					{
						url: "https://static.21cake.com//upload/images/de666270deebc300a77895f43c1872ed.jpg",
						id: "2"
					},
					{
						url: "https://static.21cake.com//upload/images/04e518d728e0165fd42399fa390f5ef6.jpg",
						id: "3"
					},
					{
						url: "https://static.21cake.com//upload/images/1db3e7c1d84ea6ad8f59dc202016a29b.jpg",
						id: "3"
					},
				],
				arr1:[{name:"四口味挂耳咖啡混合装（4包入）",red:"",smallprice:"40",bigprice:"80",bignum:"2",smallnum:"2",bigweight:"80",smallweight:"40",unit:"份"},]
			}
		},
	}
</script>

<style>
</style>