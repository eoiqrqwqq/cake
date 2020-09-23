<template>
  <div>
    <h3>个人中心</h3>
    <div class="userinfo">
      <div class="touxiang">
        <input type="file" style="opacity:0" title="点击更换头像" name id />
      </div>
      <div class="info">账号{{phone}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      phone: "",
    };
  },
  methods: {},
};
</script>
<style scoped='scoped'>
.userinfo {
  margin: 50px auto;
  width: 80%;
  height: 1000px;
  background-color: #666;
  display: flex;
}
.touxiang {
  width: 100px;
  height: 100px;
  background-color: rgb(161, 161, 161);
  border-radius: 9999px;
  text-align: center;
  line-height: 100px;
  position: relative;
}

.touxiang > input {
  margin-left: 15px;
}
.touxiang_pic {
  position: absolute;
  top: 20px;
  left: 15px;
}
</style>