import express from 'express';
import { read } from './jsonFileStorage.js';

const app = express();

app.get('/recipe/:index', (req, res) => {
  read('data.json', (err, content) => {
    if(err){
      console.log(err);
      return;
    }
  const {index} = req.params;
  if (!(index >= 0)){
   res.status(404).send('Oi! Type properly! <br> Enter a number from 0');
  }
  res.send(content.recipes[index]);
  })
});

app.listen(3004);