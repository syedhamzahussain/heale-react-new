import { Avatar, Box, Flex, Heading, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { BellIcon, DownIcon, NoNotiIcon, SearchIcon, SettingIcon } from '../Icons'
import ButtonTheme from '../ButtonTheme'
import { NotiData } from 'dummyData/data'

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
                    <Menu placement="bottom-end">
                        <MenuButton px={4} py={2} bg={"Primary.Blue"} w={"220px"} borderRadius={"40"}>
                            <Flex justifyContent={"space-between"} alignItems={"center"} gap={2}>
                                <Text color={"white"}>Move Money</Text>
                                <DownIcon />
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Download</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex gap={4} alignItems={"center"}>
                    <Menu placement="bottom-end">
                        <MenuButton w={8} h={8} borderRadius={"full"} _focus={{
                            bgColor: "Neutral.100"
                        }}>
                            <Flex justify={"center"} alignItems={"center"}>
                                <BellIcon w={5} h={5} />
                            </Flex>
                        </MenuButton>
                        <MenuList py={0} minW={"350px"} maxW={"350px"} sx={{
                            ".chakra-menu__menuitem": {
                                p: 6,
                                borderBottom: "1px solid",
                                borderColor: "Neutral.200"
                            }
                        }}>
                            <MenuItem _hover={{
                                bgColor: "transparent",
                            }}
                                _focus={{
                                    bgColor: "transparent",
                                }}
                                justifyContent={"space-between"}>
                                <Flex alignItems={"center"} justifyContent={"space-between"}>
                                    <Flex alignItems={"center"} gap={2}>
                                        <BellIcon w={5} h={5} sx={{
                                            stroke: {
                                                fill: "Neutral.700"
                                            }
                                        }} />
                                        <Heading fontSize={"xl"} color={"Primary.Navy"}>Notifications</Heading>
                                    </Flex>
                                </Flex>
                                <SettingIcon w={5} h={5} />
                            </MenuItem>
                            {!NotiData.length ?
                                <>
                                    {NotiData?.map((item) => {
                                        return (
                                            <MenuItem key={item?.id}>
                                                <Box>
                                                    <Flex gap={2} mb={2}>
                                                        <Flex alignItems={"center"} gap={2}>
                                                            <Box w={"6px"} h={"6px"} borderRadius={"full"} bgColor={item?.status === "unread" ? "Secondary.Turquoise" : ""} />
                                                            <Avatar w={10} h={10} bgColor={"Primary.Blue"} color={"white"} name={item?.title} />
                                                        </Flex>
                                                        <Box>
                                                            <Heading fontSize={"sm"} color={"Primary.Navy"}>{item?.title} <Text color={"Neutral.700"} fontWeight={"400"} as={"span"}>{item?.desc} </Text></Heading>
                                                            <Text fontSize={"xs"} color={"Neutral.700"}>{item?.time}</Text>
                                                        </Box>
                                                    </Flex>
                                                    <ButtonTheme btnText='Review & Approve' chakraProps={{
                                                        h: "32px",
                                                        fontSize: "sm",
                                                        ms: 8
                                                    }} />

                                                </Box>
                                            </MenuItem>
                                        )
                                    })}
                                </>
                                :
                                <MenuItem minW={"350px"} minH={"280px"} flexDir={"column"} justifyContent={"center"} gap={6} alignItems={"center"}>
                                    <NoNotiIcon w={"188px"} h={"140px"} />
                                    <Box color={"Primary.Navy"} textAlign={"center"}>
                                        <Heading fontSize={"xl"} >No notifications</Heading>
                                        <Text>Once a request has been submitted, it will be shown here</Text>
                                    </Box>
                                </MenuItem>
                            }
                        </MenuList>
                    </Menu>
                    {/*  */}
                    <Avatar w={10} h={10} bgColor={"Primary.Blue"} color={"white"} name='Jeff Bezos' />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header