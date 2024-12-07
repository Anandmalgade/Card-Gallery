import React from 'react'
import "./index.css"

 function Card(props) {
    console.log(props);
  return (
    <div className='card'>
         <img src={props.img}/>
         <h3>Nature {props.title} image</h3>
    </div>
  )
}
export default Card