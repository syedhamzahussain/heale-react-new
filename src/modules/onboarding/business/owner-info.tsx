import { Avatar, Badge, Box, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Radio, RadioGroup, Select, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme';
import { AddIcon, ProfileIcon, ThreeDotsIcon } from 'modules/shared/Icons'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';

const OwnerInfo = () => {
    const [selectedValue, setSelectedValue] = useState('Personal');
    return (
        <Container maxW={{ lg: "80%", sm: "90%", base: "100%" }}>
            <Box w={{ lg: '50%', md: "60%", base: "100%" }} m={"0 auto"} textAlign={"center"}>
                <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
                    Owner information
                </Heading>
                <Text mb={8} color={'Neutral.800'}>
                    Enter required documentation for your Freight Broker application
                </Text>
                <Box mb={6} textAlign={"left"} p={6} border={"1px solid"} borderColor={"Neutral.200"} borderRadius={24}>
                    <Flex gap={2} alignItems={"center"} mb={6}>
                        <ProfileIcon w={5} h={5} />
                        <Heading color={"Primary.Navy"} fontSize={"xl"}>Owner details</Heading>
                    </Flex>
                    <form>
                        <RadioGroup mb={6} defaultValue='1' onChange={(value) => setSelectedValue(value)}>
                            <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={6}>
                                <Box p={4} border={"1px solid"} borderColor={"Neutral.200"} borderRadius={8} bg={selectedValue === 'Personal' ? 'Neutral.100' : ''}>
                                    <Radio colorScheme='blue' value='Personal'>
                                        Personal
                                    </Radio>
                                </Box>
                                <Box p={4} border={"1px solid"} borderColor={"Neutral.200"} borderRadius={8} bg={selectedValue === 'Business' ? 'Neutral.100' : ''}>
                                    <Radio colorScheme='blue' value='Business'>
                                        Business
                                    </Radio>
                                </Box>
                            </Grid>
                        </RadioGroup>
                        <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={6} mb={6}>
                            <FormControl>
                                <FormLabel>Legal First Name</FormLabel>
                                <Input
                                    type="text"
                                    errorBorderColor="Secondary.Red"
                                    placeholder="Legal First Name"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Legal Last Name</FormLabel>
                                <Input
                                    type="text"
                                    errorBorderColor="Secondary.Red"
                                    placeholder="Legal Last Name"
                                />
                            </FormControl>
                        </Grid>
                        <FormControl mb={6}>
                            <FormLabel htmlFor="dob">Date of birth</FormLabel>
                            <Grid gridTemplateColumns={'repeat(3,1fr)'} gap={6}>
                                <Box>
                                    <Select
                                        placeholder="Month"
                                        errorBorderColor="Secondary.Red"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map(
                                            (month) => (
                                                <option key={month} value={month}>
                                                    {month}
                                                </option>
                                            )
                                        )}
                                    </Select>
                                </Box>
                                <Box>
                                    <Select
                                        placeholder="Day"
                                        errorBorderColor="Secondary.Red"
                                    >
                                        {Array.from({ length: 31 }, (_, i) => i + 1).map(
                                            (day) => (
                                                <option key={day} value={day}>
                                                    {day}
                                                </option>
                                            )
                                        )}
                                    </Select>
                                </Box>
                                <Box>
                                    <Select
                                        placeholder="Year"
                                        errorBorderColor="Secondary.Red"
                                    >
                                        {Array.from({ length: 100 }, (_, i) => 2020 - i).map(
                                            (year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            )
                                        )}
                                    </Select>
                                </Box>
                            </Grid>
                        </FormControl>
                        <FormControl mb={6}>
                            <FormLabel htmlFor="dob">Nationality</FormLabel>
                            <Select
                                placeholder="Nationality"
                                errorBorderColor="Secondary.Red"
                            >
                                <option>
                                    4
                                </option>

                            </Select>
                        </FormControl>
                        <FormControl mb={6}>
                            <FormLabel htmlFor="dob">Ownership Share</FormLabel>
                            <Input
                                type="text"
                                errorBorderColor="Secondary.Red"
                                placeholder="Enter a number between 0-100%"
                            />
                        </FormControl>
                        <Heading mb={6} color={"Primary.Navy"} fontSize={"xl"}>{selectedValue === 'Personal' ? "Personal" : "Business"} Contact Details</Heading>
                        <FormControl mb={6}>
                            <FormLabel htmlFor="dob">Address</FormLabel>
                            <Input
                                type="text"
                                errorBorderColor="Secondary.Red"
                                placeholder="Address line 1"
                                mb={5}
                            />
                            <Input
                                type="text"
                                errorBorderColor="Secondary.Red"
                                placeholder="Address line 2"
                                mb={5}
                            />
                            <Select
                                placeholder="Country"
                                errorBorderColor="Secondary.Red"
                                mb={5}
                            >
                                <option>
                                    4
                                </option>

                            </Select>
                            <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={6} mb={6}>
                                <Input
                                    type="text"
                                    errorBorderColor="Secondary.Red"
                                    placeholder="City"
                                />
                                <Select
                                    placeholder="State"
                                    errorBorderColor="Secondary.Red"
                                    mb={5}
                                >
                                    <option>
                                        4
                                    </option>

                                </Select>
                                <Input
                                    type="text"
                                    errorBorderColor="Secondary.Red"
                                    placeholder="Zip code"
                                />
                            </Grid>
                        </FormControl>
                        <Grid mb={6} gridTemplateColumns={'repeat(7,1fr)'} gap={6}>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel>Phone Type</FormLabel>
                                    <Select
                                        name="phoneType"
                                        placeholder="Select"
                                    >
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <FormLabel>
                                        Phone Number{' '}
                                        <Text as={'span'} color={'Secondary.Red'}>
                                            *
                                        </Text>
                                    </FormLabel>
                                    <Box
                                        sx={{
                                            '.react-tel-input .form-control': {
                                                height: '2.75rem !important',
                                                width: '100%',
                                                paddingLeft: '38px',
                                                borderColor: '#E3E3FA',
                                                borderRadius: '5px',
                                            },
                                            '.react-tel-input .flag-dropdown': {
                                                borderRight: '0',
                                                borderTopLeftRadius: '5px',
                                                borderColor: '#E3E3FA',
                                                borderBottomLeftRadius: '5px',
                                            },
                                            '.react-tel-input .selected-flag': {
                                                backgroundColor: '#fff',
                                                borderTopLeftRadius: '5px',
                                                borderBottomLeftRadius: '5px',
                                            },
                                            '.react-tel-input .flag-dropdown .selected-flag .flag .arrow':
                                                { display: 'none' },
                                        }}
                                    >
                                        <PhoneInput
                                            country={'us'}
                                        />
                                    </Box>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel>Extension</FormLabel>
                                    <Input
                                        type="text"
                                        name="extension"
                                        placeholder="+1"
                                    />
                                </FormControl>
                            </GridItem>
                        </Grid>
                        <FormControl mb={6}>
                            <FormLabel htmlFor="dob">Email</FormLabel>
                            <Input
                                type="text"
                                errorBorderColor="Secondary.Red"
                                placeholder="Email address"
                            />
                        </FormControl>
                        <FormControl mb={6}>
                            <FormLabel htmlFor="dob">Social Security number</FormLabel>
                            <Input
                                type="text"
                                errorBorderColor="Secondary.Red"
                                placeholder="4 digits"
                            />
                        </FormControl>
                        <Flex justifyContent={"center"}>
                            <ButtonTheme btnText='Save' chakraProps={{
                                isDisabled: true,
                                w: "50%",
                            }} />

                        </Flex>
                    </form>
                </Box>
                <Box mb={6} textAlign={"left"} p={6} border={"1px solid"} borderColor={"Neutral.200"} borderRadius={24}>
                    <Flex justifyContent={"space-between"} mb={6}>
                        <Flex gap={2} alignItems={"center"}>
                            <Avatar name='Jeff Bridges' src='https://bit.ly/broken-link' />
                            <Box>
                                <Flex gap={2} alignItems={"center"}>
                                    <Heading color={"Primary.Navy"} fontSize={"md"}>Jeff Bridges</Heading>
                                    <Badge px={2} py={1} borderRadius={"full"} fontSize={"xs"} bgColor={"rgba(3, 204, 176, 0.1)"} color={"Secondary.Turquoise"}>Completed</Badge>
                                </Flex>
                                <Text color={"Neutral.700"}>jbridges@gmail.com</Text>
                            </Box>
                        </Flex>
                        <ThreeDotsIcon />
                    </Flex>
                    <Flex fontSize={"sm"} mb={4}>
                        <Text w={"50%"} color={"Neutral.700"}>Ownership percentage</Text>
                        <Text w={"50%"} color={"Primary.Navy"}>25</Text>
                    </Flex>
                    <Flex fontSize={"sm"} mb={4}>
                        <Text w={"50%"} color={"Neutral.700"}>Date of Birth</Text>
                        <Text w={"50%"} color={"Primary.Navy"}>Feb 29, 1992</Text>
                    </Flex>
                    <Flex fontSize={"sm"} mb={4}>
                        <Text w={"50%"} color={"Neutral.700"}>Nationality</Text>
                        <Text w={"50%"} color={"Primary.Navy"}>US Citizen</Text>
                    </Flex>
                    <Flex fontSize={"sm"} mb={4}>
                        <Text w={"50%"} color={"Neutral.700"}>Address</Text>
                        <Text w={"50%"} color={"Primary.Navy"}>660 Mission St, Floor 4
                            San Francisco, CA 94105
                            United States</Text>
                    </Flex>
                    <Flex fontSize={"sm"} mb={4}>
                        <Text w={"50%"} color={"Neutral.700"}>Phone number</Text>
                        <Text w={"50%"} color={"Primary.Navy"}>+1 (213) 345-0995</Text>
                    </Flex>
                    <Flex fontSize={"sm"} mb={4}>
                        <Text w={"50%"} color={"Neutral.700"}>SSN</Text>
                        <Text w={"50%"} color={"Primary.Navy"}>492-948-2884</Text>
                    </Flex>
                </Box>
                <Box mb={6} textAlign={"left"} p={6} border={"1px solid"} borderColor={"Neutral.200"} borderRadius={24}>
                    <Flex gap={2} alignItems={"center"}>
                        <AddIcon w={8} h={8} />
                        <Heading fontSize={"md"} color={"Primary.Navy"}>Add owner</Heading>
                    </Flex>
                </Box>
                <Box px={6} >
                    <Flex justifyContent={"center"} gap={6} alignItems={"center"} flexDir={"column"}>
                        <ButtonTheme btnText='Continue' chakraProps={{
                            isDisabled: true,
                            w: "50%",
                        }} />
                        <Link to={"#"}><Text color={"Primary.Blue"}>Back</Text></Link>
                    </Flex>
                </Box>
            </Box>
        </Container>
    )
}

export default OwnerInfo