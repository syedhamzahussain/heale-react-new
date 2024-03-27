import { Box, Container, Flex, FormControl, FormLabel, Grid, Heading, Input, Select, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'

const Carrier = () => {
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
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
            <Flex gap={4} mt={8} maxW={"50%"} margin={"0 auto"}>
                <ButtonTheme btnText='Back' chakraProps={{
                    w: "100%"
                }} />
                <ButtonTheme btnText='Submit' primary chakraProps={{
                    w: "100%"
                }} />
            </Flex>
        </Container>
    )
}

export default Carrier