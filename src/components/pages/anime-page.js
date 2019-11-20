import React from 'react'
import ListItemsContainer from "../list-items-container/list-items-container";
import withHdRezkaServices from "../hoc";
import {withRouter} from 'react-router-dom'
const AnimePage = ({services,history}) =>{
const text ='нові аніме';

    return (
       <ListItemsContainer
           getData={services.getAnime}
           downloadText={text}
            onItemSelected = {(id)=>{
        history.push(`/anime/${id}`)
    }}/>
    )

};
export default  withHdRezkaServices()(withRouter(AnimePage))