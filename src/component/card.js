import React, { useEffect, useState } from 'react';
import './homepage.css';


function Card({data}) {

    const [n, setn] = useState(false)
    const [i, seti] = useState(false)
    const [j, setj] = useState(false)

  return (

    <div>
         <div className='l1' onClick={()=>{
 setn((l)=>!l)
            }
            
            }><img src={data.image}></img></div>
             <h2 className='red'  > Title  : {data.title}</h2>
            {n&&<div className='l1'  id='gh'>
             
              
              <p className='blue' id='bl'  onClick={()=>{
                seti((d)=>!d)
              }}>Ingradients</p>
              {i&&<p className='blue'>{data.description}</p>}
              <p className='blue' id='bl'   onClick={()=>{
                setj((d)=>!d)
              }} >directions</p>
             { j&&<p className='blue'>{data.direction}</p>}
              <p className='green'> by: {data.auther}</p>
            </div>}
    </div>
      
        
          
           
          
  )
        }


export default Card;
