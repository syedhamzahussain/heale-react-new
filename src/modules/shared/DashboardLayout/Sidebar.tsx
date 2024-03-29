
import { Avatar, Box, Flex, Heading, List, Text } from "@chakra-ui/react";
import { SidebarNav } from "dummyData/data";
import React from "react";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";

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
            flexDir={"column"}
            justifyContent={"space-between"}
        >
            <Box px={4} py={3} borderBottom={"1px solid"} borderColor={"Neutral.200"}>
                <Flex gap={4} alignItems={"center"} px={4} py={3} >
                    <Avatar bgColor={"Primary.Blue"} color={"white"} name='Knight-Swift' />
                    <Box>
                        <Heading fontSize={"md"} color={"Primary.Navy"}>Knight-Swift</Heading>
                        <Text fontSize={"sm"} color={"Neutral.700"}>@knight-swift</Text>
                    </Box>
                </Flex>

            </Box>
            <Box>
                <List my={6} px={2} spacing={2}>
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
    );
};

export default Sidebar;
