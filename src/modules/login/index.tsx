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
import FormErrorMessage from 'modules/shared/FormErrorMessage';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from 'services/auth.service';
import {
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from 'services/localStorage.sevice';
import { toastSuccess } from 'utils/helpers';

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values: any) => {
    const { email, password } = values;

    const user: any = {
      email,
      password,
    };
    console.log('user: ', user);
    const response = await signin(user);
    if (response?.status) {
      toastSuccess(response?.data?.message);
      saveTokenToLocalStorage(
        `${response?.data?.token_type} ${response?.data?.access_token}`
      );
      saveUserToLocalStorage(response?.data?.user);
      // now redirect to dashboard
      // window.location.href = '/dashboard';
      navigate('/dashboard');
      console.log(response);

    }
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
        <Heading fontSize={'3xl'} mb={8} textAlign={'center'}>
          Login your account
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
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              isInvalid={errors?.password?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('password', {
                required: 'This field is required',
              })}
            />
            <FormErrorMessage message={errors?.password?.message} />
          </FormControl>
          <Link to={'/forgot-password'}>
            <Text
              textAlign={'right'}
              color={'Primary.Blue'}
              fontSize={'xs'}
              mb={4}
            >
              Forgot password?
            </Text>
          </Link>
          <ButtonTheme
            isLoading={isSubmitting}
            type="submit"
            btnText="Login"
            primary
            chakraProps={{
              w: '100%',
            }}
          />
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
