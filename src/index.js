import express from 'express';
import cors from 'cors';

import add from './task2A_';
import formatName from './task2B';
import canonize from './task2C';
import task3ARouter from './task3A';

const app = express();

app.use(cors());
app.use('/task3A', task3ARouter);

app.get('/task2A', (req, res) => {
  const result = add(req.query.a, req.query.b);
  res.send('' + result);
});

app.get('/task2B', (req, res) => {
  const result = formatName(req.query.fullname);
  res.send('' + result);
});

app.get('/task2C', (req, res) => {
  const result = canonize(req.query.username);
  res.send('' + result);
});

app.listen(3000, () => {});
