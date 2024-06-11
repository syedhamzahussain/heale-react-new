import {
    Box, Container, Flex, FormControl, FormLabel, Heading, Input, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import React, { useState } from 'react';
import { getQuestionaireToLocalStorage, setQuestionaireToLocalStorage } from 'services/localStorage.sevice';
import { updateQuestionsInfo } from 'utils/helpers';

const LenderModal = ({ isOpen, onClose, setQuestions }: any) => {

    let savedValues = getQuestionaireToLocalStorage() ?? {};

    const [formData, setFormData] = useState({
        nmlsNumber: savedValues['lender']?.nmlsNumber ?? ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        setQuestionaireToLocalStorage({ lender: updatedFormData });
        updateQuestionsInfo(updatedFormData, setQuestions, "lender");
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
                        <ButtonTheme btnText='Submit' primary chakraProps={{ w: "100%" }} />
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default LenderModal;
