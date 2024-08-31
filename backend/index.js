import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';
import bookingRoute from './Routes/booking.js';

dotenv.config()
 
const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
  origin: 'http://localhost:5173'
};


app.get('/', (req, res) => {
  res.send('API is working')
});

//database connection
mongoose.set('strictQuery',false)
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log('Mongo DB database is connected')
    }
    catch (err){
        
        console.log('Mongo DB database is not connected')

    }
}

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute); 
app.use('/api/v1/users',userRoute); 
app.use('/api/v1/doctors',doctorRoute); 
app.use('/api/v1/reviews',reviewRoute);
app.use('/api/v1/bookings',bookingRoute); 






app.listen(port, () => {
    connectDB();
  console.log(`Server is running on port ${port}`);
})