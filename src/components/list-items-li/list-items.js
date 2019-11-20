import React from 'react'
import './list-items.css'
import withHdRezkaServices from "../hoc";
const ListItems = ({item}) =>{

const { title,image,text} = item;
    return (
                <div className='list-item-li ' >
                <img  className="image-item transition-item" src={image} alt="icon"/>
                <span> {title}</span>
                <p>{text}</p>
                </div>
    )
};
export default  withHdRezkaServices()(ListItems)