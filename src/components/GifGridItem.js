import React from 'react'

const GifGridItem = ({id, url, title}) => {

  return (
    <div className='card animate__fadeInDown'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem