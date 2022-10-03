import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Styles/TB.module.css';
import imageTB from './img/tb.png';

//SEPARADORES
import SEPARADOR1 from '../sonidos/TB/SEPARADOR 1.mp3'
import SEPARADOR2 from '../sonidos/TB/SEPARADOR 2.wav'
import SEPARADOR3 from '../sonidos/TB/SEPARADOR 3.wav'
import SEPARADOR4 from '../sonidos/TB/SEPARADOR 4.wav'

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
                    <h2 className={Styles.titulo2}>Separadores</h2>
                    <div className={Styles.buttonSecciones}>                        
                        <button className={Styles.button} type='button' onMouseDown={()=>separador1.play()}>SEPARADOR 1 </button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador2.play()}>SEPARADOR 2</button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador3.play()}>SEPARADOR 3</button>
                        <button className={Styles.button} type='button' onMouseDown={()=>separador4.play()}>SEPARADOR 4</button>
                    </div>                    
                    
                </div>
                <a href="/tb">
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

export default BotoneraTB;