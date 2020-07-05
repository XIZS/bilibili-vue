<template>
    <div class="dynamics-item f">
        <div class="left" style="width:36px;height:36px;">
            <a class="avatar" href="/" :style="{backgroundImage:styleImageParse(item.up.avatar)}"></a>
        </div>
        <div class="middle">
            <div class="r fs-12 f-w">
                <span>{{item.up.name}}</span>
                <span v-if="itemType==='live'" style="padding-left:10px;color:#999;color:red;">正在直播</span>
                <span v-else style="padding-left:10px;color:#999;">{{item.dateTime|t2b}}</span>
            </div>
            <div class="r wrap">{{item.title}}</div>
        </div>
        <div class="right ml-a">
            <a href="/" v-if="itemType==='column'" style="height:42px" :style="{backgroundImage:styleImageParse(item.cover)}"></a>
            <a href="/" v-else :style="{backgroundImage:styleImageParse(item.cover)}"></a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        itemType:{
            type:String,
            default:'video'
        }
    },
    methods: {
        styleImageParse(url) {
            return `url(http://${url})`;
        }
    }
};
</script>
<style lang="scss" scoped>
.dynamics-item {
    box-sizing: border-box;
    padding: 12px 20px;
    width: 100%;

    &:hover {
        background: #f4f4f4;
    }
    .left {
        .avatar {
            border-radius: 100%;
            width: 36px;
            height: 36px;
            display: inline-block;
        }
    }
    .middle {
        padding: 0 12px;
    }
    .right {
        flex-shrink: 0;
        width: 64px;

        a {
            border-radius: 2px;
            display: inline-block;
            width: 100%;
            height: 36px;
        }
    }
}
</style>