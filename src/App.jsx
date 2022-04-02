import React from 'react';
import './App.css';
import Card from './components/Card';

export default function App() {

  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then( response => response.json() )
    .then( data => setCharacters(data.results) )
  }, [])

  return (
    <div className="App">
      <div className="cards">
        {characters.map( item => {return <Card key = {item.id} image = {item.image} name = {item.name} specie = {item.species} status = {item.status} />} )}
      </div>
    </div>
  )
}