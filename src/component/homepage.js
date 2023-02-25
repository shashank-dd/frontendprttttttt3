import React, { useEffect, useState } from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import logo from "./gg.png"
import Card from "./card"
function HomePage() {

  const [dta, setdta] = useState([])
  const [ta, setta] = useState([])
  const [name, setname] = useState("")



  let navigate = useNavigate()
  useEffect(() => {
    axios.post("https://backapi-e13q.onrender.com/blog/data", { token: window.localStorage.getItem("token") }).then(response => {
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
          return  <Card  data={data}  />
        })}


      </div>

    </div>
  )
}


export default HomePage;
