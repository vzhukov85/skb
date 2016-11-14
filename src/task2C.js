import express from 'express';

const router = express.Router();

function canonize(url) {
  const re = new RegExp('@?(https:|http:)?(//)?([^/]+/)?([@a-z0-9_.]+)', 'i');
  const usernameInfo = url.match(re);
  const username = usernameInfo[4];
  if (username.startsWith('@')) {
    return username;
  }
  return `@${username}`;
}

router.get('/', (req, res) => {
  const result = canonize(req.query.username);
  res.send('' + result);
});

module.exports = router;
