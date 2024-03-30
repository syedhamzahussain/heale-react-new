import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '../Icons'

const Header = () => {
    return (
        <Flex justifyContent={"end"} px={10} py={6} borderBottom={"1px solid"} borderColor={"Neutral.200"}>
            <InputGroup
            >
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input h={"10 !important"} borderRadius={8} boxShadow={"1px 1px 6px 0px rgba(149, 153, 192, 0.22)"}
                    border={"1px solid"} borderColor={"Neutral.200"} type='text' placeholder='Search' />
            </InputGroup>
        </Flex>
    )
}

export default Header