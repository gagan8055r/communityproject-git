const express = require('express');
const fs = require('fs');

  const router=express.Router()


const getAllUser=(req,res)=>{
                
                res.status(500).json({
                    
                    status:"err",
                    message:"this is invalid data"
                })
            }
            const createUser=(req,res)=>{
                
                res.status(500).json({
                    
                    status:"err",
                    message:"this is invalid data"
                })
            }
            const getUser=(req,res)=>{
                
                res.status(500).json({
                    
                    status:"err",
                    message:"this is invalid data"
                })
            }
            const updateUser=(req,res)=>{
                
                res.status(500).json({
                    
                    status:"err",
                    message:"this is invalid data"
                })
            }
            const deleteUser=(req,res)=>{

                res.status(500).json({

                    status:"err",
                    message:"this is invalid data"
                })
            }

   router.route('/').get(getAllUser).post(createUser)

    router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

    module.exports=router
