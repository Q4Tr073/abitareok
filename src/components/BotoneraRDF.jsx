import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Styles/RDF.module.css';
import imageRDF from './img/RDF.webp';

import BocinaRegueton from '../sonidos/FX/BOCINA REGUETON.mp3';
//SEPARADORES
import SEPARADOR1 from '../sonidos/RDF/NAUFRAGIO DE TU RUTINA.mp3'
import SEPARADOR2 from '../sonidos/RDF/PARA PARA PARA.mp3'
import SEPARADOR3 from '../sonidos/RDF/RELAX DE LA PLAYA.mp3'
import SEPARADOR4 from '../sonidos/RDF/QUEDATE CON NOSOTROS.mp3'
//EFECTOS
import BotoneraFX from './BotoneraFX';

var regueton = new Audio();
regueton.src = BocinaRegueton;

//SEPARADORES

var separador1 = new Audio();
separador1.src = SEPARADOR1;

var separador2 = new Audio();
separador2.src = SEPARADOR2;

var separador3 = new Audio();
separador3.src = SEPARADOR3;

var separador4 = new Audio();
separador4.src = SEPARADOR4;
class BotoneraRDF extends Component {

render() {
    return ( 
        <>
        <div className={Styles.background}> 
            <img src={imageRDF} className={Styles.stretch} alt="" />
        </div>
            <div className={Styles.cont}>
                <h1 className={Styles.titulo}>RIO DE FONDO</h1>
                <div className={Styles.buttonCont}>
                    <div>
                        <div className={Styles.contRegue}>
                        <button className={Styles.buttonRegue} type='button' onMouseDown={()=>regueton.play()}>BOCINA REGUETON</button>
                    </div>
                    </div>
                    <h2 className={Styles.titulo2}>Separadores</h2>
                    <div className={Styles.buttonSecciones}>                        
                        <button className={Styles.button} type='button' onMouseDown={()=>separador1.play()}>NAUFRAGIO DE TU RUTINA</button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador2.play()}>PARA PARA PARA</button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador3.play()}>RELAX DE LA PLAYA</button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador4.play()}>QUEDATE CON NOSOTROS</button>
                    </div>                    
                </div>
                <a href="/rdf">
                    <button className={Styles.buttonS}>STOP...</button>
                </a>
                <BotoneraFX/>
                <a href="/rdf">
                    <button className={Styles.buttonS}>STOP...</button>
                </a>
                <Link to='/'>
                    <button className={Styles.back}>Volver</button>
                </Link>                
            </div>
        </>
        )
    }
}

export default BotoneraRDF;