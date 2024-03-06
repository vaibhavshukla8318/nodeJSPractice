import express from 'express';

const app = express();

app.get('/', (req, res)=>{
  res.send("Hi I Am Back Again");
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`app is listening at port number ${port}`)
});