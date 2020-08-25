<template>
   <bili-carousel :data="carousels"></bili-carousel>
</template>

<script>
import BiliCarousel from '../common/bili-carousel.vue'

export default {
    components:{
        BiliCarousel
    },
    data() {
        return {
            carousels: [
                {
                    url:
                        "https://i0.hdslb.com/bfs/archive/e62dd232a9de9870c6ff7db47ba0b67130f54139.jpg@880w_388h_1c_95q",
                    title: "高能！点击回顾BML精彩瞬间！！！",
                    isAd: false,
                    to: "",
                },
                {
                    url:
                        "https://i0.hdslb.com/bfs/sycp/creative_img/202007/86ad3645a8f0c8a46aa1af51b79daf19.jpg@880w_388h_1c_95q",
                    title: "SSR神使登录即送！",
                    isAd: true,
                    to: "",
                },
                {
                    url:
                        "https://i0.hdslb.com/bfs/sycp/creative_img/202007/0dba7eb0ea6d53152393d1b014e14ff8.jpg@880w_388h_1c_95q",
                    title: "Check你的上舰福利！",
                    isAd: true,
                    to: "",
                },
                {
                    url:
                        "https://i0.hdslb.com/bfs/archive/2063652e2d997de26af57b5eeda8a7767c6ed6dc.jpg@880w_388h_1c_95q",
                    title: "2020TEDx年度大会，神仙同台！",
                    isAd: false,
                    to: "",
                },
                {
                    url:
                        "https://i0.hdslb.com/bfs/archive/9059b588a8d003cb6c269483930b8e6fc59f5afc.png@880w_388h_1c_95q",
                    title: "凡人修仙传今日开播",
                    isAd: false,
                    to: "",
                },
            ],
        };
    },
};
</script>


<style lang="scss" scoped>
</style>