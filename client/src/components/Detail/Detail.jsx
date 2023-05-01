import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "./Detail.module.css";

const Detail = (props) => {

    const navigate = useNavigate();
    const { detailId } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
           .then((response) => response.json())
           .then((data) => {
                data.name? setCharacter(data) : window.alert('No hay personajes con ese ID')
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    return(
        <div className={styled.container}>
            <div>
                <button className={styled.buttonback} onClick={()=>navigate("/home")}>Back</button>
            </div>
            <div className={styled.containerInfo}>
                <div>
                <h1>Name: {character.name}</h1>
                <h1>Status: {character.status}</h1>
                <h1>Specie: {character.species}</h1>
                <h1>Gender: {character.gender}</h1>
                <h1>Origin: {character.origin?.name}</h1>
                <h1>Location: {character.location?.name}</h1>
                </div>
                <img src={character.image} alt={character.name} />
                
            </div>
        </div>
    )
}

export default Detail;