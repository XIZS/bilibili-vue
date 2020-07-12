<template>
    <nav-bubble>
        <div class="nav-bubble-history">
            <!-- 选项 -->
            <div class="nav-items">
                <label class="item">
                    <input type="radio" v-model="selectedItem" value="video" name="history" />
                    <span class="item-text">
                        视频
                        <span class="dt">历史</span>
                    </span>
                </label>
                <label class="item">
                    <input type="radio" v-model="selectedItem" value="live" name="history" id />
                    <span class="item-text">
                        直播
                        <span class="dt">历史</span>
                    </span>
                </label>
                <label class="item">
                    <input type="radio" v-model="selectedItem" value="column" name="history" id />
                    <span class="item-text">
                        专栏
                        <span class="dt">历史</span>
                    </span>
                </label>
            </div>

            <!-- !!!  意思事项, 一次20个,超过显示"查看全部",没超过不显示 -->
            <!-- 具体内容 -->
            <div class="items-content" v-show="selectedItem==='video'">
                <nav-bubble-history-item :histories="videoHistories" category="video"></nav-bubble-history-item>
            </div>
            <div class="items-content" v-show="selectedItem==='live'">
                <nav-bubble-history-item :histories="liveHistories" category="live"></nav-bubble-history-item>
            </div>
            <div class="items-content" v-show="selectedItem==='column'">
                <nav-bubble-history-item :histories="columnHistories" category="column"></nav-bubble-history-item>
            </div>
        </div>
    </nav-bubble>
</template>
<script>
import NavBubbleHistoryItem from './nav-bubble-history-item.vue'
export default {
    components:{
        NavBubbleHistoryItem
    },
    mounted() {
        this.LoadHistories("video");
        this.LoadHistories("live");
        this.LoadHistories("column");
    },
    data() {
        return {
            selectedItem: "column",

            videoHistories: [],
            liveHistories: [],
            columnHistories: []
        };
    },
    methods: {
        LoadHistories(value) {
            this.reqGet(value + "Histories").then(res => {
                this[value + "Histories"] = res;
            });
        },
    },
    watch: {
        selectedItem: function(newVal) {
            if (this[newVal + "Histories"].length > 0) {
                return;
            }
            this.LoadHistories(newVal);
        }
    }
};
</script>
<style lang="scss" scoped>
input[type="radio"] {
    display: none;
}
.nav-bubble-history {
    width: 370px;

    .nav-items {
        color: #999;
        font-size: 12px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        height: 48px;
        border-bottom: 1px solid #f2f2f2;

        .item {
            cursor: pointer;
            display: block;
            input:checked + .item-text {
                padding: 4px 10px;
                background: #00a1d6;
                display: inline-block;
                border-radius: 14px;
                color: white;
                margin-right: 14px;
                margin-left: -10px;
                > .dt {
                    display: inline;
                }
            }
            &:first-child input:checked + .item-text {
                margin-left: 0;
            }
        }
        .dt {
            display: none;
        }
        .item-text {
            margin-right: 24px;
            transition: all ease 0.3s;
        }
    }

    .items-content {
        position: relative;
        min-height: 120px;
        max-height: 469px;
        overflow: auto;

        .group {
            .time {
                padding: 15px 0 4px 20px;
                font-size: 12px;
                color: #999;
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
}
</style>

