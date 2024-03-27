import { Box, Container, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'

const Lender = () => {
    return (
        <Container maxW={"40%"}>
            <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Lender information</Heading>
            <Text mb={8} color={"Neutral.800"}>Enter required information for your Lender application. If you do not have or require an NMLS number, please contact support.</Text>
            <Box sx={{
                ".chakra-form__label": {
                    fontSize: "sm",
                    color: "Primary.Navy"
                },
                ".chakra-input": {
                    fontSize: "sm",
                }
            }}>
                <FormControl>
                    <FormLabel>NMLS Number</FormLabel>
                    <Input type='text' placeholder='ID # 000000' />
                </FormControl>
            </Box>
            <Flex gap={4} mt={8}>
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

export default Lender