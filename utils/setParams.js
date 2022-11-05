module.exports = function setParams(startTime, endTime, queryString, logGroupName) {
    return {
      startTime, /* required */
      endTime, /* required */
      queryString, /* required */
      limit: 30,
      logGroupName
    };
  }