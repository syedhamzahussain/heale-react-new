import React, { useCallback, useState } from 'react';
import {
    Box, FormControl, FormLabel, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, Flex, Button,
    List,
    ListItem
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { ConvertIcon, DocIcon, TrashIcon, UploadIcon } from 'modules/shared/Icons';

const AddSuretyModal = ({ isOpen, onClose, onAdd }: any) => {
    const [suretyBondData, setSuretyBondData] = useState({
        insurer: '',
        amount: '',
        policyNumber: '',
        startDate: '',
        expirationDate: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setSuretyBondData({ ...suretyBondData, [name]: value });
    };

    const handleSubmit = () => {
        onAdd(suretyBondData);
        onClose();
    };

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

    return (
        <Modal size={"3xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader p={0} textAlign={"center"}>
                    <Heading fontSize={"xl"} mb={4} color={"Primary.Navy"}>Add Surety Bond</Heading>
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
                                <Input type='text' name='insurer' value={suretyBondData.insurer} onChange={handleChange} placeholder='1523020' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Amount</FormLabel>
                                <Input type='number' name='amount' value={suretyBondData.amount} onChange={handleChange} placeholder='120' />
                            </FormControl>
                        </Grid>
                        <Grid mb={6} gridTemplateColumns={"repeat(2,1fr)"} gap={6} >
                            <FormControl>
                                <FormLabel>Policy Number</FormLabel>
                                <Input type='text' name='policyNumber' value={suretyBondData.policyNumber} onChange={handleChange} placeholder='12345678' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Start Date</FormLabel>
                                <Input type='text' name='startDate' value={suretyBondData.startDate} onChange={handleChange} placeholder='MM/DD/YYYY' />
                            </FormControl>
                        </Grid>
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

export default AddSuretyModal;