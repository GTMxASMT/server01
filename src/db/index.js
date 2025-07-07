import {DB_NAME} from '../constants.js'
import mongoose from 'mongoose'
const connectDB = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('✅ Database connected ( DB Host - ', connectionInstance?.connections[0]?.host , ')' )


    } catch (error) {
        console.error('Error while connecting to MongoDB database.');
        process.exit(1)
        
    }
}

export {connectDB}