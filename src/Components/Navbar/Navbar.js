import React from 'react'
import './Navbar.css';
import { Icon } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className='containerNav'>
            <ul>
                <li><a href=""><Icon name='home' size='large' /> Inicio </a></li>
                <li><a href=""><Icon name='photo' size='large' /> Galeria</a></li>
                <li><a href=""><Icon name='building' size='large' />  Nosotros</a></li>
                <li><a href=""><Icon name='phone' size='large' />  Contacto</a></li>
                <li><CartWidget /></li>
            </ul>
            
        </div>
    )
}

export default Navbar

