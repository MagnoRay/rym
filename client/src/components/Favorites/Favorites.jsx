import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../reducer/actions";
import { DivCont } from "../assets/styleComponents";
import { useState } from "react";
import styled from "./Favorites.module.css";

const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
const handleFilterOrder = (e) => {
    const {name, value} = e.target
    switch (name){
        case "order":
            setAux(!aux);
            dispatch(orderCards(value));
            break;
        case "filter": 
            dispatch(filterCards(value))
            break;
        default: 
        break;
    }
    
}
    return(
        <DivCont>
            <div>
                <select className={styled.buttonfiltro} onChange={handleFilterOrder} name="order">
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select className={styled.buttonfiltro} onChange={handleFilterOrder} name="filter">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {myFavorites?.map(({
                id,
                name,
                species,
                image, 
                gender
            })=>(
                <Card id={id} key={id} name={name} species={species} image={image} gender={gender}/>
            ))}
        </DivCont>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);

