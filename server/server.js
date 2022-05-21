const express = require("express"); 
const PORT = process.env.PORT || 3001;
const app = express(); 
import {sequelize} from './config/connection.js'

//setting up server api endpoint. GET request, responds with a 'message' in json. 
//Will allow React to hit endpoint(w) and retrieve data from our DB
//TODO: Modularize routes
app.get("/api", (req, res)=>{
    res.json({message: "Hello from the server!"})
})

//launches server

sequelize.sync({ force: false }).then((results) => {
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
  })}).catch((err)=>console.log(err))