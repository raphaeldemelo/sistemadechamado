import { Switch } from 'react-router-dom';

import Route from './Route';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Signin} />
            <Route exact path='/cadastrar' component={Signup} />
            <Route exact path='/dashboard' component={Dashboard} isPrivate/>
            <Route exact path='/perfil' component={Profile} isPrivate/>
        </Switch>
    )
}