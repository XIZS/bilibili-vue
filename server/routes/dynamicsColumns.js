let data = [
    {
        url:"",
        id:1,
        dateTime:1593178200000,
        title:"PS5的UCG首秀！UCG492期上市",
        cover:"i0.hdslb.com/bfs/article/19e824468a18a4d3c47fc32af8f5fb1eb9056617.jpg@64w_48h_1c.webp",
        up:{
            id:"",
            avatar:"i1.hdslb.com/bfs/face/e8af77948058029e50797fa0b82affafdbff6279.jpg@36w_36h_1c.webp",
            name:"游戏机实用技术UCG",
        }
    },
    {
        url:"",
        id:2,
        dateTime:1593124200000,
        title:"详解如何自定义Travis CI的配置文件，帮你优化build和开启多任务",
        cover:"i0.hdslb.com/bfs/article/watermark/0c10b6e15b1162ea6a471e04468b26ce1f150c17.png@64w_48h_1c.webp",
        up:{
            id:"",
            avatar:"i0.hdslb.com/bfs/face/dd6dc38a549d08710e5dce763571bd4f6d509b3e.jpg@36w_36h_1c.webp",
            name:"做前端的蜗牛",
        }
    },
    {
        url:"",
        id:3,
        dateTime:1593037800000,
        title:"PS5的UCG首秀！UCG492期上市",
        cover:"i0.hdslb.com/bfs/article/19e824468a18a4d3c47fc32af8f5fb1eb9056617.jpg@64w_48h_1c.webp",
        up:{
            id:"",
            avatar:"i1.hdslb.com/bfs/face/e8af77948058029e50797fa0b82affafdbff6279.jpg@36w_36h_1c.webp",
            name:"游戏机实用技术UCG",
        }
    },
    {
        url:"",
        id:4,
        dateTime:1592778600000,
        title:"详解如何自定义Travis CI的配置文件，帮你优化build和开启多任务",
        cover:"i0.hdslb.com/bfs/article/watermark/0c10b6e15b1162ea6a471e04468b26ce1f150c17.png@64w_48h_1c.webp",
        up:{
            id:"",
            avatar:"i0.hdslb.com/bfs/face/dd6dc38a549d08710e5dce763571bd4f6d509b3e.jpg@36w_36h_1c.webp",
            name:"做前端的蜗牛",
        }
    },
    {
        url:"",
        id:5,
        dateTime: 1558477800000,
        title:"PS5的UCG首秀！UCG492期上市",
        cover:"i0.hdslb.com/bfs/article/19e824468a18a4d3c47fc32af8f5fb1eb9056617.jpg@64w_48h_1c.webp",
        up:{
            id:"",
            avatar:"i1.hdslb.com/bfs/face/e8af77948058029e50797fa0b82affafdbff6279.jpg@36w_36h_1c.webp",
            name:"游戏机实用技术UCG",
        }
    },
    {
        url:"",
        id:6,
        dateTime:1593167852353,
        title:"详解如何自定义Travis CI的配置文件，帮你优化build和开启多任务",
        cover:"i0.hdslb.com/bfs/article/watermark/0c10b6e15b1162ea6a471e04468b26ce1f150c17.png@64w_48h_1c.webp",
        up:{
            id:"",
            avatar:"i0.hdslb.com/bfs/face/dd6dc38a549d08710e5dce763571bd4f6d509b3e.jpg@36w_36h_1c.webp",
            name:"做前端的蜗牛",
        }
    }
    
]

module.exports = {
    get(ctx){
        ctx.body = data;
    }
}