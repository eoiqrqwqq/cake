<template>
 <div>
 <topnav></topnav>
 <router-view></router-view>
 
 </div>
</template>

<script>

import topnav from "./components/wang-component/topnav.vue"
export default { 
  name: 'App',
  components: {
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
