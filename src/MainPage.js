import React from 'react'
import Card from './Card'
import "./index.css"
import img1 from "./images/n1.jpg"
import img2 from "./images/n2.jpg"
import img3 from "./images/n3.jpg"
import img4 from "./images/n4.jpg"
import img5 from "./images/n5.jpg"

export default function MainPage() {
  return (
    <>
      <h1 className='heading'>Card Gallery</h1>
      <div className='cardcomp'>
         <Card  title="1" img={img1}/>
         <Card  title="2" img={img2}/>
         <Card  title="3" img={img3}/>
         <Card  title="4" img={img4}/>
         <Card  title="5"  img={img5}/>
        
        </div> 
      
    </>
  )
}
