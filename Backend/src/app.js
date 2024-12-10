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



// if(process.env.NODE_ENV != "production"){
//     require('dotenv').config();
// }


import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000); // Set port from .env or default to 8000
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    try {

        // console.log("MongoDB URI:", process.env.ATLASDB_URL);
        const connectionDb = await mongoose.connect(process.env.ATLASDB_URL);

        console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);
        console.log("MongoDB URI:", process.env.ATLASDB_URL);

        
        server.listen(app.get("port"), () => {
            console.log(`LISTENING ON PORT ${app.get("port")}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

start();



// import express from "express";
// import { createServer } from "node:http";

// import { Server } from "socket.io";

// import mongoose from "mongoose";
// import { connectToSocket } from "./controllers/socketManager.js";

// import cors from "cors";
// import userRoutes from "./routes/users.routes.js";

// const app = express();
// const server = createServer(app);
// const io = connectToSocket(server);


// app.set("port", (process.env.PORT || 8000))
// app.use(cors());
// app.use(express.json({ limit: "40kb" }));
// app.use(express.urlencoded({ limit: "40kb", extended: true }));

// app.use("/api/v1/users", userRoutes);

// const start = async () => {
//     app.set("mongo_user")
//     const connectionDb = await mongoose.connect("mongodb+srv://msonal4585:dzAx1rU8tRaPymKw@cluster0.695ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

//     console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
//     server.listen(app.get("port"), () => {
//         console.log("LISTENINg ON PORT 8000")
//     });
// }

// start();