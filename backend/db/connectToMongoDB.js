import mongoose from "mongoose"

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ragulsabarathinam:mgzsqsz39j@cluster0.0whuhqm.mongodb.net/chat-app-db?`, console.log("Connected to MongoDB"))
    } catch (error) {
        console.log("Error in connecting to mongo", error.message)
    }
    
}

export default connectToMongoDB;