var fs = require('fs');

module.exports = {
    createRootDirectory: function (directory) {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        } else {
            console.log('The directory already exists');
        }
    },
  };