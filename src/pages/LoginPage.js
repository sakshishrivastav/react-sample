import React from 'react'

import Login from '../components/Login'

function LoginPage() {
    return (
        <div id="login">
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-lg-6 col-sm-12 bg-green d-flex align-items-center justify-content-center">
                        <div className="px-2">
                            <img src="/images/logo.svg" className="img-fluid" alt="logo" />
                            <h4 className="text-center text-white">Assignments</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
                        <Login className="vh-100"></Login>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
