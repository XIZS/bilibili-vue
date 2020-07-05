<template>
    <nav-bubble>
        <div class="nav-bubble-collect f">
            <div class="left f-col">
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
                <div class="con">
                    <div class="collect" v-for="(item,index) in showCollects" :key="index">
                        <img :src="item.image" alt />
                        <div>
                            <div class="r">{{item.name}}</div>
                            <div class="r">{{item.up.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="sel"></div>
            </div>
        </div>
    </nav-bubble>
</template>
<script>
export default {
    mounted() {
        this.loadFavorites();
        this.loadCollects();
        this.selectedFavorite="默认收藏夹"
    },
    data() {
        return {
            favorites: [],
            selectedFavorite: "",
            collects: {},
            showCollects:[]
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
                    this.showCollects=res;
                }
            );
        }
    },
    watch:{
        selectedFavorite(){
           this.showCollects = this.collects[this.selectedFavorite]
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
}
</style>