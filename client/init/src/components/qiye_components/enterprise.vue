<template>
    <div class="logos">
        <p><img :src="img[0].company" alt=""></p>
        <template v-for="el in img[1].logos"> </template>
        <a href="">
            <img :src="el.logo1" alt="">
            <span>{{el.title}}</span>
        </a>
        <a href="">
            <img :src="el.logo1" alt="">
            <span>{{el.title}}</span>
        </a>
        <a href="">
            <img :src="el.logo1" alt="">
            <span>{{el.title}}</span>
        </a>
        <a href="">
            <img :src="el.logo1" alt="">
            <span>{{el.title}}</span>
        </a>
    </div>
</template>
<style>
.logos img{
width: 123px;
height: 123px;
}
</style>
<script>
    export default {
        data() {
            return {
                img: [{
                        company: "https://b.21cake.com/activity/site/business_area/img/a1907c3d726dae1cc53db38d0659771c.png"
                    },
                    {
                        logos: [{
                                logo1: "https://b.21cake.com/activity/site/card_exchange/img/f_37.jpg",
                                title: "浙江大学"
                            },
                            {
                                logo1: "https://b.21cake.com/activity/site/business_area/img/shlo.png",
                                title: "上药第一生化"
                            },
                            {
                                logo1: "https://b.21cake.com/activity/site/business_area/img/quan.jpg",
                                title: "海淀区教育工会"
                            },
                            {
                                logo1: "https://b.21cake.com/activity/site/business_area/img/santian.jpg",
                                title: "月饼兑换"
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>
