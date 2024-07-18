import { Avatar, Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { ThreeDotsIcon } from 'modules/shared/Icons'
import React from 'react'

const ReviewInfo = () => {
    return (
        <Container maxW={{ lg: '100%', sm: '90%', base: '100%' }}>
            <Box
                w={{ lg: '50%', md: '60%', base: '100%' }}
                m={'0 auto'}

            >
                <Heading textAlign={'center'} as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
                    Review your info
                </Heading>
                <Text textAlign={'center'} mb={8} color={'Neutral.800'}>
                    Give your information another look before submitting.
                </Text>
                <Heading as={'h4'} mb={6} fontSize={'xl'} color={'Primary.Navy'}>About Company</Heading>
                <Box
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                >
                    <Flex justifyContent={"space-between"} alignItems={'center'} mb={6}>
                        <Heading color={'Primary.Navy'} fontSize={'xl'}>
                            Knight-Swift Co.
                        </Heading>
                        <ThreeDotsIcon w={5} h={5} />
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Legal Name
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            Knight-Swift Co.
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            DBA Name
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            Knight-Swift
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Entity Type
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            Corporation
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Type
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            Carrier
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Email Address
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            operations@knightswift.com
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Handle
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            knight-swift
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Phone Number
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            +1 (213) 345-0995
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Incorporation State
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            California
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Incorporation Year
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            2014
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Business Address
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            660 Mission St, Building 12
                            San Francisco, CA 94105
                            United States
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Website
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            knightswift.com
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            DUNS Number
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            15-048-3782
                        </Text>
                    </Flex>
                </Box>
                <Heading as={'h4'} mb={6} fontSize={'xl'} color={'Primary.Navy'}>Broker Information</Heading>
                <Box
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                >
                    <Flex justifyContent={"space-between"} alignItems={'center'} mb={6}>
                        <Heading color={'Primary.Navy'} fontSize={'xl'}>
                            Broker
                        </Heading>
                        <ThreeDotsIcon w={5} h={5} />
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            USDOT Number
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            USDOT1523020
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Docket Number
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            MC 309886
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Services
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            Service
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Insurance
                        </Text>
                        <Box w={'50%'} color={'Primary.Navy'}>
                            <Text>
                                CargoCover
                            </Text>
                            <Text>
                                CNA Hardy
                            </Text>
                        </Box>
                    </Flex>
                    <Flex fontSize={'sm'}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Surety Bonds
                        </Text>
                        <Box w={'50%'} color={'Primary.Navy'}>
                            <Text>
                                CargoCover
                            </Text>
                            <Text>
                                CNA Hardy
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Heading as={'h4'} mb={6} fontSize={'xl'} color={'Primary.Navy'}>Carrier Information</Heading>
                <Box
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                >
                    <Flex justifyContent={"space-between"} alignItems={'center'} mb={6}>
                        <Heading color={'Primary.Navy'} fontSize={'xl'}>
                            Carrier
                        </Heading>
                        <ThreeDotsIcon w={5} h={5} />
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            USDOT Number
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            USDOT1523020
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Docket Number
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            MC 309886
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Services
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            Service
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Insurance
                        </Text>
                        <Box w={'50%'} color={'Primary.Navy'}>
                            <Text>
                                CargoCover
                            </Text>
                            <Text>
                                CNA Hardy
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Heading as={'h4'} mb={6} fontSize={'xl'} color={'Primary.Navy'}>Lender Information</Heading>
                <Box
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                >
                    <Flex justifyContent={"space-between"} alignItems={'center'} mb={6}>
                        <Heading color={'Primary.Navy'} fontSize={'xl'}>
                            Lender
                        </Heading>
                        <ThreeDotsIcon w={5} h={5} />
                    </Flex>
                    <Flex fontSize={'sm'}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            NMLS NUMBER
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            ID# 747144
                        </Text>
                    </Flex>
                </Box>
                <Heading as={'h4'} mb={6} fontSize={'xl'} color={'Primary.Navy'}>Owner Information</Heading>
                <Box
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                >
                    <Flex justifyContent={'space-between'} alignItems={"center"} mb={6}>
                        <Flex gap={2} alignItems={'center'}>
                            <Avatar
                                name={"owner.legal_first_name"}
                                src="https://bit.ly/broken-link"
                            />
                            <Box>
                                <Heading color={'Primary.Navy'} fontSize={'md'}>
                                    Nu Logistics
                                </Heading>
                                <Text color={'Neutral.700'}>info@nulogistics.com</Text>
                            </Box>
                        </Flex>
                        <ThreeDotsIcon w={5} h={5} />
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Ownership percentage
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            15
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Address
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            660 Mission St, Building 12
                            San Francisco, CA 94105
                            United States
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Business Contact number
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            +1 (213) 345-0995
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Country of Incorporation
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            United States
                        </Text>
                    </Flex>
                </Box>
                <Box
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                >
                    <Flex justifyContent={'space-between'} alignItems={"center"} mb={6}>
                        <Flex gap={2} alignItems={'center'}>
                            <Avatar
                                name={"Jeff Bridges"}
                                src="https://bit.ly/broken-link"
                            />
                            <Box>
                                <Heading color={'Primary.Navy'} fontSize={'md'}>
                                    Jeff Bridges
                                </Heading>
                                <Text color={'Neutral.700'}>jbridges@gmail.com</Text>
                            </Box>
                        </Flex>
                        <ThreeDotsIcon w={5} h={5} />
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Ownership percentage
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            25
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Date of Birth
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            Feb 29, 1992
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Nationality
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            US Citizen
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Address
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            660 Mission St, Floor 4
                            San Francisco, CA 94105
                            United States
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            Phone number
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            +1 (213) 345-0995
                        </Text>
                    </Flex>
                    <Flex fontSize={'sm'}>
                        <Text w={'50%'} color={'Neutral.700'}>
                            SSN
                        </Text>
                        <Text w={'50%'} color={'Primary.Navy'}>
                            492-948-2884
                        </Text>
                    </Flex>
                </Box>
                <Heading as={'h4'} mb={6} fontSize={'xl'} color={'Primary.Navy'}>Legal Agreements</Heading>
                <Box
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                >
                    <Text color={'Neutral.700'} mb={6}>
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </Text>
                    <Box textAlign={"center"}>
                        <ButtonTheme btnText='Agree and Submit Application' primary />
                    </Box>
                </Box>
                <Box textAlign={"center"}>
                    <Link color={"Primary.Blue"}>Back</Link>
                </Box>
            </Box>
        </Container>
    )
}

export default ReviewInfo