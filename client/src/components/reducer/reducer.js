import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionsTypes";

const initialState = {
    myFavorites: [],
    allCharacters: []

}

const reducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_FAVORITE: 
        // myFavorites: [{}]
        // myFavorites: [{},{}]
        return{
            ...state,
            allCharacters: [...state.allCharacters, payload],
            myFavorites: [...state.allCharacters, payload]
        }

        case DELETE_FAVORITE: 
        const filtered = state.myFavorites.filter((character)=>character.id !== payload);
        return{
            ...state,
            myFavorites: filtered,
        }

        case FILTER:
        const filterByGender = [...state.allCharacters].filter((gchar)=>gchar.gender.toLowerCase() === payload.toLowerCase())
        return{
            ...state,
            myFavorites: filterByGender
        }
        
        case ORDER:
            const filterByOrder = [...state.allCharacters].sort((a,b)=>{
                if(a.id > b.id){
                    return payload === "Ascendente" ? 1 : -1
                }else if(a.id < b.id){
                    return payload === "Descendente" ? 1 : -1
                }else{
                    return 0
                }
                /*
                if(payload === "Ascendente"){
                    return a.id>b.id ? 1 : -1
                }else{
                    return a.id<b.id ? -1 : 1
                }
                */
            });
            return{
                ...state,
                myFavorites: filterByOrder
            }

        default: 
        return {...state}
    }
}

export default reducer;