import React from 'react'
import withHdRezkaServices from "../hoc";
import ListItemsContainer from "../list-items-container/list-items-container";
import {withRouter} from 'react-router-dom'

const FilmPage = ({services,history}) =>{
   const text ='нові фільми';
   console.log(history);
    return (
        <ListItemsContainer
            getData={services.getFilms}
            downloadText={text}
            onItemSelected = {(id)=>{
                history.push(`/films/${id}`)
            }}
        />
    )
};
export default  withHdRezkaServices()( withRouter( FilmPage))