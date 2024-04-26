import React, { useState } from "react";
import { ListItem, Icon, List, Box, Flex, Text } from "@chakra-ui/react";
import { INavLayout } from "type";
import { Link, useLocation } from "react-router-dom";
import { UpIcon } from "../Icons";

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
        ? isActive || isSubItem : isActive;

    return (
        <ListItem cursor="pointer">
            <Box>
                <Link
                    to={link || "#"}
                // onClick={(event) => hasDropdown && event.preventDefault()}
                >
                    <Flex
                        _hover={{
                            textDecor: "none",
                            bg: "Neutral.100",
                            path: {
                                stroke: "Primary.Blue",
                            },
                            ".chakra-text": {
                                color: "Primary.Blue"
                            }
                        }}
                        onClick={() => setActive(!active)}
                        p={3}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        bg={nestedItem ? "Neutral.100" : ""}
                        borderRadius={"5px"}
                        pos={"relative"}
                        overflow={"hidden"}
                    >
                        <Flex gap={3} alignItems={"center"}>
                            <Icon
                                w={6}
                                h={6}
                                as={icon}
                                sx={{
                                    path: {
                                        stroke: nestedItem ? "Primary.Blue" : "",
                                    },
                                }}
                            />
                            <Text fontWeight={"600"} color={nestedItem ? "Primary.Blue" : "Primary.Navy"}>
                                {title}
                            </Text>
                        </Flex>
                        {hasDropdown && (
                            <UpIcon
                                transform={
                                    !active || nestedItem ? "rotate(180deg)" : "rotate(0deg)"
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
                        ps={12}
                        mb={active ? 4 : 0}
                        spacing={5}
                    >
                        {subItems?.map((items) => {
                            return (
                                <ListItem
                                    key={items.id}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Link to={items.link}><Text fontWeight={"600"}>{items.title}</Text></Link>
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
