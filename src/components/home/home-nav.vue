<template>
    <div class="home-nav w100p f-c-c">
        <div class="body response-width f">
            <ul class="left f">
                <li>
                    <i class="icon iconfont"></i>
                    <span>首页</span>
                </li>
                <li>
                    <i class="icon iconfont"></i>
                    <span>动态</span>
                </li>
                <li>
                    <i class="icon iconfont"></i>
                    <span>排行榜</span>
                </li>
                <li>
                    <i class="icon iconfont"></i>
                    <span>频道</span>
                </li>
            </ul>
            <div class="middle f-col ">
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                <div class="it">
                    <span class="name">动画</span>
                    <span class="count">999+</span>
                </div>
                  <div class="it more">
                    <span class="name">更多</span>
                    <span class="count"> +</span>
                </div>
                
            </div>
            <div class="right f-col">
                <div class="it">
                    <i class="iconfont"></i>
                     <span class="name">专栏</span>
                </div>
                <div class="it">
                    <i class="iconfont"></i>
                     <span class="name">直播</span>
                </div>
                <div class="it">
                    <i class="iconfont"></i>
                     <span class="name">活动</span>
                </div>
                <div class="it">
                    <i class="iconfont"></i>
                     <span class="name">课堂</span>
                </div>
                <div class="it">
                    <i class="iconfont"></i>
                     <span class="name">小黑屋</span>
                </div>
                <div class="it">
                    <i class="iconfont"></i>
                     <span class="name">音乐PLUS</span>
                </div>
              
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@mixin f-c-c {
    display: flex;
    align-items: center;
    justify-content: center;
}
@mixin dynamic-width($default, $max, $mid, $min) {
    width: $default;
    @media screen and (max-width: 1870px) {
        width: $max;
    }
    @media screen and (max-width: 1654px) {
        width: $mid;
    }
    @media screen and (max-width: 1438px) {
        width: $min;
    }
}

.home-nav {
    .body {
        padding: 20px 0;
        border: 1px solid red;
        font-size:14px;
        justify-content: space-between;
    }
    .left {
        li {
            flex:1;
            width: 66px;
            height: 68px;
            display: block;
            @include f-c-c;

            @include dynamic-width(66px,58px,50px,50px);
        }
    }
    .middle{
        height:68px;
        flex:1;
        flex-wrap: wrap;
       
        
        .it{
            height:34px;
            display:flex;
            align-items: center;
        }
        .more{
            display: none;
        }

         @media screen and(max-width:1455px){
            .it:nth-child(n+16){
                display: none;
            }
            .more{
                display: flex !important;
            }
        }
    }
    .right{
        flex-wrap:wrap;
        height:68px;
        @include dynamic-width(289px, 242px,220px , 220px);
        .it{
            height:34px;
            display: flex;
            align-items: center;
        }
    }
}
</style>