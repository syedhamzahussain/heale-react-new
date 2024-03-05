import { Box, Center, Checkbox, Flex, FormControl, FormLabel, Grid, Heading, Icon, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react'
import ButtonTheme from 'components/ButtonTheme';
import { EyeCloseIcon, EyeIcon, FlyEnvelopeIcon, CheckIcon, alertIcon, trustIcon } from 'components/Icons';
import useToggle from 'hooks/useToggle';
import React from 'react'
import { useWizard } from 'react-use-wizard';

const Authentication = () => {
    const [statePass, togglePass] = useToggle(false);
    const [stateCPass, toggleCPass] = useToggle(false);
    const { nextStep } = useWizard();
    return (
       <Box w={'50%'} display={'flex'} flexDirection='column' justifyContent={'Center'}>
            <Box w={"100%"}  p={3}  textAlign={"center"}>
                <Icon  as={FlyEnvelopeIcon} w={8} h={8}/>
                <Heading as={"h4"} mt={4} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Verify Your Email</Heading>
                <Text mb={8} color={"Neutral.800"}>We just Sent you an email to jeffbridges@gmail.com.check it and click the link to verify your address</Text>
                <ButtonTheme btnText='Resend Email' chakraProps={{
                            onClick: () => nextStep(),
                            width: "full"
                }} primary />
            </Box>
            <Box w={"100%"}  p={3}  textAlign={"center"}>
                <Icon  as={CheckIcon} w={8} h={8}/>
                <Heading as={"h4"} mt={4} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Your Email is Verified</Heading>
                <Text mb={8} color={"Neutral.800"}>You can close this windows and continue setting up your account</Text>
                {/* <ButtonTheme btnText='Resend Email' chakraProps={{
                            onClick: () => nextStep(),
                            width: "full"
                }} primary /> */}
            </Box>
            <Box w={"100%"}  p={3}  textAlign={"center"}>
                <Icon  as={alertIcon} w={8} h={8}/>
                <Heading as={"h4"} mt={4} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Verify Link is  Expired</Heading>
                <Text mb={8} color={"Neutral.800"}>The verification Link has Expired. Please Click <Link href="mailto:">"Resend Email"</Link>. and click the link in your email within 10 mins</Text>
                <ButtonTheme btnText='Resend Email' chakraProps={{
                            onClick: () => nextStep(),
                            width: "full"
                }} primary />
            </Box>
            <Box w={"100%"}  p={3}  textAlign={"center"}>
                <Icon  as={trustIcon} w={8} h={8}/>
                <Heading as={"h4"} mt={4} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Trust This Device?</Heading>
                <Text mb={8} color={"Neutral.800"}>We don't recognize this device. Should we trust it for your next login? If this is a public computer, we recommend clicking "Don't Trust" <Link href="mailto:">"Resend Email"</Link>. and click the link in your email within 10 mins</Text>
                <ButtonTheme btnText='Trust' chakraProps={{
                            onClick: () => nextStep(),
                            width: "full",
                            
                }} primary />
                <Link color='Primary.Blue' my={3} display={'inline-block'}>Don't Trust</Link>
            </Box>
       </Box>
    )
}

export default Authentication