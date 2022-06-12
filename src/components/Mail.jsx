import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../Reducer/Accion/accions";
import StyleMail from './Styles/Mail.module.css';

export default function Mail(){

    const dispatch = useDispatch();

    const [err, setErr] = useState({});

    function validate(input) {
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let esValido = expReg.test(input.email);     
        let err = {};
        if (!input.name) {
            err.name = "Ingrese un nombre";
        }
        if (!input.email) {
            err.email = "Mail incorrecto";
        }
        if (!input.subjet) {
            err.subjet = "Ingrese un asunto";
        }
        if (!input.message) {
            err.subjet = "Ingrese un mensaje";
        }

        return err;
    }

    const [input, setInput] = useState({        
        name: '',
        email:'',
        subjet:'',
        message:'',        
    });

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErr(
            validate({
            ...input,
            [e.target.name]: e.target.value,
            })
        );
    }

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setErr(validate(input));
        const errorSave = validate(input);
        if(Object.values(errorSave).length !== 0){
        alert('Su mail no fue enviado')
        }else{
        dispatch(sendEmail(input));        
        alert("Mail enviado");
        navigate('/#Contacto')
        setInput({             
            name: '',
            email:'',
            subjet:'',
            message:'',
        });
        }
        
    }

    return (
        <div className={StyleMail.cont}>
            <h1 className={StyleMail.titulo}>Cualquier consulta estamos a disposicion</h1>
                <form className={StyleMail.formMail} onSubmit={(e) => handleSubmit(e)}> 
                        {/* <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)}/> */}
                        <div>
                        <label className={StyleMail.title}>Nombre </label>
                        <input value={input.name} type="text" onChange={(e) => handleChange(e)}/>
                        <div className={StyleMail.errLabel}>{err.name && <p>{err.name}</p>}</div>
                        </div>
                        
                        <div>
                        <label className={StyleMail.title}>Email </label>
                        <input value={input.email} id="email" type="text" onChange={(e) => handleChange(e)}/>
                        <div className={StyleMail.errLabel}>{err.email && <p>{err.email}</p>}</div>
                        </div>

                        <div>
                        <label className={StyleMail.title}>Asunto </label>
                        <input value={input.subjet} type="text" onChange={(e) => handleChange(e)}/>
                        <div className={StyleMail.errLabel}>{err.subjet && <p>{err.subjet}</p>}</div>
                        </div>

                        <label className={StyleMail.title}>Mensaje </label>
                        <textarea value={input.message} id="" ></textarea>
                        <div className={StyleMail.errLabel}>{err.message && <p>{err.message}</p>}</div>
                    
                        <input type="submit" value="Send Message"></input>
                </form>
        </div>
    )
}