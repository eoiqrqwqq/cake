<template>
    <div style="width: 840px; height: 520px;">
        <el-carousel class="process_img" :interval="5000" arrow="always" autoplay='false'>
            <el-carousel-item v-for="el in item" :key="el">
              <h3><img :src="el" alt=""></h3>
            </el-carousel-item>
          </el-carousel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item:["https://b.21cake.com/activity/site/business_area/img/enjoy-01.png",
            "https://b.21cake.com/activity/site/business_area/img/enjoy-02.png",
            "https://b.21cake.com/activity/site/business_area/img/gift-03.png",
            "https://b.21cake.com/activity/site/business_area/img/gift-04.png",
            "https://b.21cake.com/activity/site/business_area/img/enjoy-06.png"
        ]
        }
    },
}
</script>
<style>
.el-carousel__item h3 {
    /* color: #475669; */
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .process_img{
      width: 600px;
      height: 320px;
      margin: 0 auto;
  }
  

</style>