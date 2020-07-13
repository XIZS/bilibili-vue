<template>
    <div class="home-head line">
        <div
            class="banner-bar"
            style="background-image:url(http://i0.hdslb.com/bfs/archive/5e649b0c6f1d395833b9b8c0b59e5d84780cebf9.png)"
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
                    src="http://i0.hdslb.com/bfs/archive/17df21dc0e41c449b8f10bfeefff08e8923ca458.png"
                    style="height:100%"
                />
            </a>
            <a href="/" class="banner-title" v-show="showBannerTitle">致敬你的青春与热爱！点击收看>></a>
        </div>
    </div>
</template>


<script >
import CommonNav from "../../components/common-nav";
export default {
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