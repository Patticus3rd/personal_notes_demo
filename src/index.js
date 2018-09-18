import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login';
//create redux store
// reducers -> actions

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// provide the store to react

const Header = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" 
                    className="navbar-toggle" 
                    data-toggle="collapse" 
                    data-target="#myNavbar"
                    >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Personal Notes App</Link>
            </div>
        </div>
    </nav>
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={App} exact={true}/>
                    <Route path="/login" component={Login} exact={true}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
