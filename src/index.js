const { exec } = require('./exec')
const config = require('./config')
const Koa = require('koa');
const app = new Koa();

// response
app.use(async (ctx) => {
    const { scriptName } = ctx.query;
    if (!config.allowedScriptNames.includes(scriptName)) {
        ctx.body = { message: 'bad scriptName' };
        ctx.status = 400;
        return;
    }

    const cmd = `npm --prefix ${config.runningAt} run ${scriptName}`
    try {
        const cmdExecResult = await exec(cmd)
        ctx.body = { cmdExecResult };
    } catch (error) {
        console.error(error)
        ctx.body = error;
        ctx.status = 400;
    }
});

app.listen(config.port);

console.info(`App Started at port: ${config.port}`)
