import express from 'express';
import cors from 'cors';

import task2A from './task2A';
import task2B from './task2B';
import task2C from './task2C';
import task3A from './task3A';

const app = express();

app.use(cors());
app.use('/task2A', task2A);
app.use('/task2B', task2B);
app.use('/task2C', task2C);
app.use('/task3A', task3A);

app.listen(3000, () => {});
