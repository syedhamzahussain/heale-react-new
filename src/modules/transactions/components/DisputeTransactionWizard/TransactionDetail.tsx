import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const TransactionDetail = () => {
    return (
        <Box mb={4}>
            <Flex mb={4} justifyContent={"space-between"} alignItems={"center"}>
                <Heading fontSize={"md"}>Transaction ID</Heading>
                <Text color={"Neutral.700"}>4859920</Text>
            </Flex>
            <Flex mb={4} justifyContent={"space-between"} alignItems={"center"}>
                <Heading fontSize={"md"}>Date</Heading>
                <Text color={"Neutral.700"}>Feb 1 at 11:21am</Text>
            </Flex>
            <Flex mb={4} justifyContent={"space-between"} alignItems={"center"}>
                <Heading fontSize={"md"}>Amount</Heading>
                <Text color={"Neutral.700"}>-$7,476.82 USD</Text>
            </Flex>
            <Flex mb={4} justifyContent={"space-between"} alignItems={"center"}>
                <Heading fontSize={"md"}>Description</Heading>
                <Text color={"Neutral.700"}>HEALECHE_FSFEFXFCF234D REF#58702</Text>
            </Flex>
        </Box>
    )
}

export default TransactionDetail