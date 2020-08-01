<template>
    <div class="later-play" :class="{active:active}">
        <i class="iconfont icon-later-play"></i>
        <span class="msg">稍后再看</span>
    </div>
</template>
<script>
export default {
    props: {
        // to:{
        //     type:String,
        // }
    },
    data() {
        return {
            active: false,
        };
    },
    mounted() {
        this.$el.parentElement.addEventListener("mouseenter", () => {
            this.active = true;
        });
        this.$el.parentElement.addEventListener("mouseleave", () => {
            this.active = false;
        });
    },
};
</script>

<style lang="scss" scoped>
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
    border-radius: 2px;
    .iconfont {
        font-size: 26px;
    }

    .msg {
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
    &.active {
        opacity: 1;
    }
    &:hover .msg {
        opacity: 1;
        transform: translateX(-50%) scale(1);
    }
}
</style>