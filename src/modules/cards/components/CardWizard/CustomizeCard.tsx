import { Box, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'
import { useWizard } from 'react-use-wizard';

const CustomizeCard = () => {
    const { nextStep, previousStep } = useWizard();
    return (
        <Box maxH={"500px"} overflow={"auto"}>
            <Box w={"70%"} px={1}>
                <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
                    Customize
                </Heading>
                <Text mb={8} color={'Neutral.800'}>
                    Content draft team underline variant plugin editor. Arrange slice reesizing library underline team ipsum figjam.
                </Text>
                <Box
                    sx={{
                        '.chakra-form__label': {
                            fontSize: 'sm',
                            color: 'Primary.Navy',
                        },
                        '.chakra-input': {
                            fontSize: 'sm',
                        },
                    }}
                >
                    <form>
                        <FormControl mb={6}>
                            <FormLabel>Nickname</FormLabel>
                            <Input placeholder='Nickname' />
                        </FormControl>
                        <Checkbox>
                            Send a physical card
                        </Checkbox>
                        <Box p={6} my={8} borderRadius={8} border={"1px solid"} borderColor={"Neutral.200"}>
                            <Flex justifyContent={"space-between"}>
                                <Heading fontSize={"md"} color={"Primary.Navy"}>Shipping Address</Heading>
                                <ButtonTheme btnText='Edit' chakraProps={{
                                    fontSize: "xs",
                                    h: 8
                                }} />
                            </Flex>
                            <Text w={"170px"} color={"Primary.Navy"} fontSize={"sm"}>525 Brannon Street Unit 24
                                Los Angeles, CA 90026</Text>
                        </Box>
                        <Flex justifyContent={'center'} mt={8} gap={6}>
                            <ButtonTheme
                                type="submit"
                                btnText="Back"
                                chakraProps={{
                                    onClick: () => previousStep(),
                                    w: '50%',
                                }}
                            />
                            <ButtonTheme
                                type="submit"
                                btnText="Continue"
                                chakraProps={{
                                    onClick: () => nextStep(),
                                    w: '50%',
                                }}
                                primary
                            />
                        </Flex>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default CustomizeCard