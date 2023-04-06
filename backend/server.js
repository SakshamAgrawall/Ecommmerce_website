const app = require("./app");
const dotenv = require('dotenv');
const database = require("./config/db")

// config
dotenv.config({path:"backend/config/config.env"});

// database
database();

//server
app.listen(process.env.PORT,()=>{
    console.log(`server working on port ${process.env.PORT}`)
});
