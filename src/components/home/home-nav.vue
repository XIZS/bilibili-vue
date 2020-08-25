<template>
    <div class="home-nav w100p">
        <div class="body response-width f-ac" style="margin:0 auto;">
            <home-nav-left></home-nav-left>

            <span class="l"></span>
            <div class="middle f-col">
                <div class="it" v-for="(item,index) in channels" :key="index">
                    <div class="f-ac h100p" :ref="`channele${item.channel}`">
                        <div class="f-ab">
                            <span class="name">{{item.name}}</span>
                            <span class="count f-c-c">{{item.newAdd}}</span>
                        </div>
                        <bili-bubble
                            v-if="item.childrenChannel&&item.childrenChannel.length>0"
                            :location="index%2!==0?'bottom':'top'"
                            :style="{transform:`translate(-10px,${index%2!==0?'12px':'-12px'})`,zIndex:2}"
                        >
                            <div class="chi-cha">
                                <div
                                    class="cc"
                                    v-for="(it,ind) in item.childrenChannel"
                                    :key="ind"
                                >{{it.name}}</div>
                            </div>
                        </bili-bubble>
                    </div>
                </div>
                <div class="more it">
                    <div class=" f-ac h100p">
                         <div class="f-ab">
                            <span class="name">更多</span>
                            <span class="count f-c-c"> </span>

                        </div>
                        <bili-bubble
                            location="bottom"
                            style="transform:translate(-10px,12px);z-index:2"
                        >
                            <div class="chi-cha">
                                <div class="cc">搞笑</div>
                                <div class="cc">动物园</div>
                                <div class="cc">美食圈</div>
                                <div class="cc">单机游戏</div>
                                <div class="cc">VLOG</div>
                            </div>
                        </bili-bubble>
                    </div>
                </div>
            </div>
            <span class="l"></span>
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
<script>
import HomeNavLeft from "../../components/home/home-nav-left.vue";
import channels from "../../assets/resource/channels.js";
export default {
    components: {
        HomeNavLeft,
    },
    mounted() {},
    data() {
        return {
            channels: channels,
        };
    },
    methods: {},
};
</script>
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
.bili-bubble-enter-active,
.bili-bubble-leave-active {
    transition: all 0.3s;
}
.bili-bubble-enter,
.bili-bubble-leave-to {
    top: 90% !important;
    opacity: 0;
}

.home-nav {
    .body {
        padding: 20px 0;
        font-size: 14px;
        justify-content: space-between;
    }
    .l {
        height: 46px;
        margin: 0 20px;
        width: 0;
        border-left: 1px solid #e7e7e7;
        @media screen and (max-width: 1654px) {
            margin: 0 8px;
        }
    }

    .middle {
        height: 68px;
        flex: 1;
        flex-wrap: wrap;

        .it {
            cursor: pointer;
            height: 34px;
            display: flex;
            align-items: center;
            .name {
                transition: all ease 0.2s;
            }
            &:hover .name {
                color: #00a1d6;
            }
            .count {
                font-size: 12px;
                background: #73c9e5;
                border-radius: 2px;
                color: white;
                transform: scale(0.85);
                width: 32px;
            }

            .chi-cha {
                cursor: default;
                font-size: 12px;
                display: inline-flex;
                flex-wrap: wrap;
                writing-mode: vertical-lr;
                max-height: 148px;
                height: max-content; //这个是重点要添加的
                .cc {
                    cursor: pointer;
                    min-width: 60px;
                    writing-mode: horizontal-tb;
                    box-sizing: border-box;
                    padding: 10px 13px;
                    height: 37px;
                    transition: all 0.2s ease;
                    &:hover {
                        color: #00a1d6;
                    }
                }
            }
        }
        .more {
            display: none;
        }

        @media screen and(max-width:1455px) {
            .it:nth-child(n + 16) {
                display: none;
            }
            .more {
                display: flex !important;
            }
        }
    }
    .right {
        flex-wrap: wrap;
        height: 68px;
        @include dynamic-width(289px, 242px, 220px, 220px);
        .it {
            height: 34px;
            display: flex;
            align-items: center;
        }
    }
}
</style>