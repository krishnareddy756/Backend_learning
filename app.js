const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');
//middleware
// app.use((req,res,next)=> {
//   console.log('1st Middleware ');
//   next();
// });
// app.use((req,res,next)=> {
//   console.log('2nd Middleware ');
//   next();
// });
const checkToken=('/api',(req,res,next)=> {
  let {token} = req.query;
  if(token=='12345') {
    next();
  }
  else{
    throw new ExpressError(401,'Unauthorized');
  }
  //throw new ExpressError(401,'Unauthorized');
}
);

app.get('/api',checkToken,(req,res)=> {
  res.send('API Route');
});
//logger middleware
// app.use((req,res,next)=> {
//   req.time=new Date().toString();
//   console.log(req.method, req.path,req.hostname,req.time);
//   next();
// });

app.get('/', (req, res) => {
  res.send('Hello World');      
});
app.get('/random',(req, res) => {
  res.send('Random Route');
});
app.get('/err',(req, res) => {
  throw new Error('Error');
});
app.get('/admin',(req, res) => {
  throw new ExpressError(403,'You are not an admin');
});
app.use((err,req,res,next)=> {
  let {status=500, message="some error occured"} = err;
  res.status(status).send(message);
  
  
});
// app.use((err,req,res,next)=> {
//   res.status(500).send('Something went wrong');
//   next();
// });

app.use((req,res,next)=> {
  res.status(404).send('Not Found');
}); 
app.listen(8080, () => {
  console.log('Server is running on port 3000');
});