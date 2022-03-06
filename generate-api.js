const yargs = require('yargs');

//Parse CLI parameters
const argv = yargs
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

