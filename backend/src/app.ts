import { config } from 'dotenv';
config();
import express from 'express';
import routes from './routes';
import { dataSource } from './configs/datasource.config';
import cors from 'cors';
import * as admin from 'firebase-admin';
const serviceAccount = require('./configs/service.config.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

dataSource
  .initialize()
  .then(() => {
    console.log('The database is connected!');
  })
  .catch((error) => {
    console.log('The database connection failed!');
    console.log(error);
  });

app.listen(process.env.APP_PORT, () => {
  console.log(
    `The application is listening on port ${process.env.APP_PORT}..!`
  );
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
