import React from "react";
import Card from "../Card/Card";
import { DivCont } from "../assets/styleComponents";


const Cards=(props)=>{
    const { characters } = props;
    //console.log(characters);
    return(
        <DivCont>
            {characters.map(obj =>(
                <Card
                    name = {obj.name}
                    species = {obj.species}
                    gender = {obj.gender}
                    image = {obj.image}
                    key = {obj.name}
                    id = {obj.id}
                    onClose={props.onClose}
                />
            ))

            }
        </DivCont>
    )
}

export default Cards;

