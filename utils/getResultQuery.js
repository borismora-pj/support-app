module.exports = async function getResultQuery(queryId, logGroup, cloudwatchlogs, fileJson) {
    var params = {
        queryId /* required */
    };
    const data = await cloudwatchlogs.getQueryResults(params).promise();
    fileJson +=  "\n\n" + JSON.stringify({ log: logGroup }) + ",\n" + JSON.stringify(data, null, 2)+",";
    
    //const jsonString = fs.readFileSync('./data.json')
    //fs.writeFileSync('./data.json', jsonString + "\n\n" + JSON.stringify({ log: logGroup }) + ",\n" + JSON.stringify(data, null, 2)+"," );

    //.replace(/\"/g, '"')
    return fileJson;
}