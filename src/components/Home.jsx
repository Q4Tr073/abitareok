import React from "react";
import { Link } from "react-router-dom";
import imageHome from './img/home.jpg';
import Styles from './Styles/Home.module.css'; 
import LOGO from './img/LOGO.png';

export default function Home(){

    return(
        <>
            <div className={Styles.background}> 
                <img src={imageHome} className={Styles.stretch} alt="" />
            </div>
            <div className={Styles.cont}>
                <h1 className={Styles.titulo}>Botonera Abitare Comunicaciones</h1>
                <div className={Styles.buttonCont}>
                    <Link to='tb'>
                        <button className={Styles.button}>TRATATE BIEN</button>
                    </Link>
                    <Link to='/rdf'>
                        <button className={Styles.button}>RIO DE FONDO</button>
                    </Link>
                </div>
                <div>
                    <img className={Styles.logo} src={LOGO}/>
                </div>
            </div>
        </>
    )
}