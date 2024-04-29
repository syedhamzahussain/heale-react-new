import { Avatar, Badge, Box, Flex, Grid, GridItem, Heading, Icon, List, ListItem, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useOutsideClick } from '@chakra-ui/react'
import { filterData } from 'dummyData/data'
import EmpltyTable from 'modules/Payment/component/EmptyTable'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { AddIcon, CardIcon, ExportIcon, FilterIcon, FlyIcon, LeftArrow, StatementIcon } from 'modules/shared/Icons'
import Pagination from 'modules/shared/Pagination'
import React, { useEffect, useRef, useState } from 'react'
import DateFilter from './components/DateFilter'

const Transactions = () => {
    const [filter, setFilter] = useState(false)
    const filterBox = useRef<HTMLDivElement>(null);
    const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

    useOutsideClick({
        ref: filterBox,
        handler: () => setFilter(false),
    })

    useEffect(() => {
        if (selectedFilter === null || selectedFilter === undefined) {
            setSelectedFilter(0);
        }
    }, [selectedFilter]);

    const handleFilterItemClick = (index: number) => {
        setSelectedFilter(index);
    };

    const renderFilterComponent = () => {
        switch (selectedFilter) {
            case 0:
                return <DateFilter />;
            case 1:
                return "Keywords";
            case 2:
                return "Amount";
            case 3:
                return "Method";
            case 4:
                return "Cards";
            case 5:
                return "Accounts";
            case 6:
                return "Categories";
            case 7:
                return "Status";
            default:
                return null;
        }
    };

    console.log(renderFilterComponent());


    return (
        <Box>
            <Heading fontSize={"3xl"}>
                Transactions
            </Heading>
            <Flex my={6} justifyContent={"space-between"} alignItems={"center"}>
                <Box ref={filterBox} pos={"relative"}>
                    <ButtonTheme btnText='Add Filter' chakraProps={{
                        rightIcon: <FilterIcon />,
                        onClick: () => setFilter(!filter)
                    }} />
                    {filter &&
                        <Grid zIndex={2} left={0} top={12} minW={"720px"} bgColor={"white"} gridTemplateColumns={"repeat(8,1fr)"} pos={"absolute"} borderRadius={16} border={"1px solid"} borderColor={"Neutral.100"} boxShadow={"1px 1px 6px 0px rgba(149, 153, 192, 0.4)"}>
                            <GridItem px={6} py={4} colSpan={2} borderRight={"1px solid"} borderColor={"Neutral.200"}>
                                <List>
                                    {filterData.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            py={3}
                                            display={"flex"}
                                            gap={3}
                                            alignItems={"center"}
                                            cursor="pointer"
                                            onClick={() => handleFilterItemClick(index)}
                                            color={selectedFilter === index ? "Primary.Blue" : "Primary.Navy"}
                                        >
                                            <Icon as={item.iconName} w={5} h={5} sx={{
                                                path: {
                                                    stroke: selectedFilter === index ? "Primary.Blue" : "Primary.Navy",
                                                },
                                            }} />

                                            <Text>{item.label}</Text>
                                        </ListItem>
                                    ))}
                                </List>
                            </GridItem>
                            <GridItem px={6} py={4} colSpan={6}>
                                {selectedFilter !== null && renderFilterComponent()}
                            </GridItem>
                        </Grid>
                    }
                </Box>
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
            <TableContainer sx={{
                "th": {
                    color: "Neutral.700",
                    fontSize: "sm",
                    textTransform: "capitalize",
                    fontWeight: "400"
                },
                // "tbody tr": {
                //     "td:first-child": {
                //         bgColor: "white"
                //     },
                //     "_hover": {
                //         bgColor: "Neutral.200"
                //     }
                // },
                "td": {
                    color: "Primary.Navy",
                    fontSize: "sm",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    ".chakra-badge": {
                        textTransform: "capitalize"
                    }
                }
            }}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Sent On</Th>
                            <Th>To</Th>
                            <Th>Account</Th>
                            <Th>Payment Method</Th>
                            <Th>Amount</Th>
                            <Th>Attachment</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td rowSpan={2}>Jan 11</Td>
                            <Td>
                                <Flex gap={2} alignItems={"center"}>
                                    <Avatar w={6} h={6} sx={{
                                        ".chakra-avatar__initials": {
                                            fontSize: "xs"
                                        }
                                    }} bgColor={"Neutral.100"} color={"Primary.Blue"} name='Bluewave Inc' />
                                    <Heading fontSize={"sm"} color={"Primary.Navy"}>Bluewave, Inc</Heading>
                                    <Badge px={2} borderRadius={"full"} bgColor={"Neutral.100"} color={"Primary.Blue"}>Pending</Badge>
                                </Flex>
                            </Td>
                            <Td>Checking</Td>
                            <Td>
                                <Flex alignItems={"center"} gap={2}>
                                    <FlyIcon w={6} h={6} /><Text color={"Neutral.700"}>Wire</Text>
                                </Flex>
                            </Td>
                            <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><AddIcon w={5} h={5} /></Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Flex gap={2} alignItems={"center"}>
                                    <Avatar w={6} h={6} sx={{
                                        ".chakra-avatar__initials": {
                                            fontSize: "xs"
                                        }
                                    }} bgColor={"Neutral.100"} color={"Primary.Blue"} name='Bluewave Inc' />
                                    <Heading fontSize={"sm"} color={"Primary.Navy"}>Bluewave, Inc</Heading>
                                    <Badge px={2} borderRadius={"full"} bgColor={"Neutral.100"} color={"Primary.Blue"}>Pending</Badge>
                                </Flex>
                            </Td>
                            <Td>Checking</Td>
                            <Td>
                                <Flex alignItems={"center"} gap={2}>
                                    <FlyIcon w={6} h={6} /><Text color={"Neutral.700"}>Wire</Text>
                                </Flex>
                            </Td>
                            <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><AddIcon w={5} h={5} /></Td>
                        </Tr>
                        <Tr>
                            <Td rowSpan={2}>Jan 11</Td>
                            <Td>
                                <Flex gap={2} alignItems={"center"}>
                                    <Avatar w={6} h={6} sx={{
                                        ".chakra-avatar__initials": {
                                            fontSize: "xs"
                                        }
                                    }} bgColor={"Neutral.100"} color={"Primary.Blue"} name='Bluewave Inc' />
                                    <Heading fontSize={"sm"} color={"Primary.Navy"}>Bluewave, Inc</Heading>
                                    <Badge px={2} borderRadius={"full"} bgColor={"Neutral.100"} color={"Primary.Blue"}>Pending</Badge>
                                </Flex>
                            </Td>
                            <Td>Checking</Td>
                            <Td>
                                <Flex alignItems={"center"} gap={2}>
                                    <LeftArrow w={6} h={6} /><Text color={"Neutral.700"}>Transfer</Text>
                                </Flex>
                            </Td>
                            <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><AddIcon w={5} h={5} /></Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Flex gap={2} alignItems={"center"}>
                                    <Avatar w={6} h={6} sx={{
                                        ".chakra-avatar__initials": {
                                            fontSize: "xs"
                                        }
                                    }} bgColor={"Neutral.100"} color={"Primary.Blue"} name='Bluewave Inc' />
                                    <Heading fontSize={"sm"} color={"Primary.Navy"}>Bluewave, Inc</Heading>
                                    <Badge px={2} borderRadius={"full"} bgColor={"Neutral.100"} color={"Primary.Blue"}>Pending</Badge>
                                </Flex>
                            </Td>
                            <Td>Checking</Td>
                            <Td>
                                <Flex alignItems={"center"} gap={2}>
                                    <CardIcon sx={{
                                        path: {
                                            stroke: "Neutral.700"
                                        }
                                    }} w={6} h={6} /><Text color={"Neutral.700"}>Jason G. ••3374 </Text>
                                </Flex>
                            </Td>
                            <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><AddIcon w={5} h={5} /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Pagination currentPage='1' totalPage='4' totalElements='324' element='Transactions' />
            <EmpltyTable title='No current transactions' desc="When you have current transactions, they'll be listed here" />
        </Box>
    )
}

export default Transactions