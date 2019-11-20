import React from 'react'
import ListItems from "../list-items-li/list-items";
import './list-films.css'

const ListFilmUl = ({items,onLoadedItem,downloadText}) =>{


    return (
        <React.Fragment>
        <h1>Скачати {downloadText}</h1>
        <ul className ='list-items'>
            {items.map((item)=>{
                return(
                    <li key={item.id} onClick={() =>onLoadedItem(item.id)} > <ListItems item={item}/> </li>
                )
            } )}
        </ul>
        </React.Fragment>
    )
};
export default ListFilmUl