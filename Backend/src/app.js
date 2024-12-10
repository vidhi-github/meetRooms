// import express from "express";
// import { createServer } from "node:http"; // connect express instance and socket.io server
// import { Server } from "socket.io";

// import mongoose from "mongoose";
// import  connectToSocket  from "./controllers/socketManager.js";
// import cors from "cors";

// const app = express();
// const server = createServer(app);
// const io =connectToSocket(server);

// app.set("port",(process.env.port || 8000));
// app.use(cors());
// app.use(express.json({ limit: "40kb" }));
// app.use(express.urlencoded({ limit: "40kb", extended: true }));

// app.get("/home", (req, res) => {
//     return res.json({ "hello": "world" })
// });

// const start = async () => {
//     app.set("mongo_user")
//     const connectionsDb=await mongoose.connect("mongodb+srv://msonal4585:dzAx1rU8tRaPymKw@cluster0.695ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//     console.log('MONGO connected db host:${connectionsDb.connection.host}')
//     server.listen(app.get("port"), () => {
//         console.log("LISTENING ON PORT 8000");
//     });
// };

// start();




// username::msonal4585   password::  dzAx1rU8tRaPymKw

//mongodb+srv://msonal4585:dzAx1rU8tRaPymKw@cluster0.695ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://msonal4585:dzAx1rU8tRaPymKw@cluster0.695ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENINg ON PORT 8000")
    });
}

start();