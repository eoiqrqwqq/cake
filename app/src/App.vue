<template>
	<div id="app">
		<topnav></topnav>
		<router-view></router-view>
	</div>
</template>

<script>
	import topnav from "./components/topnav.vue"
	export default{
		data(){
			return{}
		},
		components:{
			topnav
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
