import {
  Box
} from '@chakra-ui/react';
import {
  CheckIcon,
  FlyEnvelopeIcon,
  alertIcon,
} from 'modules/shared/Icons';
import React, { useCallback, useEffect, useState } from 'react';
import MessageBox from '../MessageBox';
import { useLocation } from 'react-router-dom';
import { useWizard } from 'react-use-wizard';
import { getUserFromLocalStorage } from 'services/localStorage.sevice';
import { resendVerificationEmail, verifyUser } from 'services/user.service';
import { debounce } from 'lodash';
import { toastSuccess } from 'utils/helpers';

const Authentication = () => {
  const { nextStep } = useWizard();
  const [messageBoxType, setMessageBoxType] = useState(''); // Default state
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
      }
      else {
        setMessageBoxType('emailSent');
      }
    }, 500),
    []
  );

  const ResendEmail = async () => {
    const response = await resendVerificationEmail();
    console.log('Resend Email Response:', response);
    if (response.status) {
      toastSuccess(response?.data?.message)
      setMessageBoxType('emailSent');
    }
    // setIsLoading(true);
  };

  const handleEmailVerified = () => {
    // localStorage.setItem('emailVerified', 'true');
    nextStep();
  };

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
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
          desc={`We just Sent you an email to ${getUserFromLocalStorage()?.email
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
    </Box>
  );
};

export default Authentication;
