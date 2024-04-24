import { Avatar, Badge, Box, Flex, Grid, Heading, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import CustomCard from 'modules/shared/CustomCard'
import { HighIcon, InfoIcon, LowIcon, PersonalIcon, RightArrow, SwitchIcon } from 'modules/shared/Icons'
import React from 'react'
import AvailableUSDGraph from './components/AvailableUSDGraph'

const Dashboard = () => {
    return (
        <Box>
            <Heading mb={10} color={"Primary.Navy"} fontSize={"3xl"}>Welcome, Jeff</Heading>
            <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6}>
                <CustomCard>
                    <Flex mb={2} gap={2} alignItems={"center"} fontSize={"sm"} color={"Neutral.700"}>
                        <Text>Available USD</Text>
                        <InfoIcon />
                    </Flex>
                    <Heading mb={2} fontSize={"xl"} color={"Primary.Navy"}>$22,262.39 USD</Heading>
                    <Flex gap={16} color={'Primary.Navy'} sx={{
                        ".chakra-select": {
                            p: " 0",
                            h: "24px !important"
                        }
                    }} mb={4} justifyContent={"space-between"} alignItems={"center"} fontSize={"sm"} >
                        <Select _focusVisible={{
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
                    <AvailableUSDGraph />
                </CustomCard>
                <CustomCard>
                    <Flex mb={2} gap={2} alignItems={"center"} fontSize={"sm"} color={"Neutral.700"}>
                        <Text>Available $HEALE</Text>
                        <InfoIcon />
                    </Flex>
                    <Heading mb={2} fontSize={"xl"} color={"Primary.Navy"}>2,467.07 $HEALE</Heading>
                    <Flex gap={16} color={'Primary.Navy'} sx={{
                        ".chakra-select": {
                            p: " 0",
                            h: "24px !important"
                        }
                    }} mb={4} justifyContent={"space-between"} alignItems={"center"} fontSize={"sm"} >
                        <Select _focusVisible={{
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
                    <AvailableUSDGraph />
                </CustomCard>
                <CustomCard>
                    <Flex mb={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Heading fontSize={"sm"} color={"Primary.Navy"}>Your Accounts</Heading>
                        <Flex borderRadius={"full"} justifyContent={"center"} alignItems={"center"} w={6} h={6} bgColor={"Neutral.100"}>
                            <SwitchIcon w={"14px"} h={"14px"} />
                        </Flex>
                    </Flex>
                    <Flex py={5} alignItems={"center"} borderBottom={"1px solid"} borderColor={"Neutral.200"} justifyContent={"space-between"}>
                        <Flex alignItems={"center"} gap={2}>
                            <Flex borderRadius={"full"} justifyContent={"center"} alignItems={"center"} w={6} h={6} bgColor={"Neutral.100"}>
                                <PersonalIcon w={"14px"} h={"14px"} sx={{
                                    "path": {
                                        stroke: "Primary.Blue"
                                    }
                                }} />
                            </Flex>
                            <Heading fontSize={"sm"} color={"Primary.Navy"}>Checking ••3849</Heading>
                        </Flex>
                        <Heading fontSize={"sm"}>$16,289.23 <Text fontWeight={"400"} color={"Neutral.700"} as={"span"}>USD</Text></Heading>
                    </Flex>
                    <Flex py={5} alignItems={"center"} borderBottom={"1px solid"} borderColor={"Neutral.200"} justifyContent={"space-between"}>
                        <Flex alignItems={"center"} gap={2}>
                            <Flex borderRadius={"full"} justifyContent={"center"} alignItems={"center"} w={6} h={6} bgColor={"Neutral.100"}>
                                <PersonalIcon w={"14px"} h={"14px"} sx={{
                                    "path": {
                                        stroke: "Primary.Blue"
                                    }
                                }} />
                            </Flex>
                            <Heading fontSize={"sm"} color={"Primary.Navy"}>P2P ••C1cb</Heading>
                        </Flex>
                        <Heading fontSize={"sm"}>$16,289.23 <Text fontWeight={"400"} color={"Neutral.700"} as={"span"}>USD</Text></Heading>
                    </Flex>
                    <Flex py={5} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex alignItems={"center"} gap={2}>
                            <Flex borderRadius={"full"} justifyContent={"center"} alignItems={"center"} w={6} h={6} bgColor={"Neutral.100"}>
                                <PersonalIcon w={"14px"} h={"14px"} sx={{
                                    "path": {
                                        stroke: "Primary.Blue"
                                    }
                                }} />
                            </Flex>
                            <Heading fontSize={"sm"} color={"Primary.Navy"}>HEALE ••C1cb</Heading>
                        </Flex>
                        <Heading fontSize={"sm"}>$16,289.23 <Text fontWeight={"400"} color={"Neutral.700"} as={"span"}>$HEALE</Text></Heading>
                    </Flex>
                </CustomCard>
            </Grid>
            <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={6}>
                <CustomCard>
                    <Flex mb={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Heading fontSize={"sm"} color={"Primary.Navy"}>Recent Transactions</Heading>
                        <Flex alignItems={"center"} gap={2}>
                            <Heading fontSize={"sm"} color={"Primary.Blue"}>View all</Heading>
                            <RightArrow w={5} h={5} />
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
                </CustomCard>
                <CustomCard>
                    <Flex mb={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Heading fontSize={"sm"} color={"Primary.Navy"}>Recent Tokens</Heading>
                        <Flex alignItems={"center"} gap={2}>
                            <Heading fontSize={"sm"} color={"Primary.Blue"}>View all</Heading>
                            <RightArrow w={5} h={5} />
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
                            fontWeight: "600"
                        }
                    }}>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Sent On</Th>
                                    <Th>Description</Th>
                                    <Th>Type</Th>
                                    <Th>Amount</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td rowSpan={2}>Jan 11</Td>
                                    <Td>
                                        Bluewave, Inc
                                    </Td>
                                    <Td>Reward</Td>
                                    <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>$HEALE</Text></Text></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        Bluewave, Inc
                                    </Td>
                                    <Td>Reward</Td>
                                    <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>$HEALE</Text></Text></Td>
                                </Tr>
                                <Tr>
                                    <Td rowSpan={2}>Jan 11</Td>
                                    <Td>
                                        Bluewave, Inc
                                    </Td>
                                    <Td>Reward</Td>
                                    <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>$HEALE</Text></Text></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        Bluewave, Inc
                                    </Td>
                                    <Td>Reward</Td>
                                    <Td><Text>$715.85 <Text as={"span"} color={"Neutral.700"}>$HEALE</Text></Text></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CustomCard>

            </Grid>
        </Box>
    )
}

export default Dashboard