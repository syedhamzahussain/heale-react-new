import { Box, FormControl, FormLabel, Heading, Input, Link, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { CheckIcon, FlyEnvelopeIcon, alertIcon, trustIcon } from 'modules/shared/Icons';
import React from "react";
import MessageBox from '../MessageBox';
import CountryInput from '../CountryInput';

const Authentication = () => {
    return (
        <Box w={'50%'} display={'flex'} flexDirection='column' justifyContent={'Center'}>
            <MessageBox btnText='Resend Email' desc='We just Sent you an email to jeffbridges@gmail.com.check it and click the link to verify your address' icon={FlyEnvelopeIcon} title='Verify Your Email' />
            <MessageBox desc='You can close this windows and continue setting up your account' icon={CheckIcon} title='Your Email is Verified' />
            <MessageBox btnText='Resend Email' desc='The verification Link has Expired. Please Click "Resend Email". and click the link in your email within 10 mins' icon={alertIcon} title='Resend Email' />
            <MessageBox trust btnText='Trust' desc="We don't recognize this device. Should we trust it for your next login? If this is a public computer, we recommend clicking Don't Trust 'Resend Email'. and click the link in your email within 10 mins" icon={trustIcon} title='Trust This Device?' />
            <Box>
                <Heading as={"h4"} mt={4} mb={2} fontSize={"3xl"} color={"Primary.Navy"}>Verify Your Phone Number</Heading>
                <Text fontSize={"sm"} fontWeight={500} color={"Neutral.800"}>We'll Send you a code via sms</Text>
                <FormControl mt={4}>
                    <FormLabel fontSize={"sm"} fontWeight={500} color={"Primary.Navy"}>Phone</FormLabel>
                    <CountryInput />
                </FormControl>
                <ButtonTheme btnText={"Continue"} chakraProps={{
                    width: "full",
                    marginTop: "8",
                    marginBottom: "8",
                    marginLeft: "0",
                    marginRight: "0"
                }} primary />
                <Text fontSize={"xs"} color={"Neutral.800"}>By clicking "Continue", I understand and I authorize HEALE network to send me a one-time use code via SMS (text message). Carrier fees may apply.</Text>
            </Box>
            <Box>
                <Heading as={"h4"} mt={4} mb={2} fontSize={"3xl"} color={"Primary.Navy"}>Enter Verification Code</Heading>
                <Text fontSize={"sm"} fontWeight={500} color={"Neutral.800"}>We just sent you a 6 digit code by text. Please enter it below.</Text>
                <FormControl mt={4}>
                    <FormLabel fontSize={"sm"} fontWeight={500} color={"Primary.Navy"}>Enter code</FormLabel>
                    <Input type='number' mb={5} placeholder='6 digits' />
                </FormControl>
                <ButtonTheme btnText={"Submit"} chakraProps={{
                    width: "full",
                }} primary />
                <ButtonTheme btnText={"Resent Code"} chakraProps={{
                    width: "full",
                    marginTop: '10px',
                    marginBottom: '10px',
                }} primaryOutline />
                <Box textAlign="center" >
                    <Link href="#" color='Primary.Blue' display={'inline-block'} >Use another phone number</Link>
                </Box>
                <Text fontSize={"xs"} my={10} color={"Neutral.800"}>By clicking "Continue", I understand and I authorize HEALE network to send me a one-time use code via SMS (text message). Carrier fees may apply.</Text>
            </Box>
            <Box>
                <Heading as={"h4"} mt={4} mb={2} fontSize={"3xl"} color={"Primary.Navy"}>Enter Verification Code</Heading>
                <Text fontSize={"sm"} fontWeight={500} color={"Neutral.800"}>Content draft team underline variant plugin editor. Arrange slice reesizing library underline team ipsum figjam.</Text>
                <FormControl mt={4} >
                    <FormLabel fontSize={"sm"} fontWeight={500} color={"Primary.Navy"}>Enter code</FormLabel>
                    <Input type='number' mb={5} placeholder='6 digits' />
                </FormControl>
                <ButtonTheme btnText={"Submit"} chakraProps={{
                    width: "full",
                }} primary />
                <ButtonTheme btnText={"Resent Code"} chakraProps={{
                    width: "full",
                    marginTop: '10px',
                    marginBottom: '10px',
                }} primaryOutline />
                <Box textAlign="center" >
                    <Link href="#" color='Primary.Blue' display={'inline-block'} >Use another phone number</Link>
                </Box>
                <Text fontSize={"xs"} my={10} color={"Neutral.800"}>By clicking this I understand I authorize the HEALE Network to text me fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</Text>
            </Box>
        </Box>
    )
}

export default Authentication