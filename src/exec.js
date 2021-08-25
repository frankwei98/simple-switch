const { exec } = require("child_process");

async function execCmd(command) {
    return new Promise((resolve, reject) =>
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject({ type: 'error', error })
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject({ type: 'stderr', stderr })
                console.log(`stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
            return;
        })
    );
}

module.exports = {
    exec: execCmd
}