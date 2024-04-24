import React from 'react'
import { Avatar, Badge, Box, Flex,Button,Tabs, TabList, TabPanels, Tab, TabPanel, Grid, Heading, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, color } from '@chakra-ui/react'

const UnpaidInvoices = () => {
  return (
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
                                    <Th>Amount</Th>
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
                                    <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
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
                                    <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
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
                                    <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
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
                                    <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
  )
}

export default UnpaidInvoices