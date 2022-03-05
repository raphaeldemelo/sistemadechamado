import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    // criar um sistema de login falso enquanto nao tem de fato
    const loading = false;
    const signed = false;

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