<template>
    <div class="bili-danmu" :style="moveLeft">{{content}}</div>
</template>

<script>
export default {
    props: {
        timeRange: {
            type: String,
            default: 3,
        },
        content: {
            type: String,
            required: true,
        },
        isMove: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        this.width = this.$el.clientWidth;
    },
    data() {
        return {
            time: 0,
            width: 0,
        };
    },
    computed: {
        moveLeft() {
            if (this.isMove) {
                this.time = Math.random() * 3 + 3;
                //left:-width+'px',transition: `all ${time}s line`
                return `left:${-this.width-10}px;transition:all ${  this.time }s linear`;
            }
            return "";
        },
    },
};
</script>

<style lang="scss" scoped>
.bili-danmu {
    width: auto;
    font-size: 12px;
    white-space: nowrap;
    position: absolute;
    left: 105%;
    color: white;
    text-shadow: 1px 1px 2px #001;
    transition: all 1s ease;
    
}
</style>