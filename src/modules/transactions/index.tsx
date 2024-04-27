import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { ExportIcon, FilterIcon, StatementIcon } from 'modules/shared/Icons'
import React from 'react'

const Transactions = () => {
    return (
        <Box>
            <Heading fontSize={"3xl"}>
                Transactions
            </Heading>
            <Flex mt={6} justifyContent={"space-between"} alignItems={"center"}>
                <ButtonTheme btnText='Add Filter' chakraProps={{
                    rightIcon: <FilterIcon />
                }} />
                <Flex gap={4} color={"Neutral.700"}>
                    <Flex cursor={"pointer"} alignItems={"center"} gap={2}>
                        <Text>View Statements</Text>
                        <StatementIcon />
                    </Flex>
                    <Flex cursor={"pointer"} alignItems={"center"} gap={2}>
                        <Text>Export All</Text>
                        <ExportIcon />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Transactions