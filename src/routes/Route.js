import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const { signed, loading } = useContext(AuthContext);


    // criar um sistema de login falso enquanto nao tem de fato
    //const loading = false;
    //const signed = false;

    if (loading) {
        <div>

        </div>
    }

    if (!signed && isPrivate) {
        return <Redirect to='/' />
    }

    if (signed && !isPrivate) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Route
            {...rest}
            render={props => (
                <Component {...props} />
            )}
        />
    )
}