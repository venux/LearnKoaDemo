const Koa=require('koa');
const app=new Koa();

app.use(ctx=>{
    ctx.body='Hello,Koa!!!';
}).listen(3000);