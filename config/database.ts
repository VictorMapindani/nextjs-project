// import { log } from 'console';
// import mongoose from 'mongoose';

// let connected = false;

// const connectDB = async () => {
//     mongoose.set('strictQuery', true);

//     // If the database is already connected, dont connect again

//     if (connected) {
//         console.log('MongoDB is connected');
//         return;
//     }

//     //Connect to MongoDB
//     try {
//         const mongoUri = process.env.MONGODB_URI;
//         if (!mongoUri) {
//             throw new Error('MONGODB_URI is not defined');
//         }
//         await mongoose.connect(mongoUri);
//         connected = true;
//     }catch (error) {
//         console.log(error);
//     }

// }

// export default connectDB;

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    // If already connected, return
    if (connectionState === 1) {
        console.log("MongoDB is already connected");
        return;
    }

    // If in the process of connecting, log and return
    if (connectionState === 2) {
        console.log("MongoDB is currently connecting...");
        return;
    }

    try {
        // Connect to MongoDB if no active or pending connection
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined");
        }
        
        await mongoose.connect(MONGODB_URI, {
            dbName: 'propertypulse',
            bufferCommands: false,
        });
        console.log("MongoDB connection established successfully");
        
    } catch (error) {
        console.error("Error in connecting to MongoDB:", error);
        throw new Error("Error connecting to database");
    }
};

export default connect;
