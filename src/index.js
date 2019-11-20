import React from 'react'
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider} from 'react-redux';
import ErrorBoundry from "./components/error-boundry";
import {HdRezkaContextProvider} from "./components/hd-rezka-context";
import store from "./store";
import {BrowserRouter as Router} from 'react-router-dom'
import HdRezkaServices from "./services/hd-rezka-services";



const hdRezkaServices = new HdRezkaServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <HdRezkaContextProvider value = {hdRezkaServices}>

                <Router>
                    <App/>
                </Router>

            </HdRezkaContextProvider>
        </ErrorBoundry>
    </Provider>

, document.getElementById('root'));
