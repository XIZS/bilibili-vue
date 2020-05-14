<template>
    <div
        style="padding-top:10px;"
        class="nav-bubble-wrap"
        :style="{transform:`translateX(calc(-50% + ${parentWidthOffset}px)`}"
    >
        <transition name="bubble">
            <div v-show="currentShowBubble" class="nav-bubble">
                <div class="bubble">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>


<script  >
export default {
    mounted() {
        this.parentWidthOffset = this.$el.parentElement.clientWidth / 2;
        console.log(this.$el.parentElement);

        let closeLock = null;
        this.$el.parentElement.addEventListener("mouseover", () => {
            if (closeLock != null) {
                clearTimeout(closeLock);
            }
            this.currentShowBubble = true;
        });

        this.$el.parentElement.addEventListener("mouseout", () => {
                this.currentShowBubble = false;
        });
    },
    props: {
        showBubble: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            parentWidthOffset: 0,
            currentShowBubble: this.showBubble
        };
    },
    methods: {},
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
    top: 90% !important;
    opacity: 0;
}
.nav-bubble-wrap {
    position: absolute;
    top: 100%;
}
.nav-bubble {
    text-shadow: none;
    top: 100%;
    background: white;
    border-radius: 4px;
    position: relative;
    cursor: default;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2) !important;
}
</style> 