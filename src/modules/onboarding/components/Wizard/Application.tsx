import { Box, Flex, Grid, Heading, Progress, Text } from '@chakra-ui/react'
import { InfoIcon } from 'modules/shared/Icons'
import React from 'react'

const Application = () => {
    return (
        <Grid gridTemplateColumns={"repeat(2,1fr)"}>
            <Box>
                <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Start a new application</Heading>
                <Text mb={8} color={"Neutral.800"}>Choose the type of application for your business below. A business may have multiple types if required.</Text>
                <Flex gap={2} mb={8} alignItems={"center"}>
                    <Progress w={"70%"} size='sm' borderRadius={"full"} sx={{
                        ".css-afaq6z": {
                            bgColor: "Primary.Blue"
                        }
                    }} value={80} />
                    <Text color={"Neutral.700"} fontSize={"sm"}>56% complete</Text>
                </Flex>
                <Flex fontSize={"xs"} mt={8} gap={4} alignItems={"center"}>
                    <Flex p={2} borderRadius={"full"} bgColor={"Neutral.100"} justifyContent={"center"} alignItems={"center"}>
                        <InfoIcon w={6} h={6} />
                    </Flex>
                    <Box>
                        <Heading color={"Primary.Navy"} fontSize={"md"} mb={2}>Verification</Heading>
                        <Text color={"Neutral.700"}>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna.</Text>

                    </Box>
                </Flex>
            </Box>
        </Grid>
    )
}

export default Application