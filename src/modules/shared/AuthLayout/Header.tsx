import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { HealeLogo } from '../Icons'
import ButtonTheme from '../ButtonTheme'
import { Link, useLocation } from 'react-router-dom'

const AuthHeader = () => {
    const location = useLocation();
    return (
        <Box as='header' borderBottom={"1px solid rgba(241, 241, 255, 1)"}>
            <Container maxW={{ lg: "80%", sm: "90%", base: "100%" }}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Link to={"/"}>
                        <HealeLogo ms={{ md: -6, base: -2 }} w={{ lg: 52, md: 44, base: 36 }} h={{ md: 20, base: 16 }} />
                    </Link>
                    {location.pathname === "/login" ?
                        <Link to={"/"}>
                            <ButtonTheme btnText='Sign up' />
                        </Link>
                        :
                        <Link to={"/login"}>
                            <ButtonTheme btnText='Sign in' />
                        </Link>
                    }
                </Flex>
            </Container>
        </Box>
    )
}

export default AuthHeader