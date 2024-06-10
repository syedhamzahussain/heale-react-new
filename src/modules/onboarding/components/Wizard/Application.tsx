import { Box, Flex, Grid, GridItem, Heading, Progress, Text, useDisclosure } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { InfoIcon } from 'modules/shared/Icons'
import React from 'react'
import VerificationBox from '../VerificationBox'
import ApplicationCollabModal from '../ApplicationCollabModal'
import { useWizard } from 'react-use-wizard'
import BrokerModal from 'modules/onboarding/business/broker'
import CarrierModal from 'modules/onboarding/business/carrier'
import LenderModal from 'modules/onboarding/business/lender'

const Application = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { nextStep, previousStep } = useWizard();
    const { isOpen: isBrokerOpen, onOpen: onBrokerOpen, onClose: onBrokerClose } = useDisclosure();
    const { isOpen: isCarrierOpen, onOpen: onCarrierOpen, onClose: onCarrierClose } = useDisclosure();
    const { isOpen: isLenderOpen, onOpen: onLenderOpen, onClose: onLenderClose } = useDisclosure();
    return (
        <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={16}>
            <GridItem colSpan={2}>
                <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Start a new application</Heading>
                <Text mb={8} color={"Neutral.800"}>Choose the type of application for your business below. A business may have multiple types if required.</Text>
                <Flex gap={2} mb={8} alignItems={"center"}>
                    <Progress w={"80%"} size='sm' borderRadius={"full"} sx={{
                        ".css-afaq6z": {
                            bgColor: "Primary.Blue"
                        }
                    }} value={56} />
                    <Text color={"Neutral.700"} fontSize={"sm"}>56% complete</Text>
                </Flex>
                <Flex fontSize={"xs"} my={8} gap={4} alignItems={"center"}>
                    <Flex p={2} borderRadius={"full"} bgColor={"Neutral.100"} justifyContent={"center"} alignItems={"center"}>
                        <InfoIcon w={6} h={6} />
                    </Flex>
                    <Box>
                        <Heading color={"Primary.Navy"} fontSize={"md"} mb={2}>Verification</Heading>
                        <Text color={"Neutral.700"}>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna.</Text>

                    </Box>
                </Flex>
                <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={6}>
                    <VerificationBox onClick={onBrokerOpen} title='Broker' />
                    <VerificationBox onClick={onCarrierOpen} title='Carrier' />
                    <VerificationBox onClick={onLenderOpen} title='Lender' />

                    {/* <VerificationBox link='/business/lender' title='Lender' /> */}
                </Grid>
                <Flex gap={4} mt={8}>
                    <ButtonTheme btnText='Back' chakraProps={{
                        w: "100%",
                        onClick: () => previousStep(),
                    }} />
                    <ButtonTheme btnText='Submit Application' primary chakraProps={{
                        w: "100%",
                        onClick: () => nextStep(),
                    }} />
                </Flex>
            </GridItem>
            <Flex h={"172px"} gap={8} flexDir='column' bgColor={"white"} borderRadius={8} p={4} border={"1px solid"} borderColor={"Neutral.200"}>
                <Box>
                    <Heading mb={2} fontSize={"sm"} color={"Primary.Navy"}>Add application collaborators</Heading>
                    <Text fontSize={"sm"} color={"Neutral.700"}>Invite a team member to collaborate and finish your applications.</Text>
                </Box>
                <ButtonTheme primary btnText='Invite Collaborators' chakraProps={{
                    fontSize: "sm",
                    onClick: onOpen
                }} />
            </Flex>
            <ApplicationCollabModal isOpen={isOpen} onClose={onClose} />
            <BrokerModal isOpen={isBrokerOpen} onClose={onBrokerClose} />
            <CarrierModal isOpen={isCarrierOpen} onClose={onCarrierClose} />
            <LenderModal isOpen={isLenderOpen} onClose={onLenderClose} />
        </Grid>
    )
}

export default Application