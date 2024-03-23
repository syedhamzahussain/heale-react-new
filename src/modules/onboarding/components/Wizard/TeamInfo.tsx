import { Box, Checkbox, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Link, Select, Stack, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { useWizard } from 'react-use-wizard'

const TeamInfo = () => {
    const { previousStep } = useWizard();
    return (
        <Box w={"50%"} >
            <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Create new user</Heading>
            <Text mb={8} color={"Neutral.800"}>Create a new user for your team, and select their required permissions.</Text>
            <Box sx={{
                ".chakra-form__label": {
                    fontSize: "sm",
                    color: "Primary.Navy"
                },
                ".chakra-input": {
                    fontSize: "sm",
                }
            }} pos={"relative"} py={10} px={6} border={"1px solid"} borderColor={"Neutral.200"} borderRadius={8} borderTop={"4px solid"} borderTopColor={"Primary.Blue"}>
                <Box p={"3px 16px 3px 16px"} pos={"absolute"} fontSize={"xs"} top={0} color={"white"} bgColor={"Primary.Blue"} borderRadius={"0px 0px 4px 4px"}>User 1</Box>
                <FormControl mb={6}>
                    <FormLabel>Role</FormLabel>
                    <Select placeholder='Select Role'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>
                <Grid gridTemplateColumns={"repeat(2,1fr)"} mb={6} gap={6}>
                    <FormControl>
                        <FormLabel>First Name <Text as={"span"} color={"Secondary.Red"}>*</Text></FormLabel>
                        <Input type='text' placeholder='Your first name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name <Text as={"span"} color={"Secondary.Red"}>*</Text></FormLabel>
                        <Input type='text' placeholder='Your last name' />
                    </FormControl>
                </Grid>
                <FormControl mb={6}>
                    <FormLabel>Email <Text as={"span"} color={"Secondary.Red"}>*</Text></FormLabel>
                    <Input type='email' placeholder='Email address' />
                </FormControl>
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
                <FormControl mb={6}>
                    <FormLabel>Employee ID</FormLabel>
                    <Input type='text' placeholder='Enter your employee ID' />
                </FormControl>
                <FormControl>
                    <FormLabel>Permissions</FormLabel>
                    <Stack sx={{
                        ".chakra-checkbox__control": {
                            pos: "relative",
                            top: "6px"
                        }
                    }}>
                        <Checkbox alignItems={'start'} size={"md"} >
                            Access business wallet
                            <Text color={"Neutral.700"}>Placeholder</Text>
                        </Checkbox>
                        <Checkbox alignItems={'start'} size={"md"} >
                            Permission name
                            <Text color={"Neutral.700"}>Placeholder</Text>
                        </Checkbox>
                    </Stack>
                </FormControl>
            </Box>
            <ButtonTheme invert btnText='Create a another user' chakraProps={{
                w: "100%",
                my: 8
            }} />
            <Checkbox color={"Primary.Navy"} size={"sm"}>I agree to the <Link color='Primary.Blue'> User Agreement</Link>, and I have read the <Link color='Primary.Blue'>Privacy Policy</Link>.</Checkbox>
            <Flex gap={4} mt={8}>
                <ButtonTheme btnText='Back' chakraProps={{
                    w: "100%",
                    onClick: () => previousStep(),
                }} />
                <ButtonTheme btnText='Submit' primary chakraProps={{
                    w: "100%"
                }} />
            </Flex>
        </Box>
    )
}

export default TeamInfo