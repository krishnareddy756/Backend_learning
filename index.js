const express=require('express');
const app=express();
const port=8080;
app.get('/register',(req,res)=>{ 
    res.send('standard GET REQUEST');
});
app.post('/register',(req,res)=>{
    res.send('standard POST REQUEST');
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
