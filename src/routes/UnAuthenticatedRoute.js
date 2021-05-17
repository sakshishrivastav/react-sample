import React from 'react'
import {Redirect, Route} from "react-router-dom";

function UnAuthenticatedRoute({component: Component,  isAuthenticated , ...rest}) {
    return (
        <Route {...rest} 
            render = { 
                props => isAuthenticated 
                ? <Redirect to={{pathname: '/'}}/>
                : <Component {...props}/>
            } 
        />
    )
}

export default UnAuthenticatedRoute
