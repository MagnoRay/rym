import axios from "axios";
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionsTypes";


/* AddFavorite Desde front
export const addFavorite = (character) => {
    return{
        type: ADD_FAVORITE,
        payload: character 
    }
}*/

// AddFavorite desde back con express y promessas

export const addFavorite = (character) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return (dispatch) => {
        axios.post(endpoint, character).then(({data})=>{
            return dispatch({
                type: ADD_FAVORITE,
                payload: data
            });
        });
    };
};


// Asyn await
/*
export const addFavorite = (character) => {    
    return async (dispatch) => {        
        try {
            const {data} = await axios.post(endpoint, character);            
            return dispatch({
                type: ADD_FAVORITE,
                payload: data,
            });
        } catch (error) {
            console.log(error); 
        } 
    }
}
*/


/* deleteFavorite desde el front
export const deleteFavorite = (id) => {
    return{
        type: DELETE_FAVORITE,
        payload: id
    }
}*/
//CON PROMESAS 

export const deleteFavorite = (id) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav/"+id;
    return (dispatch) => {
        axios.delete(endpoint).then(({data})=>{
            return dispatch({
                type: DELETE_FAVORITE,
                payload: data
            });
        });
    };
};


// asyn await
/*
export const deleteFavorite = (id)=>{
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(`${endpoint}/${id}`);
            return dispatch({
                type: DELETE_FAVORITE,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    };
};
*/
export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender

    }
}

export const orderCards = (order) => {
    return{
        type: ORDER,
        payload: order 
    }
}