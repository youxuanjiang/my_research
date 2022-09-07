const mysql = require("mysql");
const db_config = require('./config/db');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const {docID, sheetID} = require('./config/sheet_config')
const db = mysql.createConnection(db_config);

db.connect(function(err) {
  if(err) {
    console.log('error when connecting to db:', err);
  }
  else {
    console.log('Connected MySQL!');
  }
});

db.query('select * from result', async function(err, rows) {
  if (err) throw err;
  const doc = new GoogleSpreadsheet(docID);
  const creds = require('./config/cred');
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];

  console.log("Clearing Rows...");
  await sheet.clearRows();
  console.log("Finish Clear Rows!");
  console.log("Adding Rows...");
  await sheet.addRows(rows);
  console.log("Finish Add Rows!");
});

db.end(function(err) {
  if(err) {
    console.log('error when ending to db:', err);
  }
  else {
    console.log('Disconnected MySQL!');
  }
});
