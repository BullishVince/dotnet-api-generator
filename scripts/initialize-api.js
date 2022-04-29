const fs =  require('fs');
const {execSync} = require('child_process');

module.exports = {
    createRootDirectory: async function(directory, dotnetVersion) {
        return new Promise((resolve, reject) => {
            if (!fs.existsSync(directory)){
                fs.mkdirSync(directory);

                try {
                    console.log(`Copying template to ${directory}`);
                    execSync(`cp -rf templates/${dotnetVersion}.0/Api ${directory}`);
                    console.log(`Navigating to ${directory}`);
                    execSync(`cd ${directory}`);
                } catch (err) {
                    console.log(`Could not copy template to ${directory}`);
                    reject();
                }

            } else {
                console.log('The directory already exists');
                reject();
            }
            resolve();
        })
    },
    
    replaceVariablesInTemplate: async function(applicationName, directory) {
        return new Promise((resolve, reject) => {
            //Replace variables in all projects (Api, Data, Tests etc...)
            try {
                console.log('Replacing variables in Api/');
                // execSync(`find Api -type f -exec sed -i -e 's/\${applicationName}/${applicationName}/g' {} \;`)
                execSync(`cd ${directory} && find Api -type f -exec sed -i '' -e 's/\${applicationName}/hej/g' {} \\;`);
                execSync(`cd ${directory} && mv Api/application.csproj Api/${applicationName}.api.csproj`);
                resolve();
            } catch (err) {
                console.log('Could not replace variables in Api/');
                reject();
            }
            
        })
    },
}