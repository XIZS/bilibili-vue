<template>
    <transition name="bubble">
        <div
            v-show="currentShowBubble"
            class="nav-bubble"
            :style="{transform:`translateX(${position}px)`}"
        >
            <div class="dir-wrap" :style="{transform:`translate(calc(${dirPosition}px), -50%)`}">
                <slot name="top">
                    <div class="dir"></div>
                </slot>
            </div>
            <div class="bubble">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>


<script  >
export default {
    mounted() {
        console.dir(this.$el.getBoundingClientRect())
        this.currentShowBubble = this.showBubble;
        this.parentWidthOffset = this.$el.parentElement.clientWidth / 2;

        let closeLock = null;
        this.$el.parentElement.addEventListener("mouseenter", () => {
            if (closeLock != null) {
                clearTimeout(closeLock);
            }
            this.updatePosition();
            this.updateDirPosition();
            this.currentShowBubble = true;
        });

        this.$el.parentElement.addEventListener("mouseleave", () => {
            closeLock = setTimeout(() => {
                this.currentShowBubble = false;
            }, 100);
        });
    },
    props: {
        showBubble: {
            type: Boolean,
            default: false //SET
        },
        width: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            parentWidthOffset: 0,
            currentShowBubble: this.showBubble,
            position: 0,
            dirPosition: 0
        };
    },
    methods: {
        updatePosition() {
            //获取父元素
            //使用getBoundingClientRect,获取right的值
            let rightPosi = this.$el.parentElement.getBoundingClientRect()
                .right;
            //获取屏幕宽度
            let windownWidth = window.innerWidth;
            //计算父元素的右边到屏幕右边的距离
            let offset = windownWidth - rightPosi;
            //判断距离是否小于当前浮动窗口的宽度/2
            //设置窗口位置,右对齐,向右偏移最小的那个值-父元素宽度/2
            if (offset > this.width / 2) {
                //返回根据this.width/2计算的偏移量
                this.position = this.width / 2 - this.parentWidthOffset;
            } else {
                //使用offset的偏移量
                this.position = offset;
            }
        },
        updateDirPosition() {
            this.dirPosition = this.width / 2 - this.position-this.parentWidthOffset-5;
        }
    },
    watch: {
        currentShowBubble() {
            this.$emit("updateShowBubble", this.currentShowBubble);
        }
    }
};
</script> 
   
  
<style lang="scss" scoped>
.bubble-enter-active,
.bubble-leave-active {
    transition: all 0.3s;
}
.bubble-enter,
.bubble-leave-to {
    top: 115% !important;
    opacity: 0;
}

.nav-bubble {
    z-index: 1;
    text-shadow: none;
    position: absolute;
    right: 0;
    top: 125%;
    color: #212121;
    background: white;
    border-radius: 4px;
    cursor: default;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2) !important;

    .dir-wrap {
        position: absolute;
        top: 0;
        left: 50%;
        z-index: -1;
        .dir {
            transform: rotate(45deg);
            display: block;
            width: 10px;
            height: 10px;
            background: white;
        }
    }
}
</style> 