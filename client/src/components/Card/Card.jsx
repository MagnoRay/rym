import { Link } from "react-router-dom";

import styled from "./Card.module.css";
import {addFavorite, deleteFavorite} from "../reducer/actions"
import {connect} from "react-redux";
import { useState,useEffect } from "react";

const Card = ({id, name, species, image, gender, onClose, deleteFavorite, addFavorite, myFavorites})=>{   

    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        if(isFav){
            console.log("Desde card", isFav);
            setIsFav(false);
            deleteFavorite(id);
        }else{
            setIsFav(true);
            addFavorite({id, name, species, image, gender, onClose})
        }        
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
           if (fav.id === id) {
              setIsFav(true);
           }
        });
     }, [myFavorites]);

     
    return(
        
        <div className={styled.container}>            
            <div className={styled.btncontainer}>
            {
                isFav ? (
                    <button onClick={handleFavorite}>❤️</button>
                ) : (
                    <button onClick={handleFavorite}>🤍</button>
                )
                }
                {
                    isFav? null : (
                        <button className={styled.button} onClick={() => onClose(id)}>x</button>
                    )
                }
            </div>
            <Link to={`/detail/${id}`} className={styled.link}>
            <div className={styled.imageContainer}>
                <img src={image} alt = "Not found" />
                <h2 className={styled.name}>{name}</h2>
            </div>
            </Link>
            <div className={styled.propsContainer}>
                <h2>{species}</h2>
                <h2>{gender}</h2>
            </div>           
            
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (character)=>{
            dispatch(addFavorite(character));
        },

        deleteFavorite: (id)=>{
            dispatch(deleteFavorite(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)