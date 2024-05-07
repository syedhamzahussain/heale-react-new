import { Box, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'

const ForgotPassword = () => {
    return (
        <Flex h={"calc(100vh - 260px)"} alignItems={"center"} justifyContent={"center"}>
            <Box w={"30%"} p={8}
                borderRadius='16px'
                borderWidth={"2px"}
                boxShadow='1px 1px 6px 0px rgba(149, 153, 192, 0.22)'
            >
                <Heading fontSize={"3xl"} mb={8} textAlign={"center"}>Forgot Password</Heading>
                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Enter your email' />
                </FormControl>
                <ButtonTheme btnText='Send' primary chakraProps={{
                    w: "100%"
                }} />
            </Box>
        </Flex>
    )
}

export default ForgotPassword