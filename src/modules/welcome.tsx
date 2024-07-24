import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { options } from 'dummyData/data';
import React from 'react';
import { RadioCardProps } from 'type';
import ButtonTheme from './shared/ButtonTheme';
import { CheckIcon } from './shared/Icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  removeStepFromLocalStorage,
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
  saveAccountTypeToLocalStorage,
} from 'services/localStorage.sevice';

const RadioCard: React.FC<RadioCardProps> = ({ ...props }) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label">
      <input {...input} />
      <Flex
        mb={4}
        gap={6}
        {...checkbox}
        p={8}
        cursor="pointer"
        borderRadius="16px"
        borderWidth={'2px'}
        boxShadow="1px 1px 6px 0px rgba(149, 153, 192, 0.22);                "
        _checked={{
          borderColor: 'Primary.Blue',
          'svg path': {
            stroke: 'Primary.Blue',
          },
        }}
      >
        <Box w={'90%'}>
          <Heading color={'Primary.Navy'} fontSize={'xl'} mb={4} as={'h6'}>
            {props.title}
          </Heading>
          <Text color={'Neutral.800'} fontSize={'sm'} textTransform="none">
            {props.desc}
          </Text>
        </Box>
        <Icon as={props.icon} w={8} h={8} />
      </Flex>
    </Box>
  );
};

const Welcome = () => {
  const navigate = useNavigate();
  const {
    getRootProps,
    getRadioProps,
    setValue: setRadioValue,
    value: radioValue,
  } = useRadioGroup({
    name: 'accountType',
    defaultValue: '0',
    onChange: (value) => {
      setRadioValue(value);
    },
  });

  const group = getRootProps();
  const handleButtonClick = () => {
    saveAccountTypeToLocalStorage(radioValue);
    removeUserFromLocalStorage();
    removeTokenFromLocalStorage();
    removeStepFromLocalStorage();

    navigate(radioValue === '0' ? '/personal' : '/business');
  };

  return (
    <Container maxW={{ lg: '80%', sm: '90%', base: '100%' }}>
      <Heading mb={4} as={'h4'} fontSize={'3xl'} color={'Primary.Navy'}>
        Welcome to HEALE
      </Heading>
      <Text mb={8} color={'Neutral.800'}>
        Choose your Account Type
      </Text>
      <Grid
        gridTemplateColumns={{ lg: 'repeat(2,1fr)', base: 'repeat(1,1fr)' }}
        gap={{ md: 16, base: 8 }}
      >
        <Box {...group} w={{ xl: '80%', base: '100%' }}>
          {options.map((value) => {
            const radio = getRadioProps({ value: String(value?.id) });
            return (
              <RadioCard
                children
                id={value?.id}
                key={value?.id}
                value={value?.title}
                icon={value?.icon}
                title={value?.title}
                desc={value?.desc}
                {...radio}
              />
            );
          })}
          <ButtonTheme
            btnText="Get Started"
            primary
            chakraProps={{
              mt: 4,
              w: '100%',
            }}
            onClick={handleButtonClick}
          />
        </Box>
        <Flex
          flexDir={'column'}
          w={{ xl: '80%', base: '100%' }}
          marginLeft={'auto'}
        >
          {radioValue === '0' ? (
            <>
              <Heading fontSize={'xl'} color={'Primary.Navy'} as={'h6'} mb={8}>
                An individual account is the best way to manage your personal
                wallet and rewards.
              </Heading>
              <List spacing={8} color={'Primary.Navy'} fontSize={'sm'}>
                <ListItem display={'flex'} gap={3}>
                  <CheckIcon w={5} h={5} />
                  <Text as={'span'}>
                    Send, receive, and convert your $HEALE rewards for cash all
                    from one easy-to-use app.
                  </Text>
                </ListItem>
                <ListItem display={'flex'} gap={3}>
                  <CheckIcon w={5} h={5} />
                  <Text as={'span'}>
                    Get access to your company's account to start contributing
                    data to the network and earn rewards.
                  </Text>
                </ListItem>
                <ListItem display={'flex'} gap={3}>
                  <CheckIcon w={5} h={5} />
                  <Text as={'span'}>
                    Stay up to date with your account from anywhere in the world
                    with HEALE app for Android or iOS.
                  </Text>
                </ListItem>
              </List>
            </>
          ) : (
            <>
              <Heading fontSize={'xl'} color={'Primary.Navy'} as={'h6'} mb={8}>
                A business account offers companies of all sizes access to the
                HEALE network.
              </Heading>
              <List spacing={8} color={'Primary.Navy'} fontSize={'sm'}>
                <ListItem display={'flex'} gap={3}>
                  <CheckIcon w={5} h={5} />
                  <Text as={'span'}>
                    Set up your organization with a single account to manage all
                    your entities' payments, transactions, and rewards.
                  </Text>
                </ListItem>
                <ListItem display={'flex'} gap={3}>
                  <CheckIcon w={5} h={5} />
                  <Text as={'span'}>
                    Invite and manage your team's permissioned access to your
                    organization's account.
                  </Text>
                </ListItem>
                <ListItem display={'flex'} gap={3}>
                  <CheckIcon w={5} h={5} />
                  <Text as={'span'}>
                    Contribute your data to the network and start earning
                    rewards.
                  </Text>
                </ListItem>
              </List>
            </>
          )}
        </Flex>
      </Grid>
    </Container>
  );
};

export default Welcome;
