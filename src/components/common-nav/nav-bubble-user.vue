<template>
    <nav-bubble
    :width="280"
        style="width:280px"
        class="nav-bubble-user"
        @updateShowBubble="updateShowBubble"
        :showBubble="showBubble"
    >
        <div slot="top" style="border-radius:100%;overflow: hidden;width:68px;height:68px;">
            <img
                style="width:68px;height:68px;"
                src="http://i0.hdslb.com/bfs/face/96dedf9951ec18abf83d64a7664f1f4438c8e512.jpg@70w_70h_1c_100q.webp"
                alt
            />
        </div>
        <div class="con">
            <div class="row1 username">{{user.username}}</div>
            <div class="row2 level f-c" ref="levelDis">
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
                <bili-bubble :target="$refs['levelDis']">
                    <div style="padding:15px; width:240px;white-space: normal;" class="bs-b">
                        <div style="margin-bottom:12px;">作为LV5 ，你可以：</div>
                        <div style="margin-bottom:14px;">
                            1购买邀请码(1个/月)
                            <br>
                            2、发射个性弹幕（彩色、高级、顶部、底部）
                            <br>
                            3、参与视频互动（评论、添加tag）
                            <br>
                            4、投稿成为偶像
                        </div>
                        <a href="" style="color:#00a1d6">
                            会员等级相关说明 <i class="iconfont icon-right" style="font-size:16px; color:#00a1d6"></i>
                        </a>
                    </div>
                </bili-bubble>
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
            <!-- 第二栏 -->
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
            <!-- 第三栏 -->
            <div class="row5" >
                <a>
                    <i class="iconfont icon-user"></i>个人中心
                </a>
                <a>
                    <i class="iconfont icon-video-file"></i>投稿管理
                </a>
                <a>
                    <i class="iconfont icon-wallet"></i>B币钱包
                </a>
                <a>
                    <i class="iconfont icon-order"></i>订单中心
                </a>
                <a>
                    <i class="iconfont icon-camera"></i>直播中心
                </a>
                <a>
                    <i class="iconfont icon-book"></i>我的课程
                </a>
            </div>
            <!-- 第四栏 -->
            <div class="row6 " ref="selectBar">
                <div class="select-btn f-ac w100p bs-b c-p ts-ae5" >
                    <i class="iconfont icon-diqiu" style="margin-right:5px;"></i>
                    <span>语言: </span>
                    <span>简体中文</span>
                    <i class="iconfont icon-right ml-a"></i>

                    <!-- 该模块模式有:普通模式和箭头模式,箭头可以进行偏移设置,主体也可偏移设置,可以设置位置和对齐位置,还可以绑定对象 -->
                    <bili-bubble  :target="target">
                        <div style="padding:8px 0; width:240px;">
                            <div style="padding:8px 15px;">
                                简体中文
                            </div>
                            <div style="padding:8px 15px;">
                                繁体中文
                            </div>
                        </div>
                    </bili-bubble>
                    
                </div>
            </div>
            <div class="row7">
                <a href="" class="f-ac" style=" padding:8px 23px;">
                    <i class="iconfont icon-exit" style="margin-right:5px;"></i>
                    退出
                </a>
            </div>
        </div>
    </nav-bubble>
</template>
<script>
import NavBubble from "./nav-bubble.vue";
export default {
    mounted() {
        this.target=this.$refs['selectBar'];
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
            },
            target:this.$refs['selectBar']
        };
    },
    methods: {
        updateShowBubble(value) {
            if (value) {
                this.$el.parentElement.firstElementChild.classList.add('active');
            } else {
                this.$el.parentElement.firstElementChild.classList.remove('active');
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
        },
        selectLanguageTarget(){
            return this.$refs['selectBar']
        }
    }
};
</script>
<style lang="scss" scoped>
.nav-bubble-user {
    color: black;

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
            border-bottom:1px solid #f4f4f4;
            > a {
                padding: 8px 23px;
                display: flex;
                align-items: center;
                .iconfont {
                    font-size: 24px;
                    margin-right: 5px;
                }
                &:hover{
                    background:#f4f4f4;
                }
            }
        }
        .row6{
            padding:7px 0;
            border-bottom:1px solid #f4f4f4;

            .select-btn{
                padding:8px 23px;

                &:hover{
                    background: #f4f4f4;
                }
            }
        }
        .row7{
            padding:7px 0;

            a:hover{
                
                    background: #f4f4f4;
               
            }
        }
    }

    .iconfont{
        font-size:24px;
        color:#999;
    }
}
</style>