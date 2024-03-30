import { Box, Flex, Grid, Heading, Select, Text } from '@chakra-ui/react'
import CustomCard from 'modules/shared/CustomCard'
import { HighIcon, InfoIcon, LowIcon } from 'modules/shared/Icons'
import React from 'react'

const Dashboard = () => {
    return (
        <Box>
            <Heading mb={10} color={"Primary.Navy"} fontSize={"3xl"}>Welcome, Jeff</Heading>
            <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6}>
                <CustomCard>
                    <Flex mb={2} gap={2} alignItems={"center"} fontSize={"sm"} color={"Neutral.700"}>
                        <Text>Available USD</Text>
                        <InfoIcon />
                    </Flex>
                    <Heading mb={2} fontSize={"xl"} color={"Primary.Navy"}>$22,262.39 USD</Heading>
                    <Flex gap={16} color={'Primary.Navy'} sx={{
                        ".chakra-select": {
                            p: " 0",
                            h: "24px !important"
                        }
                    }} mb={4} justifyContent={"space-between"} alignItems={"center"} fontSize={"sm"} >
                        <Select _focusVisible={{
                            border: 0
                        }} border={0} placeholder='Last 7 days'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Flex gap={2}>
                            <Flex alignItems={"center"} gap={"2px"}>
                                <HighIcon />
                                <Text>$388.35</Text>
                            </Flex>
                            <Flex alignItems={"center"} gap={"2px"}>
                                <LowIcon />
                                <Text>$388.35</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </CustomCard>
                <CustomCard>
                    <Flex mb={2} gap={2} alignItems={"center"} fontSize={"sm"} color={"Neutral.700"}>
                        <Text>Available $HEALE</Text>
                        <InfoIcon />
                    </Flex>
                    <Heading mb={2} fontSize={"xl"} color={"Primary.Navy"}>2,467.07 $HEALE</Heading>
                    <Flex gap={16} color={'Primary.Navy'} sx={{
                        ".chakra-select": {
                            p: " 0",
                            h: "24px !important"
                        }
                    }} mb={4} justifyContent={"space-between"} alignItems={"center"} fontSize={"sm"} >
                        <Select _focusVisible={{
                            border: 0
                        }} border={0} placeholder='Last 7 days'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Flex gap={2}>
                            <Flex alignItems={"center"} gap={"2px"}>
                                <HighIcon />
                                <Text>$388.35</Text>
                            </Flex>
                            <Flex alignItems={"center"} gap={"2px"}>
                                <LowIcon />
                                <Text>$388.35</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </CustomCard>
                <CustomCard>123</CustomCard>
            </Grid>
            <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={6}>
                <CustomCard>123</CustomCard>
                <CustomCard>123</CustomCard>

            </Grid>
        </Box>
    )
}

export default Dashboard