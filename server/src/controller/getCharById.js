// EXPRESS
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async(req, res) => {
    // ASYN AWAIT
    try {
        const { id } = req.params;
        const {data} = await axios.get(URL+id)
        const {name, gender, species, origin, image, status} = data;
            res.status(200).json({id, name, gender, species, origin, image, status});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = getCharById;

// PROMESAS
    /*const getCharById = async(req, res) => {
    const { id } = req.params; 
    axios.get(URL+id).then((response)=>{
        try {
            const character = response.data;
            if(character.error){
                res.status(404).json({message: "Not found"});
            }else{
                const {id, name, gender, species, origin, image, status} = character;
                res.status(200).json({id, name, gender, species, origin, image, status});
            }
            res.status
        } catch (error) {
            res.status(500).json({message: error.message});
        }
        
    })
    }*/

/* SIN EXPRESS PARA SERVIDOR HTTP
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (res, id) => {
    axios.get(URL+id).then((response)=>{
        const  { id, name, gender, species, origin, image, status, location } = response.data;
        res.writeHead(200, {"Content-Type":"aplication/json"});
        res.end(JSON.stringify({ id, name, gender, species, origin, image, status, location }));
        // {id:1} => Objeto Javascript
        // {"id":1} => Objeto Json
    })
    .catch((reason)=>{res.writeHead(500, {"Content-Type":"text/plain"});
    res.end(reason.message)});    
};

module.exports = getCharById;
*/