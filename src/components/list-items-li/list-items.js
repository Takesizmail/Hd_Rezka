import React from 'react'
import './list-items.css'
import iconSee from './oa0d0af909805zx12r89l.png'
import withHdRezkaServices from "../hoc";
const ListItems = ({services}) =>{



    return (

        <ul className ='list-items'>
            <li >
                <div className='list-item-li ' >
                <img  className="image-item transition-item" src={iconSee} alt="icon"/>
                <span> See</span>
                <p>2019-... USA, drams</p>
                </div>
            </li>

            <li >
                <div className='list-item-li ' >
                    <img  className="image-item transition-item" src={iconSee} alt="icon"/>
                    <span> See</span>
                    <p>2019-... USA, drams</p>
                </div>
            </li>

        </ul>

    )
};
export default  withHdRezkaServices()(ListItems)