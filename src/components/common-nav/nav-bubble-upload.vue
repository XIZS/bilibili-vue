<template>
    <nav-bubble :width="304">
        <div class="nav-bubble-upload f">
            <div class="item">
                <i class="iconfont icon-column-upload"></i>
                <div>专栏投稿</div>
            </div>
            <div class="item">
                <i class="iconfont icon-music-upload"></i>
                <div>音频投稿</div>
            </div>
            <div class="item">
                <i class="iconfont icon-video-upload"></i>
                <div>视频投稿</div>
            </div>
            <div class="item">
                <i class="iconfont icon-upload-manage"></i>
                <div>投稿管理</div>
            </div>
        </div>
    </nav-bubble>
</template>

<style lang="scss">
.nav-bubble-upload {
    width: 304px;
    height: 78px;

    .iconfont {
        color:#757575;
        font-size: 26px;
    }
    .item{
        cursor: pointer;
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:hover{
            background:#f4f4f4;
        }
    }
}
</style>