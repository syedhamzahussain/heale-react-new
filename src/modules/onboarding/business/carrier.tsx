import React, { useState, ChangeEvent, useEffect } from 'react';
import {
  Box, FormControl, FormLabel, Grid, Heading, Input, Text, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Table, Thead, Tbody, Tr, Th, Td, TableContainer,
  Tfoot
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { CrossIcon, PencilIcon, PlusIcon, TrashIcon } from 'modules/shared/Icons';
import AddInsuranceModal from '../components/AddInsuranceModal';
import { toastSuccess, updateQuestionsInfo } from 'utils/helpers';
import { getQuestionaireToLocalStorage, setQuestionaireToLocalStorage } from 'services/localStorage.sevice';
import { saveBusinessApplication, updateBusinessApplication } from 'services/user.service';
import { MultiSelect } from 'react-multi-select-component';
import { ServiceOption } from './broker';

interface FormData {
  application_type: string;
  usdot_number: string;
  docket_number: string;
  services: string[];
  insurance: Insurance[];
}

interface Insurance {
  insurer: string;
  type: string;
  policyNumber: string;
  startDate: string;
  expirationDate: string;
}

const CarrierModal = ({ isOpen, onClose, setQuestions, carrierData, applicationId }: any) => {
  const savedValues = getQuestionaireToLocalStorage() ?? {};

  const [formData, setFormData] = useState<FormData>({
    application_type: 'carrier',
    usdot_number: carrierData?.usdot_number ?? savedValues['carrier']?.usdot_number ?? '',
    docket_number: carrierData?.docket_number ?? savedValues['carrier']?.docket_number ?? '',
    services: carrierData?.services ?? savedValues['carrier']?.services ?? [],
    insurance: carrierData?.insurance ?? savedValues['carrier']?.insurance ?? [],
  });

  useEffect(() => {
    if (carrierData) {
      const updatedFormData = {
        application_type: 'carrier',
        usdot_number: carrierData.usdot_number,
        docket_number: carrierData.docket_number,
        services: carrierData.services,
        insurance: carrierData.insurance,
      };
      setFormData(updatedFormData);
      setQuestionaireToLocalStorage({ carrier: updatedFormData });
      updateQuestionsInfo(updatedFormData, setQuestions, "carrier");
    }
  }, [carrierData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    setQuestionaireToLocalStorage({ carrier: updatedFormData });
    updateQuestionsInfo(updatedFormData, setQuestions, "carrier");
  };

  const handleSelectChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    const updatedFormData = { ...formData, services: selectedValues };
    setFormData(updatedFormData);
    setQuestionaireToLocalStorage({ carrier: updatedFormData });
    updateQuestionsInfo(updatedFormData, setQuestions, "carrier");
  };

  const handleInsuranceAdd = (insurance: Insurance) => {
    const updatedFormData = { ...formData, insurance: [...formData.insurance, insurance] };
    setFormData(updatedFormData);
    setQuestionaireToLocalStorage({ carrier: updatedFormData });
    updateQuestionsInfo(updatedFormData, setQuestions, "carrier");
  };

  const handleSubmit = async () => {
    try {
      const applicationData = {
        ...formData,
        services: JSON.stringify(formData.services),
        insurance: JSON.stringify(formData.insurance),
      };

      const application = applicationId ? await updateBusinessApplication(applicationData, applicationId) : await saveBusinessApplication(applicationData);
      toastSuccess(application?.data?.message);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  const serviceOptions = [
    { value: 'Full Truckload (FTL)', label: 'Full Truckload (FTL)' },
    { value: 'Flatbed Trucks', label: 'Flatbed Trucks' },
    { value: 'Refrigerated Trucks (Reefers)', label: 'Refrigerated Trucks (Reefers)' },
    { value: '3PL/4PL', label: '3PL/4PL' },
    { value: 'Last-Mile Services', label: 'Last-Mile Services' },
    { value: 'Less-Than-Truckload (LTL)', label: 'Less-Than-Truckload (LTL)' },
    { value: 'Partial Truckload (PTL)', label: 'Partial Truckload (PTL)' },
    { value: 'Drayage', label: 'Drayage' },
    { value: 'Air Freight', label: 'Air Freight' },
    { value: 'Rail', label: 'Rail' },
    { value: 'Intermodal', label: 'Intermodal' },
    { value: 'Specialized', label: 'Specialized' },
  ];

  const { isOpen: isInsuranceOpen, onOpen: onInsuranceOpen, onClose: onInsuranceClose } = useDisclosure();

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
    const updatedServices = formData.services.filter(value => value !== optionToRemove.value);
    setFormData({ ...formData, services: updatedServices });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Carrier Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Carrier information</Heading>
          <Text mb={8} color={"Neutral.800"}>Enter your motor carrier information and select the type of services you offer.</Text>
          <Box sx={{
            ".chakra-form__label": {
              fontSize: "sm",
              color: "Primary.Navy"
            },
            ".chakra-input": {
              fontSize: "sm",
            }
          }}>
            <Grid mb={6} gridTemplateColumns={"repeat(3,1fr)"} gap={6}>
              <FormControl>
                <FormLabel>USDOT Number</FormLabel>
                <Input type='text' name='usdot_number' value={formData.usdot_number} onChange={handleChange} placeholder='USDOT1523020' />
              </FormControl>
              <FormControl>
                <FormLabel>Docket Number</FormLabel>
                <Input type='text' name='docket_number' value={formData.docket_number} onChange={handleChange} placeholder='MC-123456' />
              </FormControl>
              <FormControl>
                <FormLabel>Services</FormLabel>
                <MultiSelect
                  options={serviceOptions}
                  hasSelectAll={true}
                  value={serviceOptions.filter(option => formData.services.includes(option.value))}
                  onChange={handleSelectChange}
                  labelledBy={"Select"}
                  valueRenderer={(selected, options) => customValueRenderer(selected as ServiceOption[], handleRemove)}
                />
              </FormControl>
            </Grid>
          </Box>
          <Box mt={8}>
            <Heading mb={8} color={"Primary.Navy"} fontSize={"xl"}>Insurance</Heading>
            <TableContainer sx={{
              "th": {
                color: "Neutral.700",
                fontSize: "sm",
                textTransform: "capitalize",
                fontWeight: "400"
              },
              "td": {
                color: "Primary.Navy",
                fontSize: "sm",
                textTransform: "capitalize",
                fontWeight: "600"
              }
            }}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Insurer</Th>
                    <Th>Type</Th>
                    <Th>Policy Number</Th>
                    <Th>Start Date</Th>
                    <Th>Expiration Date</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {formData.insurance?.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.insurer}</Td>
                      <Td>{item.type}</Td>
                      <Td>{item.policyNumber}</Td>
                      <Td>{item.startDate}</Td>
                      <Td>{item.expirationDate}</Td>
                      <Td>
                        <Flex gap={4}>
                          <TrashIcon />
                          <PencilIcon />
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                  <Tr>
                    <Td colSpan={6}>
                      <Text fontWeight={"400"} color={"Primary.Navy"} textAlign={"center"}>
                        Click on <Text as={"span"} fontWeight={"600"}>+ Add Insurance </Text>to upload documents
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th colSpan={6}>
                      <Flex cursor={'pointer'} onClick={onInsuranceOpen} gap={2} alignItems={"center"} color={"Primary.Blue"} fontSize={"md"} >
                        <PlusIcon /><Text> Add Insurance</Text>
                      </Flex>
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Flex gap={4} maxW={"50%"} margin={"0 auto"} mt={8}>
            <ButtonTheme btnText='Back' chakraProps={{ w: "100%", onClick: onClose }} />
            <ButtonTheme btnText='Submit' primary chakraProps={{ w: "100%", onClick: handleSubmit }} />
          </Flex>
        </ModalFooter>
      </ModalContent>
      <AddInsuranceModal isOpen={isInsuranceOpen} onClose={onInsuranceClose} onAdd={handleInsuranceAdd} />
    </Modal>
  );
};

export default CarrierModal;
