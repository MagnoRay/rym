import imagePre from "../../image/presentación.jpg";
import styled from "./About.module.css";

const About = () => {
    return(
        <div className={styled.container}>
            <h1>Bievenidos a mi primer SPA</h1>
            <p>En esta utilice los conocimientos adquiridos en bootcamp de Soy Henry</p>
            <img src={imagePre} alt="Not found"/>
            <h3>Hola, mi nombre es Magno Raymundo</h3>
        </div>
    )
}

export default About;