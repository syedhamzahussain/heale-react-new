import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Wizard } from 'react-use-wizard'
import WizardHeader, { usePersistedStep } from '../components/Wizard/WizardHeader'
import Application from '../components/Wizard/Application'

const CollabApplication = () => {

    return (
        <Container maxW={{ lg: "80%", sm: "90%", base: "100%" }}>
            <Flex gap={8}>
                <Wizard header={<WizardHeader />}>
                    <Application />
                </Wizard>
            </Flex >
        </Container>
    )
}

export default CollabApplication