import React from 'react'
import "./Paginacion.css"
import next from "../img/next.png"
import previous from "../img/previous.png"

const Paginacion = ({onPrevious, onNext, page, totalPages}) => {
  return (
    <div className='pagination'>
        <button onClick={onPrevious}>
            <div>
                <img src={previous} alt={"previous"}/>
            </div>
        </button>
        <div className='pages'>
            <span className='actual'>{page}</span> de <span className='total'>{totalPages}</span>
        </div>
        <button onClick={onNext}>
            <div>
                <img src={next} alt={"next"}/>
            </div>
        </button>
    </div>
  )
}

export default Paginacion