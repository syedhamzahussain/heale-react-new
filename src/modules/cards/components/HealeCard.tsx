import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { HealeLogoWhite, WifiIcon } from 'modules/shared/Icons'
import React from 'react'

const HealeCard = () => {
    return (
        <Box color={"white"} mb={8} p={8} borderRadius={"22px"} bgGradient={"linear-gradient(90deg, #5976FF 0%, #3446E6 100%)"} boxShadow={"0.94px 0.94px 5.65px 0px rgba(149, 153, 192, 0.22)"}>
            <HealeLogoWhite mt={-6} ms={-4} w={44} h={20} />
            <Heading fontSize={"lg"} cursor={"pointer"}>Jeff Bridges</Heading>
            <Flex mt={20} justifyContent={"space-between"} alignItems={"center"}>
                <Box cursor="pointer">
                    <Text>
                        •••• •••• •••• 1234
                    </Text>
                    <Flex gap={4}>
                        <Text>EXP: 01/26</Text>
                        <Text>CVC: 123</Text>
                    </Flex>
                </Box>
                <WifiIcon w={8} h={8} />
            </Flex>
        </Box>
    )
}

export default HealeCard