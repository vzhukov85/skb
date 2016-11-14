import express from 'express';

const router = express.Router();

function add(a = 0, b = 0) {
  return +a + +b;
}

router.get('/', (req, res) => {
  const result = add(req.query.a, req.query.b);
  res.send('' + result);
});

module.exports = router;
