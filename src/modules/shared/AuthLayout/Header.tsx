import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { HealeLogo } from '../Icons'
import ButtonTheme from '../ButtonTheme'
import { Link, useLocation } from 'react-router-dom'

const AuthHeader = () => {
    const location = useLocation();
    return (
        <Box as='header' borderBottom={"1px solid rgba(241, 241, 255, 1)"}>
            <Container maxW={"80%"}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Link to={"/"}>
                        <HealeLogo ms={-6} w={52} h={20} />
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