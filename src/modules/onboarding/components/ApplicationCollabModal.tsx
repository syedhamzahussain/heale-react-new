import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { saveBusinessCollab } from 'services/user.service';
import { ApplicationCollabType } from 'type';
import { toastSuccess } from 'utils/helpers';

const ApplicationCollabModal = ({ isOpen, onClose }: ApplicationCollabType) => {
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneType: '',
    phoneNumber: '',
    extension: '',
    employeeId: '',
    location: '',
    permissions: {
      accessWallet: false,
      permissionName: false,
    },
    agree: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: value,
    }));
  };

  const handleCreateAnotherUser = async () => {
    await handleSubmit(true);
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
      location: '',
      permissions: {
        accessWallet: false,
        permissionName: false,
      },
      agree: false,
    });
  };

  const handleSubmit = async (newUser = false) => {
    try {
      // Replace the URL with your API endpoint
      const response = await saveBusinessCollab(formData);
      if (response?.status) {
        toastSuccess(response?.data?.message);
        if (newUser) {
          return;
        }
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  return (
    <Modal size={'4xl'} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p={10}>
        <ModalHeader p={0} mb={8} textAlign={'center'}>
          <Heading fontSize={'xl'} mb={4} color={'Primary.Navy'}>
            Add Application Collaborator
          </Heading>
          <Text fontSize={'md'} fontWeight={'500'} color={'Neutral.800'}>
            Enter your team members details and invite them to collaborate.
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={0} mb={8}>
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
                value={formData.role}
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
                  value={formData.firstName}
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
                  value={formData.lastName}
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
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
              />
            </FormControl>
            <Grid mb={6} gridTemplateColumns={'repeat(7,1fr)'} gap={6}>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Phone Type</FormLabel>
                  <Select
                    name="phoneType"
                    value={formData.phoneType}
                    onChange={handleChange}
                    placeholder="Select"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={3}>
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
                      value={formData.phoneNumber}
                      onChange={handlePhoneChange}
                    />
                  </Box>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Extension</FormLabel>
                  <Input
                    type="text"
                    name="extension"
                    value={formData.extension}
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
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="Enter your employee ID"
              />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel>Location/Base</FormLabel>
              <Input
                type="text"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel>Permissions</FormLabel>
              <Stack
                sx={{
                  '.chakra-checkbox__control': {
                    pos: 'relative',
                    top: '6px',
                  },
                }}
              >
                <Checkbox alignItems={'start'} size={'md'}>
                  Access business wallet
                  <Text color={'Neutral.700'}>Placeholder</Text>
                </Checkbox>
                <Checkbox alignItems={'start'} size={'md'}>
                  Permission name
                  <Text color={'Neutral.700'}>Placeholder</Text>
                </Checkbox>
              </Stack>
            </FormControl>
            <Checkbox color={'Primary.Navy'} size={'sm'}>
              I agree to the <Link color="Primary.Blue"> User Agreement</Link>,
              and I have read the{' '}
              <Link color="Primary.Blue">Privacy Policy</Link>.
            </Checkbox>
          </Box>
        </ModalBody>

        <ModalFooter gap={8} flexDir={'column'} p={0}>
          <ButtonTheme
            invert
            btnText="Create a another user"
            chakraProps={{
              w: '100%',
              onClick: handleCreateAnotherUser,
            }}
          />
          <ButtonTheme
            primary
            btnText="Add Collaborator"
            chakraProps={{
              w: '100%',
              onClick: () => handleSubmit(false),
            }}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ApplicationCollabModal;
