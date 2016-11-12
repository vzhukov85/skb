import express from 'express';
import cors from 'cors';

const app = express();

function add(a = 0, b = 0) {
  return +a + +b;
}
app.use(cors());
app.get('/task2A', (req,res) => {
  const result = add(req.query.a, req.query.b);
  res.send('' + result);
});

app.listen(3000, () => {});
