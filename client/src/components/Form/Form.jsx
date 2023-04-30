import styled from "./Form.module.css";
import { useState} from "react";

import imageUsuario from "../../image/rymusuario.avif";
import  validate  from "./validation";

const Form = (props) => {

    const [userData, setUserData] = useState({userName: '', password: ''});

    const [errors, setErrors] = useState({userName: '', password: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        });

        setErrors(validate({
            ...userData,
            [name]: value,
        }))
    }
    /* Muestra la forma como recibo los datos los inputs
    useEffect(()=>{
        console.log("Que me muestra",userData);
    }, [userData])
    */
   const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData)
   }

    return (
        <form className={styled.container} onSubmit={handleSubmit}>
            <img src={imageUsuario} alt="Not found" />
            <br />
            <label>Nombre: </label>
            <input type="text" value={userData.userName} name="userName" onChange={handleChange} className={errors.userName && styled.warning}/>
            {errors.userName? <p className={styled.warningtext}>{errors.userName}</p>: ''}
            <label>Password: </label>
            <input type="password" value={userData.password} name="password" onChange={handleChange} className={errors.password && styled.warning}/>
            {errors.password? <p className={styled.warningtext}>{errors.password}</p>: ''}
            <br />
            <button className={styled.buttonusuario} type="submit">Login</button>
        </form>
    )
}

export default Form;