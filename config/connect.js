import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGOOSE_URI}`)
        console.log("Mongo DB connected successfully:  ",
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.log(error)
    }
}

export default connectDatabase;