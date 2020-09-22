<template>
 <div>
<<<<<<< HEAD
  <!-- <qiye></qiye> -->
=======
>>>>>>> c535a4e38c514eedaf2cd2c3d8af74afe7103aa5
 <topnav></topnav>
 <router-view></router-view>
 </div>
</template>

<script>

// import qiye from '@/views/qiye.vue'
import topnav from "./components/wang-component/topnav.vue"
import goodmodule from "./components/wang-component/goodmodule.vue"
export default { 
  name: 'App',
  components: {
<<<<<<< HEAD
	topnav
=======
    qiye,
	topnav,
	goodmodule
>>>>>>> c535a4e38c514eedaf2cd2c3d8af74afe7103aa5
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
