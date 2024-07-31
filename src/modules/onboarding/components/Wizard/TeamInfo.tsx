import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useWizard } from 'react-use-wizard';
import axios from 'axios';
import { saveTeamUser, sendOnboardedEmail } from 'services/user.service';
import { toastSuccess } from 'utils/helpers';
import { usePersistedStep } from './WizardHeader';
import useFormLocalStorage from 'hooks/useFormLocalStorage';
import { phoneTypes } from 'utils/constants';

interface FormData {
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneType: string;
  phoneNumber: string;
  extension: string;
  employeeId: string;
  accessWallet: boolean;
  permissionName: boolean;
  agree: boolean;
}

const TeamInfo = () => {
  const { nextStep, previousStep } = useWizard();

  const { handleChange: handleLocalStorageChange, getInitialValues } =
    useFormLocalStorage<FormData>('teamInfo');

  const [formData, setFormData] = useState<FormData>({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneType: '',
    phoneNumber: '',
    extension: '',
    employeeId: '',
    accessWallet: false,
    permissionName: false,
    agree: false,
  });

  useEffect(() => {
    const initialValues = getInitialValues();
    setFormData(initialValues);
  }, [getInitialValues]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
    handleLocalStorageChange(name, newValue); // Update local storage
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: value,
    }));
    handleLocalStorageChange('phoneNumber', value); // Update local storage
  };

  const handleCreateAnotherUser = async () => {
    const response = await saveTeamUser(formData);
    if (response?.status) {
      toastSuccess(response?.data?.message);

      // reset the form
      setFormData({
        role: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneType: '',
        phoneNumber: '',
        extension: '',
        employeeId: '',
        accessWallet: false,
        permissionName: false,
        agree: false,
      });
    }
  };

  const handleSubmit = async (newUser = false) => {
    try {
      await sendOnboardedEmail();

      window.location.href = '/extension';
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Box w={{ lg: '50%', md: '60%', base: '100%' }}>
      <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
        Create new user
      </Heading>
      <Text mb={8} color={'Neutral.800'}>
        Create a new user for your team, and select their required permissions.
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
        pos={'relative'}
        py={10}
        px={6}
        border={'1px solid'}
        borderColor={'Neutral.200'}
        borderRadius={8}
        borderTop={'4px solid'}
        borderTopColor={'Primary.Blue'}
      >
        <Box
          p={'3px 16px 3px 16px'}
          pos={'absolute'}
          fontSize={'xs'}
          top={0}
          color={'white'}
          bgColor={'Primary.Blue'}
          borderRadius={'0px 0px 4px 4px'}
        >
          User 1
        </Box>
        <FormControl mb={6}>
          <FormLabel>Role</FormLabel>
          <Select
            name="role"
            value={formData?.role}
            onChange={handleChange}
            placeholder="Select Role"
          >
            <option value="Owner">Owner</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Driver">Driver</option>
            <option value="Dispatcher">Dispatcher</option>
            <option value="Billing">Billing</option>
            <option value="Contributor">Contributor</option>
          </Select>
        </FormControl>
        <Grid gridTemplateColumns={'repeat(2,1fr)'} mb={6} gap={6}>
          <FormControl>
            <FormLabel>
              First Name{' '}
              <Text as={'span'} color={'Secondary.Red'}>
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="firstName"
              value={formData?.firstName}
              onChange={handleChange}
              placeholder="Your first name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              Last Name{' '}
              <Text as={'span'} color={'Secondary.Red'}>
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="lastName"
              value={formData?.lastName}
              onChange={handleChange}
              placeholder="Your last name"
            />
          </FormControl>
        </Grid>
        <FormControl mb={6}>
          <FormLabel>
            Email{' '}
            <Text as={'span'} color={'Secondary.Red'}>
              *
            </Text>
          </FormLabel>
          <Input
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            placeholder="Email address"
          />
        </FormControl>
        <Grid mb={6} gridTemplateColumns={'repeat(7,1fr)'} gap={6}>
          <GridItem colSpan={{ sm: 2, base: 7 }}>
            <FormControl>
              <FormLabel>Phone Type</FormLabel>
              <Select
                name="phoneType"
                value={formData?.phoneType}
                onChange={handleChange}
                placeholder="Select"
              >
                {phoneTypes.map((phoneType) => (
                  <option key={phoneType} value={phoneType}>
                    {phoneType}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ sm: 3, base: 4 }}>
            <FormControl>
              <FormLabel>
                Phone Number{' '}
                <Text as={'span'} color={'Secondary.Red'}>
                  *
                </Text>
              </FormLabel>
              <Box
                sx={{
                  '.react-tel-input .form-control': {
                    height: '2.75rem !important',
                    width: '100%',
                    paddingLeft: '38px',
                    borderColor: '#E3E3FA',
                    borderRadius: '5px',
                  },
                  '.react-tel-input .flag-dropdown': {
                    borderRight: '0',
                    borderTopLeftRadius: '5px',
                    borderColor: '#E3E3FA',
                    borderBottomLeftRadius: '5px',
                  },
                  '.react-tel-input .selected-flag': {
                    backgroundColor: '#fff',
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                  },
                  '.react-tel-input .flag-dropdown .selected-flag .flag .arrow':
                    { display: 'none' },
                }}
              >
                <PhoneInput
                  country={'us'}
                  value={formData?.phoneNumber}
                  onChange={handlePhoneChange}
                />
              </Box>
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ sm: 2, base: 3 }}>
            <FormControl>
              <FormLabel>Extension</FormLabel>
              <Input
                type="text"
                name="extension"
                value={formData?.extension}
                onChange={handleChange}
                placeholder="+1"
              />
            </FormControl>
          </GridItem>
        </Grid>
        <FormControl mb={6}>
          <FormLabel>Employee ID</FormLabel>
          <Input
            type="text"
            name="employeeId"
            value={formData?.employeeId}
            onChange={handleChange}
            placeholder="Enter your employee ID"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Permissions</FormLabel>
          <Stack
            sx={{
              '.chakra-checkbox__control': {
                pos: 'relative',
                top: '6px',
              },
            }}
          >
            <Checkbox
              name="accessWallet"
              isChecked={formData?.accessWallet}
              onChange={handleChange}
              alignItems={'start'}
              size={'md'}
            >
              Access business wallet
              <Text color={'Neutral.700'}>Placeholder</Text>
            </Checkbox>
            <Checkbox
              name="permissionName"
              isChecked={formData?.permissionName}
              onChange={handleChange}
              alignItems={'start'}
              size={'md'}
            >
              Permission name
              <Text color={'Neutral.700'}>Placeholder</Text>
            </Checkbox>
          </Stack>
        </FormControl>
      </Box>
      <Checkbox
        name="agree"
        isChecked={formData?.agree}
        onChange={handleChange}
        color={'Primary.Navy'}
        size={'sm'}
      >
        I agree to the <Link color="Primary.Blue"> User Agreement</Link>, and I
        have read the <Link color="Primary.Blue">Privacy Policy</Link>.
      </Checkbox>
      <ButtonTheme
        invert
        btnText="Create user"
        chakraProps={{
          w: '100%',
          my: 8,
          onClick: handleCreateAnotherUser,
        }}
      />

      <Flex gap={4} mt={8}>
        <ButtonTheme
          btnText="Back"
          chakraProps={{
            w: '100%',
            onClick: () => previousStep(),
          }}
        />
        <ButtonTheme
          btnText="Continue"
          primary
          chakraProps={{
            w: '100%',
            onClick: () => handleSubmit(false),
          }}
        />
      </Flex>
    </Box>
  );
};

export default TeamInfo;
