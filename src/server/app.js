const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const port = 9437; // your server port

// 若db connect error，顯示consider upgrading client
// 在workbench輸入：
// ALTER USER '帳號'@'localhost' IDENTIFIED WITH mysql_native_password BY '密碼';
// flush privileges;

db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
    }
    console.log("Connected MySQL!");
});

// https
// https://medium.com/@savemuse/node-js-%E5%BB%BA%E7%AB%8Bhttps%E4%BC%BA%E6%9C%8D%E5%99%A8-46442e9cd433

const server = express();
server.use(cors());

server.get('/questionaire', (req, res) => {
  console.log(`-----\nRequest Type: ${req.method}\nRequest URI: ${req.url}`);
  console.log(`Status Code: ${res.statusCode}\n-----\n`);
  db.query('select * from question_table', function(err, rows) {
    if (err) throw err;
    res.writeHead(200);
    res.end(JSON.stringify(rows));
  });
});

server.get('/userinfo', (req, res) => {
  console.log(`-----\nRequest Type: ${req.method}\nRequest URI: ${req.url}`);
  console.log(`Status Code: ${res.statusCode}\n-----\n`);
  db.query('select * from user_table', function(err, rows) {
    if (err) throw err;
    res.writeHead(200);
    res.end(JSON.stringify(rows));
  });
});

server.post('/userinfo', (req, res) => {
  console.log(`-----\nRequest Type: ${req.method}\nRequest URI: ${req.url}`);
  console.log(`Status Code: ${res.statusCode}\n-----`);

  let userinfo;
  req.on('data', function (chunk) {
    userinfo = JSON.parse('' + chunk);
    console.log(`Data chunk available: ${chunk}`);
    db.query(`insert into user_table (User, Sex, Age, Carrier, Education) values ('${userinfo.user}', '${userinfo.sex}', '${userinfo.age}', '${userinfo.carrier}', '${userinfo.education}')`, function(err, result) {
      if (err) throw err;
      console.log(`Userinfo ${JSON.stringify(userinfo)} save correct`);
    });
  });
});

server.get('/pilotinfo', (req, res) => {
  console.log(`-----\nRequest Type: ${req.method}\nRequest URI: ${req.url}`);
  console.log(`Status Code: ${res.statusCode}\n-----\n`);
  db.query('select * from pilot_table', function(err, rows) {
    if (err) throw err;
    res.writeHead(200);
    res.end(JSON.stringify(rows));
  });
});

server.post('/pilotinfo', (req, res) => {
  console.log(`-----\nRequest Type: ${req.method}\nRequest URI: ${req.url}`);
  console.log(`Status Code: ${res.statusCode}\n-----`);

  let userinfo;
  req.on('data', function (chunk) {
    pilotinfo = JSON.parse('' + chunk);
    console.log(`Data chunk available: ${chunk}`);
    db.query(`insert into pilot_table (Pilot) values ('${pilotinfo.pilot}')`, function(err, result) {
      if (err) throw err;
      console.log(`Pilotinfo ${JSON.stringify(pilotinfo)} save correct`);
    });
  });
});

server.post('/pilotresult', (req, res) => {
  console.log(`-----\nRequest Type: ${req.method}\nRequest URI: ${req.url}`);
  console.log(`Status Code: ${res.statusCode}\n-----`);

  let result;
  req.on('data', function (chunk) {
    result = JSON.parse('' + chunk);
    surveyResult = [];
    let count = Object.keys(result).length - 2;
    while(count >= 0){
      surveyResult.push([result.Pilot, result[count].tag.Category, result[count].tag.Importance, result[count].tag.Effort, result[count].tag.Urgency, result[count].importanceScore, result[count].effortScore, result[count].usgencyScore]);
      count--;
    }
    db.query(`insert into pilot_result (Pilot, Category, Importance, Effort, Urgency, ImportanceScore, EffortScore, UrgencyScore) values ?`, [surveyResult], function(err, result) {
      if (err) throw err;
      console.log(`Result ${surveyResult} save correct`);
    });
    console.log(`Data chunk available: ${chunk}`);
  });
  req.on('end', () => {
      console.log(result);
      console.log('-----\n');
      res.writeHead(200);
      res.end();
  });
});

server.post('/result', (req, res) => {
  console.log(`-----\nRequest Type: ${req.method}\nRequest URI: ${req.url}`);
  console.log(`Status Code: ${res.statusCode}\n-----`);

  let result;
  req.on('data', function (chunk) {
    result = JSON.parse('' + chunk);
    surveyResult = [];
    let count = Object.keys(result).length - 2;
    while(count >= 0){
      surveyResult.push([result.User, result[count].tag.Category, result[count].tag.Importance, result[count].tag.Effort, result[count].tag.Urgency, result[count].importanceScore[0]+result[count].importanceScore[1], result[count].effortScore[0]+result[count].effortScore[1], result[count].usgencyScore[0]+result[count].usgencyScore[1], result[count].paymentScore]);
      count--;
    }
    db.query(`insert into result (User, Category, Importance, Effort, Urgency, ImportanceScore, EffortScore, UrgencyScore, PaymentScore) values ?`, [surveyResult], function(err, result) {
      if (err) throw err;
      console.log(`Result ${surveyResult} save correct`);
    });
    console.log(`Data chunk available: ${chunk}`);
  });
  req.on('end', () => {
      console.log(result);
      console.log('-----\n');
      res.writeHead(200);
      res.end();
  });
});

server.listen(port, () => {
  console.log(`Succeed running on port ${port} !`);
});
