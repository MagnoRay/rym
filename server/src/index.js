const http = require("http");
const data = require("./utils/character.json");
const PORT = 3001

http.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.url);
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
            const character = data.results.find((char)=>char.id==id);
            if(character){
                
            res.writeHead(200, {"Content-Type":"application/json"})
            // character -> objeto de js
            // JSON
            res.end(JSON.stringify(character))
            }else{
                
            res.writeHead(404, {"Content-Type":"application/json"})
            // character -> objeto de js
            // JSON
            res.end(JSON.stringify({error: `Character no found with id: ${id}`}))
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}).listen(PORT, ()=>{
    console.log(`Server on Port ${PORT}`);
})