import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ListItem, Icon, List, Box, Flex, Text } from "@chakra-ui/react";
import { INavLayout } from "type";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({
    hasDropdown,
    isActive,
    subItems,
    title,
    link,
    icon,
}: INavLayout) => {
    const [active, setActive] = useState(false);
    const location = useLocation();

    const isSubItem = subItems?.map(({ link }) => link).includes(location.pathname);

    const nestedItem = hasDropdown
        ? isSubItem : isActive;

    return (
        <ListItem cursor="pointer">
            <Box>
                <Link
                    to={link || "#"}
                    onClick={(event) => hasDropdown && event.preventDefault()}
                >
                    <Flex
                        _hover={{
                            textDecor: "none",
                        }}
                        onClick={() => setActive(!active)}
                        px={2}
                        py={3}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        borderBottom={"1px solid"}
                        borderBottomColor={"brand.borderBottom"}
                        bg={nestedItem ? "" : ""}

                        borderRadius={"5px"}
                        pos={"relative"}
                        overflow={"hidden"}
                    >
                        <Flex gap={3} alignItems={"center"}>
                            <Icon
                                w={6}
                                h={6}
                                as={icon}
                            />
                            <Text fontWeight={"600"} color={"Primary.Navy"}>
                                {title}
                            </Text>
                        </Flex>
                        {hasDropdown && (
                            <ChevronDownIcon
                                transform={
                                    active || nestedItem ? "rotate(180deg)" : "rotate(0deg)"
                                }
                                transition={"all .5s"}
                            />
                        )}
                    </Flex>
                </Link>
                {hasDropdown && (
                    <List
                        overflow={"hidden"}
                        maxH={active || nestedItem ? "300px" : "0px"}
                        transition={active || nestedItem ? "all 1s" : "all .2s"}
                        mt={active || nestedItem ? 2 : 0}
                        fontSize={"xs"}
                        ps={10}
                        spacing={2}
                    >
                        {subItems?.map((items) => {
                            const highlight =
                                items.link === location.pathname
                            return (
                                <ListItem
                                    key={items.id}
                                    color={highlight ? "black" : highlight ? "brand.golden" : "#979797"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Link to={items.link}>{items.title}</Link>
                                </ListItem>
                            );
                        })}
                    </List>
                )}
            </Box>
        </ListItem>
    );
};

export default NavItem;
