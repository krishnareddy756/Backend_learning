const exp = require('constants');
const express=require('express');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const app=express();
const port=8080;
const path=require('path');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));
let posts=[
    {
        id:uuidv4(),
        username:'cherprang',
        content:'Life’s a game of WiFi signals—sometimes strong, mostly unstable. 📶😅',
    },
    {
        id:uuidv4(),
        username:'music',
        content:'My bank account and my phone battery have one thing in common: always low.🔋💸',
    },
    {
        id:uuidv4(),
        username:'cher',
        content:'Some people run on caffeine, I run on sheer panic and deadlines. ⏳☕',
    },
];

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts:posts});
});
app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
});
app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    posts.push({ id: uuidv4(), username, content }); // ✅ Add id
    res.redirect('/posts');
});

app.get('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render('show.ejs',{post});
   
});
app.patch('/posts/:id',(req,res)=>{
    let {id}=req.params;
    
    let newContent=req.body.content;
    let post=posts.find((p)=>id==p.id);
    res.redirect('/posts');
    
});
app.get('/posts/:id/edit',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render('edit.ejs',{post});
});
app.delete('/posts/:id',(req,res)=>{    
    let {id}=req.params;
    posts=posts.filter((p)=>id!=p.id);
    res.redirect('/posts');
});
app.listen(port,()=>{    
    console.log(`Server is running at http://localhost:${port}`);
});