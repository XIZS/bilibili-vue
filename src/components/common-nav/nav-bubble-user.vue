<template>
    <nav-bubble>
        <div
            style="width:280px"
            class="nav-bubble-user"
            @updateShowBubble="updateShowBubble"
            :showBubble="showBubble"
        >
            <div class="avatar">
                <img
                    style="width:68px;height:68px;"
                    src="http://i0.hdslb.com/bfs/face/96dedf9951ec18abf83d64a7664f1f4438c8e512.jpg@70w_70h_1c_100q.webp"
                    alt
                />
            </div>
            <div class="con">
                <div class="row1 username">{{user.username}}</div>
                <div class="row2 level f-c">
                    <div class="row1 f-ac">
                        <div>等级: {{user.level}}</div>
                        <div
                            style="margin-left:auto;font-size:12px;color:#999;"
                        >{{user.currentExperience}} / {{user.upgradeExperience}}</div>
                    </div>
                    <a href="/" class="f-ac">
                        <div class="progress-bar">
                            <div
                                class="current-progress"
                                :style="{width:currentExperiencePercentage+'%'}"
                            ></div>
                        </div>
                    </a>
                </div>
                <div class="row3 f" style="border-bottom:1px solid #f4f4f4">
                    <div class="f">
                        <span class="f-ac" style="margin-right:20px;">
                            <i
                                class="iconfont icon-coin"
                                style="color:#00a1d6;font-size:18px;padding:1px;margin-right:5px;"
                            ></i>
                            {{user.coin}}
                        </span>
                        <span class="f-ac">
                            <i
                                class="iconfont icon-bcoin"
                                style="color:rgb(255, 174, 0);font-size:18px;padding:1px;margin-right:5px;"
                            ></i>
                            {{user.bCoin}}
                        </span>
                    </div>
                    <div style="margin-left:auto;">
                        <i
                            class="iconfont icon-email"
                            style=" margin-right:5px;font-size:20px;"
                            :style="{color:user.isBindingEmail?'#00a1d6':'#aaa'}"
                        ></i>
                        <i
                            class="iconfont icon-phone1"
                            style=" font-size:20px;"
                            :style="{color:user.isBindingPhone?'#00a1d6':'#aaa'}"
                        ></i>
                    </div>
                </div>
                <div class="row4 f-jc-sb f-c-f1 cf12">
                    <span>
                        <div class="item-key">关注</div>
                        <div class="item-value">{{user.following|nonZero}}</div>
                    </span>
                    <span>
                        <div class="item-key">粉丝</div>
                        <div class="item-value">{{user.followers|nonZero}}</div>
                    </span>
                    <span>
                        <div class="item-key">动态</div>
                        <div class="item-value">{{user.dynamic|nonZero}}</div>
                    </span>
                </div>
                <div class="row5">
                    <div>
                        <i class="iconfont icon-Union"></i>个人中心
                    </div>
                    <div>
                        <i class="iconfont icon-Subtract2"></i>投稿管理
                    </div>
                    <div>
                        <i class="iconfont icon-Union1"></i>B币钱包
                    </div>
                    <div>
                        <i class="iconfont icon-Subtract6"></i>订单中心
                    </div>
                    <div>
                        <i class="iconfont icon-Subtract4"></i>直播中心
                    </div>
                    <div>
                        <i class="iconfont icon-Subtract5"></i>我的课程
                    </div>
                </div>
            </div>
        </div>
    </nav-bubble>
</template>
<script>
import NavBubble from "./nav-bubble.vue";
export default {
    mounted() {
        console.log(this.$el.parentElement.firstElementChild);
    },
    components: {
        NavBubble
    },
    data() {
        return {
            showBubble: false,
            user: {
                username: "11ZS",
                level: 5,
                upgradeExperience: 28800,
                currentExperience: 21460,
                coin: 1904.0,
                bCoin: 0,
                isBindingEmail: true,
                isBindingPhone: true,
                following: 148,
                followers: 0,
                dynamic: 0
            }
        };
    },
    methods: {
        updateShowBubble(value) {
            if (value) {
                this.$el.parentElement.firstElementChild.classList.add(
                    "active"
                );
            } else {
                this.$el.parentElement.firstElementChild.classList.remove(
                    "active"
                );
            }
            this.showBubble = value;
        }
    },
    computed: {
        currentExperiencePercentage() {
            return (
                (this.user.currentExperience / this.user.upgradeExperience) *
                100
            );
        }
    }
};
</script>
<style lang="scss" scoped>
.nav-bubble-user {
    color: black;
    position: relative;
    .avatar {
        position: absolute;
        top: 0;
        left: 50%;
        transform:translate(-50%,-50%);
        border-radius: 100%;
        overflow: hidden;
        width: 68px;
        height: 68px;
    }
    .con {
        .username {
            color: #212121;
            padding-top: 42px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
        }
        .level {
            padding: 0 20px;

            .row1 {
                width: 100%;
                margin: 20px 0 5px;
            }

            a {
                height: 10px;
                .progress-bar {
                    height: 2px;
                    width: 100%;
                    background: #f4f4f4;
                    .current-progress {
                        height: 100%;
                        width: 75%;
                        background: #f3cb85;
                    }
                }
            }
        }
        .row3 {
            padding: 14px 20px;
        }
        .row4 {
            height: 58px;
            border-bottom: 1px solid #f4f4f4;
            > * {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                cursor: pointer;
            }
            > span:hover {
                color: #00a1d6;

                .item-key {
                    color: #00a1d6;
                }
            }
            .item-key {
                color: #999;
                display: flex;
                justify-content: center;
            }
            .item-value {
                font-size: 16px;
                font-weight: 600;
                display: flex;
                justify-content: center;
            }
        }
        .row5 {
            font-size: 14px;
            cursor: pointer;
            padding: 5px 0;

            > div {
                padding: 8px 23px;
                display: flex;
                align-items: center;
                .iconfont {
                    font-size: 24px;
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>