import { Box } from '@chakra-ui/react'
import React from 'react'
import { IChildren } from 'type'

const CustomCard = ({ children }: IChildren) => {
    return (
        <Box borderRadius={"16"} p={6} boxShadow={"0px 0px 20px 0px rgba(149, 153, 192, 0.16)"}>
            {children}
        </Box>
    )
}

export default CustomCard