import Vue from 'vue'
import to from './to.js'
const directives = [
    to
]

console.log('tooo');
directives.forEach(item=>{
    Vue.directive('to',{
        bind:function(el){ 
            console.log(arguments);
        }
    })
})
export default {}