// Servidor Express
const express = require('express');
const server = express();
const PORT = 3001

const router = require("./routes/index")

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use(express.json());
server.use("/rickandmorty", router)
  
server.listen(PORT, ()=>{
    console.log('Server raised in port: '+PORT);
});


/* servidor con http
const http = require("http");
//const data = require("./utils/character.json");
const getCharById = require("./controller/getCharById"); 
const PORT = 3001

http.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        const { url } = req;
        if(url.includes("/rickandmorty/character")){
            // /rickandmorty/character/1
            // [rickandmorty, rickandmorty, 1]
            const id = url.split("/").at(-1);
            console.log(id);
            // data: [{id: 1}...]
            // == -> valor
            // === -> tipo y valor
            getCharById(res, id);
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}).listen(PORT, ()=>{
    console.log(`Server on Port ${PORT}`);
})
*/