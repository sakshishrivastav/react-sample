import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'

import {logout} from "../redux/auth/authActions"

function Navbar({showMobileMenu}) {

    const dispatch = useDispatch();


    return (
        <>
            <div className="main-menu d-none d-lg-flex">
                <div className="d-flex flex-column justify-content-between align-items-center text-white p-2" style={{backgroundColor: "#484C4F"}}>
                    <div>
                        <img src="/images/logo-icon.svg" className="img-fluid" alt="logo" />
                    </div>
                    <div className="py-4 fs-4" onClick={()=>dispatch(logout())}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8333 2.5H9.16667V10.8333H10.8333V2.5ZM14.8583 4.30833L13.675 5.49167C14.9917 6.55 15.8333 8.175 15.8333 10C15.8333 13.225 13.225 15.8333 10 15.8333C6.775 15.8333 4.16667 13.225 4.16667 10C4.16667 8.175 5.00833 6.55 6.31667 5.48333L5.14167 4.30833C3.525 5.68333 2.5 7.71667 2.5 10C2.5 14.1417 5.85833 17.5 10 17.5C14.1417 17.5 17.5 14.1417 17.5 10C17.5 7.71667 16.475 5.68333 14.8583 4.30833Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className="w-100">
                    <div className="d-flex py-4 ps-3 align-items-center">
                        <div className="profile-icon">
                            <img src="/images/img_avatar.png" alt="profile-img"/>
                        </div>
                        <div className="profile-info mx-2">
                            <div className="fw-bold" style={{fontSize: '20px'}}>Jonas Khandwal</div>
                            <div>jonas@todo.com</div>
                        </div>
                    </div>
                    <div className="bg-light-grey d-grid px-4 py-3" style={{minHeight:'50px'}}>
                        {showMobileMenu ? <Link to="/analytics" className="btn btn-primary bg-green"> <i>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66667 5L15 5L15 13.3333H12.5V9.35833L6.68333 15L5 13.3083L10.7083 7.5H6.66667V5Z" fill="white"/>
                            </svg>
                        </i> Analytics</Link>: null}
                    </div>
                </div>
            </div>
            {showMobileMenu ? <div className="mobile-menu w-100 d-lg-none text-white">
                <div className="d-flex w-100 justify-content-between align-items-center" style={{backgroundColor: "#484C4F"}}>
                    <div>
                        <div className="profile-icon">
                            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="profile-img"/>
                        </div>
                    </div>
                    <div className="nav">
                        <Link to="/create" className="nav-link">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8333 10.8334H10.8333V15.8334H9.16667V10.8334H4.16667V9.16669H9.16667V4.16669H10.8333V9.16669H15.8333V10.8334Z" fill="currentColor"/>
                            </svg>
                        </Link>
                        <Link to="/analytics" className="nav-link">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 5L15.2417 6.90833L11.175 10.975L7.84166 7.64167L1.66666 13.825L2.84166 15L7.84166 10L11.175 13.3333L16.425 8.09167L18.3333 10V5H13.3333Z" fill="currentColor"/>
                            </svg>
                        </Link>
                        <div className="nav-link" onClick={()=>dispatch(logout())}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8333 2.5H9.16667V10.8333H10.8333V2.5ZM14.8583 4.30833L13.675 5.49167C14.9917 6.55 15.8333 8.175 15.8333 10C15.8333 13.225 13.225 15.8333 10 15.8333C6.775 15.8333 4.16667 13.225 4.16667 10C4.16667 8.175 5.00833 6.55 6.31667 5.48333L5.14167 4.30833C3.525 5.68333 2.5 7.71667 2.5 10C2.5 14.1417 5.85833 17.5 10 17.5C14.1417 17.5 17.5 14.1417 17.5 10C17.5 7.71667 16.475 5.68333 14.8583 4.30833Z" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>: null}
        </>
    )
}

export default Navbar
