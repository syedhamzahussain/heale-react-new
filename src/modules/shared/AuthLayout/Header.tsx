import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { HealeLogo } from '../Icons'
import ButtonTheme from '../ButtonTheme'
import { Link } from 'react-router-dom'

const AuthHeader = () => {
    return (
        <Box as='header' borderBottom={"1px solid rgba(241, 241, 255, 1)"}>
            <Container maxW={"80%"}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Link to={"/"}>
                        <HealeLogo w={52} h={20} />
                    </Link>
                    <ButtonTheme btnText='Sign in' />
                </Flex>
            </Container>
        </Box>
    )
}

export default AuthHeader