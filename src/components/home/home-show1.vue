<template>
    <div class="home-show1-wrap w100p">
        <div class="home-show1 m-0-a f">
            <div class="left">
                <home-show1-carousel></home-show1-carousel>
            </div>
            <div class="right">
                <home-show1-videos></home-show1-videos>
            </div>
        </div>
    </div>
</template>
<script>
import HomeShow1Carousel from "../../components/home/home-show1-carousel.vue"
import HomeShow1Videos from '../../components/home/home-show1-videos.vue'
export default {
    components:{
        HomeShow1Carousel,
        HomeShow1Videos
    }
}
</script>
<style lang="scss" scoped>
.home-show1 {
    justify-content: space-between;
    .left {
        width: 550px;
        height: 242px;
        border-radius: 2px;
        overflow: hidden;
        @media screen and (max-width: 1438px) {
            width: 459px;
            height: 202px;
        }
    }
    .right {
        width: 1070px;
        height: 242px;
        @include dynamic-width(1070px, 854px, 638px, 530px);
        @media screen and(max-width:1438px) {
            height: 202px;
        }
    }
}
</style>