/* eslint-disable no-undef */

const { MongoClient, ServerApiVersion } = require('mongodb');
//몽고아틀라스에서 connect -> yourAplication에서 카피하고 client는 삭제 그 후 몽고디비 주소를 env에서 가져옴
//보안용
const { MONGO_DB_URI } = process.env;
//url주소도 env로 받아온거 사용
const client = new MongoClient(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
