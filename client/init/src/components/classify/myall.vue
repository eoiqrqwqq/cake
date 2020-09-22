<template>
  <div>
    <div v-for="(item,index) in arr" :key="index">
      <div class="all-box">
        <p>{{arr[index].title}}</p>
        <p class="p2">{{arr[index].title2}}</p>
      </div>

      <div class="goods-box" v-for="(item,index) in img1" :key="index">
        <div>
          <img :src="img1[0].pic" alt />
          <a href="#">{{img1[0].title}}</a>
          <a href="#">{{img1[0].pri}}</a>
          <a href="#">{{img1[0].add}}</a>
        </div>
      </div>
    </div>

    <!-- <div class="goods-box">
      <div class="box" v-for="(item,index) in img1" :key="index">
        <img :src="img1[0].pic" alt />
        <a href="#">{{img1[0].title}}</a>
        <a href="#">{{img1[0].pri}}</a>
        <a href="#">{{img1[0].add}}</a>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: [
        {
          pic:
            "https://static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg",
          title: "蔓生",
          pri: "￥198/454g",
          add: "加入购物车",
        },
        {
          pic:
            "https://static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg",
          title: "蔓生",
          pri: "￥198/454g",
          add: "加入购物车",
        },
        {
          pic:
            "https://static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg",
          title: "蔓生",
          pri: "￥198/454g",
          add: "加入购物车",
        },
        {
          pic:
            "https://static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg",
          title: "蔓生",
          pri: "￥198/454g",
          add: "加入购物车",
        },
      ],
      arr: [
        {
          title: "蛋糕",
          title2: "新鲜乳脂奶油蛋糕",
        },
        {
          title: "+Gelato 10",
          title2: "10天生命的意式杰拉朵冰淇淋",
        },
        {
          title: "咖啡下午茶",
          title2: "挂耳咖啡",
        },
        {
          title: "常温咖啡",
          title2: "方便携带，恰到好处的满足",
        },
        {
          title: "礼品",
          title2: "设计师礼品专区",
        },
        {
          title: "季节性下线",
          title2: "在合适的季节，吃恰当的食物",
        },
      ],
    };
  },
};
</script>

<style>
.all-box {
  border-left: 3px solid rgb(104, 64, 41);
  padding-left: 10px;
  color: rgb(104, 64, 41);
  margin: 20px 0 0 370px;
}
.p2 {
  font-size: 12px;
}
.goods-box {
  display: inline-block;
  text-align: center;
}

.goods-box a {
  display: block;
}
</style>