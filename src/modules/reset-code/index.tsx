import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { sendResetCode, verifyResetCode } from 'services/auth.service';
import { toastSuccess } from 'utils/helpers';
import { Link } from 'react-router-dom';
import FormErrorMessage from 'modules/shared/FormErrorMessage';

const ResetCode = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const [loader, setLoader] = useState(false);
  const [verifyingCode, setVerifyingCode] = useState(false);

  const onSubmit = async (values: any) => {
    const user = {
      email: localStorage.getItem('reset-email'),
      reset_code: values.code,
    };
    setLoader(true);
    const response = await verifyResetCode(user);
    if (response?.status) {
      console.log('response:', response);
      toastSuccess(response?.data?.message);
      localStorage.setItem('reset-code', user.reset_code);
      // redirect to reset password page
      window.location.href = '/change-password';
    }
    setLoader(false);
  };

  return (
    <Flex
      h={'calc(100vh - 260px)'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box>
        <Heading
          as={'h4'}
          mt={4}
          mb={2}
          fontSize={'3xl'}
          color={'Primary.Navy'}
        >
          Enter Code
        </Heading>
        <Text fontSize={'sm'} fontWeight={500} color={'Neutral.800'}>
          We just sent you a 6 digit code to this email{' '}
          {localStorage.getItem('reset-email')}. Please enter it below.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mt={4}>
            <FormLabel
              htmlFor="code"
              fontSize={'sm'}
              fontWeight={500}
              color={'Primary.Navy'}
            >
              Enter code
            </FormLabel>
            <Input
              type="number"
              mb={5}
              placeholder="6 digits"
              isInvalid={errors?.code?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('code', {
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'Code must be 6 digits',
                },
                maxLength: {
                  value: 6,
                  message: 'Code must be 6 digits',
                },
              })}
            />
            <FormErrorMessage message={errors?.code?.message} />
          </FormControl>
          <ButtonTheme
            btnText={loader ? 'Verifying...' : 'Submit'}
            chakraProps={{
              // onClick: () => handleCheckPhoneVerification(),
              width: 'full',
              isDisabled: loader,
            }}
            primary
          />
          {/* <ButtonTheme
            // btnText={'Resent Code'}
            btnText={isVerifyingPhone ? 'Resending Code...' : 'Resend Code'}
            chakraProps={{
              onClick: () => handlePhoneVerification(),
              width: 'full',
              marginTop: '10px',
              marginBottom: '10px',
              isDisabled: isVerifyingPhone,
            }}
            // primaryOutline
          /> */}
        </form>
      </Box>
      {/* <Box
        w={'30%'}
        p={8}
        borderRadius="16px"
        borderWidth={'2px'}
        boxShadow="1px 1px 6px 0px rgba(149, 153, 192, 0.22)"
      >
        <Heading fontSize={'3xl'} mb={8} textAlign={'center'}>
          Forgot Password
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              isInvalid={errors?.email?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              })}
            />
          </FormControl>
          <ButtonTheme
            btnText={loader ? 'Loading...' : 'Send Reset Code'}
            primary
            chakraProps={{
              w: '100%',
              isDisabled: isSubmitting,
            }}
          />
        </form>
      </Box> */}
    </Flex>
  );
};

export default ResetCode;
