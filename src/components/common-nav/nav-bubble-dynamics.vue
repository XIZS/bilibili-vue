<template>
    <nav-bubble :width="370">
        <div class="nav-bubble-dynamics">
            <!-- 选项 -->
            <div class="items">
                <label class="item">
                    <input
                        type="radio"
                        v-model="selectedItem"
                        value="video"
                        name="dynamics"  
                    />
                    <span class="item-text">
                        视频<span class="dt">动态</span>
                    </span>
                </label>
                <label class="item">
                    <input type="radio" v-model="selectedItem" value="live" name="dynamics" id />
                    <span class="item-text">
                        直播<span class="dt">动态</span>
                    </span>
                </label>
                <label class="item">
                    <input type="radio" v-model="selectedItem" value="column" name="dynamics" id />
                    <span class="item-text">
                        专栏<span class="dt">动态</span>
                    </span>
                </label>
            </div>

            <!-- 具体内容 -->
            <div class="items-content"  v-show="selectedItem==='video'" v-scroll-down:50="updateNextPage">
                <!-- 视频动态 -->
                <!-- 流程:从服务器获取数据,localStorage中拿出旧记录标记保存到内存中,记录最新的数据到localStorage中,
                使用computed分离新的动态和老的动态,-->
                <div >
                    <!-- newest -->
                    <div class="newest-wrap">
                        <div class="newest" v-show="newDynamicsVideos&&newDynamicsVideos.length>0">
                            <nav-bubble-dynamics-item
                                v-for="(item,index) in newDynamicsVideos"
                                :key="index"
                                :item="item"
                            ></nav-bubble-dynamics-item>
                        </div>
                        <!-- not newest -->
                        <div class="not-newest f-c-c" v-if="newDynamicsVideos.length===0">暂时没有新动态了哦！</div>
                    </div>
                    <div class="f-jc split">
                        <span
                            style="color:#999;font-size:12px;background:white;padding:0 10px;"
                        >历史动态</span>
                    </div>
                    <!-- history portion -->
                    <div class="history">
                        <nav-bubble-dynamics-item
                            v-for="(item,index) in oldDynamicsVideos"
                            :key="index"
                            :item="item"
                        >></nav-bubble-dynamics-item>
                    </div>
                    <div
                        class="more f-c-c"
                        style="margin:0 20px;height:64px;"
                        v-show="videosLoadCount>=loadCountLimit"
                    >
                        <div class="f-c-c w100p" style="background:#F4F4F4;height:36px; ">查看全部</div>
                    </div>
                </div>
            </div>
            <div class="items-content" v-show="selectedItem==='live'" v-scroll-down:50="updateNextPage">

                <!-- 直播动态 -->
                <nav-bubble-dynamics-item
                    v-for="(item,index) in dynamicsLives"
                    :key="index"
                    :item="item"
                    item-type="live"
                >
                </nav-bubble-dynamics-item>

                <div
                    class="more f-c-c"
                    style="margin:0 20px;height:64px;"
                        v-show="livesLoadCount>=loadCountLimit"

                    >

                        <div class="f-c-c w100p" style="background:#F4F4F4;height:36px; ">查看全部</div>
                </div>
                
            </div>
            <div class="items-content" v-show="selectedItem==='column'" v-scroll-down:50="updateNextPage">

                <div >
                    <!-- newest -->
                    <div class="newest-wrap">
                        <div class="newest" v-show="newDynamicsColumns&&newDynamicsColumns.length>0">
                            <nav-bubble-dynamics-item
                                v-for="(item,index) in newDynamicsColumns"
                                :key="index"
                                :item="item"
                                itemType="column"

                            ></nav-bubble-dynamics-item>
                        </div>
                        <!-- not newest -->
                        <div class="not-newest f-c-c" v-if="newDynamicsColumns.length===0">暂时没有新动态了哦！</div>
                    </div>
                    <div class="f-jc split">
                        <span
                            style="color:#999;font-size:12px;background:white;padding:0 10px;"
                        >历史动态</span>
                    </div>
                    <!-- history portion -->
                    <div class="history">
                        <nav-bubble-dynamics-item
                            v-for="(item,index) in oldDynamicsColumns"
                            :key="index"
                            :item="item"
                            itemType="column"
                        ></nav-bubble-dynamics-item>
                    </div>
                    <div
                        class="more f-c-c"
                        style="margin:0 20px;height:64px;"
                        v-show="columnsLoadCount>=loadCountLimit"
                    >
                        <div class="f-c-c w100p" style="background:#F4F4F4;height:36px; ">查看全部</div>
                    </div>
                </div>
            </div>
        </div>
    </nav-bubble>
</template>
<script>
//遇到的错误,因为历史栏的内容和本组件内容一样,所以历史栏直接使用本组件的部分代码,结果本组件选中的按钮无法中长显示,后来发现原因是,
//radio的name和历史栏的radio的name一致,导致显示的选中项在历史栏中

import NavBubbleDynamicsItem from "./nav-bubble-dynamics-item";
export default {
    components: {
        NavBubbleDynamicsItem
    },
    mounted() {
        this.dynamicsUpdate("video")
        // this.columnUpdate();//TEMPORARY  原来的:this.videoUpdate
    },
    data() {
        return {
            currentRequestType: "video",
            selectedItem: "video",

            dynamicsVideos: [],
            dynamicsLives: [],
            dynamicsColumns:[],

            lastDynamicsVideoId: -1,
            lastDynamicsColumnId:-1,

            videosLoadCount: 0,
            livesLoadCount:0,
            columnsLoadCount: 0,

            loadCountLimit: 3
        };
    },
    methods: {
        //Capital letter大写首字母
        cl(value){
            return value.slice(0,1).toUpperCase()+value.slice(1);
        },
        dynamicsUpdate(value){
            //拼接操作选项的字符串->解构->别名简化参数名
            let {operatingAttribute:OA,operatingLoadCount:OLC,lastDynamicsId:LDI} ={operatingAttribute:`dynamics${this.cl(value)}s`,operatingLoadCount:`${value}sLoadCount`,lastDynamicsId:`lastDynamics${this.cl(value)}Id`} 
            //当前操作对象有数据,则不进行"从头(第一次加载)"加载
            if(this[OA].length>0){
                return
            }
            //获取数据,获取localstorage中"之前"的最新数据,保存到内存中,并且将localstorage中的数据更新到最新数据
            this.reqGet(OA).then(res=>{
                this[OLC]++;
                this[OA]=res;
                if(this[LDI]<0){
                    this[LDI]=window.localStorage.getItem(this[LDI])||-1;//获取localstorage中"之前"的最新数据,保存到内存中
                }
                window.localStorage.setItem(this[LDI],res[0].id)//并且将localstorage中的数据更新到最新数据
            })

        },
        updateNextPage() {
            //获取当前要操作的目标对象,当现在标签时候参数发生改变
            let target = this.selectedItem;
            //拼接变量名->
            let {operatingAttribute:OA,loadCount:LC} = {operatingAttribute:`dynamics${this.cl(target)}s`,loadCount:`${target}sLoadCount`}
            if(this[LC]>=this.loadCountLimit){
                return;
            }
            this.reqGet(OA).then(res=>{
                this[OA].push(...res);
                this[LC]++;
            })
        }
    },
    computed: {
        //新的视频动态
        newDynamicsVideos() {
            let newViewos = [];
            for (let item of this.dynamicsVideos) {
                if (item.id === parseInt(this.lastDynamicsVideoId)) {
                    break;
                }
                newViewos.push(item);
            }
            return newViewos;
        },
        //旧的视频动态
        oldDynamicsVideos() {
            if (this.newDynamicsVideos == null) {
                return;
            }
            let newCount = this.newDynamicsVideos;
            return this.dynamicsVideos.slice(newCount);
        },

        //专栏部分 新的
        newDynamicsColumns(){
            let newColumns = [];
            for(let item of this.dynamicsColumns){
                if(item.id === parseInt(this.lastDynamicsColumnId)){
                    break;
                }
                newColumns.push(item);
            }
            return newColumns;
        },
        //专栏部分 旧的
        oldDynamicsColumns(){
            if(this.newDynamicsVideos==null){
                return;
            }
            let newCount = this.newDynamicsColumns;
            return this.dynamicsColumns.slice(newCount);
        }
    },
    watch: {
        selectedItem: function(newVal) {
            this.dynamicsUpdate(newVal);
            // this.currentRequestType = newVal + "Update";
            // this[this.currentRequestType]();
        }
    }
};
</script>
<style lang="scss" scoped>
input[type="radio"] {
    display: none;
}
.nav-bubble-dynamics {
    width: 370px;

    .items {
        color: #999;
        font-size: 12px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        height: 48px;
        border-bottom: 1px solid #f2f2f2;
    }
    .dt {
        display: none;
    }
    .item-text {
        margin-right: 24px;
        transition: all ease 0.3s;
    }
    .item {
        cursor: pointer;
        display: block;
        input:checked + .item-text {
            padding: 4px 10px;
            background: #00a1d6;
            display: inline-block;
            border-radius: 14px;
            color: white;
            margin-right: 14px;
            margin-left: -10px;
            > .dt {
                display: inline;
            }
        }
        &:first-child input:checked + .item-text {
            margin-left: 0;
        }
    }

    .items-content {
        min-height: 120px;
        max-height: 469px;
        padding-top: 12px;
        overflow: auto;

        .newest-wrap {
            .not-newest {
                font-size: 14px;
                color: #999;
                height: 100px;
                width: 100%;
            }
        }

        .split {
            position: relative;
            margin: 0 20px;
            &::before {
                z-index: -1;
                content: "";
                width: 100%;
                top: 8px;
                display: block;
                position: absolute;
                border-top: 1px solid #e7e7e7;
            }
        }
    }
}
</style>

