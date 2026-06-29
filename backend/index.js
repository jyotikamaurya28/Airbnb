import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import listingRouter from "./routes/listing.route.js"
import bookingRouter from "./routes/booking.route.js"

dotenv.config()

let port=process.env.PORT || 6000

let app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"https://airbnb-iryb.onrender.com",
    credentials:true
}))

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/listing",listingRouter)
app.use("/api/booking",bookingRouter)





app.listen(port,()=>{
    connectDb()
    console.log("server start")
})
