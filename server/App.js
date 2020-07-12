const Koa = require('koa');
const router = require('koa-router')()
const app = new Koa();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const fs = require('fs')
const path = require('path');
const koaCors = require('koa-cors');


app.use(cors());
app.use(bodyParser());



app.use(async (ctx, next) => {
    // console.log(ctx.request);
    await next();
});


//返回数据规范,最内层,1.数据都要有一个success,表示处理期望的结果是否为真,ture:数据保存在data中,false:失败描述保存在description中


function initRoutes(file) {

    fs.readdir(file, (err, files) => {
        console.log(files);
        files.forEach(f => {
            fs.stat(path.join(file, f), (err, stats) => {

                if (stats.isDirectory()) {
                    initRoutes(path.join(file,f))
                } else {
                    let api =  require(path.join(file, f)) 
                    console.log(f);
                    api.get&&router.get("/"+f.split('.')[0],async(ctx,next)=>{
                        console.log('a');
                        api.get(ctx);
                    })
                }
            })

        })
    })
}
router.get("/",async (ctx,next)=>{
    ctx.response.body = '<h5>Index</h5>';
})
console.log(router.routes());
initRoutes(path.join(__dirname, 'routes'))

app.use(router.routes());


// app.use(require('./routes/other'));
app.listen(3000);