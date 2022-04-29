const yargs =  require('yargs');

//Include all subscripts
const intializeApi = require('./scripts/initialize-api');

//Parse CLI parameters
const argv = yargs
  .option('dotnet', {
    alias: 'd',
    description: 'Specify which .NET version you want',
    type: 'number',
    demandOption: true,
  })
  .option('name', {
    alias: 'n',
    description: 'Name of your application',
    type: 'string',
    demandOption: true,
  })
  .choices('d', [5, 6])
  .help()
  .alias('help', 'h').argv

//Indicate to user that the processing will start
console.log(`Running generator with the following parameters: \n${JSON.stringify(argv)}\n`);

async function main() {
  //Create the API root directory in ../
  try {
    const directory = `.testing/${argv.name}`;
    await intializeApi.createRootDirectory(directory, argv.dotnet);
    await intializeApi.replaceVariablesInTemplate(`${argv.name}`, directory);
  } catch (err) {
    console.log(err);
  }
}

main();