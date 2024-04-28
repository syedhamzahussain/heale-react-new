import { Avatar, Badge, Box, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import EmpltyTable from 'modules/Payment/component/EmptyTable'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { AddIcon, CardIcon, ExportIcon, FilterIcon, FlyIcon, LeftArrow, StatementIcon } from 'modules/shared/Icons'
import Pagination from 'modules/shared/Pagination'
import React from 'react'

const Transactions = () => {
    return (
        <Box>
            <Heading fontSize={"3xl"}>
                Transactions
            </Heading>
            <Flex my={6} justifyContent={"space-between"} alignItems={"center"}>
                <ButtonTheme btnText='Add Filter' chakraProps={{
                    rightIcon: <FilterIcon />
                }} />
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