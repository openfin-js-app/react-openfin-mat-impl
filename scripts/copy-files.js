var fs = require('fs');
var path = require('path');
var fse = require('fs-extra');
var glob = require('glob');
var chalk = require("chalk");
var shell = require("shelljs");


function handleSvgFiles(from, to) {
    const files = glob.sync('**/assets/svg/**',{cwd:from});
    const cmds = files
        .filter(file => fs.statSync(path.resolve(from, file)).isFile())
        .map(file =>
            new Promise((resolve,reject)=>{

                    const src = path.resolve(from, file);
                    const dest = path.resolve(to, file);

                    // console.log(chalk.blue(`mkdir -p ${path.dirname(dest)}`));
                    shell.mkdir('-p',path.dirname(dest));

                    let readStream = fs.createReadStream(src).pipe(
                        fs.createWriteStream(dest)
                    );

                    readStream.once('error', (err) => {
                        console.log(chalk.red(`failed to copy ${src} -> ${dest}`));
                        reject(err);
                    });

                    readStream.once('end', () => {
                        resolve();
                    });

                }
            )
        );
    return Promise.all(cmds);
}


async function copyFile(file){
    const buildPath = path.resolve(__dirname,'../build/',path.basename(file));
    await fse.copy(file,buildPath);
    console.log(`Copied ${file} to ${buildPath}`);
}

async function createPackageFile() {
    const packageData = await fse.readFile(path.resolve(__dirname,'../package.json'),'utf-8');
    const { scripts, devDependencies, workspaces, jest, ...packageDataOther} = JSON.parse(packageData);

    const newPackageData = {
        ...packageDataOther,
        main:'./index.js',
        private:false,
    };

    const buildPath = path.resolve(__dirname,'../build/package.json');

    await fse.writeFile(buildPath,JSON.stringify(newPackageData,null,2),'utf8');
    console.log(`Created package.json in ${buildPath}`);

    return newPackageData;
}

async function prepend(file,string) {
    const data = await fse.readFile(file,'utf8');
    await fse.writeFile(file,string+data,'utf8');
}

async function addLicense(packageData){
    const license = `/** @license React Openfin Material implementation v${packageData.version}
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    `;

    await Promise.all(
        [
            '../build/index.js',
        ].map(file => prepend(path.resolve(__dirname, file), license)),
    );

}

async function run(){
    await Promise.all(
        ['./README.md','./CHANGELOG.md','./LICENSE.md'].map(file => copyFile(file)),
        handleSvgFiles(path.resolve(__dirname, '../src'),path.resolve(__dirname, '../build'))
    );
    const packageData = await createPackageFile();
    await addLicense(packageData);
}

run();
