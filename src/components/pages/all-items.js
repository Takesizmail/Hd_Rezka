import React from 'react'
import ListItemsContainer from "../list-items-container/list-items-container";
import withHdRezkaServices from "../hoc";
import {withRouter} from'react-router-dom'

const AllItems = ({services,history}) =>{
    const text = 'нові серії та серіали';
    return(
        <ListItemsContainer
            getData={services.getAllItems}
            downloadText={text}
            onItemSelected = {(id)=>{
                history.push(`/all/${id}`)
            }}
        />
    )
};
export default  withHdRezkaServices()(withRouter(AllItems))