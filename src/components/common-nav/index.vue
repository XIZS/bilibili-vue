<template>
    <nav class="common-nav">
        <div class="left">
            <ul>
                <li to>
                    <i class="iconfont icon-bilibili-fill" style="margin-right:5px;"></i> 主站
                </li>
                <li v-to="'aaa'">番剧</li>
                <li to>游戏中心</li>
                <li to>直播</li>
                <li to>会员购</li>
                <li to>漫画</li>
                <li to>赛事</li>
                <li to>
                    <i class="iconfont icon-phone"></i>下载APP
                </li>
            </ul>
        </div>
        <div class="middle">
            <div class="search">
                <!-- TODO 下面input内容为remote调用 -->
                <input type="text" name id placeholder="青你2训练生绝美群像" />
                <div class="btn">
                    <i class="iconfont icon-search"></i>
                </div>
            </div>
        </div>
        <div class="right">
            <ul>
                <li>
                    <div class="search-btn" style="color:black">
                        <i class="iconfont icon-search"></i>
                    </div>
                </li>
                <li style="width:36px;height:36px;">
                    <div class="avatar">
                        <img
                            src="http://i0.hdslb.com/bfs/face/96dedf9951ec18abf83d64a7664f1f4438c8e512.jpg@70w_70h_1c_100q.webp"
                            alt
                        />
                    </div>
                    <nav-bubble-user />
                </li>
                <li>
                    <span>大会员</span>
                    <nav-bubble-member />
                </li>
                <li>
                    <span>消息</span>
                    <nav-bubble-message></nav-bubble-message>
                </li>
                <li>
                    <span>动态</span>
                    <nav-bubble-dynamics></nav-bubble-dynamics>
                </li>
                <li>
                    <span>收藏</span>
                    <nav-bubble-collect></nav-bubble-collect>
                </li>
                <li>
                    <span>历史</span>
                    <nav-bubble-history></nav-bubble-history>
                </li>
                <li>创作中心</li>
                <li>
                    <bili-button
                        @click="contribute"
                        style="width:100px;background:#fb7299;height:100%;display:flex;align-items:center;justify-content:center;border-radius:2px;"
                    >投稿</bili-button>
                    <nav-bubble-upload></nav-bubble-upload>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>
import NavBubble from "./nav-bubble.vue";
import NavBubbleUser from "./nav-bubble-user.vue";
import NavBubbleMember from "./nav-bubble-member.vue";
import NavBubbleMessage from "./nav-bubble-message.vue";
import NavBubbleDynamics from "./nav-bubble-dynamics.vue";
import NavBubbleCollect from "./nav-bubble-collect.vue";
import NavBubbleHistory from "./nav-bubble-history.vue";
import NavBubbleUpload from './nav-bubble-upload.vue'
export default {
    components: {
        NavBubble,
        NavBubbleUser,
        NavBubbleMember,
        NavBubbleMessage,
        NavBubbleDynamics,
        NavBubbleCollect,
        NavBubbleHistory,
        NavBubbleUpload
    },
    methods: {
        contribute() {}
    }
};
</script>


<style lang="scss" scoped>
.common-nav {
    display: flex;
    justify-content: space-between;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
        Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    font-size: 14px;
    padding: 10px 24px;
    color: white;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 56px;
    box-sizing: border-box;
    position: relative;
    & > * {
        flex: 1;
    }

    .left ul {
        height: 100%;
        display: flex;
        position: relative;
        li {
            cursor: pointer;
            white-space: nowrap;
            margin-right: 12px;
            display: flex;
            align-items: center;

            .iconfont {
                font-size: 18px;
            }
        }
    }
    .middle {
        @media screen and (max-width: 1110px) {
            display: none;
        }
        width: 500px;
        flex: initial;
        margin: 0 10px;

        .search {
            display: flex;
            border-radius: 2px;
            height: 100%;
            overflow: hidden;

            input {
                outline: none;
                border: none;
                padding: 0 15px;
                width: 100%;
                background: #eee;
            }
            .btn {
                flex-shrink: 0;
                background: #e7e7e7;
                display: flex;
                align-items: center;
                width: 48px;
                justify-content: center;

                .iconfont {
                    font-size: 18px;
                    color: #505050;
                }
            }
        }
    }

    .right {
        ul {
            display: flex;
            justify-content: flex-end;
        }

        .search-btn {
            display: none;
            .iconfont {
                color: white;
                font-size: 20px;
            }
            @media screen and (max-width: 1110px) {
                display: inline;
            }
        }

        li {
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-left: 12px;
            white-space: nowrap;
            position:relative;
            .avatar {
                border-radius: 100%;
                height: 100%;
                overflow: hidden;
                transition: all 0.5s ease;
                &.active {
                    transform: translateY(30px) scale(1.5);
                }
                img {
                    height: 100%;
                }
            }
        }
    }
}
</style>