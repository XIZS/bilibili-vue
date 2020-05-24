import Vue from 'vue'
import to from './to.js'
import hover from './hover.js'
const directives = [
    to,
    hover
]

console.log('tooo');
directives.forEach(item=>{
    //think:对item说,这里是注册指令的地方,你叫什么名字,你会什么
    Vue.directive(item.name,item.process)
})
export default {}