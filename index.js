const { faker, tr } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require('express');
const app=express();
const path=require('path');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Welcome@16$'
  });
  let  getRandomUser =()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  }; 
//home page
app.get('/',(req,res)=>{  
  let q="select count(*) from users";
  try {
  connection.query(q, (err, results )=> {
      if (err) throw err;
      let q=results[0]['count(*)'];
      res.render("home.ejs",{count:q});
      });
      } catch (error) {
        console.log(error);
        res.send("Error");
       }
});  

//show all users
app.get('/users',(req,res)=>{  
  let q="select * from users";
  try {
  
  connection.query(q, (err, results )=> {
      if (err) throw err;
      //console.log(results);
      res.render("showusers.ejs",{users:results});
      //res.render("users.ejs",{users:results});
      });
      } catch (error) {
        console.log(error);
        res.send("Error");
       }
});
//edit route
app.get('/user/:id/edit',(req,res)=>{ 
  let {id}=req.params;
  let q=`select * from users where id='${id}'`;
  try {
  
    connection.query(q, (err, results )=> {
        if (err) throw err;
        let user=results[0];
        console.log(results);
        res.render("edit.ejs",{user:user});
        //res.render("users.ejs",{users:results});
        });
        } catch (error) {
          console.log(error);
          res.send("Error");
         }
  });

// Update route
// Update user route
app.patch('/user/:id', (req, res) => { 
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;

  let q = `SELECT * FROM users WHERE id = ?`; // Use parameterized query
  connection.query(q, [id], (err, results) => {
      if (err) {
          console.log(err);
          return res.send("Error retrieving user");
      }

      if (results.length === 0) {
          return res.send("User not found"); // ✅ Return immediately
      }

      let user = results[0];

      if (formPass !== user.password) {
          return res.send("Password does not match"); // ✅ Return immediately
      }

      let q2 = `UPDATE users SET username = ? WHERE id = ?`;
      connection.query(q2, [newUsername, id], (err, results) => {
          if (err) {
              console.log(err);
              return res.send("Error updating user");
          }

          res.redirect('/users'); // ✅ Redirecting correctly
      });
  });
});

app.listen(8080,()=>{ 
    console.log("Server is running on port 8080");
});
// try {
//   connection.query(q,[data],  (err, results )=> {
//       if (err) throw err;
//       console.log(results);
//       });
// } catch (error) {
//   console.log(error);
// }
 