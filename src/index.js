import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Header from "./routes/Header";
import Loading from "./components/Loading";
import AuthComponent from "./components/AuthComponent";
import NoteDetail from './components/NoteDetail';
//create redux store
// reducers -> actions

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// provide the store to react

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Loading>
        <div>
          <Switch>
            <Route path="/login" component={Login} exact={true} />
            <AuthComponent>
              <Header />
              <Route path="/" component={App} exact={true} />
              <Route path="/:id" component={NoteDetail} exact={true} />
            </AuthComponent>
          </Switch>
        </div>
      </Loading>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
