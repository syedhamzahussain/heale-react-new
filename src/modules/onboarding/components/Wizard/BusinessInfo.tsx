import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Text,
  Flex,
  Link,
  ListItem,
  List,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import ButtonTheme from 'modules/shared/ButtonTheme';
import {
  ConvertIcon,
  CrossIcon,
  DocIcon,
  LockIcon,
  TrashIcon,
  UploadIcon,
} from 'modules/shared/Icons';
import { useDropzone } from 'react-dropzone';
import PhoneInput from 'react-phone-input-2';
import { useWizard } from 'react-use-wizard';
import FormErrorMessage from 'modules/shared/FormErrorMessage';
import { saveUserBusiness } from 'services/user.service';
import {
  businessEntityTypes,
  businessTypes,
  phoneTypes,
  states,
} from 'utils/constants';
import { toastSuccess } from 'utils/helpers';
import { getAccountTypeFromLocalStorage } from 'services/localStorage.sevice';
import { useBusiness } from 'context/BusinessContext';
import { MultiSelect } from 'react-multi-select-component';
import { useCallback, useEffect, useState } from 'react';
import { ServiceOption } from 'modules/onboarding/business/broker';
import useFormLocalStorage from 'hooks/useFormLocalStorage';
import {
  useConnect,
  useSendTransaction,
  useSetActiveWallet,
} from 'thirdweb/react';
import {
  inAppWallet,
  privateKeyToAccount,
  createWallet,
} from 'thirdweb/wallets';
import { client } from '../../../../twclient';

import { polygonAmoy } from 'thirdweb/chains';

import {
  Address,
  prepareContractCall,
  sendAndConfirmTransaction,
  getContract,
} from 'thirdweb';

const BusinessInfo = () => {
  const { nextStep, previousStep } = useWizard();
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [employerIdentificationNumber, setEmployerIdentificationNumber] =
    useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setAcceptedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDelete = (fileName: string) => {
    setAcceptedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  const files = acceptedFiles.map((file) => (
    <ListItem
      justifyContent="space-between"
      bgColor="Neutral.100"
      px={4}
      py={2}
      borderRadius={8}
      display="flex"
      key={file.name}
    >
      <Flex gap={2} alignItems="center">
        <DocIcon />
        <Text>{file.name}</Text>
      </Flex>
      <Flex gap={4} alignItems="center">
        <ConvertIcon
          sx={{
            path: {
              stroke: 'Primary.Navy',
            },
          }}
        />
        <TrashIcon
          onClick={() => handleDelete(file.name)}
          sx={{
            path: {
              stroke: 'Primary.Navy',
            },
            cursor: 'pointer',
          }}
        />
      </Flex>
    </ListItem>
  ));
  const [selected, setSelected] = useState([]);

  const { connect } = useConnect({
    client: client,
    accountAbstraction: {
      chain: polygonAmoy,
      sponsorGas: true,
      factoryAddress: process.env.REACT_APP_FACTORY_ADDRESS,
    },
  });

  const adminAccount = privateKeyToAccount({
    client,
    privateKey: process.env.REACT_APP_ADMIN_WALLET_KEY as Address,
  });

  const contract = getContract({
    client,
    chain: polygonAmoy,
    address: process.env.REACT_APP_CONTRACT_ADDRESS ?? '',
  });

  const handlePostLogin = async (userId: string) => {
    console.log('Sending userId to thirdweb:', userId); // Log the userId being sent
    const wallet = await connect(async () => {
      const wallet = inAppWallet();
      await wallet.connect({
        client: client,
        strategy: 'auth_endpoint',
        payload: userId.toString(), // Ensure userId is a string
        encryptionKey: 'Test', // Leave blank for now
      });
      console.log('NEW WALLET ADDRESS', wallet.getAccount()?.address);
      return wallet;
    });
    // Call mintIdentityNFT with the new wallet address
    const walletAddress = wallet?.getAccount()?.address;
    if (walletAddress) {
      await mintIdentityNFT(walletAddress, parseInt(userId, 10));
    }

    return wallet;
  };

  const mintIdentityNFT = async (toAddress: string, userId: number) => {
    const tx = await prepareContractCall({
      contract,
      method: 'function mintTo(address to, uint256 tokenId)',
      params: [toAddress as `0x${string}`, BigInt(userId)],
    });

    try {
      await sendAndConfirmTransaction({
        transaction: tx,
        account: adminAccount,
      });
      console.log('Identity NFT minted successfully', tx);
    } catch (error) {
      console.error(error);
    }
  };

  const formatEIN = (value: any) => {
    const digits = value.replace(/\D/g, '').slice(0, 9);
    const formatted = digits
      .replace(/(\d{2})(\d{7})/, '$1-$2')
      .replace(/(\d{2})(\d{0,7})/, '$1-$2');
    return formatted;
  };

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const { setBusinessTypes, selectedTypes } = useBusiness();

  const [typeError, setTypeError] = useState<any>(null);

  const handleSelectChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
    handleChange('bussinessType', selectedOptions);
  };

  const onSubmit = async (values: any) => {
    if (selected.length === 0) {
      setTypeError('Atleast one type is required');
      return;
    }
    const valuesArray = selected.map((item: any) => item.value);
    setBusinessTypes(valuesArray);
    const userBusiness = {
      employer_identification_number: values?.employer_identification_number,
      business_legal_name: values?.business_legal_name,
      entity_type: values?.entity_type,
      type: JSON.stringify(valuesArray),
      business_email: values?.business_email,
      business_handle: values?.business_handle,
      phone_type: values?.phone_type,
      phone_number: values?.phone_number,
      phone_extension: values?.phone_extension,
      incorporation_state: values?.incorporation_state,
      incorporation_year: values?.incorporation_year,
      address: `${values?.address} ${values?.address1}`,
      city: values?.city,
      state: values?.state,
      zip_code: values?.zip_code,
      business_website: values?.business_website,
      duns_number: values?.duns_number,
      account_type: getAccountTypeFromLocalStorage(),
    };
    const response = await saveUserBusiness(userBusiness);
    if (response?.status) {
      toastSuccess(response?.data?.message);
      nextStep();
    }
  };

  const customValueRenderer = (
    selected: ServiceOption[],
    handleRemove: (option: ServiceOption) => void
  ) => {
    return selected.length ? (
      selected.map(({ label, value }) => (
        <Text
          color={'Primary.Blue'}
          bgColor={'Neutral.100'}
          py={1}
          px={2}
          borderRadius={40}
          fontSize={'xs'}
          cursor={'pointer'}
          display={'inline-flex'}
          key={value}
          alignItems={'center'}
          gap={1}
          mr={1}
        >
          {label}
          <CrossIcon
            w={2}
            h={2}
            onClick={() => handleRemove({ label, value })}
          />
        </Text>
      ))
    ) : (
      <span>No Items Selected</span>
    );
  };

  const handleRemove = (optionToRemove: ServiceOption) => {
    // const updatedServices = formData.services.filter(value => value !== optionToRemove.value);
    // setFormData({ ...formData, services: updatedServices });
  };
  const { handleChange, getInitialValues } = useFormLocalStorage(
    'businessInfo',
    setValue
  );

  // Initialize form values from localStorage
  useEffect(() => {
    const initialValues = getInitialValues();
    Object.keys(initialValues).forEach((key) => {
      if (key === 'bussinessType') {
        setSelected(initialValues[key]);
      } else {
        setValue(key, initialValues[key]);
      }
    });
  }, [setValue, getInitialValues]);

  const {
    onChange: einOnChange,
    ref: einRef,
    ...einRest
  } = register('employer_identification_number', {
    required: 'This field is required',
    onChange: (e) =>
      handleChange('employer_identification_number', e.target.value),
    validate: (value) =>
      value.replace(/\D/g, '').length === 9 || 'EIN must be exactly 9 digits',
  });

  return (
    <Box w={{ lg: '50%', md: '60%', base: '100%' }}>
      <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
        Create an account
      </Heading>
      <Text mb={8} color={'Neutral.800'}>
        Now let's make your business account. This will be an organization-level
        account where you can add individual team members.
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
          <Grid mb={6} gridTemplateColumns={'repeat(1,1fr)'} gap={6}>
            <FormControl>
              <FormLabel>Employer Identification Number</FormLabel>
              <Input
                type="text"
                isInvalid={
                  errors?.employer_identification_number?.message ? true : false
                }
                errorBorderColor="Secondary.Red"
                placeholder="XX-XXXXXXX"
                value={employerIdentificationNumber}
                onChange={(event) => {
                  const formattedEIN = formatEIN(event.target.value);
                  setEmployerIdentificationNumber(formattedEIN);
                  einOnChange({
                    target: {
                      name: 'employer_identification_number',
                      value: formattedEIN,
                    },
                  });
                }}
                ref={einRef}
                {...einRest}
              />
              <FormErrorMessage
                message={errors?.employer_identification_number?.message}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Legal Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your business’s legal name"
                isInvalid={errors?.business_legal_name?.message ? true : false}
                errorBorderColor="Secondary.Red"
                {...register('business_legal_name', {
                  required: 'This field is required',
                  onChange: (e) =>
                    handleChange('business_legal_name', e.target.value),
                })}
              />
              <FormErrorMessage
                message={errors?.business_legal_name?.message}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Entity Type</FormLabel>
              <Select
                placeholder="Select your business’s entity type"
                isInvalid={errors?.entity_type?.message ? true : false}
                errorBorderColor="Secondary.Red"
                {...register('entity_type', {
                  required: 'This field is required',
                  onChange: (e) => handleChange('entity_type', e.target.value),
                })}
              >
                {businessEntityTypes.map((entityType) => (
                  <option key={entityType} value={entityType}>
                    {entityType}
                  </option>
                ))}
              </Select>
              <FormErrorMessage message={errors?.entity_type?.message} />
            </FormControl>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <MultiSelect
                className="custom-multi-select"
                options={businessTypes}
                hasSelectAll={true}
                value={selected}
                onChange={handleSelectChange}
                labelledBy={'Select'}
                valueRenderer={(selected, options) =>
                  customValueRenderer(selected as ServiceOption[], handleRemove)
                }
              />
              <FormErrorMessage message={typeError ? typeError : ''} />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email address"
                isInvalid={errors?.business_email?.message ? true : false}
                errorBorderColor="Secondary.Red"
                {...register('business_email', {
                  required: 'This field is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email address',
                  },
                  onChange: (e) =>
                    handleChange('business_email', e.target.value),
                })}
              />
              <FormErrorMessage message={errors?.business_email?.message} />
            </FormControl>
            <FormControl>
              <FormLabel>@ Handle</FormLabel>
              <Input
                type="text"
                isInvalid={errors?.business_handle?.message ? true : false}
                errorBorderColor="Secondary.Red"
                placeholder="_ _  _ _ _ _ _ _ _"
                {...register('business_handle', {
                  required: 'This field is required',
                  onChange: (e) =>
                    handleChange('business_handle', e.target.value),
                })}
              />
              <FormErrorMessage message={errors?.business_handle?.message} />
            </FormControl>
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(7,1fr)'} gap={6}>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Phone Type</FormLabel>
                <Select
                  placeholder="Select"
                  {...register('phoneType', {
                    required: 'This field is required',
                    onChange: (e) => handleChange('phoneType', e.target.value),
                  })}
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
                <FormLabel>Phone Number</FormLabel>
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
                  <Controller
                    name="phone_number"
                    control={control}
                    rules={{ required: 'This field is required' }} // Add any validation rules you need
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <PhoneInput
                        country={'us'}
                        value={value}
                        onChange={(phone) => {
                          onChange(phone);
                          handleChange('phone_number', phone); // Update localStorage
                        }}
                        // If you need to apply custom styles based on validation state
                        inputStyle={
                          error
                            ? { borderColor: 'red', borderWidth: '2px' }
                            : {}
                        }
                      />
                    )}
                  />
                  <FormErrorMessage message={errors?.phone_number?.message} />
                  {/* <PhoneInput country={'us'} /> */}
                </Box>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Extension</FormLabel>
                <Input
                  type="text"
                  placeholder="+1"
                  {...register('extension', {
                    required: 'This field is required',
                    onChange: (e) => handleChange('extension', e.target.value),
                  })}
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(2,1fr)'} gap={6}>
            <FormControl>
              <FormLabel>Incorporation State</FormLabel>
              <Select
                placeholder="Select"
                isInvalid={errors?.incorporation_state?.message ? true : false}
                errorBorderColor="Secondary.Red"
                {...register('incorporation_state', {
                  required: 'This field is required',
                  onChange: (e) =>
                    handleChange('incorporation_state', e.target.value),
                })}
              >
                {states.map((state, index) => (
                  <option key={index} value={state.label}>
                    {state.label}
                  </option>
                ))}
              </Select>
              <FormErrorMessage
                message={errors?.incorporation_state?.message}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Incorporation Year</FormLabel>
              <Select
                placeholder="Select"
                isInvalid={errors?.incorporation_year?.message ? true : false}
                errorBorderColor="Secondary.Red"
                {...register('incorporation_year', {
                  required: 'This field is required',
                  onChange: (e) =>
                    handleChange('incorporation_year', e.target.value),
                })}
              >
                {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
                <FormErrorMessage
                  message={errors?.incorporation_year?.message}
                />
              </Select>
            </FormControl>
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(3,1fr)'} gap={6}>
            <GridItem colSpan={3}>
              <FormControl>
                <FormLabel>Business address</FormLabel>
                <Input
                  mb={5}
                  placeholder="Address line 1"
                  type="text"
                  isInvalid={errors?.address?.message ? true : false}
                  errorBorderColor="Secondary.Red"
                  {...register('address', {
                    required: 'This field is required',
                    onChange: (e) => handleChange('address', e.target.value),
                  })}
                />
                <FormErrorMessage message={errors?.address?.message} />
                <Input
                  placeholder="Address line 2"
                  type="text"
                  {...register('address1', {
                    onChange: (e) => handleChange('address1', e.target.value),
                  })}
                />
              </FormControl>
            </GridItem>
            <Input
              type="text"
              placeholder="City"
              isInvalid={errors?.city?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('city', {
                required: 'This field is required',
                onChange: (e) => handleChange('city', e.target.value),
              })}
            />
            <FormErrorMessage message={errors?.city?.message} />
            <Select
              placeholder="State"
              isInvalid={errors?.state?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('state', {
                required: 'This field is required',
                onChange: (e) => handleChange('state', e.target.value),
              })}
            >
              {states.map((state, index) => (
                <option key={index} value={state.label}>
                  {state.label}
                </option>
              ))}
              <FormErrorMessage message={errors?.state?.message} />
            </Select>
            <Input
              type="text"
              placeholder="Zip Code"
              isInvalid={errors?.zip_code?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('zip_code', {
                required: 'This field is required',
                onChange: (e) => handleChange('zip_code', e.target.value),
              })}
            />
            <FormErrorMessage message={errors?.zip_code?.message} />
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(1,1fr)'} gap={6}>
            <FormControl>
              <FormLabel>Website</FormLabel>
              <Input
                type="text"
                placeholder="Enter website address"
                {...register('business_website', {
                  onChange: (e) =>
                    handleChange('business_website', e.target.value),
                })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>DUNS Number</FormLabel>
              <Input
                type="text"
                placeholder="Enter DUNS Number"
                isInvalid={errors?.duns_number?.message ? true : false}
                errorBorderColor="Secondary.Red"
                {...register('duns_number', {
                  required: 'This field is required',
                  pattern: {
                    value: /^\d{9}$/,
                    message: 'DUNS must be exactly 9 digits',
                  },
                  onChange: (e) => handleChange('duns_number', e.target.value),
                })}
              />
              <FormErrorMessage message={errors?.duns_number?.message} />
            </FormControl>
            <Flex
              {...getRootProps()}
              cursor={'pointer'}
              gap={3}
              bgColor={'Neutral.100'}
              direction="column"
              width="100%"
              height="120px"
              border="1px solid"
              borderColor={'Neutral.200'}
              borderRadius={20}
              alignItems="center"
              justifyContent="center"
            >
              <input {...getInputProps()} />
              <UploadIcon w={6} h={6} />
              <Text>
                Drag and drop your W9 files here, or click to{' '}
                <Text as={'span'} color={'Primary.Blue'}>
                  browse
                </Text>
              </Text>
            </Flex>
            <List>{files}</List>
          </Grid>
          <Flex gap={4}>
            <ButtonTheme
              btnText="Back"
              invert
              chakraProps={{
                w: '100%',
                onClick: () => previousStep(),
              }}
            />
            <ButtonTheme
              isLoading={isSubmitting}
              type="submit"
              btnText="Continue"
              chakraProps={{
                w: '100%',
                //   onClick: () => nextStep(),
              }}
              primary
            />
          </Flex>
        </form>
        <Flex fontSize={'xs'} mt={8} gap={4} alignItems={'center'}>
          <LockIcon w={4} h={4} />
          <Text color={'Neutral.700'}>
            This information will be used and shared with verification services,
            company credit reporting services, and financial partners for
            application processing, tailoring services, legal compliance, fraud
            prevention, and security.{' '}
            <Link color={'Primary.Blue'}>HEALE Privacy Policy.</Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default BusinessInfo;
