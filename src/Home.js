import './Home.css'
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () =>{
  return (
    <div className="home">
      <div className="login">
        <Link to="/Login">Entrar</Link>
      </div>
    </div>
       
   
  );
}

export default Home;