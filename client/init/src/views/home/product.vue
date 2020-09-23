<template>
    <div>
        <div class="product1">
            <router-link to="" class="pro1">
                <img :src="arr[0].img" alt="">
                <h4>{{arr[0].name}}</h4>
                <p>{{arr[0].introduce}}</p>
                <p>{{arr[0].new}}</p>
                <div class="dott">￥{{arr[0].price}}(1.0磅)
                    <span>加入购物车</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arr:[{
               img:"https://static.21cake.com//upload/images/8e5930873714d422476417759b01e4b8.png",
               name:'蔓生',
               introduce:'树莓奶油与浆果慕斯蛋糕',
               new:"新品",
               price:'198.00'
           }]
        }
    }
}
</script>
<style scoped>
    .pro1{
        text-decoration: none;
    }
     .product1{
       margin-top: 20px;
    }
    .product1 img{
        width: 263px;
        height: 230px;
        background-color: #fafafa;
        border-radius: 5px;
    }
    .product1 h4{
        color: #000;
        font-weight: normal;
        padding: 12px 0 0;
    }
    .product1 p:first-of-type{
        color: #616161;
        font-size: 14px;
         padding: 12px  0;
    }
    .dott{
        width: 263px;
        border-top:1px dotted #b0986f;
        padding-top: 12px;
        color: #BB9772;
        font-size: 14px;
        margin-top: 12px;
    }
   .product1 span{
       width: 80px;
       height: 20px;
       background-color: #684029;
       color: #fff;
       font-size: 12px;
       margin-left: 92px;
    }
</style>