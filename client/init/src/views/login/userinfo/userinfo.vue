<template>
  <div>
    <div class="userinfo">
      <div class="touxiangBox">
        <div class="touxiang touxiang_left">
          <img :src="img" alt="" />
        </div>
        <div class="user1">
          <div class="info">账号: {{ phone }}</div>
          <div class="u1">
            <router-link to="/editinfo">编辑个人资料</router-link>
          </div>
          <div class="u2">地址管理</div>
          <div class="u3">订单管理</div>
        </div>
      </div>
      <div class="touxiang_right">
        <div class="yue">余额</div>
        <div class="quan">优惠券</div>
        <div class="daijinka">代金卡</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      phone: "",
      toux: "",
      img: "",
    };
  },
  methods: {
    changes() {
      console.log(this.toux);
    },
  },
  mounted() {
    this.$axios("/userinfo").then((res) => {
      this.phone = res.data.phone;
      this.img = res.data.img[0].img;
    });
  },
};
</script>
<style scoped='scoped'>
.user1 {
  font-size: 14px;
  margin-left: 5px;
}
.user1 > div {
  margin-top: 15px;
}
.touxiangBox,
.touxiang_right > div {
  display: flex;
  background-color: #f6f5f3;
  padding: 20px;
  height: 200px;
}
.userinfo {
  margin: 50px auto;
  width: 80%;
  height: 1000px;
  display: flex;
  position: relative;
  top: 10px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
}
.touxiang,
.touxiang img {
  width: 60px;
  height: 60px;
  border-radius: 9999px;
  text-align: center;
  line-height: 100px;
  background-color: #555;
}
.userinfo .info {
  color: coral;
  font-size: 18px;
}
.touxiang > input {
  margin-left: 15px;
}
.touxiang_pic {
  position: absolute;
  top: 20px;
  left: 15px;
}
.touxiang_right {
  display: flex;
}
.touxiang_right > div {
  width: 220px;
}
.u1,
.u2,
.u3 {
  cursor: pointer;
}
.u1:hover,
.u2:hover,
.u3:hover {
  color: coral;
}
</style>