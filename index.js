const fs = require('fs');

//Import utils
const setParams = require('./utils/setParams');
const todo = require('./utils/todo');
const writeJson = require('./utils/writeJson');

var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

// Create the CloudWatchLogs service object
var cloudwatchlogs = new AWS.CloudWatchLogs({ apiVersion: '2014-03-28' });

//delete old file
//fs.unlinkSync('./data.json')
//create empy file
//fs.writeFileSync('./data.json', "[");

runAll();


async function runAll(){
  var fileJson = "";
  var startTime = "2021-01-21T02:00:27.751-03:00";
  startTime = new Date(startTime).getTime();
  
  var endTime = "2021-01-21T22:38:45.538-03:00";
  endTime = new Date(endTime).getTime();
  
  const query = 'fields @timestamp, @message | filter @message like "44453" | sort @timestamp asc | limit 20';
  var params = setParams(startTime, endTime, query, '/aws/elasticbeanstalk/middleware-production/var/app/containerfiles/logs/sidekiq.log');
  fileJson += await todo(params, cloudwatchlogs, fileJson);
  
  var params = setParams(startTime, endTime, query, '/aws/elasticbeanstalk/middleware-production/var/log/puma/puma.log');
  fileJson += await todo(params, cloudwatchlogs, fileJson);
  
  var params = setParams(startTime, endTime, query, '/aws/elasticbeanstalk/orders-production/var/app/containerfiles/logs/sidekiq.log');
  fileJson += await todo(params, cloudwatchlogs, fileJson);
  
  var params = setParams(startTime, endTime, query, '/aws/elasticbeanstalk/orders-production/var/log/puma/puma.log');
  fileJson += await todo(params, cloudwatchlogs, fileJson);
  
  //const jsonString = fs.readFileSync('./data.json')
  await writeJson(fileJson);
}