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
						url: "https://static.21cake.com//upload/images/1f4e26376ffb2bcec77877fc18a16542.jpg",
						id: "1"
					}
				],
				arr1:[{name:"灰枣全国送（1包）",red:"",smallprice:"45",bigprice:"90",bignum:"2",smallnum:"1",bigweight:"392",smallweight:"196",unit:"份"},]
			}
		},
	}
</script>

<style>
</style>