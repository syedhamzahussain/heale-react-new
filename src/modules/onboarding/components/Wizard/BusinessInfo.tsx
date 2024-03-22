import { Box, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select, Text, Flex, Link } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { LockIcon, UploadIcon } from 'modules/shared/Icons'
import PhoneInput from 'react-phone-input-2'
import { useWizard } from 'react-use-wizard'

const BusinessInfo = () => {
    const { nextStep, previousStep } = useWizard();
    return (
        <Box w={"50%"}>
            <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Create an account</Heading>
            <Text mb={8} color={"Neutral.800"}>Now let's make your business account. This will be an organization-level account where you can add individual team members.</Text>
            <Box sx={{
                ".chakra-form__label": {
                    fontSize: "sm",
                    color: "Primary.Navy"
                },
                ".chakra-input": {
                    fontSize: "sm",
                }
            }}>
                <Grid mb={6} gridTemplateColumns={"repeat(1,1fr)"} gap={6} >
                    <FormControl>
                        <FormLabel>Employer Identification Number</FormLabel>
                        <Input type='text' placeholder='_ _  _ _ _ _ _ _ _' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Legal Name</FormLabel>
                        <Input type='text' placeholder='Enter your business’s legal name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Entity Type</FormLabel>
                        <Select placeholder='Select your business’s entity type'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Type</FormLabel>
                        <Select placeholder='Select your account type'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='Email address' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>@ Handle</FormLabel>
                        <Input type='text' placeholder='Enter a unique name' />
                    </FormControl>
                </Grid>
                <Grid mb={6} gridTemplateColumns={"repeat(7,1fr)"} gap={6} >
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Phone Type</FormLabel>
                            <Select placeholder='Select'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <FormControl>
                            <FormLabel>Phone Number</FormLabel>
                            <Box sx={{ '.react-tel-input .form-control': { height: '2.75rem !important', width: '100%', paddingLeft: '38px', borderColor: '#E3E3FA', borderRadius: '5px' }, '.react-tel-input .flag-dropdown': { borderRight: '0', borderTopLeftRadius: '5px', borderColor: '#E3E3FA', borderBottomLeftRadius: '5px' }, '.react-tel-input .selected-flag': { backgroundColor: "#fff", borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }, '.react-tel-input .flag-dropdown .selected-flag .flag .arrow': { display: 'none' } }}>
                                <PhoneInput
                                    country={'us'}
                                />
                            </Box>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Extension</FormLabel>
                            <Input type='text' placeholder='+1' />
                        </FormControl>
                    </GridItem>
                </Grid>
                <Grid mb={6} gridTemplateColumns={"repeat(2,1fr)"} gap={6} >
                    <FormControl>
                        <FormLabel>Incorporation State</FormLabel>
                        <Select placeholder='Select'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Incorporation Year</FormLabel>
                        <Select placeholder='Select'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6} >
                    <GridItem colSpan={3}>
                        <FormControl>
                            <FormLabel>Business address</FormLabel>
                            <Input mb={5} type='text' placeholder='Address line 1' />
                            <Input type='text' placeholder='Address line 2' />
                        </FormControl>

                    </GridItem>
                    <Input type='text' placeholder='City' />
                    <Select placeholder='State'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Input type='text' placeholder='Zip Code' />
                </Grid>
                <Grid mb={6} gridTemplateColumns={"repeat(1,1fr)"} gap={6} >
                    <FormControl>
                        <FormLabel>Website</FormLabel>
                        <Input type='text' placeholder='Enter name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>DUNS Number</FormLabel>
                        <Input type='text' placeholder='Enter name' />
                    </FormControl>
                    <Flex gap={3} bgColor={"Neutral.100"} direction="column" width="100%" height="120px" border="2px dashed rgba(52, 70, 238, 1)" borderRadius={20} alignItems="center" justifyContent="center">
                        <UploadIcon w={6} h={6} />
                        <Text>Drag and drop your W9 files here, or click to browse</Text>
                    </Flex>
                </Grid>
                <Flex gap={4}>
                    <ButtonTheme btnText='Back' invert chakraProps={{
                        w: "100%",
                        onClick: () => previousStep(),
                    }} />
                    <ButtonTheme btnText='Continue' chakraProps={{
                        w: "100%",
                        onClick: () => nextStep(),
                    }} primary />
                </Flex>
                <Flex fontSize={"xs"} mt={8} gap={4} alignItems={"center"}>
                    <LockIcon w={4} h={4} />
                    <Text color={"Neutral.700"}>This information will be used and shared with verification services, company credit reporting services, and financial partners for application processing, tailoring services, legal compliance, fraud prevention, and security. <Link color={"Primary.Blue"}>HEALE Privacy Policy.</Link></Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default BusinessInfo