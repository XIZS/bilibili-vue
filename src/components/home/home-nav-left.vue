<template>
    <ul class="left f">
        <li>
            <i class="icon iconfont icon-home" style="background:#ff5c7c"></i>
            <span>首页</span>
        </li>
        <li>
            <div class="icon">
                <div class="new-tip"></div>
                <img
                    style="border-radius:50%"
                    src="https://i2.hdslb.com/bfs/face/249bfa1b3d3e0932f533bc5364964b132fe9c6c2.jpg@36w_36h_1c_100q.webp"
                    alt
                />
            </div>
            <span>动态</span>
        </li>
        <li>
            <i class="icon iconfont icon-ranking" style="background:#00a1d6"></i>
            <span>排行榜</span>
        </li>
        <li>
            <i class="icon iconfont icon-channel" style="background:#6dc781"></i>
            <span>频道</span>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

.new-tip{
    width:10px;
    height:10px;
    background:red;
    border-radius: 10px;
    position:absolute;
    right:-2px;
    top:-2px;
    border-radius: 50%;
    border:2px solid white;
    box-sizing: border-box;
}
ul {
    li {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 66px;
        height: 68px;
        @include dynamic-width(66px, 58px, 50px, 50px);
        .icon {
            position: relative;
            color: white;
            width: 36px;
            height: 36px;
            background: white;
            border-radius: 36px;
            font-size: 28px;
            @include f-c-c;
        }
    }
}
</style>