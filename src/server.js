import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoute from './routes/web';
import connectDB from './config/connectDB';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
console.log('check port', port);

//setup view engine
viewEngine(app);

//init web route
initWebRoute(app);

connectDB();

app.listen(port, () => {
  console.log('----------------------------------------------------');
  console.log(`Backend Nodejs is running on http://localhost:${port}`);
  console.log('----------------------------------------------------');
});
