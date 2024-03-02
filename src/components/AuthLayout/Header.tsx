import { Box, Container, Flex } from '@chakra-ui/react'
import ButtonTheme from 'components/ButtonTheme'
import { HealeLogo } from 'components/Icons'
import React from 'react'

const AuthHeader = () => {
    return (
        <Box as='header' borderBottom={"1px solid rgba(241, 241, 255, 1)"}>
            <Container maxW={"85%"}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <HealeLogo w={52} h={20} />
                    <ButtonTheme btnText='Sign in' />
                </Flex>
            </Container>
        </Box>
    )
}

export default AuthHeader