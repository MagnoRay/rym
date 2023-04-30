const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);
    const validate = (inputs) => {
        // inputs --> {userData: "Magno", password: "123"}
        const errors = {};

        if(!regexEmail.test(inputs.userName)){
            errors.userName = "Debe ser un email";
        }

        if(!inputs.userName){
            errors.userName = "No puede ser vacío";
        }

        if(inputs.userName.length > 35){
            errors.userName = "No puede tener más de 35 caracteres";
        }

        if(!regexPass.test(inputs.password)){
            errors.password = "Debe contener mínimo un número"; 
        }

        if(inputs.password.length < 6 || inputs.password.length > 10){
            errors.password = "Debe tener entre 6 y 10 caracteres";
        }

        return errors;
    }

    export default validate;