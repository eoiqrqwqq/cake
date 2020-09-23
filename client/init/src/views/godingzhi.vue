<template>
    <div>
        <div class="godingzhi_topbg">
            <img :src="img[0]" alt="">
        </div>
        <prodetails></prodetails>
    </div>
</template>
<script>
     import prodetails from '@/components/dingzhi_components/prodetails.vue'
export default {
    components:{
        prodetails
    },
    data() {
        return {
            img:["https://static.21cake.com/themes/site/img/goods/banner/PC-DetailsWinImg-248-01.jpg",
            "https://static.21cake.com/public/images/b5/6c/aa/c93d377af16f56d0bdf719c21c533a07.jpg",
            "https://static.21cake.com/public/images/b5/6c/aa/c93d377af16f56d0bdf719c21c533a07.jpg"
        ]
        }
    },
}
</script>
<style>
    .godingzhi_topbg{
        width: 100%;
    }
    .godingzhi_topbg img{
        width: 100%;
    }
</style>