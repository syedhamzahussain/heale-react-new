
import { Avatar, Box, Divider, Flex, Heading, List, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { SidebarNav } from "dummyData/data";
import React from "react";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";
import { DownIcon, HealeLogo, LogoutIcon } from "../Icons";

const Sidebar = () => {
    const location = useLocation();
    return (
        <Box
            height={"100%"}
            overflow={"hidden"}
            background={"#fff"}
            border={"1px solid"}
            borderColor={"Neutral.200"}
            minH={"100vh"}
            display={"flex"}
            justifyContent={"space-between"}
            flexDir={"column"}
        >
            <Box>
                <Box px={4} py={3} borderBottom={"1px solid"} borderColor={"Neutral.200"}>
                    <Menu placement="bottom-end">
                        {({ isOpen }) => (
                            <>
                                <MenuButton w={"100%"} borderRadius={"full"} _focus={{
                                    bgColor: "Neutral.100"
                                }}>
                                    <Flex justifyContent={"space-between"} alignItems={"center"} px={4} py={3}>
                                        <Flex gap={4} alignItems={"center"}>
                                            <Avatar w={10} h={10} bgColor={"Primary.Blue"} color={"white"} name='Knight-Swift' />
                                            <Box>
                                                <Heading fontSize={"md"} color={"Primary.Navy"}>Knight-Swift</Heading>
                                                <Text fontFamily={"CourierPrime"} fontSize={"sm"} color={"Neutral.700"}>@knight-swift</Text>
                                            </Box>
                                        </Flex>
                                        <DownIcon sx={{
                                            transform: isOpen ? "rotate(180deg)" : "",
                                        }} />
                                    </Flex>
                                </MenuButton>
                                <MenuList overflow={"hidden"} borderRadius={16} boxShadow={"1px 1px 6px 0px rgba(149, 153, 192, 0.4)"} py={0} sx={{
                                    ".chakra-menu__menuitem": {
                                        p: 3,
                                    }
                                }}>
                                    <MenuItem>
                                        Settings
                                    </MenuItem>
                                    <MenuItem>
                                        Documents & Data
                                    </MenuItem>
                                    <MenuItem>
                                        Link Account
                                    </MenuItem>
                                    <MenuItem fontSize={"xs"} color={"Neutral.700"}>
                                        Switch Wallet
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <Flex gap={4} alignItems={"center"}>
                                            <Avatar w={10} h={10} bgColor={"Primary.Blue"} color={"white"} name='NexGen Transport' />
                                            <Box>
                                                <Heading fontSize={"md"} color={"Primary.Navy"}>NexGen Transport</Heading>
                                                <Text fontFamily={"CourierPrime"} fontSize={"sm"} color={"Neutral.700"}>@nexgen-transport</Text>
                                            </Box>
                                        </Flex>
                                    </MenuItem>
                                    <MenuItem>
                                        <Flex gap={4} alignItems={"center"}>
                                            <Avatar w={10} h={10} bgColor={"Primary.Blue"} color={"white"} name='Jeff Bridges' />
                                            <Box>
                                                <Heading fontSize={"md"} color={"Primary.Navy"}>Jeff Bridges</Heading>
                                                <Text fontFamily={"CourierPrime"} fontSize={"sm"} color={"Neutral.700"}>@jbridges</Text>
                                            </Box>
                                        </Flex>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem justifyContent={"space-between"}>
                                        <Text>
                                            Log out
                                        </Text>
                                        <LogoutIcon w={5} h={5} />
                                    </MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                    {/* <Flex gap={4} alignItems={"center"} px={4} py={3} >
                        <Avatar w={10} h={10} bgColor={"Primary.Blue"} color={"white"} name='Knight-Swift' />
                        <Box>
                            <Heading fontSize={"md"} color={"Primary.Navy"}>Knight-Swift</Heading>
                            <Text fontFamily={"CourierPrime"} fontSize={"sm"} color={"Neutral.700"}>@knight-swift</Text>
                        </Box>
                    </Flex> */}
                </Box>
                <Box>
                    <List my={10} px={4} spacing={2}>
                        {SidebarNav.map((items) => {
                            return (
                                <NavItem
                                    key={items.id}
                                    title={items.title}
                                    link={items.link}
                                    icon={items.icon}
                                    subItems={items.subItems}
                                    hasDropdown={items.hasDropdown}
                                    isActive={location.pathname === items.link}
                                />
                            );
                        })}
                    </List>
                </Box>
            </Box>
            <Box textAlign={"center"} px={4} py={3} borderTop={"1px solid"} borderColor={"Neutral.200"}>
                <HealeLogo w={32} h={16} />
            </Box>
        </Box>
    );
};

export default Sidebar;
