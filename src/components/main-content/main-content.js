import React from 'react'
import './main-content.css'
import SearchPanel from "../search-panel";
import {Switch, Route,Redirect} from 'react-router-dom';
import {FilmPage, SerialPage, CartoonPage, AnimePage, AllItems, ItemDetailsPage} from '../pages'


const MainContent = () =>{

    return (
        <div className='main-container'>
            <div className='container-elements'>
                <SearchPanel/>

                <Switch>
                    <Route  path='/all' component={AllItems} exact />
                    <Route  path='/all/:id'
                            render={() =>  <ItemDetailsPage/>}
                            exact />

                    <Route path='/films/' render ={ () => <FilmPage/>} exact />
                    <Route path='/films/:id'
                           render={() =>  <ItemDetailsPage />}
                           exact
                            />

                    <Route path='/serial/' component={SerialPage} exact />
                    <Route path='/serial/:id' render={() => <ItemDetailsPage />} exact />

                    <Route path='/cartoon/' component={CartoonPage} exact />
                    <Route path='/cartoon/:id' render={()=> <ItemDetailsPage />} exact />

                    <Route path='/anime/' component={AnimePage} exact />
                    <Route path='/anime/:id' render={()=>< ItemDetailsPage />} exact />

                    <Route path='/item_detail' component={ItemDetailsPage} exact />
                    <Redirect to='/all/'/>
                </Switch>
            </div>

        </div>
    )
};
export default MainContent