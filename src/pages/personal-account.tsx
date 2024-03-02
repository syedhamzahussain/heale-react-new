import { Container, Flex } from '@chakra-ui/react'
import Authentication from 'components/Wizard/Authentication'
import ConnectAccount from 'components/Wizard/ConnectAccount'
import PersonalInfo from 'components/Wizard/PersonalInfo'
import RecieveCard from 'components/Wizard/RecieveCard'
import VerifyIdentity from 'components/Wizard/VerifyIdentity'
import WizardHeader from 'components/Wizard/WizardHeader'
import React from 'react'
import { Wizard } from 'react-use-wizard'

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