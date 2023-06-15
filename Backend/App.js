const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken');
const verifyToken = require('./middleware/auth')
const secret = 'BackLogin'
require('dotenv').config()

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL)

app.use(cors())
app.use(express.json())
app.use(setUser)


app.get('/bookingtoday', (req, res) => {
  connection.query('SELECT COUNT(id) AS count FROM bookingroom WHERE DATE(begin) <= CURDATE() AND DATE(end) >= CURDATE() AND bookingroom.status_id = 0;', (err, result) => {
      if (err) {
          console.log(err);
          res.status(500).json({ error: err });
      } else {
          res.json({ columnCount: result[0].count });
      }
  });
});

app.get('/columnCount', (req, res) => {
    connection.query('SELECT COUNT(id) AS count FROM listrooms;', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err });
        } else {
            res.json({ columnCount: result[0].count });
        }
    });
});

app.get('/usersCount', (req, res) => {
  connection.query('SELECT COUNT(id) AS count FROM users;', (err, result) => {
      if (err) {
          console.log(err);
          res.status(500).json({ error: err });
      } else {
          res.json({ columnCount: result[0].count });
      }
  });
});

app.get('/listroom',(req,res)=>{
   connection.query('SELECT DISTINCT * FROM listrooms ORDER BY id;',(err,result)=>{
    if(err){
        console.log(err);
    }else{
        res.send(result)
    }
   })
})

app.get('/booking',(req,res)=>{
    connection.query('SELECT * FROM bookingroom;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 app.get('/role',(req,res)=>{
    connection.query('SELECT * FROM role;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 app.get('/booking/:id',(req,res)=>{
    connection.query('SELECT * FROM bookingroom WHERE id=?;',[req.params.id],(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 app.get('/users',(req,res)=>{
    connection.query('SELECT *,users.id FROM users,role WHERE users.role = role.role;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 app.get('/department',(req,res)=>{
    connection.query('SELECT * FROM department;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 app.get('/usefor',(req,res)=>{
    connection.query('SELECT * FROM usefor;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 app.get('/modalbooking',(req,res)=>{
    connection.query('SELECT DISTINCT topic,create_date,name,build,seat,attend,tel,usefor,department_id,department_th,item,status_id,room_id,listrooms.id,color FROM bookingroom,listrooms,item,usefor,department WHERE bookingroom.room_id = listrooms.id AND bookingroom.department_id = department.id ;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 app.get('/item',(req,res)=>{
    connection.query('SELECT * FROM item;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 app.get('/calendar',(req,res)=>{
    connection.query('SELECT bookingroom.id,comment,fname,seat,attend,tel,usefor,department_id,department_th,item,status,status_id,color_status,build,name,create_date,end,time_end,begin,time_begin,color,room_id,topic FROM status,usefor,department,listrooms,bookingroom WHERE bookingroom.room_id = listrooms.id  AND bookingroom.department_id = department.id  AND bookingroom.status_id = status.id AND bookingroom.usefor_id = usefor.id ;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })


 app.get('/bookinglist',(req,res)=>{
    connection.query('SELECT fname,seat,attend,tel,usefor,department_id,department_th,item,status,status_id,color_status,build,name,create_date,end,time_end,begin,time_begin,color,room_id,topic FROM status,usefor,department,item,listrooms,bookingroom WHERE bookingroom.room_id = listrooms.id  AND bookingroom.department_id = department.id  AND bookingroom.status_id = status.id;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })

 app.get('/status',(req,res)=>{
    connection.query('SELECT * FROM status;',(err,result)=>{
     if(err){
         console.log(err);
     }else{
         res.send(result)
     }
    })
 })
 
 app.get('/userlog', verifyToken, (req, res) => {
    try {
      const user = req.user;
      res.json({ status: 'ok', user });
    } catch (err) {
      res.json({ status: 'error', message: err.message });
    }
  });


app.post('/listroom',jsonParser,(req,res,next)=>{

        connection.query(
            'INSERT INTO listrooms(name,detail,build,seat,color) VALUES(?, ?, ?, ?, ?)',
            [req.body.name,req.body.detail,req.body.build,req.body.seat,req.body.color],
            function(err, results, fields) {
            if(err){
                res.json({status:'error',message:err})
                return
            }
            res.json({status:'ok'})
            }
        );  
})
app.post('/role',jsonParser,(req,res,next)=>{

    connection.query(
        'INSERT INTO role(role,color) VALUES(?, ?)',
        [req.body.role,req.body.color],
        function(err, results, fields) {
        if(err){
            res.json({status:'error',message:err})
            return
        }
        res.json({status:'ok'})
        }
    );  
})
app.post('/status',jsonParser,(req,res,next)=>{

    connection.query(
        'INSERT INTO status(status) VALUES(?)',
        [req.body.status],
        function(err, results, fields) {
        if(err){
            res.json({status:'error',message:err})
            return
        }
        res.json({status:'ok'})
        }
    );  
})
app.post('/usefor',jsonParser,(req,res,next)=>{

    connection.query(
        'INSERT INTO usefor(usefor) VALUES(?)',
        [req.body.usefor],
        function(err, results, fields) {
        if(err){
            res.json({status:'error',message:err})
            return
        }
        res.json({status:'ok'})
        }
    );
;  
})

app.post('/item',jsonParser,(req,res,next)=>{

    connection.query(
        'INSERT INTO item(item) VALUES(?)',
        [req.body.item],
        function(err, results, fields) {
        if(err){
            res.json({status:'error',message:err})
            return
        }
        res.json({status:'ok'})
        }
    );  
})

app.post('/department',jsonParser,(req,res,next)=>{

    connection.query(
        'INSERT INTO department(department,department_th) VALUES(?, ?)',
        [req.body.department,req.body.department_th],
        function(err, results, fields) {
        if(err){
            res.json({status:'error',message:err})
            return
        }
        res.json({status:'ok'})
        }
    );  
})

// app.post('/booking',jsonParser,(req,res,next)=>{
//         connection.query(
//           // 'SELECT * FROM bookingroom WHERE room_id = ? AND ((DATE(begin) <= CURDATE() AND DATE(time_begin) <= CURDATE() AND DATE(time_end) >= CURDATE() AND DATE(end) >= CURDATE());',
//           //'SELECT * FROM bookingroom WHERE room_id = ? AND ((begin <= ? AND end >= ?) OR (begin >= ? AND begin <= ?))',
//             'SELECT * FROM bookingroom WHERE room_id = ? AND ((begin <= ? AND end >= ?) OR (begin >= ? AND begin <= ?))',
//           [req.body.room_id, req.body.begin, req.body.time_begin, req.body.time_begin, req.body.end, req.body.time_begin, req.body.time_begin],
//           function(err, results, fields) {
//               if (err) {
//                   res.json({ status: 'error', message: err });
//                   return;
//               }

//               // if (results.length > 0) {
//               //     // มีคนจองแล้ว
//               //     res.json({ status: 'error', message: 'เวลานี้มีคนจองแล้ว' });
//               //     return;
//               // }

//               // ทำการเพิ่มการจองใหม่ลงในฐานข้อมูล
//               connection.query(
//                   'INSERT INTO bookingroom(room_id, fname, topic, comment, attend, begin, end, tel, usefor_id, item, department_id, time_begin, time_end) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//                   [req.body.room_id, req.body.fname, req.body.topic, req.body.comment, req.body.attend, req.body.begin, req.body.end, req.body.tel, req.body.usefor_id, req.body.item, req.body.department_id, req.body.time_begin, req.body.time_end],
//                   function(err, results, fields) {
//                       if (err) {
//                           res.json({ status: 'error', message: err });
//                           return;
//                       }
//                       res.json({ status: 'ok' });
//                   }
//               );
//           }
//         );
// })


app.post('/booking',jsonParser,(req,res,next)=>{

    connection.query(
        'INSERT INTO bookingroom(room_id,fname,topic,comment,attend,begin,end,tel,usefor_id,item,department_id,time_begin,time_end) VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [req.body.room_id,req.body.fname,req.body.topic,req.body.comment,req.body.attend,req.body.begin,req.body.end,req.body.tel,req.body.usefor_id,req.body.item,req.body.department_id,req.body.time_begin,req.body.time_end],
        function(err, results, fields) {
        if(err){
            res.json({status:'error',message:err})
            return
        }
        res.json({status:'ok'})
        }
    );  
})

app.post('/modalbooking',jsonParser,(req,res,next)=>{

    connection.query(
        'INSERT INTO modal_booking(department,tel,use_for,item) VALUES(?, ?, ?, ?)',
        [req.body.department,req.body.tel,req.body.use_for,req.body.item],
        function(err, results, fields) {
        if(err){
            res.json({status:'error',message:err})
            return
        }
        res.json({status:'ok'})
        }
    );
;  
})

app.post('/register',jsonParser,(req,res,next)=>{
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.query(
            'INSERT INTO users(email,username,password,fname,role) VALUES(?, ?, ?, ?, "User")',
            [req.body.email,req.body.username,hash,req.body.fname],
            function(err, results, fields) {
            if(err){
                res.json({status:'error',message:err})
                return
            }
            res.json({status:'ok'})
            }
        );
    });   
})

app.post('/login',jsonParser,(req,res,next)=>{
   
    connection.query(
        'SELECT *FROM users WHERE username=?',
        [req.body.username],
        function(err, users, fields) {
        if(err){
            res.json({status:'error',message:err})
            return
        }
        if(users.length === 0){
            res.json({status:'error',message:'User not found'});
        return
        }
        
        bcrypt.compare(req.body.password,users[0].password, function(err, isMatch) {
           if(isMatch){
            var token = jwt.sign({ email: users[0].email,username: users[0].username ,role:users[0].role,fname:users[0].fname,tel:users[0].tel,id:users[0].id},secret,{ expiresIn: '20h' });
            res.json({status:'ok',message:'Login Success',token, user: users[0] })
            
           }else{
            res.json({status:'error',message:'Login Failed'})
           }
        });
        
        }
        
    );
    
})


app.post('/list', verifyToken, (req, res) => {
    try {
      const user = req.user;
      
      res.json({ status: 'ok', user });
    } catch (err) {
      res.json({ status: 'error', message: err.message });
    }
  });
  
function setUser(req,res,next){
    const userId= req.body.userId
    if (userId){
        req.user = users.find(user => user.id === userId)
    }
    next()
}


app.put('/update/:id', (req, res) => {
    const { status_id } = req.body;
    const { id } = req.params;

    connection.query('UPDATE bookingroom SET status_id = ? WHERE id = ?;', [status_id, id], (err, result) => {
      if (err) {
        res.json({ status: 'error', message: err.message });
      } else {
        res.json({ status: 'ok', message: 'Success' });
      }
    });
  });
  app.put('/updaterole/:id', (req, res) => {   
    const { role } = req.body;
    const { id } = req.params;
    
    connection.query("UPDATE users SET role = ? WHERE id = ?", [role, id], (err, result) => {
      if (err) {
        res.json({ status: 'error', message: err.message });
      } else {
        res.json({ status: 'ok', message: 'Success' });
      }
    });
  });

  app.put('/updateInfo/:id', (req, res) => {
    const { id } = req.params;
    const { email, username, fname, tel, password } = req.body;
  
    bcrypt.hash(password, saltRounds, function (err, hash) {
      let updateFields = {};
  
      if (email) {
        updateFields.email = email;
      }
  
      if (username) {
        updateFields.username = username;
      }
  
      if (fname) {
        updateFields.fname = fname;
      }
  
      if (tel) {
        updateFields.tel = tel;
      }
  
      if (password) {
        updateFields.password = hash;
      }
  
      connection.query(
        "UPDATE users SET ? WHERE id = ?",
        [updateFields, id],
        (err, result) => {
          if (err) {
            res.json({ status: 'error', message: err.message });
          } else {
            res.json({ status: 'ok', message: 'Success' });
          }
        }
      );
    });
  });


  app.delete('/delete/:id', (req, res) => { 
    connection.query("DELETE FROM bookingroom WHERE id = ?",[req.params.id] ,(err, result) => {
      if (err){
        console.log(err);
      } else{
        res.json({ status: 'ok'});
      }      
    });
  });

  app.delete('/deleteitem/:id', (req, res) => { 
    connection.query("DELETE FROM item WHERE id = ?",[req.params.id] ,(err, result) => {
      if (err){
        console.log(err);
      } else{
        res.json({ status: 'ok'});
      }      
    });
  });
  app.delete('/deletedepartment/:id', (req, res) => { 
    connection.query("DELETE FROM department WHERE id = ?",[req.params.id] ,(err, result) => {
      if (err){
        console.log(err);
      } else{
        res.json({ status: 'ok'});
      }      
    });
  });
  app.delete('/deleteroom/:id', (req, res) => { 
    connection.query("DELETE FROM listrooms WHERE id = ?",[req.params.id] ,(err, result) => {
      if (err){
        console.log(err);
      } else{
        res.json({ status: 'ok'});
      }      
    });
  });
  app.delete('/deleteUsefor/:id', (req, res) => { 
    connection.query("DELETE FROM usefor WHERE id = ?",[req.params.id] ,(err, result) => {
      if (err){
        console.log(err);
      } else{
        res.json({ status: 'ok'});
      }      
    });
  });

app.listen(3000,function(){
    console.log("Server STARTTTTTT");
})
