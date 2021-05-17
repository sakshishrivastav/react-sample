import React from 'react'
import {useHistory} from 'react-router-dom'

function SomePublicPage() {

    const history = useHistory();

    return (
        <div>
            <h2>I am a Public Page</h2>
            <button onClick={() => history.goBack()} className="btn btn-success">Back</button>
        </div>
    )
}

export default SomePublicPage

