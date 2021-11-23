import api from '../../api';
import React, { useState, useEffect } from 'react';
import ListaHerois from '../ListaHerois';
import './estilo.css';

const ListaDeHeroi = () => {
    const [heroes, setHeroes] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        api.get("/ps/metahumans").then((res) => setHeroes(res.data));
    }, []);

    const heroesFiltered = heroes.filter(
        (heroi) => heroi.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
    );

    return (
        <><div>
            <input
                type="text"
                value={query}
                onChange={(ev) => setQuery(ev.target.value)}/>

        </div><div className="lista">
                {heroesFiltered.map((hero) => (
                    <li key={hero.id} type="none" >
                                <ListaHerois
                                    hero={hero.name}
                                    combat={hero.powerstats.combat}
                                    durability={hero.powerstats.durability}
                                    intelligence={hero.powerstats.intelligence}
                                    power={hero.powerstats.power}
                                    speed={hero.powerstats.speed}
                                    strength={hero.powerstats.strength}
                                    imagem={hero.images.sm} />
                    </li>

                ))}
            </div></>
    );
};

export default ListaDeHeroi;
