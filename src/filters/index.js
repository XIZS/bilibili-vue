import Vue from 'vue' 
Vue.filter('nonZero',function(value){
    if(typeof value === 'number'){
        console.log(typeof value ,value)
        if(value<=0){
            return "--"
        }
        return value;
    }
    return value
})

export default {}