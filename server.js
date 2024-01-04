const express= require ('express')
const app=express()
app.set("view engine",'ejs')
const userrouter= require('./routes/user.js')
app.use('/users',userrouter)
const useradmin= require('./routes/admin.js')
app.use('/admin',useradmin)



app.get('/',(req,res)=>{
    // to see this messege
    // res.send('sreejith sir is one and only')
    res.render('file.ejs')
    
})
app.get('/muhsin',(req,res)=>{
    res.render('muhsin.ejs',{name:'valla karyavum undayirunno'})
    
})







app.listen('3000',()=> console.log('server is running'))