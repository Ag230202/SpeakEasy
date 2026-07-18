import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';



const generateToken=user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:"15d",

    })
}





export const register=async(req,res)=>{

    const {email,password,name,role,photo,gender}=req.body;

    if (!email || !password || !name || !role || !gender) {
        return res.status(400).json({ success: false, message: 'Please provide all mandatory fields: name, email, password, role, and gender.' });
    }

    // --- MOCK MODE: Return success immediately to bypass DB ---
    //return res.status(200).json({success:true,message:'User successfully created (Mocked).'});
    // ----------------------------------------------------------

    try{
        let user=null;


        if(role=='patient')
        {
            user=await User.findOne({email})

        }
        else if(role=='doctor')
        {
            user=await Doctor.findOne({email})
        }
        //check if user exist
        if(user)
        {
            return res.status(400).json({message:'User already exist.'})
        }


        //hash password
        const salt=await bcrypt.genSalt(10)
        const hasPassword=await bcrypt.hash(password,salt)


        if(role=='patient')
        {
            user=new User({
                name,
                email,
                password:hasPassword,
                photo,
                gender,
                role
            })
        }
        if(role=='doctor')
        {
            user=new Doctor({
                name,
                email,
                password:hasPassword,
                photo,
                gender,
                role
            })
        }

        await user.save();

        res.status(200).json({success:true,message:'User successfully created.'})
        
         




    }
    catch(err){
        if (err.name === 'MongooseServerSelectionError' || err.message.includes('ECONNREFUSED') || err.message.includes('connect')) {
            return res.status(500).json({success:false, message: 'Database connection failed. Please try again later.'});
        }
        res.status(500).json({success:false,message:'Internal server error, Try again.'})
    }

};

export const login=async(req,res)=>{
    
    const {email}=req.body;

    // // --- MOCK MODE: Return dummy user immediately to bypass DB ---
    // const mockUser = {
    //     _id: 'mock_id_123',
    //     name: 'Mock User',
    //     email: email,
    //     role: 'patient',
    //     photo: ''
    // };
    // const token = jwt.sign({id:mockUser._id, role:mockUser.role}, process.env.JWT_SECRET_KEY || 'secret', { expiresIn: "15d" });
    // return res.status(200).json({status:true,message:'Successfuly login (Mocked)', token, data:mockUser, role:mockUser.role});
    // // -------------------------------------------------------------

    try{
        let user=null;
         
        const patient=await User.findOne({email})
        const doctor=await Doctor.findOne({email})


        if(patient)
        {
            user=patient
        }
        if(doctor)
        {
            user=doctor
        }

        //check if user exist or not
        if(!user)
        {
            return res.status(404).json({message:'User not found'});

        }

        // compare password
        const isPasswordMatch= await bcrypt.compare(req.body.password,user.password)

        if(!isPasswordMatch)
        {
            return res.status(400).json({status:false,message:'Invalid credential'});
        }

        //get token
        const token=generateToken(user);

        const {password,role,appointments,...rest}=user._doc
     res.status(200).json({status:true,message:'Successfuly login' ,token,data:{...rest}, role});


    }
    catch(err)
    {
        if (err.name === 'MongooseServerSelectionError' || err.message.includes('ECONNREFUSED') || err.message.includes('connect')) {
            return res.status(500).json({status:false, message: 'Database connection failed. Please try again later.'});
        }
        res.status(500).json({status:false,message:'Failed to login'});
    }
};