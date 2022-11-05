const startQuery = require("./startQuery");
const getResultQuery = require("./getResultQuery");

module.exports = async function todo(params, cloudwatchlogs, fileJson) {
    const queryId = await startQuery(params, cloudwatchlogs);
    const result = await getResultQuery(queryId, params.logGroupName, cloudwatchlogs, fileJson);

    return result;
}