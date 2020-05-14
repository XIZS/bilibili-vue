<template>
    <nav-bubble >
        <div style="width:260px;padding:14px;box-sizing:border-box;">
            <div style="font-weight:bold;color:black;padding:5px 0 12px;">精彩推荐</div>
            <div class="f-jc-sb">
                <a href="/" class="flex-column" style="width:72px;">
                    <img
                        style="width:72px;height:94px;"
                        src="http://i0.hdslb.com/bfs/archive/c75133380e5c804c4d4b33b627c73285e2c0b0f3.jpg"
                    />
                    <div style=" white-space: initial;">领3天大会员~</div>
                </a>
                <a href="/" class="flex-column" style="width:72px;">
                    <img
                        style="width:72px;height:94px;"
                        src="http://i0.hdslb.com/bfs/archive/cf81af905d65e047e5673af531e53df2948bfe5f.png"
                        alt
                    />
                    <span style=" white-space: initial;">B刷电影院</span>
                </a>
                <a href="/" class="flex-column" style="width:72px;">
                    <img
                        style="width:72px;height:94px;"
                        src="http://i0.hdslb.com/bfs/archive/8ef3913c48dde27488a7ec5cb8a88d5ef89e74a0.png"
                        alt
                    />
                    <span style=" white-space: initial;">享双重会员~</span>
                </a>
            </div>
            <div style="margin-top:20px" class="f-c-j">
                <div style="width:160px;height:32px;background:#00a1d6;" class="f-c-j">开通大会员</div>
            </div>
        </div>
    </nav-bubble>
</template>

<script>
import NavBubble from "./nav-bubble.vue";
export default {
    components: {
        NavBubble
    }
};
</script>