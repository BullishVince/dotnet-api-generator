const yargs = require('yargs');

//Include all subscripts
const intializeApi = require('./scripts/initialize-api');

//Parse CLI parameters
const argv = yargs
  .command("name", '[name: name of the API]')
  .option('dotnet', {
    alias: 'd',
    description: 'Specify which .NET version you want',
    type: 'number'
  })
  .choices('d', [5, 6])
  .help()
  .alias('help', 'h').argv

//Indicate to user that the processing will start
console.log(`Running generator with the following parameters: \n${JSON.stringify(argv)}`);

//Create the API root directory in ../
intializeApi.createRootDirectory(`../${argv._}`);