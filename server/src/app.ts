import express from 'express';
import * as bodyParser from 'body-parser';
import userRoutes from '../routes/user';
const app = express();
const port = 5000;



app.use(bodyParser.json());
//Routes
app.use('/', userRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});