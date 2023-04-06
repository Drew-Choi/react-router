/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

//express내장 바디-파서 연결(프론트단에서 넘어오는 데이터 Json화 때문에)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//cors설정
app.use(cors());

//라우터 가져오기
const dataRouter = require('./routes/data');
app.use('/data', dataRouter);

app.listen(PORT, () =>
  console.log(`데이터 통신용 서버가 ${PORT}에서 실행 중입니다.`),
);
