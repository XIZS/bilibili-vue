<template>
    <div class="bili-bubble"
        v-show="show"
        :class="`mode-${mode} location-${location} position-${position}` "
    >
        <div class="arrow"></div>
        <div class="bubble-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        mode:{
            type:String,
            default:'default'//default,arrow
        },
        bodyOffset:{
            type:Number,
            default:0
        },
        arrowOffset:{
            type:Number,
            default:0
        },
        location:{
            type:String,
            default:"right"//top,bottom,left,right
        },
        position:{
            type:String,
            default:'start'//start center end
        },
        target:{
            type:[HTMLElement,Array],
            default:null
        },
        
    },
    data(){
        return {
            show:false,
        }
    },
    methods:{
        targetMouseOver(){
            this.show=true;
        },
        targetMouseOut(event){
            console.log(event)
            if(this.target.contains(event.toElement)){
                return;
            }
            this.show=false
           
        }
    },
    mounted(){
        //为绑定对象添加默认的position来为当前组件定位.
       console.log(this.$refs)
     
    },
    watch:{
        target(newTarget,oldTarget){
            //check odlTarget is null,if not null remove oldTarget mouseover and mouseout event
            if(oldTarget!=null){
                oldTarget.removeEventListener('mouseover',this.targetMouseOver);
                oldTarget.removeEventListener('mouseout',this.targetMouseOut);
            } 
             console.log(arguments);
            if(this.target.style.position===""){
                this.target.style.position="relative"
            }
            
            newTarget.addEventListener('mouseover',this.targetMouseOver);
            newTarget.addEventListener('mouseout',this.targetMouseOut);

            
        }
    }

}
</script>
<style lang="scss" scoped> 
    .bili-bubble{
        background:white;
        position: absolute;
        box-shadow: 0 3px 6px 0 rgba(0,0,0,.2);           
        border-radius: 2px;
        &.mode-default{
            
            .arrow{
                display:none;
            }
        }

        &.location-top{
            bottom:100%;
            &.position-start{
                left:0;
            }
            &.position-center{
                left:50%;
                transform:translateX(-50%);
            }
            &.position-end{
                right:0;
            }
            
        }
        &.location-bottom{
            top:100%;
            &.position-start{
                left:0;
            }
            &.position-center{
                left:50%;
                transform:translateX(-50%);
            }
            &.position-end{
                right:0;
            }
        }
        &.location-left{
            right:100%;
            &.position-start{
                top:0;
            }
            &.position_center{
                top:50%;
                transform:translateY(-50%);
            }
            &.position-end{
                bottom:0;
            }
        }
        &.location-right{
            left:100%;
            &.position-start{
                top:0;
            }
            &.position_center{
                top:50%;
                transform:translateY(-50%);
            }
            &.position-end{
                bottom:0;
            }
        }


    }
</style>