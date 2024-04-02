import { Avatar, Box, Flex, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { BellIcon, DownIcon, SearchIcon } from '../Icons'

const Header = () => {
    return (
        <Flex justifyContent={"end"} px={10} py={6} borderBottom={"1px solid"} borderColor={"Neutral.200"}>
            <Box />
            <Flex gap={10}>
                <Flex gap={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input h={"10 !important"} borderRadius={8} boxShadow={"1px 1px 6px 0px rgba(149, 153, 192, 0.22)"}
                            border={"1px solid"} borderColor={"Neutral.200"} type='text' placeholder='Search' />
                    </InputGroup>
                    <Menu>
                        <MenuButton px={4} py={2} bg={"Primary.Blue"} w={"220px"} borderRadius={"40"}>
                            <Flex justifyContent={"space-between"} alignItems={"center"} gap={2}>
                                <Text color={"white"}>Move Money</Text>
                                <DownIcon />
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex gap={4} alignItems={"center"}>
                    <BellIcon w={5} h={5} />
                    <Avatar w={10} h={10} bgColor={"Primary.Blue"} color={"white"} name='Jeff Bezos' />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header