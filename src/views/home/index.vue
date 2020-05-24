<template>
    <div class="home">
        <!-- 这个页面是网站的首页..内容包括 顶部的导航栏,banner,频道导航栏,推荐(轮播图,推荐商品) -->
        <home-head></home-head>
        <div class="response-width"></div>

        <!-- 右侧模块导航栏,特征:在首页的时候position为absolute,其他状态为relative -->
    </div>
</template>

<script  >
import HomeHead from './home-head.vue'
export default {
    components:{
        HomeHead
    }
}
</script>
