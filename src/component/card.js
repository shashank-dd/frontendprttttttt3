import React, { useEffect, useState } from 'react';
import './homepage.css';


function Card({data}) {

    const [n, setn] = useState(false)

  return (

    <div>
         <div className='l1' onClick={()=>{
 setn((l)=>!l)
            }
            
            }><img src={data.image}></img></div>
            {n&&<div className='l1'  id='gh'>
              <h2 className='red'  > Title  : {data.title}</h2>
              <p className='blue' id='bl' >Ingradients</p>
              <p className='blue'>{data.description}</p>
              <p className='blue' id='bl' >directions</p>
              <p className='blue'>{data.direction}</p>
              <p className='green'> by: {data.auther}</p>
            </div>}
    </div>
      
        
          
           
          
  )
        }


export default Card;
