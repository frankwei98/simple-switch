module.exports = {
    runningAt: '_WHERE_PACKAGE.JSON_EXIST',
    // whitelist for harmless NPM cmd
    allowedScriptNames: ['start', 'stop', 'test'],
    // this service will listening at:
    port: 13140,
}