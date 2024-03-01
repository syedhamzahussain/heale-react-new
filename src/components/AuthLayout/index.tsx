import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthHeader from './Header'

const AuthLayout = () => {
    return (
        <>
            <AuthHeader />
            <Outlet />
        </>
    )
}

export default AuthLayout