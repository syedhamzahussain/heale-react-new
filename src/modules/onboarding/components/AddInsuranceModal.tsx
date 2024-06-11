// AddInsuranceModal.tsx
import React, { useState } from 'react';
import {
    Box, FormControl, FormLabel, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, Flex, Button,
    GridItem
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { UploadIcon } from 'modules/shared/Icons';

const AddInsuranceModal = ({ isOpen, onClose, onAdd }: any) => {
    const [insuranceData, setInsuranceData] = useState({
        insurer: '',
        type: '',
        policyNumber: '',
        startDate: '',
        expirationDate: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInsuranceData({ ...insuranceData, [name]: value });
    };

    const handleSubmit = () => {
        onAdd(insuranceData);
        onClose();
    };

    const {
        getRootProps,
        getInputProps,
    } = useDropzone();

    return (
        <Modal size={"3xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader p={0} textAlign={"center"}>
                    <Heading fontSize={"xl"} mb={4} color={"Primary.Navy"}>Add Insurance </Heading>
                    <Text fontSize={"md"} fontWeight={"500"} color={"Neutral.800"}>Enter your team members details and invite them to collaborate.</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Box sx={{
                        ".chakra-form__label": {
                            fontSize: "sm",
                            color: "Primary.Navy"
                        },
                        ".chakra-input": {
                            fontSize: "sm",
                        }
                    }} py={10} px={6}>

                        <Grid gridTemplateColumns={"repeat(2,1fr)"} mb={6} gap={6}>
                            <FormControl>
                                <FormLabel>Insurer</FormLabel>
                                <Input type='text' name='insurer' value={insuranceData.insurer} onChange={handleChange} placeholder='1523020' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Type</FormLabel>
                                <Select name='type' value={insuranceData.type} onChange={handleChange} placeholder='Select'>
                                    <option value='Commercial Auto Liability'>Commercial Auto Liability</option>
                                    <option value='Motor Truck Cargo Insurance'>Motor Truck Cargo Insurance</option>
                                    <option value='General Liability Insurance'>General Liability Insurance</option>
                                    <option value="Workers’ Compensation Insurance">Workers’ Compensation Insurance</option>
                                    <option value="Physical Damage Insurance">Physical Damage Insurance</option>
                                    <option value="Non-Trucking Liability Insurance">Non-Trucking Liability Insurance</option>
                                    <option value="Trailer Interchange Insurance">Trailer Interchange Insurance</option>
                                    <option value="Cargo Legal Liability Insurance">Cargo Legal Liability Insurance</option>
                                    <option value="Hazardous Materials Insurance">Hazardous Materials Insurance</option>
                                    <option value="Pollution Liability Insurance">Pollution Liability Insurance</option>
                                    <option value="Cyber Liability Insurance">Cyber Liability Insurance</option>
                                    <option value="Commercial Property Insurance">Commercial Property Insurance</option>
                                    <option value="Business Interruption Insurance">Business Interruption Insurance</option>
                                    <option value="Employee Practices Liability Insurance (EPLI)">Employee Practices Liability Insurance (EPLI)</option>
                                    <option value="Umbrella/Excess Liability Insurance">Umbrella/Excess Liability Insurance</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid mb={6} gridTemplateColumns={"repeat(7,1fr)"} gap={6} >
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <FormLabel>Policy Number</FormLabel>
                                    <Input type='text' name='policyNumber' value={insuranceData.policyNumber} onChange={handleChange} placeholder='123-4567-8910' />
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel>Start Date</FormLabel>
                                    <Input type='text' name='startDate' value={insuranceData.startDate} onChange={handleChange} placeholder='MM/DD/YYYY' />
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel>End Date</FormLabel>
                                    <Input type='text' name='expirationDate' value={insuranceData.expirationDate} onChange={handleChange} placeholder='MM/DD/YYYY' />
                                </FormControl>
                            </GridItem>
                        </Grid>
                        <Flex cursor={"pointer"} {...getRootProps()} gap={3} bgColor={"Neutral.100"} direction="column" width="100%" height="120px" border="2px dashed rgba(52, 70, 238, 1)" borderRadius={20} alignItems="center" justifyContent="center">
                            <input {...getInputProps()} />
                            <UploadIcon w={6} h={6} />
                            <Text>Drag and drop your W9 files here, or click to browse</Text>
                        </Flex>
                    </Box>
                </ModalBody>

                <ModalFooter gap={8} p={0}>
                    <ButtonTheme primary btnText='Upload' chakraProps={{
                        w: "100%",
                        onClick: handleSubmit
                    }} />
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddInsuranceModal;