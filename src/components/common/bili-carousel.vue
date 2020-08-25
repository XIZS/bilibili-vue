<template>
    <div
        class="hsc home-show1-carousel bili-carousel"
        :style="{width,height}"
        @mouseenter="updateHover(true,$event)"
        @mouseleave="updateHover(false,$event)"
    >
        <!-- 具体内容 -->
        <div
            class="item w100p h100p"
            :class="{active:current===index}"
            v-for="(item,index) in data"
            :key="index"
            :style="{transform:`translateX(${getPosition(index)})`}"
        >
            <!-- 显示封面 -->
            <img class="w100p h100p" :src="item.url" :alt="item.title" />
            <!-- 表题与广告 -->
            <div class="title">
                <div class="ad" v-if="item.isAd">
                    <span>广告</span>
                </div>
                {{item.title}}
            </div>
        </div>

        <!-- 导航条 -->
        <div class="switch">
            <div
                class="dot f-c-c"
                :class="{active:current===index}"
                v-for="(item,index) in data.length"
                :key="index"
                @click="current = index"
            >
                <div class="icon">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.1876 8.20411L12.2213 8.80603L13.1557 9.45632L17.0853 12.1909C15.8033 15.1553 12.7831 17.25 9.24702 17.25C4.53497 17.25 0.75 13.5373 0.75 9C0.75 4.46266 4.53497 0.75 9.24702 0.75C12.7728 0.75 15.7857 2.83256 17.074 5.78322L13.1876 8.20411Z"
                            fill="#00A1D6"
                            stroke="white"
                            stroke-width="1.5"
                        />
                        <circle cx="7" cy="7.5" r="2" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//分离出组件的结构,对外提供宽高与数据的接口
import elementResizeDetectorMaker from "element-resize-detector";
//封装定时器
const run = (function () {
    let key = null;
    return {
        start: function (cb) {
            key = setInterval(cb, 5000);
        },
        stop: function () {
            if (key != null) {
                clearInterval(key);
            }
        },
    };
})();
export default {
    props: {
        width: {
            type: String,
            default: "100%",
        },
        height: {
            type: String,
            default: "100%",
        },
        data: {
            type: Array, //cover:imgUrl,title:string.isAd:boolean.to:string
            required: true,
        },
    },
    mounted() {
        // this.$el.addEventListener("mouseenter", (event) => {
        //     console.log(this.$el.contains(event.target));
        // });

        // this.width = this.$el.clientWidth;
        // const erd = elementResizeDetectorMaker();
        // erd.listenTo(document.querySelector(".hsc"), (element) => {
        //     this.$nextTick(() => {
        //         this.width = this.$el.clientWidth;
        //         console.log(arguments);
        //     });
        // });
        this.hover = false;
    },
    data() {
        return {
            hover: null,
            current: 0,
            scrollWidth: document.body.clientWidth,
        };
    },
    methods: {
        isPrev(index) {
            if (index === this.data.length - 1 && this.current === 0) {
                return true;
            }
            if (this.current - index === 1) {
                return true;
            } else {
                return false;
            }
        },
        updateHover(value, event) {
            this.hover = value;
            if (!value) {
                event.target;
            }
        },

        getPosition(index) {
            if (this.current === this.data.length - 1 && index === 0) {
                return "100%";
            }
            if (index === this.data.length - 1 && this.current === 0) {
                return "-100%";
            }
            return this.current > index ? "-100%" : "100%";
        },
    },
    watch: {
        hover() {
            console.log(this.hover);
            if (!this.hover) {
                run.start(() => {
                    if (this.current >= this.data.length - 1) {
                        this.current = 0;
                        return;
                    }
                    this.current++;
                });
            } else {
                run.stop();
            }
        },
    },
};
</script>


<style lang="scss" scoped>
.hsc {
    position: relative;
    .item {
        position: absolute;
        top: 0;
        transition: all 0.25s ease;
        z-index: -1;
        .title {
            position: absolute;
            bottom: 0;
            color: white;
            font-size: 14px;
            bottom: 10px;
            left: 12px;
            z-index: 2;
            display: flex;
            align-items: center;
            .ad {
                font-size: 14px;
                background: #ccc;
                color: #999;
                padding: 2px 7px;
                box-sizing: border-box;
                width: 34px;
                height: 18px;
                border-radius: 2px;
                margin-right: 5px;
                @include f-c-c;
                span {
                    white-space: nowrap;
                    transform: scale(0.7);
                }
                // -webkit-background-clip: text;
                // -webkit-text-fill-color: transparent;
            }
        }
        &.active {
            z-index: 1;
            transform: translateX(0) !important;
        }
        &::after {
            content: "";
            height: 48px;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0.4) 50%
            );
            position: absolute;
        }
    }

    .switch {
        position: absolute;
        right: 12px;
        bottom: 12px;
        z-index: 1;
        display: flex;
        .dot {
            cursor: pointer;
            border: 2px solid transparent;
            margin-left: 10px;
            border-radius: 10px;
            background: white;
            width: 6px;
            height: 6px;
            transition: 0.3s ease all;

            .icon {
                display: inherit;
                transition: 0.3s ease all;
                transform: scale(0.3);
                opacity: 0;
                transform-origin: center;
            }
            &:hover:not(.active) {
                background: #00a1d6;
                border-color: white;
                transform: scale(1.3);
            }
            &.active {
                transform: scale(1) !important;
                .icon {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        }
    }
}
</style>