import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';


function App() {

  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const userName = "mraymundo@gmail.com";
  const password = "magno123"; 

 const onSearch = (character) =>{
  // Convertimos a un nuevo número
  const characterId = parseInt(character, 10);
  // Existe en el array de personajes
  if(characters.some((c)=>c.id === characterId)){
  // Mensaje de Error
    window.alert("Es personaje ya fue añadido")
  }else{
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            //window.alert('No hay personajes con ese ID');
            return alert(data.error)
         }
      }).
      catch(error => console.log(alert("Servidor Caido")));
  }
 }

 const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id))
 }
/* Sirve para ver los datos de Location
 useEffect(()=>{
  console.log("desde apps location: ",location);
 },[])  && setAccess(true) && navigate("/home")
 */
const login = (userData) => {
  if(userData.userName === userName && userData.password === password){
    setAccess(true);
    navigate("/home")
  }else{
    alert("Datos incorrectos, por favor verifique");
  }
}

const logOut = () => {
  access && setAccess(false)
  navigate("/");
}

useEffect(()=>{
  !access && navigate("/")
}, [access, navigate])

  return (
    <div className="App">
      {location.pathname !== "/" &&
      <Navbar onSearch = { onSearch } logOut = {logOut}/>}
      <Routes>
        <Route path='/' element={<Form login = {login}/>}/> 
        <Route path='/home' element={<Cards characters = {characters} onClose = { onClose } />}/>
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
