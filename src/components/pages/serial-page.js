import React from 'react'
import ListItemsContainer from "../list-items-container";
import withHdRezkaServices from '../hoc'
import {withRouter} from 'react-router-dom'


const SerialPage = ({services,history}) =>{
   const text ='нові серіали';
    return (
        <ListItemsContainer
            getData={services.getSerials}
            downloadText={text}
            onItemSelected = {(id)=>{
                history.push(`/serial/${id}`)
            }}
        />
    )

};
export default withHdRezkaServices()(SerialPage)