const Koa = require('koa');
const app = new Koa();

//x-response-time
app.use(async function (ctx, next) {
    const start = new Date();
    await next();

    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

//logger
app.use(async function (ctx, next) {
    const start = new Date();
    await next();

    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

//response
app.use(ctx => {
    ctx.body = 'Hello,Koa!!!';
}).listen(3000);