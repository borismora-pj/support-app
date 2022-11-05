const fs = require('fs');

module.exports = async function writeJson(fileJson) {
    //fileJson = fileJson.substring(1, fileJson.length-1) + "]";
    await fs.writeFileSync('./data.json', fileJson);
}


