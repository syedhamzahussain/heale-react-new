import { Box, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Flex h={"calc(100vh - 260px)"} alignItems={"center"} justifyContent={"center"}>
            <Box w={"30%"} p={8}
                borderRadius='16px'
                borderWidth={"2px"}
                boxShadow='1px 1px 6px 0px rgba(149, 153, 192, 0.22)'
            >
                <Heading fontSize={"3xl"} mb={8} textAlign={"center"}>Login your account</Heading>
                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Enter your email' />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='Enter your password' />
                </FormControl>
                <Link to={"/forgot-password"}>
                    <Text textAlign={"right"} color={"Primary.Blue"} fontSize={"xs"} mb={4}>Forgot password?</Text>
                </Link>
                <ButtonTheme btnText='Login' primary chakraProps={{
                    w: "100%"
                }} />
            </Box>
        </Flex>
    )
}

export default Login