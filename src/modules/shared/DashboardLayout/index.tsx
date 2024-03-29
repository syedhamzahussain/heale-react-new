import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <Flex gap={6}>
            <Box w={"18%"}>
                <Sidebar />
            </Box>
            <Box flexGrow={1} pe={6} w={"82%"} pos={"relative"}>
                <Header />
                <Box mb={12}><Outlet /></Box>
            </Box>
        </Flex>
    )
}

export default DashboardLayout