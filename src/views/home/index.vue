<template>
    <div class="home">
        <div class>
            <!-- 这个页面是网站的首页..内容包括 顶部的导航栏,banner,频道导航栏,推荐(轮播图,推荐商品) -->
            <!-- <home-head></home-head> -->
            <subject-header
                bannerImage="http://i0.hdslb.com/bfs/archive/5e649b0c6f1d395833b9b8c0b59e5d84780cebf9.png"
                bannerTitle="致敬你的青春与热爱！点击收看>>"
                logo="http://i0.hdslb.com/bfs/archive/17df21dc0e41c449b8f10bfeefff08e8923ca458.png"
            ></subject-header>
            <home-nav></home-nav>
        </div>
        <div class="home-shows">
            <home-show1 style="margin-bottom:40px;"></home-show1>
            <home-show2 style="margin-bottom:40px;"></home-show2>
        </div>

        <div class="response-width"></div>

        <!-- 右侧模块导航栏,特征:在首页的时候position为absolute,其他状态为relative -->
    </div>
</template>

<script  >
import SubjectHeader from "../../components/common/subject-header.vue";
import HomeHead from "./home-head.vue";
import HomeNav from "../../components/home/home-nav.vue";
import HomeShow1 from "../../components/home/home-show1.vue";
import HomeShow2 from "../../components/home/home-show2.vue";
export default {
    components: {
        SubjectHeader,
        HomeHead,
        HomeNav,
        HomeShow1,
        HomeShow2,
        
    },
};
</script>
<style lang="scss" scoped>
.home-shows {
    margin: 0 auto;
    width: 1630px;
    @include dynamic-width(1630px, 1414px, 1198px, 999px);
}
</style>