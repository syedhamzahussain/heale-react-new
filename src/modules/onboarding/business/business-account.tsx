import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Wizard } from 'react-use-wizard'
import PersonalInfo from '../components/Wizard/PersonalInfo'
import Authentication from '../components/Wizard/Authentication'
import VerifyIdentity from '../components/Wizard/VerifyIdentity'
import ConnectAccount from '../components/Wizard/ConnectAccount'
import RecieveCard from '../components/Wizard/RecieveCard'
import WizardHeader from '../components/Wizard/WizardHeader'
import BusinessInfo from '../components/Wizard/BusinessInfo'
import Application from '../components/Wizard/Application'
import TeamInfo from '../components/Wizard/TeamInfo'

const BusinessAccount = () => {
    return (
        <Container maxW={"80%"}>
            <Flex gap={8}>
                <Wizard startIndex={0} header={<WizardHeader />}>
                    <PersonalInfo />
                    <Authentication />
                    <VerifyIdentity />
                    <BusinessInfo />
                    <Application />
                    <ConnectAccount />
                    <RecieveCard />
                    <TeamInfo />
                </Wizard>
            </Flex >
        </Container>
    )
}

export default BusinessAccount