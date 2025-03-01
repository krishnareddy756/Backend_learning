const express=require('express');
const app=express();
const port=8080;
app.listen(port,()=>{   console.log(`Server is running on port ${port}`);}  );
// app.use((req,res)=>{
//     console.log('message received'); 
//     res.send('Hello World');
// })
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});
app.get('/search', (req, res) => {
    const query = req.query;
    res.send(`Search Query: ${query}`);
});
