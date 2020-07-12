<template>
    <transition name="bubble">
        <div
            v-show="currentShowBubble"
            class="nav-bubble"
            :style="{transform:`translateX(calc(-50% + ${parentWidthOffset}px)`}"
        >
            <div class="dir-wrap">
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
        this.parentWidthOffset = this.$el.parentElement.clientWidth / 2;

        let closeLock = null;
        this.$el.parentElement.addEventListener("mouseover", () => {
            if (closeLock != null) {
                clearTimeout(closeLock);
            }
            this.currentShowBubble = true;
            console.log(this.$el.clientWidth,this.currentShowBubble);
        });

        this.$el.parentElement.addEventListener("mouseout", () => {
            closeLock = setTimeout(() => {
                this.currentShowBubble = false;
            }, 100);
        });
        
    },
    props: {
        showBubble: {
            type: Boolean,
            default: false//SET
        }
    },
    data() {
        return {
            parentWidthOffset: 0,
            currentShowBubble: this.showBubble,
        };
    },
    methods: {},
    watch:{
        currentShowBubble(){
            this.$emit('updateShowBubble',this.currentShowBubble);
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
    top: 90% !important;
    opacity: 0;
}

.nav-bubble {
    text-shadow: none;
    position: absolute;
    top: 100%;
    color:#212121;
    background: white;
    border-radius: 4px;
    cursor: default;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2) !important;

    .dir-wrap {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 0;
        left: 50%;
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