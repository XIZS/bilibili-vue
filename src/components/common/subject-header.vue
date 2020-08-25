<template>
    <div class="home-head line">
        <div
            class="banner-bar"
            :style="{backgroundImage:`url(${bannerImage})`}"
            @mouseover="showBannerTitle=true"
            @mouseout="showBannerTitle=false" 
        >
            <common-nav style="position:absolute;top:0;z-index:1" />
        </div>
        <div 
            class="response-width banner-content"
            @mouseover="showBannerTitle=true"
            @mouseout="showBannerTitle=false"
        >
            <a class="logo">
                <img
                    :src="logo"
                    style="height:100%"
                />
            </a>
            <a href="/" class="banner-title" v-show="showBannerTitle">{{bannerTitle}}</a>
        </div>
    </div>
</template>


<script >
import CommonNav from "../../components/common-nav";
export default {
    props:{
        bannerImage:{
            type:String,
        },
        bannerTitle:{
            type:String
        },
        logo:{
            type:String
        }
    },
    components: {
        CommonNav
    },
    data() {
        return {
            showBannerTitle: false
        };
    },
    methods:{
        mouseover(){
        },
        mouseout(){
        }
    }
 
};
</script>


<style lang="scss" scoped>
.line {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    min-height: 155px;
    height: 9.375vw;
    .banner-bar {
        position: absolute;
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%;
        &::before {
            content: "";
            position: absolute;
            background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
            height: 100px;
            width: 100%;
        }
    }
    .banner-content {
        z-index: 0;
        position: relative;
        .logo {
            width: 220px;
            height: 50%;
            position: absolute;
            bottom: 10px;
            img {
                height: 100%;
            }
        }
        .banner-title {
            position: absolute;
            bottom: 25px;
            left: 280px;
            font-size: 14px;
            line-height: 20px;
            padding: 6px 10px;
            background: rgba(0, 0, 0, 0.68);
            color: white;
        }
    }
}
</style>