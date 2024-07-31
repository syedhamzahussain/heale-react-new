import { Box, Checkbox, Flex, Heading, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme';
import { HealeLogoWhite, WifiIcon } from 'modules/shared/Icons';
import React, { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { getAccountTypeFromLocalStorage, removeTokenFromLocalStorage } from 'services/localStorage.sevice';
import { usePersistedStep } from './WizardHeader';
import { sendOnboardedEmail } from 'services/user.service';

const RecieveCard = () => {
    const [step, setStep, clearStep] = usePersistedStep(0);
    const { nextStep, previousStep } = useWizard();
    const [showShippingAddress, setShowShippingAddress] = useState(false);

    const handleCheckboxChange = () => {
        setShowShippingAddress(!showShippingAddress);
    };


    return (
        <Box w={{ lg: '50%', md: "60%", base: "100%" }}>
            <Box textAlign={"center"}>
                <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Personal HEALE Virtual Card</Heading>
                <Text mb={8} color={"Neutral.800"}>User receives personal bank account and decides if they want to select to receive a physical copy of the card</Text>
            </Box>
            <Flex mb={8} flexDir={"column"} justifyContent={"space-between"} h={80}
                bgColor={"Primary.Blue"}
                bgImage={"/noise.png"}
                bgSize={"cover"}
                borderRadius={"24px"} p={8} pt={2}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <HealeLogoWhite ms={-5} w={52} h={20} />
                    </Box>
                    <WifiIcon w={10} h={10} />
                </Flex>
                <Flex mt={-5} justifyContent={"space-between"} color={"white"} alignItems={"center"}>
                    <Heading fontSize={"3xl"}>•••• •••• ••••  3090</Heading>
                    <Text fontSize={"3xl"}>CCV 341</Text>
                </Flex>
                <Flex justifyContent={"space-between"} alignItems={"center"} fontSize={"xl"} color={"white"}>
                    <Flex gap={4}>
                        <Text >Jeff Bridges</Text>
                        <Text >09/25</Text>
                    </Flex>
                    <Text>Personal</Text>
                </Flex>
            </Flex>
            <Checkbox color={"Primary.Navy"} size={"sm"} onChange={handleCheckboxChange}>Option to order a physical copy of your personal & business cards</Checkbox>
            {showShippingAddress && (
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
            )}
            <Flex gap={4} mt={!showShippingAddress ? 8 : 0}>
                <ButtonTheme btnText='Back' chakraProps={{
                    w: "100%",
                    onClick: () => previousStep(),
                }} />
                <ButtonTheme btnText='Get started' primary chakraProps={{
                    w: "100%",
                    onClick: async () => {
                        let type = getAccountTypeFromLocalStorage();
                        if (type === 'Personal') {
                            clearStep();
                            await sendOnboardedEmail();
                            window.location.href = '/extension'
                        } else {
                            nextStep()
                        }
                    }
                    // onClick: () => nextStep(),
                }} />
            </Flex>
        </ Box>
    )
}

export default RecieveCard