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
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useToggle from 'hooks/useToggle';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { EyeCloseIcon, EyeIcon } from 'modules/shared/Icons';
import React, { useState, useEffect } from 'react';
import { useWizard } from 'react-use-wizard';
import FormErrorMessage from 'modules/shared/FormErrorMessage';
import { signUp } from 'services/auth.service';
import {
  getAccountTypeFromLocalStorage,
  getTokenFromLocalStorage,
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from 'services/localStorage.sevice';
import { toastSuccess, validatePasswords } from 'utils/helpers';
import TermsModal from '../TermsModal';

const PersonalInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isAgreed, setIsAgreed] = useState(false);
  const [statePass, togglePass] = useToggle(false);
  const [stateCPass, toggleCPass] = useToggle(false);
  const { nextStep } = useWizard();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (getTokenFromLocalStorage()) nextStep();
  }, []);

  const onSubmit = async (values: any) => {
    const { first_name, last_name, email, handle, password, confirm_password } =
      values;

    const isPasswordValidated = validatePasswords(
      password,
      confirm_password,
      setError
    );
    if (!isPasswordValidated) return; // Early return if there's a password mismatch

    const user: any = {
      first_name,
      last_name,
      email,
      handle,
      password,
      account_type: getAccountTypeFromLocalStorage(),
    };
    const response = await signUp(user);
    if (response?.status) {
      toastSuccess(response?.data?.message);
      saveTokenToLocalStorage(
        `${response?.data?.token_type} ${response?.data?.access_token}`
      );
      saveUserToLocalStorage(response?.data?.user);
      nextStep();
    }
  };

  return (
    <Box w={{ lg: '50%', md: "60%", base: "100%" }}>
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
                isInvalid={errors?.first_name?.message ? true : false}
                errorBorderColor="Secondary.Red"
                placeholder="Your first name"
                {...register('first_name', {
                  required: 'This field is required',
                  // minLength: {
                  //   value: 4,
                  //   message: 'Minimum length should be 4',
                  // },
                })}
              />
              <FormErrorMessage message={errors?.first_name?.message} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last_name">Last name</FormLabel>
              <Input
                type="text"
                isInvalid={errors?.last_name?.message ? true : false}
                errorBorderColor="Secondary.Red"
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
                isInvalid={errors?.email?.message ? true : false}
                errorBorderColor="Secondary.Red"
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
                isInvalid={errors?.handle?.message ? true : false}
                errorBorderColor="Secondary.Red"
                placeholder="Enter a unique name"
                {...register('handle', {
                  required: 'This field is required',
                  validate: (value) =>
                    !/\s/.test(value) || 'Handle cannot contain spaces', // Add this line
                })}
              />
              <FormErrorMessage message={errors?.handle?.message} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input
                  type={statePass ? 'text' : 'password'}
                  isInvalid={errors?.password?.message ? true : false}
                  errorBorderColor="Secondary.Red"
                  placeholder="Minimum 12 characters"
                  {...register('password', {
                    required: 'This field is required',
                    minLength: {
                      value: 12,
                      message: 'Minimum length should be 12',
                    },
                    // validation for strong passwords
                    pattern: {
                      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*?&]).{12,}$/,
                      message:
                        'Password should contain at least one uppercase letter, one number, and one symbol',
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
                  isInvalid={errors?.confirm_password?.message ? true : false}
                  errorBorderColor="Secondary.Red"
                  placeholder="Enter password again"
                  {...register('confirm_password', {
                    required: 'This field is required',
                    minLength: {
                      value: 12,
                      message: 'Minimum length should be 12',
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
            <Checkbox
              color={'Primary.Navy'}
              size={'sm'}
              isChecked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            >
              I agree to the{' '}
              <Link color="Primary.Blue" onClick={() => onOpen()}> Terms & Conditions</Link>, and I have
              read the <Link color="Primary.Blue"> Privacy Policy</Link>.
            </Checkbox>
            <ButtonTheme
              isLoading={isSubmitting}
              type="submit"
              isDisabled={!isAgreed}
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
      <TermsModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default PersonalInfo;
