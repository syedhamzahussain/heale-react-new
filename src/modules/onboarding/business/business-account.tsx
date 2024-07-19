import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { Wizard } from 'react-use-wizard';
import PersonalInfo from '../components/Wizard/PersonalInfo';
import Authentication from '../components/Wizard/Authentication';
import VerifyIdentity from '../components/Wizard/VerifyIdentity';
import ConnectAccount from '../components/Wizard/ConnectAccount';
import RecieveCard from '../components/Wizard/RecieveCard';
import WizardHeader, {
  usePersistedStep,
} from '../components/Wizard/WizardHeader';
import BusinessInfo from '../components/Wizard/BusinessInfo';
import Application from '../components/Wizard/Application';
import TeamInfo from '../components/Wizard/TeamInfo';
import { BusinessProvider } from 'context/BusinessContext';

const BusinessAccount = () => {
  const [step] = usePersistedStep(0);

  return (
    <Container maxW={{ lg: '80%', base: '90%' }}>
      <Flex gap={{ md: 8, base: 4 }} flexDir={{ md: "row", base: "column" }}>
        <BusinessProvider>
          <Wizard startIndex={step} header={<WizardHeader />}>
            <PersonalInfo type={'business'}/>
            <Authentication />
            <VerifyIdentity />
            <BusinessInfo />
            <Application />
            <ConnectAccount />
            <RecieveCard />
            <TeamInfo />
          </Wizard>
        </BusinessProvider>
      </Flex>
    </Container>
  );
};

export default BusinessAccount;
