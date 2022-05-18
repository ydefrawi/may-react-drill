const express = require("express"); 
const PORT = process.env.PORT || 3001;
const app = express(); 

//setting up server api endpoint. GET request, responds with a 'message' in json. 
//Will allow React to hit endpoint(w) and retrieve data from our DB
//TODO: Modularize routes
app.get("/api", (req, res)=>{
    res.json({message: "Hello from the server!"})
})

//launches server
app.listen(PORT, ()=>{
    console.log(`Server listening on PORT ${PORT}`);
});
