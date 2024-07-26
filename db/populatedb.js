#! /usr/bin/env node

const { Client } = require("pg");
const dotenv = require('dotenv');
dotenv.config();


console.log(process.env.CONNECTION_STRING);


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255),
  message VARCHAR (512),
  date DATE
);

INSERT INTO messages (username,message,date) 
VALUES
  ('Amando','Hi there!',CURRENT_DATE),
  ('Charles','Hello World!',CURRENT_DATE);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
