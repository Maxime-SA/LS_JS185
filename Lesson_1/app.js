const Client = require('pg').Client; // Same as 'const { Client } = require('pg');'
const queryText = 'SELECT * FROM directors';

let client = new Client({ database: 'films' });

async function logQuery(queryText) {
  await client.connect();
  let data = await client.query(queryText);
  console.log(data);
  await client.end();
}

logQuery(queryText);