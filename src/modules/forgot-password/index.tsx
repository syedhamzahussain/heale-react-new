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
import { sendResetCode } from 'services/auth.service';
import { toastSuccess } from 'utils/helpers';
import FormErrorMessage from 'modules/shared/FormErrorMessage';

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [loader, setLoader] = useState(false);

  const onSubmit = async (values: any) => {
    const user = {
      email: values.email,
    };
    setLoader(true);
    const response = await sendResetCode(user);
    if (response?.status) {
      console.log('response:', response);
      toastSuccess(response?.data?.message);
      localStorage.setItem('reset-email', user.email);
      // redirect to verify-reset-code
      window.location.href = '/verify-reset-code';
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
        <Heading fontSize={'3xl'} mb={8} textAlign={'center'} color={'Primary.Navy'}>
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
            <FormErrorMessage message={errors?.email?.message} />
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
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
