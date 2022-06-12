import React, { Component } from 'react';
import Mail from './Mail';
import { Link } from 'react-router-dom';
import Styles from './Styles/TB.module.css';
import imageTB from './img/tb.png';

import Institucional from '../sonidos/TB/INSTITUCIONAL.wav';
//SECCIONES
import Finanzas from '../sonidos/TB/FINANZAS.wav';
import Nutricion from '../sonidos/TB/NUTRICION.wav';
//SEPARADORES
import SEPARADOR1 from '../sonidos/TB/SEPARADOR 1.mp3'
import SEPARADOR2 from '../sonidos/TB/SEPARADOR 2.wav'
import SEPARADOR3 from '../sonidos/TB/SEPARADOR 3.wav'
import SEPARADOR4 from '../sonidos/TB/SEPARADOR 4.wav'

var institucional = new Audio();
institucional.src = Institucional;

var finanzas = new Audio();
finanzas.src = Finanzas;

var nutricion = new Audio();
nutricion.src = Nutricion;

var separador1 = new Audio();
separador1.src = SEPARADOR1;

var separador2 = new Audio();
separador2.src = SEPARADOR2;

var separador3 = new Audio();
separador3.src = SEPARADOR3;

var separador4 = new Audio();
separador4.src = SEPARADOR4;

class BotoneraTB extends Component {

render() {
    return ( 
        <>
        <div className={Styles.background}> 
            <img src={imageTB} className={Styles.stretch} alt="" />
        </div>
            <div className={Styles.cont}>
                <h1 className={Styles.titulo}>TRATATE BIEN</h1>
                <div className={Styles.buttonCont}>
                    <div>
                    <button className={Styles.button} type='button' onMouseDown={()=>institucional.play()}>INSTITUCIONAL</button>
                    <a href="/tb">
                        <button className={Styles.buttonS}>STOP...</button>
                    </a>
                    </div>
                    <h2 className={Styles.titulo2}>Secciones</h2>
                    <div className={Styles.buttonSecciones}>                                            
                        <button className={Styles.button} type='button' onMouseDown={()=>finanzas.play()}>FINANZAS</button>
                        <button className={Styles.button} type='button' onMouseDown={()=>nutricion.play()}>NUTRICION</button>
                    </div>
                    <h2 className={Styles.titulo2}>Separadores</h2>
                    <div className={Styles.buttonSecciones}>                        
                        <button className={Styles.button} type='button' onMouseDown={()=>separador1.play()}>SEPARADOR 1 </button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador2.play()}>SEPARADOR 2</button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador3.play()}>SEPARADOR 3</button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador4.play()}>SEPARADOR 4</button>
                    </div>                    
                    
                </div>
                <Link to='/'>
                    <button className={Styles.back}>Volver</button>
                </Link>
                <div>
                    <Mail/>
                </div>                
            </div>
        </>
        )
    }
}

export default BotoneraTB;