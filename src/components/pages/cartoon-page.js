import React from 'react'
import withHdRezkaServices from "../hoc";
import ListItemsContainer from "../list-items-container/list-items-container";
import {withRouter} from 'react-router-dom'
const CartoonPage = ({services,history}) =>{
   const text ='нові мультфільми';
    return (
       <ListItemsContainer
           getData={services.getCartoons}
           downloadText={text}
           onItemSelected = {(id)=>{
               history.push(`/cartoon/${id}`)
           }}
       />
    )

};
export default withHdRezkaServices()( withRouter(CartoonPage))