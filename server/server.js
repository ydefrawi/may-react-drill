import express from 'express'
const PORT = process.env.PORT || 3001;
const app = express(); 
import {sequelize} from '../server/config/connection.js'

//setting up server api endpoint. GET, responds with a json 'message'. 
//Will eventually allow React to hit endpoint(s) and retrieve data from our DB
//TODO: set up/modularize routes, basic hello below
app.get("/api", (req, res)=>{
    res.json({message: "Hello from the server!"})
})

//launches server

sequelize.sync({ force: false }).then((results) => {
    app.listen(PORT, function() {
      console.log(`🌎  ==> API server listening at http://localhost:${PORT}/api`)
  })}).catch((err)=>console.log(err))

