<template>
    <div class="spread-video video">
        <div
            class="show por"
            @mouseenter="startPreview"
            @mouseleave="stopPreview"
            @mousemove="updatePreview"
        >
            <!-- 封面 -->
            <img class="wh100p" ref="image" :src="video.image" alt />

            <!-- 重点部分,预览内容 -->
            <div
                v-if="preview!=null"
                class="preview poa wh100p t0"
                style="background-size:2060px;"
                :style="{backgroundImage:`url(${preview.image})`,backgroundPosition:`${previewOffsetX}px ${previewOffsetY}px`}"
            >
                <!-- 进度条 -->
                <div class="planned-speed ps-wrap w100p poa bs-b active" style="top:0;">
                    <div class="ps" :style="{width:previewPlannedSpeed+`%`}"></div>
                </div>
            </div>

            <!-- 弹幕 -->
            <div class="danmus poa tl0 wh100p" v-if="preview!=null" v-show="openPreview">
                <bili-danmu
                    class="danmu"
                    timeRange="3-5"
                    :content="item"
                    v-for="(item,index) in preview.danmus"
                    :is-move="danmuIndex>index"
                    :class="[index%2==1?'row2':'row1']"
                    :key="index"
                ></bili-danmu>

                <!-- 正在 -->

                <!-- <div
                    class="danmu poa t0"
                    :class="[index%2==1?'row2':'row1',danmuIndex>index?'anim':'' ]"
                    v-for="(item,index) in preview.danmus"
                    :key="index"
                    :style="danmuIndex>index&&danmuMove(`dm${index}`)"
                    :ref="`dm${index}`"
                >{{item}}</div>-->
            </div>
            <bili-later-play></bili-later-play>
        </div>
        <!-- 其他内容非主要 -->
        <div class="title">{{video.title}}</div>
        <div class="up f-ac">
            <i
                class="iconfont icon-up"
                style="font-size:16px;width:16px;height:16px;margin-right:4px;"
            ></i>
            <span class="fs-12">{{video.up.name}}</span>
        </div>
    </div>
</template>

<script>
//1下面的任务,规划好数据,其实数据只包括,基础图片,标题,用户,2当鼠标移动到界面上的时,请求预览图片数据和弹幕数据,,3请求结束后获取开启显示预览元素,4弹幕开始迭代
import elementResizeDetectorMaker from "element-resize-detector";
import BiliDanmu from "./bili-danmu.vue";
import BiliLaterPlay from "./bili-later-play.vue";

let animationController = (() => {
    let key = null;

    return {
        start(cb) {
            key = setInterval(cb, 1000);
        },
        stop() {
            clearInterval(key);
        },
    };
})();

export default {
    props: {
        video: {
            type: Object,
            required: true,
        },
    },
    components: {
        BiliDanmu,
        BiliLaterPlay,
    },
    mounted() {
        const erd = elementResizeDetectorMaker();
        erd.listenTo(this.$el, (element) => {
            this.$nextTick(() => {
                this.width = this.$el.clientWidth;
                console.log(this.width);
            });
        });

        // setInterval(() => {
        //     this.danmuIndex++;
        // }, 2000);
    },
    data() {
        return {
            danmuIndex: 0,
            width: 0,
            previewPlannedSpeed: 0,
            preview: null,
            openPreview: false,
        };
    },
    methods: {
        startPreview() {
            console.log("b");
            if (this.preview == null) {
                this.reqGet("preview", { id: this.video.id }).then((res) => {
                    this.openPreview = true;
                    console.log(res);
                    this.preview = res;
                    animationController.start(() => {
                        this.danmuIndex++;
                    });
                });
            } else {
                this.openPreview = true;
                animationController.start(() => {
                    this.danmuIndex++;
                });
            }
        },
        stopPreview() {
            this.openPreview = false;
            animationController.stop();
            this.danmuIndex = 0;
        },
        updatePreview(event) {
            this.previewPlannedSpeed = Math.floor(
                (event.offsetX / this.width) * 100
            );
        },
        danmuMove(ref) {
            console.log(this.$refs[ref][0]);
            return `left:-100px`;
        },
    },
    computed: {
        previewOffsetX() {
            if (this.video == null) {
                return 0;
            }
            return (
                ((-this.preview.imageCount * (this.previewPlannedSpeed / 100)) %
                    10) *
                206
            );
        },
        previewOffsetY() {
            if (this.video == null) {
                return 0;
            }

            return -Math.floor(
                Math.floor(this.previewPlannedSpeed / 10) * 115.87
            );
        },
    },
    watch: {
        danmuIndex() {
            console.log(this.danmuIndex);
        },
    },
};
</script>

<style lang="scss" scoped>
.video {
    cursor: pointer;
    width: 206px;
    @media screen and(max-width:1438px) {
        width: 170px;
    }
    @media screen and(max-width:1870px) {
        &:nth-child(n + 6) {
            display: none;
        }
    }
    @media screen and(max-width:1654px) {
        &:nth-child(n + 5) {
            display: none;
        }
    }

    .show {
        width: 206px;
        height: 116px;

        @media screen and(max-width:1438px) {
            width: 170px;
            height: 96px;
        }
    }
    .title {
        font-size: 14px;
        height: 40px;
        overflow: hidden;
        margin: 10px 0 8px;
        padding-right: 12px;
    }
    .ps-wrap {
        border-width: 4px 8px;
        border-style: solid;
        border-color: #000;
        height: 10px;
        background: #444;
    }
    .ps {
        position: absolute;
        left: 0;
        top: 0;
        height: 2px;
        background: white;
    }

    .preview {
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    &:hover .preview {
        opacity: 1;
    }
    .danmus {
        overflow: hidden;
    }
    .danmu {
        &.row1 {
            top: 8px;
        }
        &.row2 {
            top: 28px;
        }
    }

    .up {
        color: #999;
    }
}
</style>