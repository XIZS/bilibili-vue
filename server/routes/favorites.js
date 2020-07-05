let data = [
    '默认收藏夹',
    '稍后再看',
    'C#',
    'java',
    'arduino',
    '小东西',
    '音乐',
    '2D',
    'en',
    '3D',
    'dnf',
    'bc',
    'unity',
]

module.exports = {
    get(ctx){
        ctx.body = data;
    }
}