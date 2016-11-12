import express from 'express';
import cors from 'cors';

import add from './task2A_';
import formatName from './task2B';


const app = express();

app.use(cors());
app.get('/task2A', (req, res) => {
  const result = add(req.query.a, req.query.b);
  res.send('' + result);
});

app.get('/task2B', (req, res) => {
  const result = formatName(req.query.fullname);
  res.send('' + result);
});

app.listen(3000, () => {});
