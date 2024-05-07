import { Box, Flex, Grid, GridItem, Heading, Icon, Link, List, ListItem, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useOutsideClick } from '@chakra-ui/react'
import { filterData } from 'dummyData/data'
import EmpltyTable from 'modules/Payment/component/EmptyTable'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { CloudDownloadIcon, FilterIcon, LeftArrow } from 'modules/shared/Icons'
import React, { useEffect, useRef, useState } from 'react'
import DateFilter from './components/DateFilter'
import { Link as LinkTo } from 'react-router-dom'
import AccountsFilter from './components/AccountsFilter'

const Statements = () => {
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
                return <AccountsFilter />;
            default:
                return null;
        }
    };


    return (
        <Box>
            <Flex gap={2} alignItems={"center"}>
                <LinkTo to={"/dashboard/transactions"}>
                    <LeftArrow w={6} h={6} sx={{
                        path: {
                            stroke: "Primary.Navy"
                        }
                    }} />
                </LinkTo>
                <Heading fontSize={"3xl"}>
                    Statements
                </Heading>
            </Flex>
            <Flex my={6} justifyContent={"space-between"} alignItems={"center"}>
                <Box ref={filterBox} pos={"relative"}>
                    <ButtonTheme btnText='Add Filter' chakraProps={{
                        rightIcon: <FilterIcon />,
                        onClick: () => setFilter(!filter)
                    }} />
                    {filter &&
                        <Grid zIndex={2} left={0} top={12} minW={"720px"} minH={"420px"} bgColor={"white"} gridTemplateColumns={"repeat(8,1fr)"} pos={"absolute"} borderRadius={16} border={"1px solid"} borderColor={"Neutral.100"} boxShadow={"1px 1px 6px 0px rgba(149, 153, 192, 0.4)"}>
                            <GridItem px={6} py={4} colSpan={2} borderRight={"1px solid"} borderColor={"Neutral.200"}>
                                <List>
                                    {[filterData[0], filterData[5]].map((item, index) => (
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
                            <GridItem pos={"relative"} px={6} py={4} colSpan={6}>
                                {selectedFilter !== null && renderFilterComponent()}
                                <Flex pos={"absolute"} w={"90%"} bottom={6} alignItems={"center"} justifyContent={"space-between"}>
                                    <Link as={"a"} color={"Primary.Blue"}>Clear</Link>
                                    <ButtonTheme btnText='Apply' />
                                </Flex>
                            </GridItem>
                        </Grid>
                    }
                </Box>
            </Flex>
            <TableContainer
                sx={{
                    "th": {
                        color: "Neutral.700",
                        fontSize: "sm",
                        textTransform: "capitalize",
                        fontWeight: "400"
                    },
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
                            <Th>Statement Period</Th>
                            <Th>Account</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td rowSpan={2}>Jan 11</Td>
                            <Td>Checking ••••3849</Td>
                            <Td><CloudDownloadIcon w={5} h={5} /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <EmpltyTable title='No current transactions' desc="When you have current transactions, they'll be listed here" />
        </Box >
    )
}

export default Statements