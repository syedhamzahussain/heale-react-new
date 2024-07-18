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
import { ConvertIcon, CrossIcon, DocIcon, LockIcon, TrashIcon, UploadIcon } from 'modules/shared/Icons';
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
import { useCallback, useState } from 'react';
import { ServiceOption } from 'modules/onboarding/business/broker';

const BusinessInfo = () => {
  const { nextStep, previousStep } = useWizard();
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setAcceptedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDelete = (fileName: string) => {
    setAcceptedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  const files = acceptedFiles.map(file => (
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
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { setBusinessTypes, selectedTypes } = useBusiness();


  const [typeError, setTypeError] = useState<any>(null);

  

  const onSubmit = async (values: any) => {
    if(selected.length === 0){
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
        <Text color={"Primary.Blue"} bgColor={"Neutral.100"} py={1} px={2} borderRadius={40} fontSize={"xs"} cursor={"pointer"} display={"inline-flex"} key={value} alignItems={"center"} gap={1} mr={1}>
          {label}
          <CrossIcon w={2} h={2}
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

  return (
    <Box w={{ lg: '50%', md: "60%", base: "100%" }}>
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
                {...register('employer_identification_number', {
                  required: 'This field is required',
                  pattern: {
                    value: /^\d{2}-\d{7}$/,
                    message: 'EIN must be in the format XX-XXXXXXX',
                  },
                })}
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
                className='custom-multi-select'
                options={businessTypes}
                hasSelectAll={true}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
                valueRenderer={(selected, options) => customValueRenderer(selected as ServiceOption[], handleRemove)}
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
                })}
              />
              <FormErrorMessage message={errors?.business_handle?.message} />
            </FormControl>
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(7,1fr)'} gap={6}>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Phone Type</FormLabel>
                <Select placeholder="Select">
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
                        onChange={onChange}
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
                <Input type="text" placeholder="+1" />
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
                  })}
                />
                <FormErrorMessage message={errors?.address?.message} />
                <Input
                  placeholder="Address line 2"
                  type="text"
                  {...register('address1')}
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
              })}
            />
            <FormErrorMessage message={errors?.city?.message} />
            <Select
              placeholder="State"
              isInvalid={errors?.state?.message ? true : false}
              errorBorderColor="Secondary.Red"
              {...register('state', {
                required: 'This field is required',
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
              })}
            />
            <FormErrorMessage message={errors?.zip_code?.message} />
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(1,1fr)'} gap={6}>
            <FormControl>
              <FormLabel>Website</FormLabel>
              <Input
                type="text"
                placeholder="Enter name"
                {...register('business_website')}
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
                })}
              />
              <FormErrorMessage message={errors?.duns_number?.message} />
            </FormControl>
            <Flex {...getRootProps()} cursor={'pointer'} gap={3}
              bgColor={'Neutral.100'}
              direction="column"
              width="100%"
              height="120px"
              border="1px solid"
              borderColor={"Neutral.200"}
              borderRadius={20}
              alignItems="center"
              justifyContent="center">
              <input {...getInputProps()} />
              <UploadIcon w={6} h={6} />
              <Text>Drag and drop your W9 files here, or click to <Text as={"span"} color={"Primary.Blue"}>browse</Text></Text>
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
