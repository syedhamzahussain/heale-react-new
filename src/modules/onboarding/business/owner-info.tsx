import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AddIcon, ProfileIcon, ThreeDotsIcon } from 'modules/shared/Icons';
import PhoneInput from 'react-phone-input-2';
import { saveBusinessOwnership } from 'services/user.service';
import { countries, phoneTypes } from 'utils/constants';
import { saveOwnersToLocalStorage } from 'services/localStorage.sevice';
import FormErrorMessage from 'modules/shared/FormErrorMessage';


const OwnerInfo = ({ isOpen, onClose }: any) => {
  const [selectedValue, setSelectedValue] = useState('Personal');
  const [showForm, setShowForm] = useState(false);
  const [owners, setOwners] = useState<any>([]);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [ssn, setSSN] = useState('');

  const formatSSN = (value: any) => {
    const digits = value.replace(/\D/g, '').slice(0, 9);
    const formatted = digits
      .replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3')
      .replace(/(\d{3})(\d{2})(\d{0,4})/, '$1-$2-$3');
    return formatted;
  };

  useEffect(() => {
    // Load existing owners from local storage
    setValue('owner_type', 'Personal');
    const existingOwners = JSON.parse(localStorage.getItem('owners') || '[]');
    setOwners(existingOwners);
  }, []);

  const onSubmit = async (data: any) => {
    try {
      // Save data to API
      const response = await saveBusinessOwnership(data);
      if (!response.errors) {
        // Save data to local storage
        const updatedOwners = [...owners, data];
        setOwners(updatedOwners);
        saveOwnersToLocalStorage(updatedOwners);
        setSSN('');
        // Reset form
        reset();
        onClose(); // Close modal after saving
      }
    } catch (error) {
      console.error('Error saving owner information:', error);
    }
  };

  const {
    onChange: ssnOnChange,
    ref: ssnRef,
    ...ssnRest
  } = register('ssn', {
    validate: (value) =>
      value.replace(/\D/g, '').length === 9 || 'SSN must be exactly 9 digits',
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Owner Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container maxW={{ lg: '100%', sm: '90%', base: '100%' }}>
              <Box w="100%" textAlign={'center'}>
                <Heading
                  as={'h4'}
                  mb={4}
                  fontSize={'3xl'}
                  color={'Primary.Navy'}
                >
                  Owner information
                </Heading>
                <Text mb={8} color={'Neutral.800'}>
                  Enter required documentation for your Freight Broker
                  application
                </Text>
                {owners.map((owner: any, index: any) => (
                  <Box
                    key={index}
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                  >
                    <Flex justifyContent={'space-between'} mb={6}>
                      <Flex gap={2} alignItems={'center'}>
                        <Avatar
                          name={owner.legal_first_name}
                          src="https://bit.ly/broken-link"
                        />
                        <Box>
                          <Flex gap={2} alignItems={'center'}>
                            <Heading color={'Primary.Navy'} fontSize={'md'}>
                              {owner.legal_first_name} {owner.legal_last_name}
                            </Heading>
                            <Badge
                              px={2}
                              py={1}
                              borderRadius={'full'}
                              fontSize={'xs'}
                              bgColor={'rgba(3, 204, 176, 0.1)'}
                              color={'Secondary.Turquoise'}
                            >
                              Completed
                            </Badge>
                          </Flex>
                          <Text color={'Neutral.700'}>{owner.email}</Text>
                        </Box>
                      </Flex>
                      <ThreeDotsIcon />
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                      <Text w={'50%'} color={'Neutral.700'}>
                        Ownership percentage
                      </Text>
                      <Text w={'50%'} color={'Primary.Navy'}>
                        {owner.ownership_share}
                      </Text>
                    </Flex>
                    {owner.owner_type === 'Personal' && (
                      <>
                        <Flex fontSize={'sm'} mb={4}>
                          <Text w={'50%'} color={'Neutral.700'}>
                            Date of Birth
                          </Text>
                          <Text w={'50%'} color={'Primary.Navy'}>
                            {owner.dob}
                          </Text>
                        </Flex>
                        <Flex fontSize={'sm'} mb={4}>
                          <Text w={'50%'} color={'Neutral.700'}>
                            SSN
                          </Text>
                          <Text w={'50%'} color={'Primary.Navy'}>
                            {owner.ssn}
                          </Text>
                        </Flex>
                      </>
                    )}
                    <Flex fontSize={'sm'} mb={4}>
                      <Text w={'50%'} color={'Neutral.700'}>
                        Address
                      </Text>
                      <Text w={'50%'} color={'Primary.Navy'}>
                        {owner.address_1} {owner.address_2} {owner.city},{' '}
                        {owner.state} {owner.zip_code}
                      </Text>
                    </Flex>
                    <Flex fontSize={'sm'} mb={4}>
                      <Text w={'50%'} color={'Neutral.700'}>
                        Phone number
                      </Text>
                      <Text w={'50%'} color={'Primary.Navy'}>
                        {owner.phone_no}
                      </Text>
                    </Flex>
                  </Box>
                ))}
                <Box
                  mb={6}
                  textAlign={'left'}
                  p={{ md: 6, base: 3 }}
                  border={'1px solid'}
                  borderColor={'Neutral.200'}
                  borderRadius={24}
                  onClick={() => setShowForm(!showForm)}
                  cursor="pointer"
                >
                  <Flex gap={2} alignItems={'center'}>
                    <AddIcon w={8} h={8} />
                    <Heading fontSize={'md'} color={'Primary.Navy'}>
                      Add owner
                    </Heading>
                  </Flex>
                </Box>
                {showForm && (
                  <Box
                    mb={6}
                    textAlign={'left'}
                    p={{ md: 6, base: 3 }}
                    border={'1px solid'}
                    borderColor={'Neutral.200'}
                    borderRadius={24}
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <RadioGroup
                        mb={6}
                        defaultValue="Personal"
                        onChange={(value) => {
                          setSelectedValue(value);
                          setValue('owner_type', value);
                        }}
                      >
                        <Grid
                          gridTemplateColumns={'repeat(2,1fr)'}
                          gap={{ md: 6, base: 3 }}
                        >
                          <Box
                            p={4}
                            border={'1px solid'}
                            borderColor={'Neutral.200'}
                            borderRadius={8}
                            bg={
                              selectedValue === 'Personal' ? 'Neutral.100' : ''
                            }
                          >
                            <Radio colorScheme="blue" value="Personal">
                              Personal
                            </Radio>
                          </Box>
                          <Box
                            p={4}
                            border={'1px solid'}
                            borderColor={'Neutral.200'}
                            borderRadius={8}
                            bg={
                              selectedValue === 'Business' ? 'Neutral.100' : ''
                            }
                          >
                            <Radio colorScheme="blue" value="Business">
                              Business
                            </Radio>
                          </Box>
                        </Grid>
                      </RadioGroup>
                      <Grid
                        gridTemplateColumns={'repeat(2,1fr)'}
                        gap={{ md: 6, base: 3 }}
                        mb={6}
                      >
                        {selectedValue === 'Personal' ? (
                          <>
                            <FormControl>
                              <FormLabel>Legal First Name</FormLabel>
                              <Input
                                type="text"
                                {...register('legal_first_name')}
                                placeholder="Legal First Name"
                              />
                            </FormControl>
                            <FormControl>
                              <FormLabel>Legal Last Name</FormLabel>
                              <Input
                                type="text"
                                {...register('legal_last_name')}
                                placeholder="Legal Last Name"
                              />
                            </FormControl>
                          </>
                        ) : (
                          <FormControl>
                            <FormLabel>Business Legal Name</FormLabel>
                            <Input
                              type="text"
                              {...register('business_legal_name')}
                              placeholder="Business Legal Name"
                            />
                          </FormControl>
                        )}
                      </Grid>
                      {selectedValue === 'Personal' && (
                        <FormControl mb={6}>
                          <FormLabel htmlFor="dob">Date of birth</FormLabel>
                          <Input type="date" {...register('dob')} />
                        </FormControl>
                      )}
                      <FormControl mb={6}>
                        <FormLabel>Citizenship</FormLabel>
                        <Select
                          {...register('nationality')}
                          placeholder="Select"
                        >
                          {countries.map((country) => (
                            <option key={country.label} value={country.label}>
                              {country.label}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl mb={6}>
                        <FormLabel>Ownership Share</FormLabel>
                        <Input
                          type="text"
                          {...register('ownership_share')}
                          placeholder="Enter a number between 0-100%"
                        />
                      </FormControl>
                      <Heading mb={6} color={'Primary.Navy'} fontSize={'xl'}>
                        {selectedValue === 'Personal' ? 'Personal' : 'Business'}{' '}
                        Contact Details
                      </Heading>
                      <FormControl mb={6}>
                        <FormLabel>Address</FormLabel>
                        <Input
                          type="text"
                          {...register('address_1')}
                          placeholder="Address line 1"
                          mb={5}
                        />
                        <Input
                          type="text"
                          {...register('address_2')}
                          placeholder="Address line 2"
                          mb={5}
                        />
                        <Grid
                          gridTemplateColumns={'repeat(3,1fr)'}
                          gap={{ md: 6, base: 3 }}
                          mb={6}
                        >
                          <Input
                            type="text"
                            {...register('city')}
                            placeholder="City"
                          />
                          <Input
                            type="text"
                            {...register('state')}
                            placeholder="State"
                          />
                          <Input
                            type="text"
                            {...register('zip_code')}
                            placeholder="Zip code"
                          />
                        </Grid>
                      </FormControl>
                      {selectedValue === 'Business' && (
                        <FormControl mb={6}>
                          <FormLabel>Country of Incorporation</FormLabel>
                          <Input
                            type="text"
                            {...register('country_of_incorporation')}
                            placeholder="Country of Incorporation"
                          />
                        </FormControl>
                      )}
                      <Grid
                        mb={6}
                        gridTemplateColumns={'repeat(7,1fr)'}
                        gap={{ md: 6, base: 3 }}
                      >
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>Phone Type</FormLabel>
                            <Select
                              {...register('phone_type')}
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
                                {...register('phone_no')}
                                onChange={(value) =>
                                  setValue('phone_no', value)
                                }
                              />
                            </Box>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>Extension</FormLabel>
                            <Input
                              type="text"
                              {...register('extension')}
                              placeholder="+1"
                            />
                          </FormControl>
                        </GridItem>
                      </Grid>
                      <FormControl mb={6}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          type="text"
                          {...register('email')}
                          placeholder="Email address"
                        />
                      </FormControl>
                      {selectedValue === 'Personal' && (
                        <FormControl mb={6}>
                          <FormLabel>Social Security number</FormLabel>
                          <Input
                            type="text"
                            value={ssn}
                            onChange={(event) => {
                              const formattedSSN = formatSSN(
                                event.target.value
                              );
                              setSSN(formattedSSN);
                              ssnOnChange({
                                target: {
                                  name: 'ssn',
                                  value: formattedSSN,
                                },
                              });
                            }}
                            ref={ssnRef}
                            {...ssnRest}
                          />
                          <FormErrorMessage message={errors?.ssn?.message} />
                        </FormControl>
                      )}
                      <Flex justifyContent={'center'} gap={4}>
                        <Button type="submit" colorScheme="blue">
                          Save
                        </Button>
                      </Flex>
                    </form>
                  </Box>
                )}
              </Box>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Back
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OwnerInfo;
