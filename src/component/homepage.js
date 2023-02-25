import React, { useEffect, useState } from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import logo from "./gg.png"
function HomePage() {

  const [dta, setdta] = useState([])
  const [ta, setta] = useState([])
  const [name, setname] = useState("")


  let navigate = useNavigate()
  useEffect(() => {
    axios.post("http://localhost:8080/blog/data", { token: window.localStorage.getItem("token") }).then(response => {
      console.log(response.data.dat)
      setdta(response.data.dat)
      setta(response.data.dat)
      console.log("dta", dta)
      console.log(response.data.user)
      setname(response.data.user)
      // setgl(response.data.userid)
      // setta(response.data.dat)
    }).catch(error => { console.log(error, 11111111) })
  }, [])

   let logoutHandler = () =>{
      console.log(1)
              window.localStorage.removeItem('token')
              
              navigate("/")
           }
  return (
    <div className='homepage'>
      <div id='nav'>
      <Link to="/homepage"> <img  id='hi' src={logo}></img></Link> 
       
        <span>RECIEPE APP</span>
       
        <Link to="/create" state={{ name: name }}> <span id='create'>create</span> </Link>
        <span id='log' onClick={logoutHandler}>Logout</span>

      </div>
      <input type="text" placeholder='search by title' onChange={(e)=>{
        if(e.target.value==""){
          setta(dta)
          return
        }
                let r= dta.filter((el)=>{
                  return el.title.toLowerCase().includes(e.target.value.toLowerCase())
                })
                setta(r)
      }}></input>
      <div id='body'>
        {ta && ta.map((data) => {
          return <div id='ll'>
            <div className='l1' id='hjk'><img src={data.image}></img></div>
            <div className='l1' id='hjkl' >
              <h2 className='red'  > Title  : {data.title}</h2>
              <p className='blue' id='bl' >Ingradients</p>
              <p className='blue'>{data.description}</p>
              <p className='green'> by: {name}</p>
            </div>
          </div>
        })}


      </div>

    </div>
  )
}


export default HomePage;