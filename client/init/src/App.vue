<template>
<<<<<<< HEAD
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
=======
  <div>
    <topnav></topnav>
    <router-view></router-view>
	<buttompart></buttompart>
  </div>
</template>

<script>
// import qiye from '@/views/qiye.vue'
import topnav from "./components/wang-component/topnav.vue";
import goodmodule from "./components/wang-component/goodmodule.vue";
import buttompart from "./views/buttompart.vue"
export default {
  name: "App",
  components: {
    topnav,
	goodmodule,
	buttompart,
  },
};
>>>>>>> 877b45d107c71d247c78df4367859a91865a9c80
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
