import React from "react";
import styled from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props){

    const { onSearch } = props;

    const [character, setCharacter] = useState("");

    const handleChange = (e) => {
        const { value } = e.target
        setCharacter(value)
    }

    return(
        <div className={styled.container}>
            <input className={styled.input} type="search" placeholder="Buscar..!" onChange = {handleChange} />
            <button className={styled.buttonsearch} onClick={()=>onSearch(character)}>Agregar</button>
            <button className={styled.buttonrandom} onClick={()=>onSearch(Math.floor(Math.random()*826))}>Random</button>

        </div>
    )
}
