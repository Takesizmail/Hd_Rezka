import React from 'react'
import './app.css'
import Navigation from "../navigation";
import MainContent from "../main-content";
import withHdRezkaServices from "../hoc";
const App = ({services}) =>{

    return(
       <div className="main-app">
            <Navigation/>
            <MainContent/>

       </div>
    )
};
export default  withHdRezkaServices()(App)