import React from 'react'
import {HdRezkaContextConsumer} from "../hd-rezka-context";

const withHdRezkaServices = () => (Wrapped) =>{
    return (props)=>{
        return(
            <HdRezkaContextConsumer>
                {
                    (services) =>{
                        return  <Wrapped {...props} services={services}  />
                    }
                }
            </HdRezkaContextConsumer>
        )
    }

};
export default withHdRezkaServices