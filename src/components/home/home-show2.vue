<template>
    <div class="home-show2 f-jc-sb">
        <div class="left">
            <div class="top"></div>
            <div class="videos f f-jc-sb">
                <div class="video" v-for="(item,index) in videos" :key="index">
                    <spread-video :video="item"></spread-video>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="online">
                <a href>在线列表</a>
            </div>
            <a href class="w100p por">
                <img
                    class="w100p"
                    src="https://i0.hdslb.com/bfs/sycp/creative_img/202007/267bdbc1e41748476f5ca5a18417f815.jpg"
                    alt
                />
                <span class="ad f-c-c">
                    <span style="transform:scale(0.85);position: absolute;">广告</span>
                </span>
            </a>
        </div>
    </div>
</template>
<script>
import SpreadVideo from "../common/spread-video.vue";
export default {
    components: {
        SpreadVideo,
    },
    data() {
        return {
            videos: [
                {
                    id: "32423",
                    image:
                        "https://i0.hdslb.com/bfs/archive/b744a054d3c68cc545ce0dc10c8e207b95dd9890.jpg@412w_232h_1c_100q.jpg",
                    title:
                        "我欠AirPods一个迟来的道歉，4年无对手的耳机只配“听个响”？2年深度体验",
                    duration: 472,
                    up: {
                        name: "林捂捂",
                        id: "342",
                    },
                },
                {
                    id: "32423",
                    image:
                        "https://i0.hdslb.com/bfs/archive/b744a054d3c68cc545ce0dc10c8e207b95dd9890.jpg@412w_232h_1c_100q.jpg",
                    title:
                        "我欠AirPods一个迟来的道歉，4年无对手的耳机只配“听个响”？2年深度体验",
                    duration: 472,
                    up: {
                        name: "林捂捂",
                        id: "342",
                    },
                },
                {
                    id: "32423",
                    image:
                        "https://i0.hdslb.com/bfs/archive/b744a054d3c68cc545ce0dc10c8e207b95dd9890.jpg@412w_232h_1c_100q.jpg",
                    title:
                        "我欠AirPods一个迟来的道歉，4年无对手的耳机只配“听个响”？2年深度体验",
                    duration: 472,
                    up: {
                        name: "林捂捂",
                        id: "342",
                    },
                },
                {
                    id: "32423",
                    image:
                        "https://i0.hdslb.com/bfs/archive/b744a054d3c68cc545ce0dc10c8e207b95dd9890.jpg@412w_232h_1c_100q.jpg",
                    title:
                        "我欠AirPods一个迟来的道歉，4年无对手的耳机只配“听个响”？2年深度体验",
                    duration: 472,
                    up: {
                        name: "林捂捂",
                        id: "342",
                    },
                },
                {
                    id: "32423",
                    image:
                        "https://i0.hdslb.com/bfs/archive/b744a054d3c68cc545ce0dc10c8e207b95dd9890.jpg@412w_232h_1c_100q.jpg",
                    title:
                        "我欠AirPods一个迟来的道歉，4年无对手的耳机只配“听个响”？2年深度体验",
                    duration: 472,
                    up: {
                        name: "林捂捂",
                        id: "342",
                    },
                },
                {
                    id: "32423",
                    image:
                        "https://i0.hdslb.com/bfs/archive/b744a054d3c68cc545ce0dc10c8e207b95dd9890.jpg@412w_232h_1c_100q.jpg",
                    title:
                        "我欠AirPods一个迟来的道歉，4年无对手的耳机只配“听个响”？2年深度体验",
                    duration: 472,
                    up: {
                        name: "林捂捂",
                        id: "342",
                    },
                },
            ],
        };
    },
};
</script>
<style lang="scss">
.home-show2 {
    .left {
        @include dynamic-width(1286px, 1070px, 854px, 710px);

        .top {
            height: 36px;
            border: 1px solid red;
            margin-bottom: 16px;
        }

        .videos {
            @media screen and (max-width: 1870px) {
                .video:nth-child(n+6){
                    display: none;
                }
            }
             @media screen and (max-width: 1654px) {
                .video:nth-child(n+5){
                    display: none;
                }
            }
        }
    }
    .right {
        width: 320px;
        @media screen and(max-width: 1438px) {
            width: 265px;
        }

        .online {
            @include f-c-c;
            margin: 3px 0 19px;
            background: #f4f4f4;
            border: 1px solid #e7e7e7;
            height: 30px;
            color: #00a1d6;
            font-size: 12px;
        }
        .ad-wrap {
        }
        .ad {
            margin: 2px;
            width: 34px;
            height: 18px;
            position: absolute;
            left: 5px;
            bottom: 5px;
            font-size: 12px;
            border-radius: 2px;
            background: #d4d4d4;
        }
    }
}
</style>