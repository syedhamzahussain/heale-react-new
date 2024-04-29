import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import {
  CheckIcon,
  FlyEnvelopeIcon,
  alertIcon,
  trustIcon,
} from 'modules/shared/Icons';
import React, { useCallback, useEffect, useState } from 'react';
import MessageBox from '../MessageBox';
import CountryInput from '../CountryInput';
import { useLocation } from 'react-router-dom';
import { useWizard } from 'react-use-wizard';
import { getUserFromLocalStorage } from 'services/localStorage.sevice';
import {
  CheckPhoneNumberVerification,
  resendVerificationEmail,
  sendSmsToUser,
  verifyUser,
} from 'services/user.service';
import { debounce } from 'lodash';
import { toastError, toastSuccess } from 'utils/helpers';

const Authentication = () => {
  const { nextStep } = useWizard();
  const [messageBoxType, setMessageBoxType] = useState(''); // Default state
  const [phoneNumber, setPhoneNumber] = useState(''); // State to store phone number
  const [phoneCode, setPhoneCode] = useState(''); // State to store phone code

  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    verifyEmail();
  }, [location.search]);
  const verifyEmail = useCallback(
    debounce(async () => {
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get('token');
      if (token) {
        setIsLoading(true);
        const verifyEmailResponse = await verifyUser({
          token,
        });
        if (verifyEmailResponse.status) setMessageBoxType('emailVerified');
        else setMessageBoxType('verificationFailed');
        setIsLoading(false);
        console.log('verifyEmailResponse:', verifyEmailResponse);
      } else {
        setMessageBoxType('emailSent');
      }
    }, 500),
    []
  );

  const handleCodeChange = (e: any) => {
    console.log('eeeeee: ', e.target.value);
    setPhoneCode(e.target.value);
  };

  const ResendEmail = async () => {
    const response = await resendVerificationEmail();
    console.log('Resend Email Response:', response);
    if (response.status) {
      toastSuccess(response?.data?.message);
      setMessageBoxType('emailSent');
    }
    // setIsLoading(true);
  };

  const handlePhoneNumberChange = (value: any) => {
    console.log('eeeeee: ', value);
    setPhoneNumber(value); // Update state when the input changes
  };

  const handleCheckPhoneVerification = async () => {
    if(!phoneCode) {
      return toastError('Please enter the code sent to your phone number');
    }
    if(phoneCode.length < 6) {
      return toastError('Please enter a valid 6 digit code');
    }
    const response = await CheckPhoneNumberVerification({
      phone_number: `+${phoneNumber}`,
      verification_code: phoneCode,
    });
    if (response.status) {
      toastSuccess(response?.data?.message);
      nextStep();
    }
  };

  const handlePhoneVerification = async () => {
    const response = await sendSmsToUser({
      phone_number: `+${phoneNumber}`,
    });
    if (response.status) {
      toastSuccess(response?.data?.message);
      setMessageBoxType('phoneVerificationCodeSent');
    }
    console.log('aaaaa: ', response);
  };

  const handleUseAnotherPhoneNumber = () => {
    setPhoneNumber(''); // Optionally reset the phoneNumber state
    setMessageBoxType('phoneVerification'); // Reset to phone verification input
  };

  const handleEmailVerified = () => {
    setMessageBoxType('phoneVerification');
    // localStorage.setItem('emailVerified', 'true');
    // nextStep();
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Box
      w={'50%'}
      display={'flex'}
      flexDirection="column"
      justifyContent={'Center'}
    >
      {messageBoxType === 'emailSent' && (
        <MessageBox
          handleClick={ResendEmail}
          btnText="Resend Email"
          desc={`We just Sent you an email to ${
            getUserFromLocalStorage()?.email
          }. check it and click the link to verify your address`}
          icon={FlyEnvelopeIcon}
          title="Verify Your Email"
        />
      )}
      {messageBoxType === 'emailVerified' && (
        <MessageBox
          handleClick={handleEmailVerified}
          btnText="Continue"
          desc="You can close this windows and continue setting up your account"
          icon={CheckIcon}
          title="Your Email is Verified"
        />
      )}
      {messageBoxType === 'verificationFailed' && (
        <MessageBox
          handleClick={ResendEmail}
          btnText="Resend Email"
          desc='The verification Link has Expired. Please Click "Resend Email". and click the link in your email within 10 mins'
          icon={alertIcon}
          title="Resend Email"
        />
      )}

      {/* <MessageBox
        trust
        btnText="Trust"
        desc="We don't recognize this device. Should we trust it for your next login? If this is a public computer, we recommend clicking Don't Trust 'Resend Email'. and click the link in your email within 10 mins"
        icon={trustIcon}
        title="Trust This Device?"
      /> */}
      {messageBoxType === 'phoneVerification' && (
        <Box>
          <Heading
            as={'h4'}
            mt={4}
            mb={2}
            fontSize={'3xl'}
            color={'Primary.Navy'}
          >
            Verify Your Phone Number
          </Heading>
          <Text fontSize={'sm'} fontWeight={500} color={'Neutral.800'}>
            We'll Send you a code via sms
          </Text>
          <FormControl mt={4}>
            <FormLabel fontSize={'sm'} fontWeight={500} color={'Primary.Navy'}>
              Phone
            </FormLabel>
            <CountryInput
              value={phoneNumber}
              handleChange={handlePhoneNumberChange}
            />
          </FormControl>
          <ButtonTheme
            btnText={'Continue'}
            chakraProps={{
              onClick: () => handlePhoneVerification(),
              width: 'full',
              marginTop: '8',
              marginBottom: '8',
              marginLeft: '0',
              marginRight: '0',
            }}
            primary
          />
          <Text fontSize={'xs'} color={'Neutral.800'}>
            By clicking "Continue", I understand and I authorize HEALE network
            to send me a one-time use code via SMS (text message). Carrier fees
            may apply.
          </Text>
        </Box>
      )}
      {messageBoxType === 'phoneVerificationCodeSent' && (
        <Box>
          <Heading
            as={'h4'}
            mt={4}
            mb={2}
            fontSize={'3xl'}
            color={'Primary.Navy'}
          >
            Enter Verification Code
          </Heading>
          <Text fontSize={'sm'} fontWeight={500} color={'Neutral.800'}>
            We just sent you a 6 digit code by text. Please enter it below.
          </Text>
          <FormControl mt={4}>
            <FormLabel fontSize={'sm'} fontWeight={500} color={'Primary.Navy'}>
              Enter code
            </FormLabel>
            <Input 
              type="number" 
              mb={5} 
              placeholder="6 digits" 
              onChange={handleCodeChange}
            />
          </FormControl>
          <ButtonTheme
            btnText={'Submit'}
            chakraProps={{
              onClick: () => handleCheckPhoneVerification(),
              width: 'full',
            }}
            primary
          />
          <ButtonTheme
            btnText={'Resent Code'}
            chakraProps={{
              onClick: () => handlePhoneVerification(),
              width: 'full',
              marginTop: '10px',
              marginBottom: '10px',
            }}
            // primaryOutline
          />
          <Box textAlign="center">
            <Link href="#" color="Primary.Blue" display={'inline-block'} onClick={handleUseAnotherPhoneNumber}>
              Use another phone number
            </Link>
          </Box>
          <Text fontSize={'xs'} my={10} color={'Neutral.800'}>
            By clicking "Continue", I understand and I authorize HEALE network
            to send me a one-time use code via SMS (text message). Carrier fees
            may apply.
          </Text>
        </Box>
      )}
      {/* <Box>
        <Heading
          as={'h4'}
          mt={4}
          mb={2}
          fontSize={'3xl'}
          color={'Primary.Navy'}
        >
          Enter Verification Code
        </Heading>
        <Text fontSize={'sm'} fontWeight={500} color={'Neutral.800'}>
          Content draft team underline variant plugin editor. Arrange slice
          reesizing library underline team ipsum figjam.
        </Text>
        <FormControl mt={4}>
          <FormLabel fontSize={'sm'} fontWeight={500} color={'Primary.Navy'}>
            Enter code
          </FormLabel>
          <Input type="number" mb={5} placeholder="6 digits" />
        </FormControl>
        <ButtonTheme
          btnText={'Submit'}
          chakraProps={{
            width: 'full',
          }}
          primary
        />
        <ButtonTheme
          btnText={'Resent Code'}
          chakraProps={{
            width: 'full',
            marginTop: '10px',
            marginBottom: '10px',
          }}
          // primaryOutline
        />
        <Box textAlign="center">
          <Link href="#" color="Primary.Blue" display={'inline-block'}>
            Use another phone number
          </Link>
        </Box>
        <Text fontSize={'xs'} my={10} color={'Neutral.800'}>
          By clicking this I understand I authorize the HEALE Network to text me
          fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit
          libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
        </Text>
      </Box> */}
    </Box>
  );
};

export default Authentication;
