import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthHeader from './Header'
import { Box } from '@chakra-ui/react'

const AuthLayout = () => {
    return (
        <>
            <AuthHeader />
            <Box as='main' mt={{ lg: 8, base: 4 }} mb={8}>
                <Outlet />
            </Box>
        </>
    )
}

export default AuthLayout