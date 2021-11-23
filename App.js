import React, { useEffect, useState } from 'react';
import ListaDeHeroi from './componentes/ListaDeHeroi';
import './App.css';


const api = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';

export default function App() {
  return (
    <div>
      <h1>Lista de heróis</h1>
      <ListaDeHeroi />
    </div>
  );
}