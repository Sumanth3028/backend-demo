const express=require('express')

const contactController=require('../controllers/contact')

const router=express.Router()

router.get('/contactUs',contactController.getContact)

router.post('/success',contactController.getSuccess)

module.exports=router