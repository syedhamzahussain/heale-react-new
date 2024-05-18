import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { changePassword } from 'services/auth.service';
import { toastSuccess } from 'utils/helpers';
import FormErrorMessage from 'modules/shared/FormErrorMessage';
import { saveTokenToLocalStorage, saveUserToLocalStorage } from 'services/localStorage.sevice';

type ChangePasswordProps = {};

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const [loader, setLoader] = useState(false);
  // const [verifyingCode, setVerifyingCode] = useState(false);

  const onSubmit = async (values: any) => {
    if (values.password !== values.confirm_password) {
      setError('confirm_password', {
        type: 'manual',
        message: 'Password does not match',
      });
      return;
    }
    const user = {
      email: localStorage.getItem('reset-email'),
      reset_code: localStorage.getItem('reset-code'),
      password: values.password,
    };
    console.log('user:', user)

    setLoader(true);
    const response = await changePassword(user);
    if (response?.status) {
      console.log('response:', response);
      toastSuccess(response?.data?.message);
      localStorage.removeItem('reset-email');
      localStorage.removeItem('reset-code');
      //  redirect to login
      window.location.href = '/login';
    }
    setLoader(false);
  };

  return (
    <Flex
      h={'calc(100vh - 260px)'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        w={'30%'}
        p={8}
        borderRadius="16px"
        borderWidth={'2px'}
        boxShadow="1px 1px 6px 0px rgba(149, 153, 192, 0.22)"
      >
        <Heading
          fontSize={'3xl'} mb={8} textAlign={'center'}
          color={'Primary.Navy'}
        >
          Change Password
        </Heading>
        {/* <Text fontSize={'sm'} fontWeight={500} color={'Neutral.800'}>
          We just sent you a 6 digit code to this email{' '}
          {localStorage.getItem('reset-email')}. Please enter it below.
        </Text> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              isInvalid={errors?.password?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('password', {
                required: 'This field is required',
                minLength: {
                  value: 12,
                  message: 'Password must be at least 12 characters',
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message:
                    'Password should contain at least one uppercase letter, one lowercase letter, and one number',
                },
              })}
            />
            <FormErrorMessage message={errors?.password?.message} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your confirm password"
              isInvalid={errors?.confirm_password?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('confirm_password', {
                required: 'This field is required',
                minLength: {
                  value: 12,
                  message: 'Password must be at least 12 characters',
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message:
                    'Password should contain at least one uppercase letter, one lowercase letter, and one number',
                },
              })}
            />
            <FormErrorMessage message={errors?.confirm_password?.message} />
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

export default ChangePassword;
