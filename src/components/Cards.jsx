import React from 'react'
import './Cards.css'


const Cards = ({personajes}) => {
    //console.log(personajes)
  return (
    <div>
        <div className={` cards ${personajes.types[0].type.name}`}>
            <h3>#{personajes.id}</h3>
            <img src={personajes.sprites.other["dream_world"].front_default} alt={personajes.name}/>
            <h2>{personajes.name}</h2>
            
            <div className="types">
            {
                personajes.types.map(el => (
                 <h4 className={`${el.type.name}`} key={el.id}>{el.type.name}</h4>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Cards