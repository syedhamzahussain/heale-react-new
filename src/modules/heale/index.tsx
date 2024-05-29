import { Box, ComponentWithAs, Flex, Grid, GridItem, Heading, Icon, IconProps, Link, List, ListItem, Select, Switch, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure, useOutsideClick } from '@chakra-ui/react'
import { filterData } from 'dummyData/data'
import ButtonTheme from 'modules/shared/ButtonTheme'
import CustomCard from 'modules/shared/CustomCard'
import { DiamondIcon, FilterIcon, HighIcon, LowIcon, RequestIcon, StatementIcon } from 'modules/shared/Icons'
import AmountFilter from 'modules/transactions/components/AmountFilter'
import DateFilter from 'modules/transactions/components/DateFilter'
import KeywordsFilter from 'modules/transactions/components/KeywordsFilter'
import StatusFilter from 'modules/transactions/components/StatusFilter'
import React, { useEffect, useRef, useState } from 'react'
import HealeGraph from './components/HealeGraph'
import { Link as LinkTo } from 'react-router-dom'
import TransactionDetailModal from 'modules/transactions/components/TransactionDetailModal'

interface ModalData {
    icon: ComponentWithAs<'svg', IconProps>;
    title: string;
    account: string;
}

const Heale = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [filter, setFilter] = useState(false)
    const [modalData, setModalData] = useState<ModalData>({
        icon: RequestIcon,
        title: "Payment Request",
        account: "Checking"
    });
    const [isUSD, setIsUSD] = useState(false);

    const handleSwitchChange = () => {
        setIsUSD(prevState => !prevState);
    };

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
                return <KeywordsFilter />;
            case 2:
                return <AmountFilter />;
            case 3:
                return <StatusFilter />;
            default:
                return null;
        }
    };
    const handleOpenModal = ({ icon, title, account }: { icon: ComponentWithAs<'svg', IconProps>, title: string, account: string }) => {
        setModalData({ icon, title, account });
        onOpen();
    };
    return (
        <Box>
            <Heading fontSize={"3xl"}>
                $HEALE
            </Heading>
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
                                    {[filterData[0], filterData[1], filterData[2], filterData[7]].map((item, index) => (
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
                <Flex gap={4} color={"Neutral.700"}>
                    <LinkTo to={"/dashboard/heale/statements"}>
                        <Flex cursor={"pointer"} alignItems={"center"} gap={2}>
                            <Text>View Statements</Text>
                            <StatementIcon />
                        </Flex>
                    </LinkTo >
                </Flex>
            </Flex>
            <Box >
                <CustomCard>
                    <Flex mb={2} gap={2} justifyContent={"space-between"} alignItems={"center"} fontSize={"sm"} color={"Neutral.700"}>
                        <Text>{isUSD ? 'USD' : '$HEALE'} Balance</Text>
                        <Flex gap={2} alignItems={"center"} sx={{
                            ".chakra-switch__track[data-checked]": {
                                bg: "Primary.Blue",
                            },
                        }}>
                            <Heading color={"Primary.Navy"} fontSize={"sm"}>$HEALE</Heading>
                            <Switch size="md" isChecked={isUSD} onChange={handleSwitchChange} />
                            <Heading color={"Primary.Navy"} fontSize={"sm"}>USD</Heading>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={"space-between"} alignItems={"center"} mb={2}>
                        <Heading fontSize={"xl"} color={"Primary.Navy"}>$22,262.39 USD</Heading>
                        <Flex gap={16} color={'Primary.Navy'} sx={{
                            ".chakra-select": {
                                p: " 0",
                                h: "24px !important"
                            }
                        }} mb={4} justifyContent={"space-between"} alignItems={"center"} fontSize={"sm"} >
                            <Select w={"120px"} _focusVisible={{
                                border: 0
                            }} border={0} placeholder='Last 7 days'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <Flex gap={2}>
                                <Flex alignItems={"center"} gap={"2px"}>
                                    <HighIcon />
                                    <Text>$388.35</Text>
                                </Flex>
                                <Flex alignItems={"center"} gap={"2px"}>
                                    <LowIcon />
                                    <Text>$388.35</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <HealeGraph />
                </CustomCard>
            </Box>
            <TableContainer mt={6}
                sx={{
                    "th": {
                        color: "Neutral.700",
                        fontSize: "sm",
                        textTransform: "capitalize",
                        fontWeight: "400"
                    },
                    "tr": {
                        cursor: "pointer"
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
                            <Th>Date</Th>
                            <Th>Description</Th>
                            <Th>Type</Th>
                            <Th>Amount</Th>
                            <Th>Latest Balance</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr onClick={() => handleOpenModal({ icon: DiamondIcon, title: 'Reward Details', account: "Checking" })}>
                            <Td rowSpan={2}>Jan 11</Td>
                            <Td>
                                <Heading color={"Primary.Navy"} fontSize={"sm"}>Shipment 0x...N58L</Heading>
                            </Td>
                            <Td>Reward</Td>
                            <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                        </Tr>
                        <Tr onClick={() => handleOpenModal({ icon: DiamondIcon, title: 'Minting Details', account: "Checking" })}>
                            <Td>
                                <Heading color={"Primary.Navy"} fontSize={"sm"}>Shipment 0x...N58L</Heading>
                            </Td>
                            <Td>Minting</Td>
                            <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <TransactionDetailModal account={modalData?.account} icon={modalData?.icon}
                title={modalData?.title} isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

export default Heale