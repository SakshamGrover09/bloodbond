const express=require('express');
const router=express.Router();
const Donor=require('../models/Donor');
const Seeker=require('../models/Seeker');
const Admin=require('../models/Admin');
const { body , validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_SECRET='changululla18';
const fetchuser=require('../middleware/fetchuser');
   //donor
router.post('/createdonor',[
    body('name','Enter valid name').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body('password','Password length should be atleast 5').isLength({min:5}),
    body('age','Enter Valid input').exists(),
    body('mobile','Enter Valid input').isLength({min:10}),
    body('bloodgroup','Enter Valid input').exists(),
    body('gender','Enter Valid input').exists()

],async (req, res) => {
    const errors = validationResult(req);
    let success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      let a= await Donor.findOne({email:req.body.email});
      if(a)
      {
        return res.status(400).json({success,error:"Email already in use"});
      }
      const salt=await bcrypt.genSalt(10);
      const secPassword= await bcrypt.hash(req.body.password,salt);
      const donor = await Donor.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        age:req.body.age,
        mobile:req.body.mobile,
        gender:req.body.gender,
        bloodgroup:req.body.bloodgroup
      });
      const data={

        donor:{
          id:donor.id
        }
      }
       success=true;
      const authToken=jwt.sign(data,JWT_SECRET);
      res.json({success,authToken});   
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        return res.status(400).json({ error: 'Email already exists' });
      }
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }  
});
router.post('/donorlogin',[
  
  body('email','Enter valid email').isEmail(),
  body('password','Password cannot be empty').exists()

],async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password}=req.body;
  let success=false;
  try {
    let user= await Donor.findOne({email});
    if(!user)
    {
      return res.status(400).json({error:"No User Found "});
    }
    const passwordCompare= await bcrypt.compare(password,user.password);
    if(!passwordCompare)
    {  
      return res.status(400).json({success,error:"No User Found "});
    }
    const data={

      user:{
        id:user.id
      }
    }
    const authToken=jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,authToken});
    

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});




router.post('/getdonor',fetchuser,async (req, res) => { 
  try {
    const userId=req.user.id;
    const user= await Donor.findById(userId).select("-password");
    res.send(user);  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });  
  }
});

// seeker




router.post('/createseeker',[
    body('name','Enter valid name').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body('password','Password length should be atleast 5').isLength({min:5}),
    body('age','Enter Valid input').exists(),
    body('mobile','Enter Valid input').isLength({min:10}),
    body('bloodgroup','Enter Valid input').exists(),
    body('gender','Enter Valid input').exists()

],async (req, res) => {
    const errors = validationResult(req);
    let success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      let a= await Seeker.findOne({email:req.body.email});
      if(a)
      {
        return res.status(400).json({success,error:"Email already in use"});
      }
      const salt=await bcrypt.genSalt(10);
      const secPassword= await bcrypt.hash(req.body.password,salt);
      const seeker = await Seeker.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        age:req.body.age,
        mobile:req.body.mobile,
        gender:req.body.gender,
        bloodgroup:req.body.bloodgroup
      });
      const data={

        seeker:{
          id:seeker.id
        }
      }
       success=true;
      const authToken=jwt.sign(data,JWT_SECRET);
      res.json({success,authToken});   
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        return res.status(400).json({ error: 'Email already exists' });
      }
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }  
});

router.post('/seekerlogin',[
  
  body('email','Enter valid email').isEmail(),
  body('password','Password cannot be empty').exists()

],async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password}=req.body;
  let success=false;
  try {
    let user= await Seeker.findOne({email});
    if(!user)
    {
      return res.status(400).json({error:"No User Found "});
    }
    const passwordCompare= await bcrypt.compare(password,user.password);
    if(!passwordCompare)
    {  
      return res.status(400).json({success,error:"No User Found "});
    }
    const data={

      user:{
        id:user.id
      }
    }
    const authToken=jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,authToken});
    

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});




router.post('/getseeker',fetchuser,async (req, res) => { 
  try {
    const userId=req.user.id;
    const user= await Seeker.findById(userId).select("-password");
    res.send(user);  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });  
  }
});



//admin


router.post('/adminlogin',[
  
    body('email','Enter valid email').isEmail(),
    body('password','Password cannot be empty').exists()
  
  ],async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    let success=false;
    try {
      let user= await Admin.findOne({email});
      if(!user)
      {
        return res.status(400).json({error:"No User Found "});
      }
      const passwordCompare= await bcrypt.compare(password,user.password);
      if(!passwordCompare)
      {  
        return res.status(400).json({success,error:"No User Found "});
      }
      const data={
  
        user:{
          id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      success=true;
      res.json({success,authToken});
      
  
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });


  router.post('/getadmin',fetchuser,async (req, res) => { 
    try {
      const userId=req.user.id;
      const user= await Admin.findById(userId).select("-password");
      res.send(user);  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });  
    }
  });


//   router.post('/createadmin',[
//     body('name','Enter valid name').isLength({min:3}),
//     body('email','Enter valid email').isEmail(),
//     body('password','Password length should be atleast 5').isLength({min:5}),
//     body('age','Enter Valid input').exists(),
//     body('mobile','Enter Valid input').isLength({min:10}),
//     body('bloodgroup','Enter Valid input').exists(),
//     body('gender','Enter Valid input').exists()

// ],async (req, res) => {
//     const errors = validationResult(req);
//     let success=false;
//     if (!errors.isEmpty()) {
//       return res.status(400).json({success, errors: errors.array() });
//     }
//     try {
//       let a= await Admin.findOne({email:req.body.email});
//       if(a)
//       {
//         return res.status(400).json({success,error:"Email already in use"});
//       }
//       const salt=await bcrypt.genSalt(10);
//       const secPassword= await bcrypt.hash(req.body.password,salt);
//       const admin = await Admin.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: secPassword,
//         age:req.body.age,
//         mobile:req.body.mobile,
//         gender:req.body.gender,
//         bloodgroup:req.body.bloodgroup
//       });
//       const data={

//         admin:{
//           id:admin.id
//         }
//       }
//        success=true;
//       const authToken=jwt.sign(data,JWT_SECRET);
//       res.json({success,authToken});   
//     } catch (error) {
//       if (error.code === 11000) {
//         // Duplicate key error
//         return res.status(400).json({ error: 'Email already exists' });
//       }
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }  
// });
  

module.exports=router