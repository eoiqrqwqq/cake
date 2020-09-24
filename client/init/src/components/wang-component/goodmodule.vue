<template>
	<div class="module-box">
		<div class="big-img">
			<img :src="el.url" alt="" v-for="(el,id) in masg" :key="id" v-if="id==currentSort">
		</div>
		<div class="small-img">
			<img :src="el.url" alt="" v-for="(el,id) in masg" :key="id" :class="{'boder':currentSort === id}" @mouseenter="show($event,id)">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				currentSort: 0,
			}
		},
		props:["masg"],
		methods: {
			show(e, id) {
				this.currentSort = id
				this.flag = !this.flag
			}
		}
	}
</script>

<style scoped="scoped">
	.module-box {
		width: 1000px;
		margin: 0 auto;
		margin-top: 84px;
		position: relative;
	}

	.big-img img {
		width: 924px;
	}

	.small-img img {
		width: 90px;
		margin-top: 20px;
	}

	.big-img {
		display: flex;
		width: 900px;
		overflow: hidden;
	}

	.small-img {
		display: flex;
		width: 90px;
		flex-wrap: wrap;
		position: absolute;
		right: 0;
		top: 180px;
	}

	.boder {
		border: 1px solid #765b52;
	}
</style>
