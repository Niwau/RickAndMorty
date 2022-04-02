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

                { (props.status == "Alive" ) ? <p className='alive'>{props.status}</p> : 
                  (props.status == "Dead") ? <p className="dead">{props.status}</p> :
                  <p className="unknown">{props.status}</p>            
                }

              </footer>
    </div>
  )
}
