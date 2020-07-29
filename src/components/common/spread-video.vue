<template>
    <div class="spread-video video">
        <div class="show por">
            <img class="wh100p" :src="video.image" alt />
            <div
                class="preview poa wh100p t0"
                @mousemove="updatePreview"
                style="background-size:2060px;"
                :style="{backgroundImage:`url(${video.previewImage})`,backgroundPosition:`${previewOffsetX}px ${previewOffsetY}px`}"
            >
                <div class="planned-speed ps-wrap w100p poa bs-b active" style="top:0;">
                    <div class="ps" :style="{width:previewPlannedSpeed+`%`}"></div>
                </div>
            </div>
            <div class="danmus"></div>
        </div>

        <div class="title">{{video.title}}</div>
        <div class="up f-ac">
            <i class="iconfont icon-up" style="font-size:16px;"></i>
            <span class="fs-12">{{video.up.name}}</span>
        </div>
    </div>
</template>

<script>
import elementResizeDetectorMaker from "element-resize-detector";
export default {
    props: {
        video: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        const erd = elementResizeDetectorMaker();
        erd.listenTo(this.$el, (element) => {
            this.$nextTick(() => {
                this.width = this.$el.clientWidth;
                console.log(this.width);
            });
        });
    },
    data() {
        return {
            width: 0,
            previewPlannedSpeed: 0,
            previewVideo: {},
        };
    },
    methods: {
        updatePreview(event) {
            this.previewPlannedSpeed =
                Math.floor((event.offsetX / this.width) * 100);
        },
    },
    computed:{
        previewOffsetX(){
            if(this.video==null){
                return 0;
            }
            return this.video.previewImageCount*(this.previewPlannedSpeed/100)%10*206;
        },
        previewOffsetY(){
            if(this.video==null){
                return 0;
            }
            console.log( Math.floor(this.previewPlannedSpeed/10)*115.87);
            return Math.floor(Math.floor(this.previewPlannedSpeed/10)*115.87);
        }
    }
};
</script>

<style lang="scss" scoped>
.video {
    cursor: pointer;
    width: 206px;
    border: 1px solid red;
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
        &:hover {
            opacity: 1;
        }
    }
}
</style>