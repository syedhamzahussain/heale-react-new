import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useToggle from 'hooks/useToggle';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { EyeCloseIcon, EyeIcon } from 'modules/shared/Icons';
import React from 'react';
import { useWizard } from 'react-use-wizard';
import FormErrorMessage from 'modules/shared/FormErrorMessage';

const PersonalInfo = () => {
  const [statePass, togglePass] = useToggle(false);
  const [stateCPass, toggleCPass] = useToggle(false);
  const { nextStep } = useWizard();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const validatePasswords = (password: string, confirm_password: string) => {
    if (password !== confirm_password) {
      setError('confirm_password', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return false;
    }
    return true;
  };

  const onSubmit = (values: any) => {
    const { first_name, last_name, email, handle, password, confirm_password } =
      values;

    const isPasswordValidated = validatePasswords(password, confirm_password);
    if (!isPasswordValidated) return; // Early return if there's a password mismatch

    const data = {
      first_name,
      last_name,
      email,
      handle,
      password,
    };
    console.log('data', data);

    console.log('values', values);
    nextStep();
  }
  
  return (
    <Box w={'50%'}>
      <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
        Create an account
      </Heading>
      <Text mb={8} color={'Neutral.800'}>
        Let's get started creating your personal account. You'll join your team
        later as we go.
      </Text>
      <Box
        sx={{
          '.chakra-form__label': {
            fontSize: 'sm',
            color: 'Primary.Navy',
          },
          '.chakra-input': {
            fontSize: 'sm',
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid mb={6} gridTemplateColumns={'repeat(2,1fr)'} gap={6}>
            <FormControl>
              <FormLabel htmlFor="first_name">First name</FormLabel>
              <Input
                type="text"
                placeholder="Your first name"
                {...register('first_name', {
                  required: 'This field is required',
                  minLength: {
                    value: 4,
                    message: 'Minimum length should be 4',
                  },
                })}
              />
              <FormErrorMessage message={errors?.first_name?.message} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last_name">Last name</FormLabel>
              <Input
                type="text"
                placeholder="Your Last name"
                {...register('last_name', {
                  required: 'This field is required',
                  minLength: {
                    value: 4,
                    message: 'Minimum length should be 4',
                  },
                })}
              />
              <FormErrorMessage message={errors?.last_name?.message} />
            </FormControl>
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(1,1fr)'} gap={6}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                placeholder="Email address"
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
              <FormLabel htmlFor="handle">@ Handle</FormLabel>
              <Input
                type="text"
                placeholder="Enter a unique name"
                {...register('handle', {
                  required: 'This field is required',
                })}
              />
              <FormErrorMessage message={errors?.handle?.message} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input
                  type={statePass ? 'text' : 'password'}
                  placeholder="Minimum 8 characters"
                  {...register('password', {
                    required: 'This field is required',
                    minLength: {
                      value: 8,
                      message: 'Minimum length should be 8',
                    },
                  })}
                />
                <InputRightElement>
                  <Icon
                    cursor={'pointer'}
                    as={!statePass ? EyeIcon : EyeCloseIcon}
                    onClick={togglePass}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage message={errors?.password?.message} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={stateCPass ? 'text' : 'password'}
                  placeholder="Enter password again"
                  {...register('confirm_password', {
                    required: 'This field is required',
                    minLength: {
                      value: 8,
                      message: 'Minimum length should be 8',
                    },
                  })}
                />
                <InputRightElement>
                  <Icon
                    cursor={'pointer'}
                    as={!stateCPass ? EyeIcon : EyeCloseIcon}
                    onClick={toggleCPass}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage message={errors?.confirm_password?.message} />
            </FormControl>
            <Checkbox color={'Primary.Navy'} size={'sm'}>
              I agree to the{' '}
              <Link color="Primary.Blue"> Terms & Conditions</Link>, and I have
              read the <Link color="Primary.Blue"> Privacy Policy</Link>.
            </Checkbox>
            <ButtonTheme
              isLoading={isSubmitting}
              type="submit"
              btnText="Create personal account"
              // chakraProps={{
              //   onClick: () => nextStep(),
              // }}
              primary
            />
            <Text textAlign={'center'} fontSize={'sm'}>
              <Link color="Primary.Blue">Sign up</Link> for a business account
            </Text>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
