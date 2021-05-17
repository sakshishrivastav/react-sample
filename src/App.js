import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

import {getAuthUser} from "./redux/auth/authActions"
import Loading from './components/Loading'
import Routes from './routes'


const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAuthUser())    
  }, [dispatch])

  return (
    <div className="App">
      { isAuthenticated === null ? <Loading /> : <Routes isAuthenticated={isAuthenticated} /> }
    </div>
  );
}

export default App;
