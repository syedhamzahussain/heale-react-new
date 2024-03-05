import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Wizard } from 'react-use-wizard'
import PersonalInfo from '../components/Wizard/PersonalInfo'
import Authentication from '../components/Wizard/Authentication'
import VerifyIdentity from '../components/Wizard/VerifyIdentity'
import ConnectAccount from '../components/Wizard/ConnectAccount'
import RecieveCard from '../components/Wizard/RecieveCard'
import WizardHeader from '../components/Wizard/WizardHeader'

const PersonalAccount = () => {
    return (
        <Container maxW={"80%"}>
            <Flex gap={8}>
                <Wizard startIndex={0} header={<WizardHeader />}>
                    <PersonalInfo />
                    <Authentication />
                    <VerifyIdentity />
                    <ConnectAccount />
                    <RecieveCard />
                </Wizard>
            </Flex >
        </Container>
    )
}

export default PersonalAccount