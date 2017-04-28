const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://bemaovcelglemi:b0f7f122431317ce65931e2bc327fa6e86fcdb614358264932b7e8f297fd3778@ec2-23-21-96-70.compute-1.amazonaws.com:5432/d8uqn1mr35dekr';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });