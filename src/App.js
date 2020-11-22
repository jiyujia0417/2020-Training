import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Home from './root/Home'
import Info from './root/Info'
import Login from './root/Login'
import First from './root/First'
// import { Provider } from 'react-redux'
// import store from './store'
const App = () => {
    // return <Provider store={store}>
    // </Provider>
    //假如用到redux再加
    return <>
        <Router>
            <Switch>
                <Route exact path='/first' component={First} />
                <Route path='/home' component={Home} />
                <Route path='/info' component={Info} />
                <Route path='/login' component={Login} />
                <Route render={() => <Redirect to='/first' />} />
            </Switch>
        </Router>
    </>
}
export default App;
//进入前的页面