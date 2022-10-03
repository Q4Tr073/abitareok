import React, { Component } from 'react';
import Styles from './Styles/FX.module.css';
//EFECTOS
import Siga from '../sonidos/FX/siga el baile.ogg';
import Abucheo from '../sonidos/FX/Abucheo.wav';
import Acomerla from '../sonidos/FX/Acomerla.mp3';
import Ametralladora from '../sonidos/FX/Ametralladora.mp3';
import Aplausos from '../sonidos/FX/Aplausos.mp3';
import Awantia from '../sonidos/FX/Awantia.wav';
import Beso from '../sonidos/FX/Beso.wav';
import Burro from '../sonidos/FX/burro.mp3';
import Censura from '../sonidos/FX/Censura.wav';
import Chan from '../sonidos/FX/Chan.mp3';
import ChauChau from '../sonidos/FX/chauadios.wav';
import ChisteBata from '../sonidos/FX/ChisteBateria.mp3';
import EnLaB from '../sonidos/FX/Estamos en la B.wav';
import Explosion from '../sonidos/FX/Explosion.mp3';
import Mentira from '../sonidos/FX/Mentira.mp3';
import AsiNo from '../sonidos/FX/MirtaAsiNo.wav';
import QuienES from '../sonidos/FX/MoriaQuien.mp3';
import No from '../sonidos/FX/Noooo.mp3';
import Ovasion from '../sonidos/FX/Ovasion.mp3';
import Redoble from '../sonidos/FX/Redoble.mp3';
import TanTanTAN from '../sonidos/FX/TanTanTAAAN.mp3';
import Tension from '../sonidos/FX/Tension.mp3';

var siga = new Audio();
siga.src = Siga;

var abucheo = new Audio();
abucheo.src = Abucheo;

var acomerla = new Audio();
acomerla.src = Acomerla;

var ametralladora = new Audio();
ametralladora.src = Ametralladora;

var aplausos = new Audio();
aplausos.src = Aplausos;

var awantia = new Audio();
awantia.src = Awantia;

var beso = new Audio();
beso.src = Beso;

var burro = new Audio();
burro.src = Burro;

var censura = new Audio();
censura.src = Censura;

var chan = new Audio();
chan.src = Chan;

var chau = new Audio();
chau.src = ChauChau;

var chisteBata = new Audio();
chisteBata.src = ChisteBata;

var enlaB = new Audio();
enlaB.src = EnLaB;

var explosion = new Audio();
explosion.src = Explosion;

var mentira = new Audio();
mentira.src = Mentira;

var asino = new Audio();
asino.src = AsiNo;

var quienes = new Audio();
quienes.src = QuienES;

var no = new Audio();
no.src = No;

var ovasion = new Audio();
ovasion.src = Ovasion;

var redoble = new Audio();
redoble.src = Redoble;

var tantantan = new Audio();
tantantan.src = TanTanTAN;

var tension = new Audio();
tension.src = Tension;

class BotoneraFX extends Component {
    render(){
        return (
            <div className={Styles.cont}>
                <h1 className={Styles.titulo}>EFECTOS</h1>
                <div>
                    <button className={Styles.button} type='button' onMouseDown={()=>abucheo.play()}>ABUCHEO</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>siga.play()}>SIGA EL BAILE</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>acomerla.play()}>A COMERLA</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>ametralladora.play()}>AMETRALLADORA</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>aplausos.play()}>APLAUSOS</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>awantia.play()}>AWANTIA!</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>beso.play()}>BESO</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>burro.play()}>BURRO</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>censura.play()}>CENSURA</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>chan.play()}>CHAN!!</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>chau.play()}>CHAU CHAU</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>chisteBata.play()}>CHISTE BATA</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>enlaB.play()}>EN LA B!!</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>explosion.play()}>EXPLOSION</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>mentira.play()}>MENTIRA!</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>asino.play()}>ASI NO!!</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>quienes.play()}>QUIENES SON?!</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>no.play()}>NOOO!!</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>ovasion.play()}>OVASION</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>tension.play()}>TENSION</button>
                    <button className={Styles.button} type='button' onMouseDown={()=>tantantan.play()}>TAN TAN TAN!</button>                    
                    <button className={Styles.button} type='button' onMouseDown={()=>redoble.play()}>REDOBLE</button>
                </div>
            </div>
        )
    }
}

export default BotoneraFX;