import { Box, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Link, List, ListItem, Select, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'
import { useWizard } from 'react-use-wizard';
import MessageBox from '../../modules/onboarding/components/MessageBox';
import { OfficeIcon, PersonalIcon, VerifyBusinessIcon, VerifyInfoIcon } from 'modules/shared/Icons';

const VerifyIdentity = () => {
    const { nextStep, previousStep } = useWizard();
    return (
        <Box >
            <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Verify your identify</Heading>
            <Text mb={8} color={"Neutral.800"}>We have a few questions to verify your identity for compliance purposes. Your information is transmitted and stored securely.</Text>
            <Box sx={{
                ".chakra-form__label": {
                    fontSize: "sm",
                    color: "Primary.Navy"
                },
                ".chakra-input": {
                    fontSize: "sm",
                }
            }}>
                <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6} >
                    <FormControl>
                        <FormLabel>Legal First Name</FormLabel>
                        <Input type='text' placeholder='Legal First Name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Legal Last Name</FormLabel>
                        <Input type='text' placeholder='Your Last Name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>What will you use HEALE for?</FormLabel>
                        <Select placeholder='Select'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6}>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Date of birth</FormLabel>
                            <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={6}>
                                <Select placeholder='Month'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                                <Select placeholder='Day'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                                <Select placeholder='Year'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Grid>
                        </FormControl>
                    </GridItem>
                    <FormControl>
                        <FormLabel>What is your source of funds?</FormLabel>
                        <Select placeholder='Select'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6}>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Street address</FormLabel>
                            <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={5}>
                                <GridItem colSpan={3}>
                                    <Input type='text' placeholder='Address line 1' />
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Input type='text' placeholder='Address line 2' />
                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Input type='text' placeholder='City' />
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Select placeholder='State'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Input type='text' placeholder='Zip code' />
                                </GridItem>
                            </Grid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl mb={6}>
                            <FormLabel>Employment status</FormLabel>
                            <Select placeholder='Select'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                        <FormControl mb={6}>
                            <FormLabel>Social Security number</FormLabel>
                            <Input type='text' placeholder='4 digits' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Citizenship</FormLabel>
                            <Select placeholder='Select'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                </Grid>
                <Flex justifyContent={"center"} mt={8} gap={6}>
                    <ButtonTheme btnText='Back' chakraProps={{
                        onClick: () => previousStep(),
                        w: "35%"
                    }} />
                    <ButtonTheme btnText='Continue' chakraProps={{
                        onClick: () => nextStep(),
                        w: "35%"
                    }} primary />
                </Flex>
            </Box>
            <MessageBox loader desc='Content draft team underline variant plugin editor. Arrange slice reesizing library underline team ipsum figjam.' icon={VerifyInfoIcon} title='Verifying your info' />
            <Box w={"60%"} textAlign={"center"}>
                <VerifyBusinessIcon w={16} h={16} />
                <Heading as={"h4"} mt={8} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Verify your business</Heading>
                <Text mb={8} color={"Neutral.800"}>To meet legal requirements, we need to verify a few details about your business before you continue using HEALE.</Text>
                <Box maxW={"80%"} margin={"0 auto"}>
                    <Heading mb={8} fontSize={"xl"}>What you will need:</Heading>
                    <List textAlign={"left"} spacing={8} mb={8}>
                        <ListItem display={"flex"} alignItems={"center"} gap={4}><OfficeIcon w={6} h={6} /><Text>Business address and incorporation details</Text></ListItem>
                        <ListItem display={"flex"} alignItems={"center"} gap={4}><PersonalIcon w={6} h={6} sx={{
                            path: {
                                stroke: "#3446ee"
                            }
                        }} /><Text>Owner information</Text></ListItem>
                    </List>
                </Box>
                <ButtonTheme btnText={"Continue"} chakraProps={{
                    width: "full"
                }} primary />
                <Link color='Primary.Blue' my={3} display={'inline-block'}>Close</Link>
            </Box>
            <Box w={"60%"}>
                <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Unable to verify your identify</Heading>
                <Text mb={4} color={"Neutral.800"}>We were unable to verify your identity with our compliance partner. Some reasons for this might include:</Text>
                <List ms={4} listStyleType={"disc"} color={"Neutral.800"} textAlign={"left"} spacing={4} mb={4}>
                    <ListItem >A typo in entry</ListItem>
                    <ListItem >An error connecting with our compliance partner</ListItem>
                    <ListItem >Another error</ListItem>
                </List>
                <Text mb={8} color={"Neutral.800"}>If you feel this is a mistake, reach out to <Link color={"Primary.Blue"}> support@healelabs.com</Link></Text>
                <ButtonTheme btnText={"Try again"} chakraProps={{
                    width: "full"
                }} primary />
            </Box>
        </Box>
    )
}

export default VerifyIdentity