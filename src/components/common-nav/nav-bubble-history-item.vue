<template>
    <div class="n-b-h-i ">
        <template v-if="histories.length>0">
            <div class="group f-col" v-for="(item,index) in formatHistories" :key="index">
                <div class="time">{{item.date}}</div>
                <div class="items f-col">
                    <!-- 具体历史项 -->
                    <div class="item f" v-for="(it,ind) in item.list" :key="ind">
                        <!-- 封面 区别:视频有进度条,直播有直播状态,专栏宽度81px -->
                        <div class="cover" :class="{'cover-column':category==='column'}">
                            <img class="cover" :src="it.cover" alt />
                            <div class="process-wrap" v-if="category==='video'">
                                <div class="process" :style="{width:it.process+'%'}"></div>
                            </div>
                            <div class="live-status" v-if="category==='live'">
                                <div class="notlive" v-if="it.status==='notlive'">未直播</div>
                                <div class="live" v-if="it.status==='live'">直播中</div>
                            </div>
                        </div>
                        <!-- 内容 -->
                        <div class="info f-col">
                            <div class="r r1">{{it.title}}</div>
                            <div class="r r2 f">
                                <div style="margin-right:16px;" class="f">
                                    <i
                                        class="iconfont icon-phone fs-12"
                                        v-if="it.media ==='mobile'"
                                        style="margin-right:2px"
                                    ></i>
                                    <span>{{TimeFormat(it.time)}}</span>
                                </div>
                                <span>{{it.up.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else>
            <div class="f-c-c h100p w100p c-9 pa">没有历史</div>
        </template>

        <div class="all f-c-c" v-if="histories.length<20&&histories>0">
            <span class="f-c-c">查看全部</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        histories: {
            type: Array,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            formatHistories: []
        };
    },
    methods: {
        TimeFormat(time) {
            let nowDay = Math.floor(new Date() / 86400000);
            let targetTimeDay = Math.floor(new Date(time) / 86400000);
            let targetTime = new Date(time);

            if (nowDay == targetTimeDay) {
                return `今天 ${targetTime.getHours()}:${targetTime.getMinutes()}`;
            } else if (nowDay - targetTimeDay === 1) {
                return `昨天 ${targetTime.getHours()}:${targetTime.getMinutes()}`;
            } else {
                return `${targetTime.getMonth()}-${targetTime.getDate()} ${targetTime.getHours()}:${targetTime.getMinutes()}`;
            }
        }
    },
    watch: {
        histories() {
            let result = [
                { date: "今天", list: [] },
                { date: "昨天", list: [] },
                { date: "更早", list: [] }
            ];
            let [Today, yesterday, earlier] = result;
            let nowDay = Math.floor(new Date() / 86400000);
            console.log(this.histories);
            this.histories.forEach(x => {
                let xTime = Math.floor(new Date(x.time) / 86400000);

                if (xTime == nowDay) {
                    Today.list.push(x);
                } else if (nowDay - xTime === 1) {
                    yesterday.list.push(x);
                } else {
                    earlier.list.push(x);
                }
            });
            this.formatHistories = result;
        }
    }
};
</script>

<style lang="scss">
.n-b-h-i {
    min-height: 100%;
    .group {
        .time {
            padding: 15px 0 4px 20px;
            font-size: 12px;
            color: #999;
        }
    }
    .all {
        width: 100%;
        span {
            height: 32px;
            width: 330px;
            background: #f4f4f4;
            margin: 12px 0;
        }
    }
    .item {
        padding: 8px 5px 8px 20px;
        &:hover {
            background: #f4f4f4;
            cursor: pointer;
        }
        .cover {
            width: 108px;
            height: 61px;
            border-radius: 2px;
            position: relative;
            overflow: hidden;

            &.cover-column{
                width:81px;
            }
            .process-wrap {
                height: 3px;
                width: 100%;
                background: #757575;
                position: absolute;
                bottom: 0;
                .process {
                    height: 3px;
                    background: #fb7299;
                }
            }

            .live-status {
                position: absolute;
                top: 4px;
                right: 4px;
                color: white;
                font-size: 12px;

                .notlive {
                    padding: 0 3px;
                    background: rgba(0, 0, 0, 0.5);
                }
                .live {
                    padding: 0 3px;
                    background: #fb7299;
                }
            }
        }
        .info {
            padding-left: 12px;
            .r1 {
                white-space: normal;
                height: 40px;
                margin-right: 10px;

                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                word-break: break-all;
                -webkit-line-clamp: 2;
            }
            .r2 {
                color: #999;
                font-size: 12px;
                margin-top: auto;
                align-items: baseline;
            }
        }
    }
}
</style>