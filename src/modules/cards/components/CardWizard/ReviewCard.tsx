import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'
import { useWizard } from 'react-use-wizard';
import HealeCard from '../HealeCard';

const ReviewCard = ({ onClick }: { onClick: () => void }) => {
    const { previousStep } = useWizard();
    return (
        <Box maxH={"500px"} overflow={"auto"} flexGrow={1}>
            <Box w={"70%"} px={1}>
                <Heading as={'h4'} fontSize={'3xl'} color={'Primary.Navy'}>
                    Review
                </Heading>
                <Heading as={'h4'} my={8} fontSize={'3xl'} color={'Primary.Navy'}>
                    5268 7600 0000 1234
                </Heading>
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
                    <HealeCard />
                    <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={4}>
                        <Box>
                            <Text color={"Neutral.700"}>User</Text>
                            <Heading color={"Primary.Navy"} fontSize={"md"}>Jane Cooper</Heading>
                        </Box>
                        <Box>
                            <Text color={"Neutral.700"}>Card Type</Text>
                            <Heading color={"Primary.Navy"} fontSize={"md"}>Physical</Heading>
                        </Box>
                        <Box>
                            <Text color={"Neutral.700"}>Expiration</Text>
                            <Heading color={"Primary.Navy"} fontSize={"md"}>Jan 10, 2026</Heading>
                        </Box>
                        <Box>
                            <Text color={"Neutral.700"}>Type</Text>
                            <Heading color={"Primary.Navy"} fontSize={"md"}>Virtual</Heading>
                        </Box>
                        <Box>
                            <Text color={"Neutral.700"}>Card Limit</Text>
                            <Heading color={"Primary.Navy"} fontSize={"md"}>Monthly</Heading>
                        </Box>
                        <Box>
                            <Text color={"Neutral.700"}>Limit Amount</Text>
                            <Heading color={"Primary.Navy"} fontSize={"md"}>$1,000.00</Heading>
                        </Box>
                        <Box>
                            <Text color={"Neutral.700"}>Nickname</Text>
                            <Heading color={"Primary.Navy"} fontSize={"md"}>Office Card 2</Heading>
                        </Box>
                    </Grid>
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
                            btnText="Confirm"
                            chakraProps={{
                                onClick: () => onClick(),
                                w: '50%',
                            }}
                            primary
                        />
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewCard