<template>
<<<<<<< HEAD
	<div>
		<topnav></topnav>
		<router-view></router-view>
	</div>
=======
 <div>
  <!-- <qiye></qiye> -->
 <topnav></topnav>
 <router-view></router-view>
 </div>
>>>>>>> 2753c08e54d172d1541620d74b348b220f2bb4b5
</template>

<script>
	import topnav from "./components/wang-component/topnav.vue"
	import goodmodule from "./components/wang-component/goodmodule.vue"
	export default {
		name: 'App',
		components: {
			topnav,
			goodmodule

<<<<<<< HEAD
		}}
=======
// import qiye from '@/views/qiye.vue'
import topnav from "./components/wang-component/topnav.vue"
import goodmodule from "./components/wang-component/goodmodule.vue"
export default { 
  name: 'App',
  components: {
	topnav,
    // qiye,
	topnav,
	goodmodule
  }
}
>>>>>>> 2753c08e54d172d1541620d74b348b220f2bb4b5
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>