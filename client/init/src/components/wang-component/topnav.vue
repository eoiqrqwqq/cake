<template>
<<<<<<< HEAD
	<div class="top-nav">
		<div class="nav-left">
			<img style="height: 80px;margin-left: 30px;width: 80px;" src="@/assets/logo.jpg" alt="">
			<div class="nav-mid">
				<router-link to="/home">首页</router-link>
				<router-link to="/cake">蛋糕</router-link>
				<router-link to="/bread">面包</router-link>
				<router-link to="/ice">冰淇淋</router-link>
				<router-link to="/coffice">咖啡下午茶</router-link>
				<router-link to="/aroundcity">全球送</router-link>
				<router-link to="/business">企业专区</router-link>
			</div>
		</div>
		<div class="nav-right">
			<div class="app">
				<span>APP下载</span>
				<div>
					<img src="https://static.21cake.com/themes/site/img/footer-erweima.png" alt="" style="width: 100px;">
					<p style="line-height: 20px;">下载更多优惠</p>
				</div>
			</div>
			<div style="display: inline-block;"  @mouseenter="fn">
				<router-link to="">消息</router-link>
			</div>
			<div class="masage" v-show="flag">
				<p>通知</p>
				<p>物流</p>
			</div>
			<router-link to="">登录</router-link>
			<span style="margin: 0 -20px;">/</span>
			<router-link to="">注册</router-link>
			<router-link style="font-size: 20px;margin-left: 0;" to="" class="iconfont icon-gouwuchekong"></router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:false
			}
		},
		methods:{
			fn(){
				this.flag=!this.flag
				return this.flag
			}
		}
	}
</script>

<style scoped="scoped">
	a {
		color: #584133;
		text-decoration: none;
		margin: 10px 20px;
		line-height: 65px;
		font-size: 14px;
	}
	.app{
		display: inline-block;
		line-height: 0;
		position: relative;
	}
	.app div{
		position: absolute;
		top: 40px;
		left: -20px;
		background-color: white;
		width: 120px;
		text-align: center;
		margin: 0 auto;
		display: none;
	}
	.app:hover div{
		display: inline-block;
	}
	.masage{
		position: absolute;
		display: flex;
		width: 80px;
		height: 50px;
		flex-wrap: wrap;
		top: 70px;
		right: 667px;
		background-color: white;
		box-shadow: 5px 5px 5px 5px #F0F0F0;
	}
	.masage p{
		line-height: 0;
		width: 50px;
		margin: 0 auto;
	}
	a:hover {
		color: #be9b78;
	}
=======
  <div class="top-nav">
    <div class="nav-left">
      <div style="margin-left: 30px">logo</div>
      <div class="nav-mid">
        <router-link to="/home">首页</router-link>
        <router-link to="/cake">蛋糕</router-link>
        <router-link to="/bread">面包</router-link>
        <router-link to="/ice">冰淇淋</router-link>
        <router-link to="/coffice">咖啡下午茶</router-link>
        <router-link to="/aroundcity">全球送</router-link>
        <router-link to="/business">企业专区</router-link>
      </div>
    </div>
    <div class="nav-right">
      <span>APP下载</span>
      <span>上海↓</span>
      <router-link to="">消息</router-link>
      <template v-if="isShow">
        <router-link to="/login">登录</router-link>
        <span style="margin: 0 -20px">/</span>
        <router-link to="/register">注册</router-link>
      </template>
      <router-link to="/userinfo" v-else>个人中心</router-link>
      <router-link to>购物车</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: "true",
    };
  },
  mounted() {
    // this.$axios("/userinfo").then((res) => {
    //   if (res.data.code == 2001) {
    //     this.isShow = "";
    //   } else {
    //     this.isShow = "";
    //   }
    // });
    // console.log(localStorage);
    if (localStorage.isLogin == "true") {
      this.isShow = "";
    } else {
      this.isShow = "true";
    }
  },
};
</script>

<style scoped="scoped">
a {
  color: #584133;
  text-decoration: none;
  margin: 10px 20px;
  line-height: 65px;
  font-size: 14px;
}

a:hover {
  color: #be9b78;
}
>>>>>>> 7d100fdda81a0eebea475904b000e942c7b49c65

.nav-left {
  display: flex;
}

.nav-left div {
  line-height: 80px;
}

<<<<<<< HEAD
	.nav-mid {
		margin-left: 50px;
	}
	.top-nav{
		position: fixed;
		display: flex;
		top: 0;
		padding-left:100px ;
		background-color: white;
		width: 1800px;
		box-shadow:5px 5px 5px #E9E9E9 ;
		z-index: 999;
	}
	.nav-right{
		line-height: 75px;
		margin-left: 150px;
		width: 420px;
	}
	span{
		font-size: 14px;
		cursor: pointer;
		margin: 0 10px;
		color: #584133;
	}
=======
.nav-mid {
  margin-left: 50px;
}
.top-nav {
  position: fixed;
  display: flex;
  top: 0;
  padding-left: 100px;
  background-color: white;
  width: 100%;
  box-shadow: 5px 5px 5px #e9e9e9;
  z-index: 9999;
}
.nav-right {
  line-height: 75px;
  margin-left: 100px;
}
span {
  font-size: 14px;
  cursor: pointer;
  margin: 0 10px;
  color: #584133;
}
>>>>>>> 7d100fdda81a0eebea475904b000e942c7b49c65
</style>
