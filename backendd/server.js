import {app} from "./app.js";
import dotenv from "dotenv"
import http from "http"
import { connectDB } from "./config/db.js";

dotenv.config()
const PORT = process.env.PORT || 5000

const startserver = async () => {
    try {
        await connectDB()
        console.log(`MongoDB connected: ${process.env.MONGO_URL}`)
        app.listen(PORT, () => console.log(`Server running in ${process.env.MONGO_URL} 
            mode on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

startserver().catch((err) => {
    console.log(err)
    process.exit(1)
});
