<template>
    <div class="comm-top">
        <div class="comm" v-for="it in str1" :key="it.Gid">
            <div v-if="it.Cid==data2">
                <router-link to="" class="rout">
                <img :src="it.img" alt="">
                <h4>{{it.Gname}}</h4>
                <p>￥{{it.price|it.quality}}</p>
                <!-- <p>{{arr[0].hot}}</p> -->
                </router-link>
                <div class="commt">
                <span></span>
                <span>加入购物车</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            str1:[],
        }
    },
    props:["data2"],
     mounted() {
        this.$axios.get("/home")
        .then((res)=>{
            // console.log(res)
            this.str1=res.data
            console.log(res.data)
        })
	},
}
</script>
<style scoped>
    .comm-top{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
.rout{
    text-decoration: none;
}   
    .comm{
        width: 228px;
        margin: 20px;
    }
    .comm img{
        width: 228px;
        height: 246px;
    }
    .comm h4{
        text-align: center;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;
        color: #684029;
    }
    .comm p{
        text-align: center;
        color: #BB9772;
        line-height: 18px;
        margin-top: 5px;
        font-size: 13px;
    }
    .comm h4:hover{
         color: #BB9772;
    }
    .commt{
        margin-top: 8px;
        text-align: center;
         color: #684029;
          font-size: 13px;
    }
    .commt span:hover{
        color: #BB9772;
    }
    
</style>