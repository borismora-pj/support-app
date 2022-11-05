module.exports = async function startQuery(params, cloudwatchlogs) {
    const data = await cloudwatchlogs.startQuery(params).promise();
    console.log(data.queryId);
    return data.queryId;
}