import React from 'react';

export default function Card(props) {

  return (
    <div className='card'>
        <main>
            <img src={props.image} alt={props.alt} />
        </main>
        <footer>
            <h1>{props.name}</h1>
            <h3>{props.specie}</h3>
            <p>{props.status}</p>
        </footer>
    </div>
  )
}
