import { Box, Checkbox, FormControl, FormLabel, Grid, Heading, Icon, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react'
import useToggle from 'hooks/useToggle';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { EyeCloseIcon, EyeIcon } from 'modules/shared/Icons';
import React from 'react'
import { useWizard } from 'react-use-wizard';

const PersonalInfo = () => {
    const [statePass, togglePass] = useToggle(false);
    const [stateCPass, toggleCPass] = useToggle(false);
    const { nextStep } = useWizard();
    return (
        <Box w={"50%"}>
            <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Create an account</Heading>
            <Text mb={8} color={"Neutral.800"}>Let's get started creating your personal account. You'll join your team later as we go.</Text>
            <Box sx={{
                ".chakra-form__label": {
                    fontSize: "sm",
                    color: "Primary.Navy"
                },
                ".chakra-input": {
                    fontSize: "sm",
                }
            }}>
                <Grid mb={6} gridTemplateColumns={"repeat(2,1fr)"} gap={6} >
                    <FormControl>
                        <FormLabel >First name</FormLabel>
                        <Input type='text' placeholder='Your first name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last name</FormLabel>
                        <Input type='text' placeholder='Your Last name' />
                    </FormControl>
                </Grid>
                <Grid mb={6} gridTemplateColumns={"repeat(1,1fr)"} gap={6} >
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='Email address' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>@ Handle</FormLabel>
                        <Input type='text' placeholder='Enter a unique name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input
                                type={statePass ? "text" : "password"}
                                placeholder='Minimum 8 characters'
                            />
                            <InputRightElement>
                                <Icon cursor={"pointer"} as={!statePass ? EyeIcon : EyeCloseIcon}
                                    onClick={togglePass}
                                />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup>
                            <Input
                                type={stateCPass ? "text" : "password"}
                                placeholder='Enter password again'
                            />
                            <InputRightElement >
                                <Icon cursor={"pointer"} as={!stateCPass ? EyeIcon : EyeCloseIcon}
                                    onClick={toggleCPass}
                                />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Checkbox color={"Primary.Navy"} size={"sm"}>I agree to the <Link color='Primary.Blue'> Terms & Conditions</Link>, and I have read the <Link color='Primary.Blue'> Privacy Policy</Link>.</Checkbox>
                    <ButtonTheme btnText='Create personal account' chakraProps={{
                        onClick: () => nextStep()
                    }} primary />
                    <Text textAlign={"center"} fontSize={"sm"}><Link color='Primary.Blue'>Sign up</Link> for a business account</Text>
                </Grid>
            </Box>
        </Box>
    )
}

export default PersonalInfo