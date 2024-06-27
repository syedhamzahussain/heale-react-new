import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { verifyResetCode } from 'services/auth.service';
import { toastSuccess } from 'utils/helpers';
import FormErrorMessage from 'modules/shared/FormErrorMessage';

const ResetCode = () => {
  const {
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [loader, setLoader] = useState(false);
  // const [verifyingCode, setVerifyingCode] = useState(false);

  const onSubmit = async (values: any) => {
    if (!values["code"] || values["code"]?.length < 6) {
      return setError("code", {});
    }
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

  const onInputChange = (code: string) => {
    if (code.length === 6) {
      clearErrors();
    }
    setValue("code", code);
  };

  return (
    <Flex
      h={{ md: 'calc(100vh - 260px)', base: "calc(100vh - 160px)" }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        w={{ xl: '30%', lg: "40%", md: "50%", sm: "70%", base: "90%" }}
        p={{ sm: 8, base: 4 }}
        borderRadius="16px"
        borderWidth={'2px'}
        boxShadow="1px 1px 6px 0px rgba(149, 153, 192, 0.22)"
      >
        <Heading fontSize={{ md: '3xl', base: "2xl" }} mb={8} textAlign={'center'}>
          Enter Code
        </Heading>
        <Text fontSize={'sm'} mb={4} fontWeight={500} color={'Neutral.800'}>
          We just sent you a 6 digit code to this email{' '}
          {localStorage.getItem('reset-email')}. Please enter it below.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={4}>
            <FormLabel
              fontSize={'sm'}
              fontWeight={500}
              color={'Primary.Navy'}
            >
              Enter code
            </FormLabel>
            {/* <Input
              type="number"
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
            /> */}
            <HStack mt={4}>
              <PinInput otp size='xl' onChange={onInputChange}>
                {Array.from({ length: 6 }).map((i, j) => {
                  return (
                    <PinInputField
                      key={j}
                      borderColor={errors["code"] ? "red" : "brand.primary"}
                      borderRadius={8}
                    />
                  );
                })}
              </PinInput>
            </HStack>
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
