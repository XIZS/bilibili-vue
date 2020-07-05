import Vue from 'vue'

import BiliButton from './bili-button.vue'

const components =[
    BiliButton
]

components.forEach(item=>{
    Vue.component(item.name,item)
})