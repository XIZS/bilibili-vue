<template>
    <div
        class="bili-bubble"
        v-show="show"
        :class="`mode-${mode} location-${location} position-${position}` "
    >
        <div class="arrow" :style="arrowPosition"></div>
        <div class="bubble-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        mode: {
            type: String,
            default: "default", //default,arrow
        },
        bodyOffset: {
            type: Number,
            default: 0,
        },
        arrowOffset: {
            type: Number,
            default: 0,
        },
        location: {
            type: String,
            default: "right", //top,bottom,left,right
        },
        position: {
            type: String,
            default: "start", //start center end
        },
    },
    data() {
        return {
            show: false,
            target: null,
            arrowPosition: "",
            lock: null,
        };
    },
    methods: {
        targetMouseOver() {
            if (this.lock != null) {
                clearTimeout(this.lock);
            }
            this.show = true;
        },
        targetMouseOut(event) {
            this.lock = setTimeout(() => {
                if (this.target.contains(event.toElement)) {
                    return;
                }
                this.show = false;
            }, 100);
        },
    },
    mounted() {
        //为绑定对象添加默认的position来为当前组件定位.
        this.target = this.$el.parentElement;
        this.target.style.position = "relative";
        console.log(this.target);
        this.target.addEventListener("mouseover", this.targetMouseOver);
        this.target.addEventListener("mouseout", this.targetMouseOut);
    },
    computed: {},
    watch: {
        show() {
            setTimeout(() => {
                if (this.target == null || !this.show) {
                    return;
                }
                console.dir(this.$el);
                //判断当前横纵向
                let rect = this.target.getBoundingClientRect();
                let thisRect = this.$el.getBoundingClientRect();
                console.log(thisRect);
                if (this.location === "top" || this.location === "bottom") {
                    //横向:
                    //计算当前目标左上角位置+目标宽度/2
                    let offset = rect.left + rect.width / 2 - thisRect.left - 5;
                    this.arrowPosition = `left:${offset}px`;
                    //返回left:""
                } else {
                    let offset = rect.top + rect.height / 2 - thisRect.top - 5;
                    this.arrowPosition = `top:${offset}px`;
                }
            }, 0);
        },
        // target(newTarget,oldTarget){
        //     //check odlTarget is null,if not null remove oldTarget mouseover and mouseout event
        //     if(oldTarget!=null){
        //         oldTarget.removeEventListener('mouseover',this.targetMouseOver);
        //         oldTarget.removeEventListener('mouseout',this.targetMouseOut);
        //     }
        //     if(this.target.style.position===""){
        //         this.target.style.position="relative"
        //     }
        //     newTarget.addEventListener('mouseover',this.targetMouseOver);
        //     newTarget.addEventListener('mouseout',this.targetMouseOut);
        // }
    },
};
</script>
<style lang="scss" scoped>
.bili-bubble-enter-active,
.bili-bubble-leave-active {
    transition: all 0.3s;
}
.bili-bubble-enter,
.bili-bubble-leave-to {
    // top: 90% !important;
    opacity: 0;
}

.bili-bubble {
    position: absolute;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    background: white;
    z-index: 1;
    .arrow {
        width: 10px;
        height: 10px;
        position: absolute;
        background: white;
        transform: rotate(45deg);
        z-index: -1;
    }
    &.mode-default {
        .arrow {
            // display: none;
        }
    }

    &.location-top {
        bottom: 100%;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);

        .arrow {
            box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.05);
            top: calc(100% - 5px);
            left: 50%;
        }

        &.position-start {
            left: 0;
        }
        &.position-center {
            left: 50%;
            transform: translateX(-50%);
        }
        &.position-end {
            right: 0;
        }
    }
    &.location-bottom {
        top: 100%;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);

        .arrow {
            box-shadow: -2px -2px 1px rgba(0, 0, 0, 0.05);
            bottom: calc(100% - 5px);
            left: 50%;
        }
        &.position-start {
            left: 0;
        }
        &.position-center {
            left: 50%;
            transform: translateX(-50%);
        }
        &.position-end {
            right: 0;
        }
    }
    &.location-left {
        right: 100%;
        &.position-start {
            top: 0;
        }
        &.position_center {
            top: 50%;
            transform: translateY(-50%);
        }
        &.position-end {
            bottom: 0;
        }
    }
    &.location-right {
        left: 100%;
        &.position-start {
            top: 0;
        }
        &.position_center {
            top: 50%;
            transform: translateY(-50%);
        }
        &.position-end {
            bottom: 0;
        }
    }
}
</style>