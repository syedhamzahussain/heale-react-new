import React, { useState, ChangeEvent, useEffect } from 'react';
import {
  Box, FormControl, FormLabel, Heading, Input, Text, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { toastSuccess, updateQuestionsInfo } from 'utils/helpers';
import { getQuestionaireToLocalStorage, setQuestionaireToLocalStorage } from 'services/localStorage.sevice';
import { saveBusinessApplication, updateBusinessApplication } from 'services/user.service';

interface FormData {
  application_type: string;
  nmlsNumber: string;
}

const LenderModal = ({ isOpen, onClose, setQuestions, lenderData, applicationId }: any) => {
  const savedValues = getQuestionaireToLocalStorage() ?? {};

  const [formData, setFormData] = useState<FormData>({
    application_type: 'lender',
    nmlsNumber: lenderData?.nmlsNumber ?? savedValues['lender']?.nmlsNumber ?? ''
  });

  useEffect(() => {
    if (lenderData) {
      const updatedFormData = {
        application_type: 'lender',
        nmlsNumber: lenderData.nmlsNumber
      };
      setFormData(updatedFormData);
      setQuestionaireToLocalStorage({ lender: updatedFormData });
      updateQuestionsInfo(updatedFormData, setQuestions, "lender");
    }
  }, [lenderData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    setQuestionaireToLocalStorage({ lender: updatedFormData });
    updateQuestionsInfo(updatedFormData, setQuestions, "lender");
  };

  const handleSubmit = async () => {
    try {
      const applicationData = { ...formData };
      const application = applicationId ? await updateBusinessApplication(applicationData, applicationId) : await saveBusinessApplication(applicationData);
      toastSuccess(application?.data?.message);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Lender Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Lender information</Heading>
          <Text mb={8} color={"Neutral.800"}>Enter required information for your Lender application. If you do not have or require an NMLS number, please contact support.</Text>
          <Box sx={{
            ".chakra-form__label": {
              fontSize: "sm",
              color: "Primary.Navy"
            },
            ".chakra-input": {
              fontSize: "sm",
            }
          }}>
            <FormControl>
              <FormLabel>NMLS Number</FormLabel>
              <Input type='text' name='nmlsNumber' value={formData.nmlsNumber} onChange={handleChange} placeholder='ID # 000000' />
            </FormControl>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Flex gap={4} mt={8} w="100%">
            <ButtonTheme btnText='Back' chakraProps={{ w: "100%", onClick: onClose }} />
            <ButtonTheme btnText='Submit' primary chakraProps={{ w: "100%", onClick: handleSubmit }} />
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LenderModal;
