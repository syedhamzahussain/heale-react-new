import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { bankOptions } from 'dummyData/data';
import { debounce } from 'lodash';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { RightIcon } from 'modules/shared/Icons';
import React, { useCallback, useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { useWizard } from 'react-use-wizard';
import {
  createPlaidLinkToken,
  exchangePlaidLinkToken,
} from 'services/plaid.service';
import { RadioCardProps } from 'type';
import { toastSuccess } from 'utils/helpers';

const RadioCard: React.FC<RadioCardProps> = ({ ...props }) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label">
      <input {...input} />
      <Flex
        mb={4}
        gap={{ md: 6, base: 2 }}
        {...checkbox}
        p={{ md: 8, base: 4 }}
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
        <Flex
          p={4}
          justifyContent={'center'}
          alignItems={'center'}
          w={{ md: '56px', base: 10 }}
          h={{ md: '56px', base: 10 }}
          bgColor={'Neutral.100'}
          borderRadius={'full'}
        >
          <Icon
            as={props.icon}
            w={{
              md: 6, base: 4
            }}
            h={{
              md: 6, base: 4
            }}
            sx={{
              path: {
                stroke: 'Primary.Blue',
              },
            }}
          />
        </Flex>
        <Box w={'90%'} h={'100px'}>
          <Heading color={'Primary.Navy'} fontSize={{ md: 'xl', sm: "lg", base: "md" }} mb={{ md: 4, base: 2 }} as={'h6'}>
            {props.title}
          </Heading>
          <Text color={'Neutral.800'} fontSize={{ md: 'sm', base: "xs" }}>
            {props.desc}
          </Text>
        </Box>
        <RightIcon w={{
          md: 6, base: 4
        }}
          h={{
            md: 6, base: 4
          }} />
      </Flex>
    </Box>
  );
};

const ConnectAccount = () => {
  const { nextStep, previousStep } = useWizard();
  const {
    getRootProps,
    getRadioProps,
    setValue: setRadioValue,
    value: radioValue,
  } = useRadioGroup({
    name: 'accountType',
    defaultValue: 'Personal',
    onChange: (value) => {
      setRadioValue(value);
    },
  });

  const [linkToken, setLinkToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLinkToken();
  }, []);

  const fetchLinkToken = useCallback(
    debounce(async () => {
      setLoading(true);
      const response = await createPlaidLinkToken();
      if (response?.status) setLinkToken(response?.data?.link_token);
      console.log('link response', response);
      setLoading(false);
    }, 500),
    []
  );

  const group = getRootProps();

  // Initialize Plaid Link with your configuration
  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (publicToken, metadata) => {
      // Send the public token to your server
      console.log('public token: ', publicToken, metadata);
      const body = {
        public_token: publicToken,
        accounts: metadata.accounts,
        institution: metadata.institution,
        link_session_id: metadata.link_session_id,
        link_token: linkToken,
      };
      const response = await exchangePlaidLinkToken(body);
      if (response?.status) {
        toastSuccess(response?.data?.message);
        nextStep();
      }
      console.log('plaid: ', response);
    },
    // Add other necessary configuration options here
  });

  // A method to handle the button click to open Plaid Link
  const handleConnectClick = useCallback(() => {
    if (ready) {
      console.log(linkToken);
      open();
    }
  }, [open, ready]);

  return (
    <Box w={{ lg: '50%', md: "60%", base: "100%" }}>
      <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
        Add bank account
      </Heading>
      <Text mb={8} color={'Neutral.800'}>
        Select the bank account type that you would like to add to your HEALE Account
      </Text>
      <Box {...group} w={'100%'}>
        {bankOptions.map((value) => {
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
      </Box>
      <Flex gap={4} mt={8}>
        <ButtonTheme
          btnText="Back"
          chakraProps={{
            w: '100%',
            onClick: () => previousStep(),
          }}
        />
        <ButtonTheme
          btnText="Get started"
          primary
          chakraProps={{
            w: '100%',
            onClick: handleConnectClick,
            // onClick: () => nextStep(),
            isDisabled:
              radioValue === '' || (radioValue !== '0' && radioValue !== '1'),
          }}
        />
      </Flex>
    </Box>
  );
};

export default ConnectAccount;
