import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  List,
  ListItem,
  Select,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { useWizard } from 'react-use-wizard';
import MessageBox from '../MessageBox';
import {
  OfficeIcon,
  PersonalIcon,
  VerifyBusinessIcon,
  VerifyInfoIcon,
} from 'modules/shared/Icons';
import FormErrorMessage from 'modules/shared/FormErrorMessage';
import {
  countries,
  employmentStatus,
  sourceOfFunds,
  states,
} from 'utils/constants';
import { formatDateToISO, toastSuccess } from 'utils/helpers';
import { getAccountTypeFromLocalStorage } from 'services/localStorage.sevice';
import { saveProfile } from 'services/user.service';
import { useEffect, useState } from 'react';

interface Country {
  value: string;
  label: string;
}

const VerifyIdentity = () => {
  const { nextStep, previousStep } = useWizard();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const values: string[] = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCountries(values);
    setValue('heal_usage', values); // Manually update the value for react-hook-form
  };

  // Destructure and omit 'onChange' from register output
  const { onChange, ref, ...rest } = register('heal_usage', {
    required: 'This field is required',
  });

  console.log('errors', errors);

  const onSubmit = async (values: any) => {
    const {
      legal_first_name,
      legal_last_name,
      heal_usage,
      citizenship,
      source_of_funds,
      employment_status,
      ssn,
      day,
      month,
      year,
      city,
      state,
      zip_code,
      address_1,
      address_2,
    } = values;
    const formattedDob = formatDateToISO(day, month, year);
    // Convert the heal_usage array to a JSON string
    const healUsageJson = JSON.stringify(heal_usage);
    const userProfile = {
      account_type: getAccountTypeFromLocalStorage(),
      legal_first_name,
      legal_last_name,
      heal_usage: healUsageJson,
      citizenship,
      source_of_funds,
      employment_status,
      ssn,
      dob: formattedDob,
      city,
      state,
      zip_code,
      address_1,
      address_2,
    };
    const response = await saveProfile(userProfile);
    if (response?.status) {
      toastSuccess(response?.data?.message);
      nextStep();
    }
  };
  return (
    <Box>
      <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
        Verify your identity
      </Heading>
      <Text mb={8} color={'Neutral.800'}>
        We have a few questions to verify your identity for compliance purposes.
        Your information is transmitted and stored securely.
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
        {' '}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid mb={6} gridTemplateColumns={'repeat(3,1fr)'} gap={6}>
            <FormControl>
              <FormLabel htmlFor="legal_first_name">Legal First Name</FormLabel>
              <Input
                type="text"
                isInvalid={errors?.legal_first_name?.message ? true : false}
                errorBorderColor="Secondary.Red"
                placeholder="Legal First Name"
                {...register('legal_first_name', {
                  required: 'This field is required',
                  minLength: {
                    value: 4,
                    message: 'Minimum length should be 4',
                  },
                })}
              />
              <FormErrorMessage message={errors?.legal_first_name?.message} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="legal_last_name">Legal Last Name</FormLabel>
              <Input
                type="text"
                isInvalid={errors?.legal_last_name?.message ? true : false}
                errorBorderColor="Secondary.Red"
                placeholder="Your Last Name"
                {...register('legal_last_name', {
                  required: 'This field is required',
                  minLength: {
                    value: 4,
                    message: 'Minimum length should be 4',
                  },
                })}
              />
              <FormErrorMessage message={errors?.legal_last_name?.message} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="heal_usage">
                What countries do you operate in?
              </FormLabel>
              <Select
                id="heal_usage"
                multiple
                value={selectedCountries}
                onChange={handleSelectChange} // Manually handle onChange
                ref={ref} // Apply ref from register
                {...rest} // Spread the rest of the register properties except onChange
                isInvalid={!!errors.heal_usage}
              >
                {countries.map((country: Country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors.heal_usage && errors.heal_usage.message}
              </FormErrorMessage>
            </FormControl>
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(3,1fr)'} gap={6}>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor="dob">Date of birth</FormLabel>
                <Grid gridTemplateColumns={'repeat(3,1fr)'} gap={6}>
                  <Box>
                    <Select
                      placeholder="Month"
                      isInvalid={errors?.month?.message ? true : false}
                      errorBorderColor="Secondary.Red"
                      {...register('month', {
                        required: 'This field is required',
                      })}
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        )
                      )}
                    </Select>
                    <FormErrorMessage message={errors?.month?.message} />
                  </Box>
                  <Box>
                    <Select
                      placeholder="Day"
                      isInvalid={errors?.day?.message ? true : false}
                      errorBorderColor="Secondary.Red"
                      {...register('day', {
                        required: 'This field is required',
                      })}
                    >
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(
                        (day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        )
                      )}
                    </Select>
                    <FormErrorMessage message={errors?.day?.message} />
                  </Box>
                  <Box>
                    <Select
                      placeholder="Year"
                      isInvalid={errors?.year?.message ? true : false}
                      errorBorderColor="Secondary.Red"
                      {...register('year', {
                        required: 'This field is required',
                      })}
                    >
                      {Array.from({ length: 100 }, (_, i) => 2020 - i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      )}
                    </Select>
                    <FormErrorMessage message={errors?.year?.message} />
                  </Box>
                </Grid>
              </FormControl>
            </GridItem>
            <FormControl>
              <FormLabel>What is your source of funds?</FormLabel>
              <Select
                isInvalid={errors?.source_of_funds?.message ? true : false}
                errorBorderColor="Secondary.Red"
                placeholder="Select"
                {...register('source_of_funds', {
                  required: 'This field is required',
                })}
              >
                {sourceOfFunds.map((source, index) => (
                  <option key={index} value={source}>
                    {source}
                  </option>
                ))}
              </Select>
              <FormErrorMessage message={errors?.source_of_funds?.message} />
            </FormControl>
          </Grid>
          <Grid mb={6} gridTemplateColumns={'repeat(3,1fr)'} gap={6}>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor="">Street address</FormLabel>
                <Grid gridTemplateColumns={'repeat(3,1fr)'} gap={5}>
                  <GridItem colSpan={3}>
                    <Input
                      type="text"
                      isInvalid={errors?.address_1?.message ? true : false}
                      errorBorderColor="Secondary.Red"
                      placeholder="Address line 1"
                      {...register('address_1', {
                        required: 'This field is required',
                      })}
                    />
                    <FormErrorMessage message={errors?.address_1?.message} />
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Input
                      type="text"
                      // errorBorderColor="Secondary.Red"
                      placeholder="Address line 2"
                      {...register('address_2')}
                    />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Input
                      type="text"
                      isInvalid={errors?.city?.message ? true : false}
                      errorBorderColor="Secondary.Red"
                      placeholder="City"
                      {...register('city', {
                        required: 'This field is required',
                      })}
                    />
                    <FormErrorMessage message={errors?.city?.message} />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Select
                      isInvalid={errors?.state?.message ? true : false}
                      errorBorderColor="Secondary.Red"
                      placeholder="State"
                      {...register('state', {
                        required: 'This field is required',
                      })}
                    >
                      {states.map((state, index) => (
                        <option key={index} value={state?.label}>
                          {state?.label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage message={errors?.state?.message} />
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Input
                      type="text"
                      isInvalid={errors?.zip_code?.message ? true : false}
                      errorBorderColor="Secondary.Red"
                      placeholder="Zip code"
                      {...register('zip_code', {
                        required: 'This field is required',
                      })}
                    />
                    <FormErrorMessage message={errors?.zip_code?.message} />
                  </GridItem>
                </Grid>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl mb={6}>
                <FormLabel>Employment status</FormLabel>
                <Select
                  isInvalid={errors?.employment_status?.message ? true : false}
                  errorBorderColor="Secondary.Red"
                  placeholder="Select"
                  {...register('employment_status', {
                    required: 'This field is required',
                  })}
                >
                  {employmentStatus.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage
                  message={errors?.employment_status?.message}
                />
              </FormControl>
              <FormControl mb={6}>
                <FormLabel>Social Security number</FormLabel>
                <Input
                  type="text"
                  isInvalid={errors?.ssn?.message ? true : false}
                  errorBorderColor="Secondary.Red"
                  placeholder="(123-45-6789)"
                  {...register('ssn', {
                    required: 'This field is required',
                    pattern: {
                      value: /^\d{9}$/,
                      message: 'SSN must be exactly 9 digits',
                    },
                  })}
                />
                <FormErrorMessage message={errors?.ssn?.message} />
              </FormControl>

              <FormControl>
                <FormLabel>Citizenship</FormLabel>
                <Select
                  isInvalid={errors?.citizenship?.message ? true : false}
                  errorBorderColor="Secondary.Red"
                  placeholder="Select"
                  {...register('citizenship', {
                    required: 'This field is required',
                  })}
                >
                  {countries.map((country) => (
                    <option key={country.label} value={country.label}>
                      {country.label}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage message={errors?.citizenship?.message} />
              </FormControl>
            </GridItem>
          </Grid>
          <Flex justifyContent={'center'} mt={8} gap={6}>
            <ButtonTheme
              btnText="Back"
              chakraProps={{
                onClick: () => previousStep(),
                w: '35%',
              }}
            />
            <ButtonTheme
              isLoading={isSubmitting}
              type="submit"
              btnText="Continue"
              chakraProps={{
                //   onClick: () => nextStep(),
                w: '35%',
              }}
              primary
            />
          </Flex>
        </form>
      </Box>
      {/* <MessageBox
        loader
        desc="Content draft team underline variant plugin editor. Arrange slice reesizing library underline team ipsum figjam."
        icon={VerifyInfoIcon}
        title="Verifying your info"
      /> */}
      {/* <Box w={'60%'} textAlign={'center'}>
        <VerifyBusinessIcon w={16} h={16} />
        <Heading
          as={'h4'}
          mt={8}
          mb={4}
          fontSize={'3xl'}
          color={'Primary.Navy'}
        >
          Verify your business
        </Heading>
        <Text mb={8} color={'Neutral.800'}>
          To meet legal requirements, we need to verify a few details about your
          business before you continue using HEALE.
        </Text>
        <Box maxW={'80%'} margin={'0 auto'}>
          <Heading mb={8} fontSize={'xl'}>
            What you will need:
          </Heading>
          <List textAlign={'left'} spacing={8} mb={8}>
            <ListItem display={'flex'} alignItems={'center'} gap={4}>
              <OfficeIcon w={6} h={6} />
              <Text>Business address and incorporation details</Text>
            </ListItem>
            <ListItem display={'flex'} alignItems={'center'} gap={4}>
              <PersonalIcon
                w={6}
                h={6}
                sx={{
                  path: {
                    stroke: '#3446ee',
                  },
                }}
              />
              <Text>Owner information</Text>
            </ListItem>
          </List>
        </Box>
        <ButtonTheme
          btnText={'Continue'}
          chakraProps={{
            width: 'full',
          }}
          primary
        />
        <Link color="Primary.Blue" my={3} display={'inline-block'}>
          Close
        </Link>
      </Box> */}
      {/* <Box w={'60%'}>
        <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
          Unable to verify your identify
        </Heading>
        <Text mb={4} color={'Neutral.800'}>
          We were unable to verify your identity with our compliance partner.
          Some reasons for this might include:
        </Text>
        <List
          ms={4}
          listStyleType={'disc'}
          color={'Neutral.800'}
          textAlign={'left'}
          spacing={4}
          mb={4}
        >
          <ListItem>A typo in entry</ListItem>
          <ListItem>An error connecting with our compliance partner</ListItem>
          <ListItem>Another error</ListItem>
        </List>
        <Text mb={8} color={'Neutral.800'}>
          If you feel this is a mistake, reach out to{' '}
          <Link color={'Primary.Blue'}> support@healelabs.com</Link>
        </Text>
        <ButtonTheme
          btnText={'Try again'}
          chakraProps={{
            width: 'full',
          }}
          primary
        />
      </Box> */}
    </Box>
  );
};

export default VerifyIdentity;
