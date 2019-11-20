import React from 'react'
import icon from './telegram-logo (1).png'
import './navigation.css'
import icon1 from './Sgdo_u2j.png';
import {Link} from "react-router-dom";

const Navigation = () =>{
    return (
        <div className="main-navigation">
            <Link to='/all/' className='linkili'>
            <div className='logo-container transition-item '>
                <img src={icon1} alt="icon"/>
            <span className='tracker'> tracker </span>
            </div>
            </Link>

            <div className="nav">
                <ul className='nav-items'>
                    <li> <Link className='nav-items-link' to='/films/'>Фільми</Link></li>
                    <li> <Link className='nav-items-link' to='/serial/'>Серіали</Link></li>
                    <li><Link className='nav-items-link' to='/cartoon/'>Мультфільми</Link> </li>
                    <li> <Link className='nav-items-link' to='/anime/'>Аніме</Link></li>
                </ul>
            </div>

            <div className='something-text'>
                <p>
                    Отримуй новини від <br/> HDrezka в телеграм
                </p>
                <div className="icon-telegram transition-item">
                    <img src={icon} alt="icon"/>
                   <span>Підписуйтеся</span>
                </div>
            </div>
            <div className='footer '>
                <span> © 2019 HDrezka</span>
                <a   href="google.com"> Написати нам</a>
            </div>

        </div>
    )

};
export default Navigation