import React from 'react'
import {withRouter} from 'react-router-dom'
import ItemDetailsContainer from "../item-details-container";
import withHdRezkaServices from "../hoc";

const ItemDetailsPage = ({match,services}) =>{
const id = match.params.id;
    console.log(match.params.id);
    return (
       <ItemDetailsContainer idItem={id} getData ={services.getItemDetails} />
    )
};
export default  withHdRezkaServices()(withRouter(ItemDetailsPage))