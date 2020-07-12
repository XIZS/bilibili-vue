<template>
    <nav-bubble :width="172">
        <div class="body chs-d-b f-column f-col">
            <a href="/">回复我的</a>
            <a href="/">@我的</a>
            <a href="/">收到赞的</a>
            <a href="/">系统通知</a>
            <a href="/">我的消息</a>
        </div>
    </nav-bubble>
</template>

<style lang="scss">
    .body{
        padding:10px 0;
        width:172px;
        a{
            color:#212121;
            line-height:36px;
            height:36px;
            padding-left:20px;
            display: flex;   

            &:hover{
            background:#f4f4f4;

            }
        }
    }
</style>