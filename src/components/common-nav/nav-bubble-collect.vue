<template>
    <nav-bubble>
        <div class="nav-bubble-collect f">
            <div class="left f-col f-s-0">
                <bili-button
                    class="fm f-s-0"
                    v-for="(item,index) in favorites"
                    :key="index"
                    @click="selectFavorite(item)"
                >
                    <div class="con f-c-c" :class="{active:item===selectedFavorite}">{{item}}</div>
                </bili-button>
            </div>
            <div class="right f-col">
                <div class="con f-col">
                    <div class="collect f-s-0" v-for="(item,index) in showCollects" :key="index">
                        <div class="cover">
                            <img class="cover f-s-0" :src="item.image" alt />
                            <div class="duration">{{item.duration|MinuteAndSecond}}</div>
                        </div>
                        <div class="item-info f-col">
                            <div class="r title">{{item.title}}</div>
                            <div class="r mt-a" >{{item.up.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="sel f-s-0  c-f-c-c">
                    <div>查看更多</div>
                    <div style="color:#00a1d6">播放全部</div>
                </div>
            </div>
        </div>
    </nav-bubble>
</template>
<script>
export default {
    mounted() {
        this.selectedFavorite = "稍后再看";
        this.loadFavorites();
        this.loadCollects();
    },
    data() {
        return {
            favorites: [],
            selectedFavorite: "",
            collects: {},
            showCollects: []
        };
    },
    methods: {
        selectFavorite(value) {
            this.selectedFavorite = value;
        },
        loadFavorites() {
            this.reqGet("favorites").then(res => {
                this.favorites = res;
            });
        },
        loadCollects() {
            this.reqGet("collects", { favorite: this.selectedFavorite }).then(
                res => {
                    //res=array
                    this.collects[this.selectedFavorite] = res;
                    this.showCollects = res;
                }
            );
        }
    },
    watch: {
        selectedFavorite() {
            if (
                !this.collects[this.selectedFavorite] ||
                this.collects[this.selectedFavorite].length === 0
            ) {
                this.loadCollects();
            }
            this.showCollects = this.collects[this.selectedFavorite];
        }
    }
};
</script>
<style lang="scss">
.nav-bubble-collect {
    width: 520px;
    height: 518px;

    .left {
        width: 149px;
        height: 100%;
        padding-top: 12px;
        overflow-y: auto;
        box-sizing: border-box;
        .fm {
            height: 46px;
            display: flex;
            .con {
                padding: 0 12px;
                width: 100%;
                height: 100%;
                &:hover {
                    background: #f4f4f4;
                }
                &.active {
                    background: #00a1d6;
                    color: white;
                }
            }
        }
    }
    .right {
        width: 100%;
        padding-top: 12px;

        .sel{
            height:45px;
            border-top:1px solid #e7e7e7;
            div{
                flex:1;
                cursor: pointer;
                &:hover{
                    background:#f4f4f4
                }
            }
        }
        .con {
            
            height: 100%;
            overflow-y: auto;
        }
        .collect {
            padding: 8px 5px 8px 20px;
            cursor: pointer;
            .title {
                font-size: 14px;
                max-width: 210px;
                height: 37px;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                word-break: break-all;
                -webkit-line-clamp: 2;
            }
            .mt-a {
                color: #999;
            }
            &:hover{
                background:#f4f4f4;
            }
        }
        .item-info {
            margin-left: 12px;
        }
        .cover {
            width: 108px;
            height: 61px;
            border-radius: 2px;
            position: relative;
            .duration {
                position: absolute;
                right: 0;
                bottom: 5px;
                background: rgba(0, 0, 0, 0.5);
                font-size: 12px;
                color: white;
                padding: 0 2px;
                margin-right: 4px;
            }
        }
        .r {
            white-space: pre-wrap;
        }
    }
}
</style>