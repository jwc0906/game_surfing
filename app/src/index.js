import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Finder, Rating, Login, Register, MyPage } from 'containers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';


const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Finder}/>
                <Route path="finder" component={Finder}/>
                <Route path="rating" component={Rating}/>
                <Route path="login" component={Login}/>
                <Route path="register" component={Register}/>
                <Route path="mypage" component={MyPage}/>
            </Route>
        </Router>
    </Provider>, rootElement
);
