import api from '../../api';
import React, { Component } from 'react';
import './estilo.css';
import ListaHerois from '../ListaHerois';

const query = 'spider';
class ListaDeHeroi extends Component {

    state = {
        heroes: [],
    }
    async componentDidMount() {
        const response = await api.get('')

        this.setState({ heroes: response.data });
    }

    render() {

        const { heroes } = this.state;

        const heroesFiltered = heroes.filter((heroi) => heroi.name.toLowerCase().indexOf(query.toLowerCase())> -1);

        return (
            <div className="lista">
                {heroesFiltered.map(hero => (        // Se eu utilizar heroes aqui , seu o filtro ele funciona
 
                    <li key={hero.id} type='none'>
                        <ListaHerois
                            hero={hero.name}
                            combat={hero.powerstats.combat}
                            durability={hero.powerstats.durability}
                            intelligence={hero.powerstats.intelligence}
                            power={hero.powerstats.power}
                            speed={hero.powerstats.speed}
                            strength={hero.powerstats.strength}
                            imagem={hero.images.sm}
                        />

                    </li>
                ))}
            </div>
        )
    }
}

export default ListaDeHeroi;
