<template>
<<<<<<< HEAD
  <div>
    <topnav></topnav>
    <router-view></router-view>
  </div>
</template>

<script>
// import qiye from '@/views/qiye.vue'
import topnav from "./components/wang-component/topnav.vue";
import goodmodule from "./components/wang-component/goodmodule.vue";
export default {
  name: "App",
  components: {
    topnav,
    goodmodule,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
=======
 <div>
  <!-- <qiye></qiye> -->
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

// import qiye from '@/views/qiye.vue'
// import topnav from "./components/wang-component/topnav.vue"
// import goodmodule from "./components/wang-component/goodmodule.vue"
// export default { 
//   name: 'App',
//   components: {
// 	topnav,
//     // qiye,
// 	topnav,
// 	goodmodule
  }
}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
>>>>>>> ac2f5bd4ab3e5a727797c2adebffa63e4221f72b
