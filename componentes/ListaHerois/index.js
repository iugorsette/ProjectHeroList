import React from 'react';
import "./estilo.css";

export default function ListaHerois(props) {
    return (
        <div className="boxHeroi">
            <div className="nomeHeroi">
                {props.hero}
            </div>

            <img className="imagemHeroi" src={props.imagem} alt={props.heroi} />

            <div className="status">
                Com: {props.combat} - Dur: {props.durability} - Int: {props.intelligence} -
                Pwd: {props.power} - Spd: {props.speed} - Str: {props.strength} 
            </div>
        </div>
    )
}