import React from 'react'
import {Redirect, Route} from "react-router-dom";

function AuthenticatedRoute({component: Component,  isAuthenticated , ...rest}) {
    return (
        <Route {...rest} 
            render = { 
                props => isAuthenticated 
                ? <Component {...props}/>
                : <Redirect to={{pathname: '/login'}}/>
            } 
        />
    )
}

export default AuthenticatedRoute
