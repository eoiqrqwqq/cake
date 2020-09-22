<template>
 <div>
  <!-- <qiye></qiye> -->
 <topnav></topnav>
 <router-view></router-view>
 </div>
</template>

<script>

// import qiye from '@/views/qiye.vue'
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
