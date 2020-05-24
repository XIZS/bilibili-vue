export default {
    name:"hover",
    process:{
        inserted:function(el,binding){
            console.log("binding",binding)
            el.addEventListener('mouseover',binding.value[0])
            el.addEventListener('mouseout',binding.value[1])
        }
    }
}