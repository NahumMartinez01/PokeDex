 import React from 'react'
import Cards from './Cards'
import "./pokemons.css"
import pokedex from "../img/pokedex.png"
import Paginacion from './Paginacion'


const Pokemons = ({pokemons, page, setPage, total, cargando}) => {
  //  console.log(pokemons)

    const lastPage = () => {
        const next = Math.max(page - 1, 0);
        setPage(next)
    }

    const nextPage = () => {
        const previous = Math.min(page + 1, total);
        setPage(previous)
    }

   

  return (
    <div className='container'>
        <div>
            <img src={pokedex} alt={"pokedex"}/>
        </div>
        <div className='top-pagination'>
            <Paginacion 
                page={page + 1}
                totalPages={total}
                onPrevious={lastPage}
                onNext={nextPage}
            />
        </div>
        {
            cargando ? <h2>Cargando...</h2> : (
                <div className='card-container'>
                {
                    pokemons.map(personajes => (
                        <div key={personajes.id}>
                            <Cards personajes={personajes}/>
                        </div>
                    ))
                }
                </div>
            )
         }
         {
            cargando ? <h2>Cargando...</h2> : (
                <div className='footer-pagination'>
                <Paginacion 
                    page={page + 1}
                    totalPages={total}
                    onPrevious={lastPage}
                    onNext={nextPage}
                />
            </div>
            )
         }

       
    </div>
  )
}

export default Pokemons