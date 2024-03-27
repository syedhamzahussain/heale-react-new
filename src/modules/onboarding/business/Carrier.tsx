import { Box, Container, Flex, FormControl, FormLabel, Grid, Heading, Input, Select, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { PencilIcon, PlusIcon, TrashIcon } from 'modules/shared/Icons'
import React from 'react'
import AddInsuranceModal from '../components/AddInsuranceModal'

const Carrier = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Container maxW={"70%"}>
            <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Carrier information</Heading>
            <Text mb={8} color={"Neutral.800"}>Enter your motor carrier information and select the type of services you offer.</Text>
            <Box sx={{
                ".chakra-form__label": {
                    fontSize: "sm",
                    color: "Primary.Navy"
                },
                ".chakra-input": {
                    fontSize: "sm",
                }
            }}>
                <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6} >
                    <FormControl>
                        <FormLabel >USDOT Number</FormLabel>
                        <Input type='text' placeholder='USDOT1523020' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Docket Number</FormLabel>
                        <Input type='text' placeholder='MC-123456' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Services</FormLabel>
                        <Select placeholder='Select'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Box>
            <Box mt={8}>
                <Heading mb={8} color={"Primary.Navy"} fontSize={"xl"}>Insurance</Heading>
                <TableContainer sx={{
                    "th": {
                        color: "Neutral.700",
                        fontSize: "sm",
                        textTransform: "capitalize",
                        fontWeight: "400"
                    },
                    "td": {
                        color: "Primary.Navt",
                        fontSize: "sm",
                        textTransform: "capitalize",
                        fontWeight: "600"
                    }
                }}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Insurer</Th>
                                <Th>Type</Th>
                                <Th>Policy Number</Th>
                                <Th>Start Date</Th>
                                <Th>Expiration Date</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>CNA Hardy</Td>
                                <Td>Type</Td>
                                <Td>1384950</Td>
                                <Td>3/16/16</Td>
                                <Td>3/16/26</Td>
                                <Td>
                                    <Flex gap={4}>
                                        <TrashIcon />
                                        <PencilIcon />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td colSpan={6}>
                                    <Text fontWeight={"400"} color={"Primary.Navy"} textAlign={"center"}>
                                        Click on <Text as={"span"} fontWeight={"600"}>+ Add Insurance </Text>to upload documents
                                    </Text>
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th colSpan={6}>
                                    <Flex cursor={'pointer'} onClick={onOpen} gap={2} alignItems={"center"} color={"Primary.Blue"} fontSize={"md"} >
                                        <PlusIcon /><Text> Add Insurance</Text>
                                    </Flex>
                                </Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
            <Flex gap={4} maxW={"50%"} margin={"0 auto"} mt={8}>
                <ButtonTheme btnText='Back' chakraProps={{
                    w: "100%"
                }} />
                <ButtonTheme btnText='Submit' primary chakraProps={{
                    w: "100%"
                }} />
            </Flex>
            <AddInsuranceModal isOpen={isOpen} onClose={onClose} />
        </Container>
    )
}

export default Carrier