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
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { AddIcon, ProfileIcon, ThreeDotsIcon } from 'modules/shared/Icons';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import { saveBusinessOwnership } from 'services/user.service';
import { phoneTypes } from 'utils/constants';
import { saveOwnersToLocalStorage } from 'services/localStorage.sevice';

interface OwnerInfoProps {
  onBack: () => void;
  onContinue: () => void;
}

const OwnerInfo: React.FC<OwnerInfoProps> = ({ onBack, onContinue }) => {
  const [selectedValue, setSelectedValue] = useState('Personal');
  const [formData, setFormData] = useState({
    owner_type: 'Personal',
    legal_first_name: '',
    legal_last_name: '',
    business_legal_name: '',
    dob: '',
    nationality: '',
    ownership_share: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip_code: '',
    business_contact_no: '',
    phone_type: '',
    phone_no: '',
    extension: '',
    email: '',
    ssn: '',
    country_of_incorporation: '',
  });

  const [owners, setOwners] = useState<any>([]);

  useEffect(() => {
    // Load existing owners from local storage
    const existingOwners = JSON.parse(localStorage.getItem('owners') || '[]');
    setOwners(existingOwners);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phone_no: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Save data to API
      const response = await saveBusinessOwnership(formData);
      console.log(response);

      if (response) {
        // Save data to local storage
        const updatedOwners = [...owners, formData];
        setOwners(updatedOwners);
        saveOwnersToLocalStorage(updatedOwners);
        // Reset form
        setFormData({
          owner_type: 'Personal',
          legal_first_name: '',
          legal_last_name: '',
          business_legal_name: '',
          dob: '',
          nationality: '',
          ownership_share: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          zip_code: '',
          business_contact_no: '',
          phone_type: '',
          phone_no: '',
          extension: '',
          email: '',
          ssn: '',
          country_of_incorporation: '',
        });
      }
    } catch (error) {
      console.error('Error saving owner information:', error);
    }
  };

  return (
    <Container maxW={{ lg: '100%', sm: '90%', base: '100%' }}>
      <Box
        w={{ lg: '50%', md: '60%', base: '100%' }}
        m={'0 auto'}
        textAlign={'center'}
      >
        <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
          Owner information
        </Heading>
        <Text mb={8} color={'Neutral.800'}>
          Enter required documentation for your Freight Broker application
        </Text>
        <Box
          mb={6}
          textAlign={'left'}
          p={{ md: 6, base: 3 }}
          border={'1px solid'}
          borderColor={'Neutral.200'}
          borderRadius={24}
        >
          <Flex gap={2} alignItems={'center'} mb={6}>
            <ProfileIcon w={5} h={5} />
            <Heading color={'Primary.Navy'} fontSize={'xl'}>
              Owner details
            </Heading>
          </Flex>
          <form onSubmit={handleSubmit}>
            <RadioGroup
              mb={6}
              defaultValue="Personal"
              onChange={(value) => {
                setSelectedValue(value);
                setFormData({
                  ...formData,
                  owner_type: value,
                });
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
                  bg={selectedValue === 'Personal' ? 'Neutral.100' : ''}
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
                  bg={selectedValue === 'Business' ? 'Neutral.100' : ''}
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
                      name="legal_first_name"
                      value={formData.legal_first_name}
                      onChange={handleInputChange}
                      errorBorderColor="Secondary.Red"
                      placeholder="Legal First Name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Legal Last Name</FormLabel>
                    <Input
                      type="text"
                      name="legal_last_name"
                      value={formData.legal_last_name}
                      onChange={handleInputChange}
                      errorBorderColor="Secondary.Red"
                      placeholder="Legal Last Name"
                    />
                  </FormControl>
                </>
              ) : (
                <FormControl>
                  <FormLabel>Business Legal Name</FormLabel>
                  <Input
                    type="text"
                    name="business_legal_name"
                    value={formData.business_legal_name}
                    onChange={handleInputChange}
                    errorBorderColor="Secondary.Red"
                    placeholder="Business Legal Name"
                  />
                </FormControl>
              )}
            </Grid>
            {selectedValue === 'Personal' && (
              <FormControl mb={6}>
                <FormLabel htmlFor="dob">Date of birth</FormLabel>
                <Input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  errorBorderColor="Secondary.Red"
                />
              </FormControl>
            )}
            <FormControl mb={6}>
              <FormLabel>Nationality</FormLabel>
              <Input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                errorBorderColor="Secondary.Red"
                placeholder="Nationality"
              />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel>Ownership Share</FormLabel>
              <Input
                type="text"
                name="ownership_share"
                value={formData.ownership_share}
                onChange={handleInputChange}
                errorBorderColor="Secondary.Red"
                placeholder="Enter a number between 0-100%"
              />
            </FormControl>
            <Heading mb={6} color={'Primary.Navy'} fontSize={'xl'}>
              {selectedValue === 'Personal' ? 'Personal' : 'Business'} Contact
              Details
            </Heading>
            <FormControl mb={6}>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address_1"
                value={formData.address_1}
                onChange={handleInputChange}
                errorBorderColor="Secondary.Red"
                placeholder="Address line 1"
                mb={5}
              />
              <Input
                type="text"
                name="address_2"
                value={formData.address_2}
                onChange={handleInputChange}
                errorBorderColor="Secondary.Red"
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
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  errorBorderColor="Secondary.Red"
                  placeholder="City"
                />
                <Input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  errorBorderColor="Secondary.Red"
                  placeholder="State"
                />
                <Input
                  type="text"
                  name="zip_code"
                  value={formData.zip_code}
                  onChange={handleInputChange}
                  errorBorderColor="Secondary.Red"
                  placeholder="Zip code"
                />
              </Grid>
            </FormControl>
            {selectedValue === 'Business' && (
              <FormControl mb={6}>
                <FormLabel>Country of Incorporation</FormLabel>
                <Input
                  type="text"
                  name="country_of_incorporation"
                  value={formData.country_of_incorporation}
                  onChange={handleInputChange}
                  errorBorderColor="Secondary.Red"
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
                    name="phone_type"
                    value={formData.phone_type}
                    onChange={handleInputChange}
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
                      value={formData.phone_no}
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
                    onChange={handleInputChange}
                    placeholder="+1"
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <FormControl mb={6}>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                errorBorderColor="Secondary.Red"
                placeholder="Email address"
              />
            </FormControl>
            {selectedValue === 'Personal' && (
              <FormControl mb={6}>
                <FormLabel>Social Security number</FormLabel>
                <Input
                  type="text"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleInputChange}
                  errorBorderColor="Secondary.Red"
                  placeholder="4 digits"
                />
              </FormControl>
            )}
            <Flex justifyContent={'center'} gap={4}>
             
              <ButtonTheme
                btnText="Save"
                chakraProps={{
                  type: 'submit',
                  w: '50%',
                }}
              />
            </Flex>
          </form>
        </Box>
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
                {owner.address_1} {owner.address_2} {owner.city}, {owner.state}{' '}
                {owner.zip_code}
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
        >
          <Flex gap={2} alignItems={'center'}>
            <AddIcon w={8} h={8} />
            <Heading fontSize={'md'} color={'Primary.Navy'}>
              Add owner
            </Heading>
          </Flex>
        </Box>
        <Box px={6}>
          <Flex justifyContent={'center'} gap={4}>
            <ButtonTheme
              btnText="Back"
              chakraProps={{ w: '50%' }}
              onClick={onBack} // Call onBack prop when clicked
            />
            <ButtonTheme
              btnText="Continue"
              chakraProps={{ w: '50%' }}
              onClick={onContinue} // Explicitly call onContinue when clicked
            />
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default OwnerInfo;
