import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Img from '../details/pic.jpg';
import './home.css';


function Home() {
    return (
        <div className="m-3">
            <h3>Surya K</h3>
            <img className="rounded" src={Img} alt="my Picture"/>
        </div>
    );
}

export default Home;