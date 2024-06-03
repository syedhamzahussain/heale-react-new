import { Badge, Box, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { CardIcon } from 'modules/shared/Icons'
import React from 'react'
import CardDetailModal from './components/CardDetailModal'

const Cards = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Heading fontSize={"3xl"}>
                Cards
            </Heading>
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
                            <Th>Cardholder</Th>
                            <Th>Card Number</Th>
                            <Th>Spent this Month</Th>
                            <Th>Type</Th>
                            <Th>Account</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr onClick={onOpen}>
                            <Td rowSpan={2}>
                                <Flex gap={2} alignItems={"center"}>
                                    <Heading fontSize={"sm"} color={"Primary.Navy"}>Jeff Bridges</Heading>
                                    <Badge px={2} borderRadius={"full"} bgColor={"Neutral.100"} color={"Primary.Navy40"}>You</Badge>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex gap={2} alignItems={"center"}>
                                    <CardIcon />
                                    <Heading color={"Primary.Navy"} fontSize={"sm"}>••••3456</Heading>
                                </Flex>
                            </Td>
                            <Td><Text>$1,500 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><Text color={"Neutral.700"}>Business</Text></Td>
                            <Td>Checking ••••0101</Td>
                        </Tr>
                        <Tr onClick={onOpen}>
                            <Td>
                                <Flex gap={2} alignItems={"center"}>
                                    <CardIcon />
                                    <Heading color={"Primary.Navy"} fontSize={"sm"}>••••2948</Heading>
                                </Flex>
                            </Td>
                            <Td><Text>$1,500 <Text as={"span"} color={"Neutral.700"}>USD</Text></Text></Td>
                            <Td><Text color={"Neutral.700"}>Personal</Text></Td>
                            <Td>Checking ••••0101</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <CardDetailModal isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

export default Cards