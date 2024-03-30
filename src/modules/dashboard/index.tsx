import { Box, Grid, Heading } from '@chakra-ui/react'
import CustomCard from 'modules/shared/CustomCard'
import React from 'react'

const Dashboard = () => {
    return (
        <Box>
            <Heading mb={10} color={"Primary.Navy"} fontSize={"3xl"}>Welcome, Jeff</Heading>
            <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6}>
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </Grid>
            <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={6}>
                <CustomCard />
                <CustomCard />
            </Grid>
        </Box>
    )
}

export default Dashboard