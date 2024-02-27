// import some node modules for later

const fs = require("node:fs");
const path = require("node:path");

// Load the express module to create a web application

const express = require("express");

const app = express();

app.use(express.json());


const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173"],
      optionsSuccessStatus: 200,
      methods: ["GET", "POST", "PUT", "DELETE"],    
  })
);





// Import the API routes from the router module
const router = require("./router");

app.use( router);


const reactBuildPath = path.join(__dirname, "..","..","frontend","dist"
);

app.get("*", (req, res) => {
  res.sendFile(`${reactBuildPath}/`);
});



const logErrors = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);

  next(err);
};

app.use(logErrors);
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});



module.exports = app;
