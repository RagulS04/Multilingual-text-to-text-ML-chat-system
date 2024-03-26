import mongoose from "mongoose"

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ragulsabarathinam:mgzsqsz39j@cluster0.0whuhqm.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0`,console.log("Connected to MongoDB"))
    } catch (error) {
        console.log("error in connecting to mongo",error.message)
    }
}

export default connectToMongoDB;