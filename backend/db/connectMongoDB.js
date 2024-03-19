import mongoose from "mongoose";

export default async function connectToMongoDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("successfully connected to mongo db")
    } catch (error) {
        console.log("failed to connect to db: " + error.message)
    }
}