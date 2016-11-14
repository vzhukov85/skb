import express from 'express';
import fetch from 'node-fetch';
import _ from 'lodash';

const router = express.Router();

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
let pc = {};
fetch(pcUrl).then(async (res) => {
  pc = await res.json();
}).catch((err) => {
  console.log('Чтото пошло не так:', err);
});

router.get('/volumes', (req, res) => {
  const volumes = {};
  _.forEach(pc.hdd, (hdd) => {
    const volume = hdd.volume;
    const size = +hdd.size;
    if (volumes[volume] === undefined) {
      volumes[volume] = size;
    } else {
      volumes[volume] += size;
    }
  });
  _.forEach(volumes, (size, volume) => {
    volumes[volume] = `${size}B`;
  });
  return res.send(volumes);
});

router.get('/*', (req, res) => {
  const pathLine = req.path.split('/');
  let isValid = true;
  let current = pc;
  _.forEach(pathLine, (path) => {
    if (path === '') return;
    if (_.indexOf(_.keys(current), path) === -1) {
      isValid = false;
      return false;
    }
    current = _.get(current, path);
  });
  if (!isValid) return res.status(404).send('Not Found');
  return res.json(current);
});

module.exports = router;
