<template>
  <div class="goods">
    <div class="box" v-for="(item,index) in img1" :key="index">
      <img :src="img1[0].pic" alt />
      <a href="#">{{img1[0].title}}</a>
      <a href="#">{{img1[0].pri}}</a>
      <a href="#">{{img1[0].add}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: [
        {
          pic:
            "https://static.21cake.com//upload/images/16402f5f4f006231871d81dc71f35b05.jpg",
          title: "儿童套餐",
          pri: "￥48/一份",
          add: "加入购物车",
        },
        {
          pic:
            "https://static.21cake.com//upload/images/65dded5c6fca2d25efd5912cc3a7d2c2.png",
          title: "儿童套餐",
          pri: "￥48/一份",
          add: "加入购物车",
        },
        {
          pic:
            "https://static.21cake.com//upload/images/65dded5c6fca2d25efd5912cc3a7d2c2.png",
          title: "儿童套餐",
          pri: "￥48/一份",
          add: "加入购物车",
        },
        {
          pic:
            "https://static.21cake.com//upload/images/65dded5c6fca2d25efd5912cc3a7d2c2.png",
          title: "儿童套餐",
          pri: "￥48/一份",
          add: "加入购物车",
        },
      ],
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  font-size: 13px;
}

.goods {
  width: 228px;
  height: 346px;
  display: flex;
  margin-left: 10px;
}
.box {
  margin: 0 10px 0 40px;
}
.goods a {
  display: block;
  text-align: center;
}
img {
  width: 228px;
  height: 246px;
}
</style>