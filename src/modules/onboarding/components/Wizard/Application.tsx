import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Progress,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { InfoIcon } from 'modules/shared/Icons';
import VerificationBox from '../VerificationBox';
import ApplicationCollabModal from '../ApplicationCollabModal';
import { useWizard } from 'react-use-wizard';
import BrokerModal from 'modules/onboarding/business/broker';
import CarrierModal from 'modules/onboarding/business/carrier';
import LenderModal from 'modules/onboarding/business/lender';
import { getQuestionaireToLocalStorage } from 'services/localStorage.sevice';
import { calculateQuestions } from 'utils/helpers';
import { useLocation } from 'react-router-dom';
import { getBusinessApplication } from 'services/user.service';
import { useBusiness } from 'context/BusinessContext';
import OwnerInfo from 'modules/onboarding/business/owner-info';

interface Questions {
  [key: string]: {
    filled: number;
    total: number;
  };
}

const Application = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedTypes } = useBusiness();
  const {
    isOpen: isBrokerOpen,
    onOpen: onBrokerOpen,
    onClose: onBrokerClose,
  } = useDisclosure();
  const {
    isOpen: isCarrierOpen,
    onOpen: onCarrierOpen,
    onClose: onCarrierClose,
  } = useDisclosure();
  const {
    isOpen: isLenderOpen,
    onOpen: onLenderOpen,
    onClose: onLenderClose,
  } = useDisclosure();
  const [businessParam, setBusinessParam] = useState<string | null>(null);
  const { nextStep, previousStep } = useWizard();

  const location = useLocation();
  const [applicationId, setApplicationId] = useState(null);
  const [brokerData, setBrokerData] = useState(null);
  const [carrierData, setCarrierData] = useState(null);
  const [lenderData, setLenderData] = useState(null);
  const [questions, setQuestions] = useState<Questions>({
    broker: { filled: 0, total: 6 },
    carrier: { filled: 0, total: 5 },
    lender: { filled: 0, total: 1 },
  });

  const [showOwnerInfo, setShowOwnerInfo] = useState(false); // Add state to control view

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const business = params.get('business');
    setBusinessParam(business);
    if (business) {
      getBusinessApplication(business)
        .then((data) => {
          if (data) {
            setApplicationId(data.data.application.id);
            const brokerDataObj = data.data.brokerData
              ? {
                  ...data.data.brokerData,
                  services: JSON.parse(data.data.brokerData.services || '[]'),
                  insurance: JSON.parse(data.data.brokerData.insurance || '[]'),
                  surety_bond: JSON.parse(
                    data.data.brokerData.surety_bond || '[]'
                  ),
                }
              : null;

            const carrierDataObj = data.data.carrierData
              ? {
                  ...data.data.carrierData,
                  services: JSON.parse(data.data.carrierData.services || '[]'),
                  insurance: JSON.parse(
                    data.data.carrierData.insurance || '[]'
                  ),
                }
              : null;

            const lenderDataObj = data.data.lenderData
              ? { ...data.data.lenderData }
              : null;

            setBrokerData(brokerDataObj);
            setCarrierData(carrierDataObj);
            setLenderData(lenderDataObj);
            setQuestions({
              broker: {
                filled: calculateQuestions(brokerDataObj)?.filledQuestions ?? 0,
                total: calculateQuestions(brokerDataObj)?.totalQuestions ?? 6,
              },
              carrier: {
                filled:
                  calculateQuestions(carrierDataObj)?.filledQuestions ?? 0,
                total: calculateQuestions(carrierDataObj)?.totalQuestions ?? 5,
              },
              lender: {
                filled: calculateQuestions(lenderDataObj)?.filledQuestions ?? 0,
                total: calculateQuestions(lenderDataObj)?.totalQuestions ?? 1,
              },
            });
          }
        })
        .catch((error) => console.error(error));
    } else {
      let savedValues = getQuestionaireToLocalStorage() ?? {};
      setQuestions({
        broker: {
          filled:
            calculateQuestions(savedValues['broker'])?.filledQuestions ?? 0,
          total: calculateQuestions(savedValues['broker'])?.totalQuestions ?? 6,
        },
        carrier: {
          filled:
            calculateQuestions(savedValues['carrier'])?.filledQuestions ?? 0,
          total:
            calculateQuestions(savedValues['carrier'])?.totalQuestions ?? 5,
        },
        lender: {
          filled:
            calculateQuestions(savedValues['lender'])?.filledQuestions ?? 0,
          total: calculateQuestions(savedValues['lender'])?.totalQuestions ?? 1,
        },
      });
    }
  }, [location.search]);

  const progress = useMemo(() => {
    let totalFilled = 0;
    let totalQuestions = 0;

    const updateProgress = (type: keyof Questions) => {
      totalFilled += questions[type].filled;
      totalQuestions += questions[type].total;
    };

    if (selectedTypes.length > 0) {
      selectedTypes.forEach((type) => {
        if (type === 'Freight Broker' && questions.broker) {
          updateProgress('broker');
        } else if (type === 'Carrier' && questions.carrier) {
          updateProgress('carrier');
        } else if (type === 'Lender' && questions.lender) {
          updateProgress('lender');
        }
      });
    } else {
      // Default to including all if no types are explicitly selected
      updateProgress('broker');
      updateProgress('carrier');
      updateProgress('lender');
    }

    return totalQuestions > 0 ? totalFilled / totalQuestions : 0;
  }, [selectedTypes, questions]);

  if (showOwnerInfo) {
    return (
      <OwnerInfo
        onBack={() => setShowOwnerInfo(false)} // Add onBack prop
        onContinue={() => nextStep()} // Add onContinue prop
      />
    );
  }

  return (
    <Box>
      <Grid
        gridTemplateColumns={{ md: 'repeat(3,1fr)', base: 'repeat(2,1fr)' }}
        gap={{ md: 16, base: 6 }}
      >
        <GridItem colSpan={{ sm: 2, base: 3 }}>
          <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
            Start a new application
          </Heading>
          <Text mb={8} color={'Neutral.800'}>
            Choose the type of application for your business below. A business
            may have multiple types if required.
          </Text>
          <Flex gap={2} mb={8} alignItems={'center'}>
            <Progress
              w={{ sm: '80%', base: '60%' }}
              size="sm"
              borderRadius={'full'}
              value={progress * 100}
            />
            <Text color={'Neutral.700'} fontSize={'sm'}>
              {(progress * 100).toFixed(0)}% complete
            </Text>
          </Flex>
          <Flex fontSize={'xs'} my={8} gap={4} alignItems={'center'}>
            <Flex
              p={2}
              borderRadius={'full'}
              bgColor={'Neutral.100'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <InfoIcon w={6} h={6} />
            </Flex>
            <Box>
              <Heading color={'Primary.Navy'} fontSize={'md'} mb={2}>
                Verification
              </Heading>
              <Text color={'Neutral.700'}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Maecenas sed diam eget risus varius blandit sit amet non
                magna.
              </Text>
            </Box>
          </Flex>
          <Grid gridTemplateColumns={'repeat(2,1fr)'} gap={6}>
            {selectedTypes.includes('Freight Broker') && (
              <VerificationBox
                onClick={onBrokerOpen}
                questions={questions} // Use actual data or state
                title="Broker"
              />
            )}
            {selectedTypes.includes('Carrier') && (
              <VerificationBox
                onClick={onCarrierOpen}
                questions={questions} // Use actual data or state
                title="Carrier"
              />
            )}
            {selectedTypes.includes('Lender') && (
              <VerificationBox
                onClick={onLenderOpen}
                questions={questions} // Use actual data or state
                title="Lender"
              />
            )}
          </Grid>
        </GridItem>
        {!businessParam && (
          <GridItem colSpan={{ sm: 1, base: 3 }}>
            <Flex
              h={'190px'}
              gap={8}
              flexDir="column"
              bgColor={'white'}
              borderRadius={8}
              p={4}
              border={'1px solid'}
              borderColor={'Neutral.200'}
            >
              <Box>
                <Heading mb={2} fontSize={'sm'} color={'Primary.Navy'}>
                  Add application collaborators
                </Heading>
                <Text fontSize={'sm'} color={'Neutral.700'}>
                  Invite a team member to collaborate and finish your
                  applications.
                </Text>
              </Box>
              <ButtonTheme
                primary
                btnText="Invite Collaborators"
                chakraProps={{ fontSize: 'sm', onClick: onOpen }}
              />
            </Flex>
          </GridItem>
        )}
        {!businessParam && (
          <ApplicationCollabModal isOpen={isOpen} onClose={onClose} />
        )}
        <BrokerModal
          isOpen={isBrokerOpen}
          onClose={onBrokerClose}
          setQuestions={setQuestions}
          brokerData={brokerData}
          applicationId={applicationId}
        />
        <CarrierModal
          isOpen={isCarrierOpen}
          onClose={onCarrierClose}
          setQuestions={setQuestions}
          carrierData={carrierData}
          applicationId={applicationId}
        />
        <LenderModal
          isOpen={isLenderOpen}
          onClose={onLenderClose}
          setQuestions={setQuestions}
          lenderData={lenderData}
          applicationId={applicationId}
        />
      </Grid>
      <Grid
        gridTemplateColumns={{ md: 'repeat(3,1fr)', base: 'repeat(2,1fr)' }}
        gap={{ md: 16, base: 6 }}
      >
        <GridItem colSpan={2}>
          {!businessParam && (
            <Flex gap={4} flexDir={{ lg: 'row', base: 'column' }} mt={8}>
              <ButtonTheme
                btnText="Back"
                chakraProps={{ w: '100%', onClick: previousStep }}
              />
              <ButtonTheme
                btnText="Continue"
                primary
                chakraProps={{ w: '100%' }}
                onClick={() => setShowOwnerInfo(true)} // Switch to OwnerInfo view
              />
            </Flex>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Application;
