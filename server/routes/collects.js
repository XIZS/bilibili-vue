let collects=[
    {
        image:"http://i2.hdslb.com/bfs/archive/a8dc09ee0d64a967cb2bd0a65e58c7a6aede544a.jpg@112w_63h_1c_100q.webp",
        title:'Notion：全能型效率工具 | 替代印象笔记和OneNote笔记软件的最佳选择！（第1期）【方俊皓Jun】',
        duration:60,
        up:{
            name:"Tanshushu",
        }
    },
    {
        image:"http://i2.hdslb.com/bfs/archive/a8dc09ee0d64a967cb2bd0a65e58c7a6aede544a.jpg@112w_63h_1c_100q.webp",
        title:'Notion：全能型效率工具 | 替代印象笔记和OneNote笔记软件的最佳选择！（第1期）【方俊皓Jun】',
        duration:60,
        up:{
            name:"Tanshushu",
        }
    },
    {
        image:"http://i2.hdslb.com/bfs/archive/a8dc09ee0d64a967cb2bd0a65e58c7a6aede544a.jpg@112w_63h_1c_100q.webp",
        title:'Notion：全能型效率工具 | 替代印象笔记和OneNote笔记软件的最佳选择！（第1期）【方俊皓Jun】',
        duration:60,
        up:{
            name:"Tanshushu",
        }
    }
]
let data = {
    '默认收藏夹':[  ],
    '稍后再看':[],
    'C#':[],
    'java':[],
    'arduino':[],
    '小东西':[],
    '音乐':[],
    '2D':[],
    'en':[],
    '3D':[],
    'dnf':[],
    'bc':[],
    'unity':[],
}
module.exports = {
    get(ctx){
        console.log(collects)
        ctx.body = collects
    },
}