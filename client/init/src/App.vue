<template>
	<div>
		<topnav></topnav>
		<router-view></router-view>
	</div>
</template>

<script>
	import topnav from "./components/wang-component/topnav.vue"
	import goodmodule from "./components/wang-component/goodmodule.vue"
	export default {
		name: 'App',
		components: {
			topnav,
			goodmodule

		}}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>