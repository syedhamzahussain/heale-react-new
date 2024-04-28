import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { LeftArrowIcon } from './Icons'

const Pagination = ({ currentPage, totalPage, totalElements, element }: { currentPage: string, totalPage: string, totalElements: string, element: string }) => {
    return (
        <Flex justifyContent={"space-between"} mt={6} px={6} py={3} fontSize={"sm"} color={"Neutral.700"}>
            <Box>
                <Text>Page {currentPage} or {totalPage}</Text>
            </Box>
            <Flex gap={2} alignItems={"center"}>
                <Box>
                    <Text>{totalElements} {element}</Text>
                </Box>
                <LeftArrowIcon />
                <LeftArrowIcon transform={"rotate(180deg)"} />
            </Flex>
        </Flex>
    )
}

export default Pagination