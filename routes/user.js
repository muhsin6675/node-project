const express=require ('express')
const router = express.Router()
router.get('/admin',(req,res)=>{
    res.send('admin page')
})
router.get('/home',(req,res)=>{
    res.send('home page')
})
router.get('/login',(req,res)=>{
    res.send('log in page')
})


module.exports=router