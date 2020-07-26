<template>
    <div class="hsv home-show1-videos w100p h100p f">
        <div class="item" v-for="(item,index) in currentVideos" :key="index">
            <div class="wh100p bo" style="overflow: hidden; position:relative;border-radius:2px;">
                <img class="wh100p" :src="item.image" alt />
                <div class="info">
                    <div class="title">{{item.title}}</div>
                    <div class="up f-ac">
                        <i class="iconfont icon-up" style="font-size:16px;"></i>
                        <span>{{item.upName}}</span>
                    </div>
                    <div class="play">{{(item.play/10000).toFixed(2)}}万播放</div>
                </div>
            </div>
            <div class="later-play">
                <i class="iconfont icon-later-play"></i>
                <span class="msg">稍后再看</span>
            </div>
        </div>
    </div>
</template>
<script>
//idea暴露更新接口,由消息管理器来控制更新数据,
//前端有监听服务器消息的管理程序,有一个定时的请求,获取服务端发来的指令,
//其中有一个指令是更新数据指令,服务器告诉客户端要更新一些数据,客户端在接受之后查找当前注册的数据请求是否包含该名称数据,
//有则启动该方法,获取数据

export default {
    mounted() {
        this.reqGet("homeShow1Videos").then((res) => {
            this.videos = res;
        });
    },
    data() {
        return {
            current: 0,
            videos: [],
        };
    },
    computed: {
        currentVideos() {
            return this.videos.slice(this.current * 10, this.current * 10 + 10);
        },
    },
};
</script>
<style lang="scss" scoped>
.hsv {
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and(max-width:1870px) {
        .item:nth-child(n + 9) {
            display: none;
        }
    }
    @media screen and(max-width:1654px) {
        .item:nth-child(n + 7) {
            display: none;
        }
    }
    .item {
        cursor: pointer;
        position: relative;
        margin-bottom: 10px;
        box-sizing: border-box;
        width: 206px;
        height: 116px;

        border-radius: 2px;

        @media screen and(max-width:1438px) {
            width: 170px;
            height: 96px;
        }
        .bo::before {
            content: "";
            @include wh100p;
            top: 0;
            left: 0;
            position: absolute;
            border-radius: 2px;
            background: linear-gradient(
                rgba(0, 0, 0, 0) 70%,
                rgba(0, 0, 0, 0.7)
            );
            transition: all 0.2s;
        }
        &:hover .bo::before {
            background: rgba(0, 0, 0, 0.7);
        }
        &:hover .info {
            top: 0;

            .title {
                height: 36px;
                white-space: normal;
            }
        }
        .info {
            box-sizing: border-box;
            color: white;
            font-size: 14px;
            position: absolute;
            left: 0;
            top: 64px;
            padding: 26px 10px 10px;
            transition: all 0.2s;

            @media screen and(max-width:1438px) {
                padding: 8px 10px 10px;
            }

            @include wh100p;
            .title {
                height: 18px;
                line-height: 18px;
                margin-bottom: 8px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .up {
                .iconfont {
                    height: 16px;
                    margin-right: 5px;
                }
                font-size: 12px;
                margin-bottom: 3px;
            }
            .play {
                font-size: 12px;
            }
        }

        .later-play {
            opacity: 0;
            z-index: 1;
            @include f-c-c;
            position: absolute;
            width: 28px;
            height: 28px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            right: 8px;
            bottom: 8px;
            transition: all 0.2s ease;
            .iconfont {
                font-size: 26px;
            }

            .msg {
                opacity: 0;
                font-size: 12px;
                position: absolute;
                white-space: nowrap;
                left: 50%;
                transform: translateX(-50%) scale(0);
                top: -30px;
                background: rgba(0, 0, 0, 0.7);
                padding: 4px 8px;
                border-radius: 4px;
                transition: all 0.1s ease;
            }
            &:hover .msg {
                opacity: 1;
                transform: translateX(-50%) scale(1);
            }
        }
        &:hover .later-play {
            transition-delay: 0.2s;

            opacity: 1;
        }
    }
}
</style>