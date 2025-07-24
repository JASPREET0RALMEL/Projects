const express = require("express");
const {connection} = require("./configs/db");

const cors = require("cors");
const { userRoute } = require("./routes/user.routes");
require('dotenv').config(); 

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Server is running")
});

app.use("/api/user",userRoute);


const PORT = process.env.PORT

app.listen(PORT, async()=>{
    try {
        console.log("Database is connecting...");
        await connection
        console.log("Database is connected");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server is running at http://localhost:${PORT}`)
})