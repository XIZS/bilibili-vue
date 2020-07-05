<template>
    <div class="bili-button" :class="buttonType" @click="onClick">
        <slot>button</slot>
    </div>
</template>


<script>
export default {
    name:"bili-button",
    props: {
        type: {
            type: String,
            default: "default"
        }, 
    },
    methods: {
        onClick(event) {
            this.$emit("click", event);
        }
    },
    computed: {
        buttonType() {
            if (this.type == undefined) {
                return "default";
            }

            return this.type;
        }
    }
};
</script>
 
<style lang="scss" scoped>
.bili-button {
    font-size: 14px;
    display: inline-block;
    cursor:pointer;
}
</style>