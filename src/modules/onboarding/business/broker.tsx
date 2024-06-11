import React, { useState, ChangeEvent } from 'react';
import {
    Box, FormControl, FormLabel, Grid, Heading, Input, Select, Text, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Table, Thead, Tbody, Tr, Th, Td, TableContainer,
    Tfoot
} from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { PencilIcon, PlusIcon, TrashIcon } from 'modules/shared/Icons';
import AddInsuranceModal from '../components/AddInsuranceModal';
import AddSuretyModal from '../components/AddSuretyModal';
import axios from 'axios';
import { updateQuestionsInfo } from 'utils/helpers';

interface FormData {
    usdotNumber: string;
    docketNumber: string;
    services: string[];
    insurance: Insurance[];
    suretyBond: SuretyBond[];
}

interface Insurance {
    insurer: string;
    type: string;
    policyNumber: string;
    startDate: string;
    expirationDate: string;
}

interface SuretyBond {
    insurer: string;
    amount: string;
    policyNumber: string;
    startDate: string;
    expirationDate: string;
}

const BrokerModal = ({ isOpen, onClose, onCompletionUpdate, setQuestions }: any) => {
    const [formData, setFormData] = useState<FormData>({
        usdotNumber: '',
        docketNumber: '',
        services: [],
        insurance: [],
        suretyBond: []
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        updateQuestionsInfo(updatedFormData, setQuestions, "broker");
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, options } = e.target;
        const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
        setFormData({ ...formData, [name]: selectedOptions });
    };

    const handleInsuranceAdd = (insurance: Insurance) => {
        setFormData({ ...formData, insurance: [...formData.insurance, insurance] });
    };

    const handleSuretyBondAdd = (suretyBond: SuretyBond) => {
        setFormData({ ...formData, suretyBond: [...formData.suretyBond, suretyBond] });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('/api/broker', formData);
            onCompletionUpdate('Broker', formData.usdotNumber && formData.docketNumber && formData.services.length ? 5 : 0);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const { isOpen: isInsuranceOpen, onOpen: onInsuranceOpen, onClose: onInsuranceClose } = useDisclosure();
    const { isOpen: isSuretyOpen, onOpen: onSuretyOpen, onClose: onSuretyClose } = useDisclosure();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Broker Information</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Broker information</Heading>
                    <Text mb={8} color={"Neutral.800"}>Enter required documentation for your Freight Broker application</Text>
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
                                <Input type='text' name='usdotNumber' value={formData.usdotNumber} onChange={handleChange} placeholder='USDOT1523020' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Docket Number</FormLabel>
                                <Input type='text' name='docketNumber' value={formData.docketNumber} onChange={handleChange} placeholder='MC-123456' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Services</FormLabel>
                                <Select name='services' value={formData.services} onChange={handleSelectChange} placeholder='Select' multiple>
                                    <option value='Full Truckload (FTL)'>Full Truckload (FTL)</option>
                                    <option value='Flatbed Trucks'>Flatbed Trucks</option>
                                    <option value='Refrigerated Trucks (Reefers)'>Refrigerated Trucks (Reefers)</option>
                                    <option value='3PL/4PL'>3PL/4PL</option>
                                    <option value='Last-Mile Services'>Last-Mile Services</option>
                                    <option value='Less-Than-Truckload (LTL)'>Less-Than-Truckload (LTL)</option>
                                    <option value='Partial Truckload (PTL)'>Partial Truckload (PTL)</option>
                                    <option value='Drayage'>Drayage</option>
                                    <option value='Air Freight'>Air Freight</option>
                                    <option value='Rail'>Rail</option>
                                    <option value='Intermodal'>Intermodal</option>
                                    <option value='Specialized'>Specialized</option>
                                </Select>
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
                                    {formData.insurance.map((item, index) => (
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
                    <Box mt={8}>
                        <Heading mb={8} color={"Primary.Navy"} fontSize={"xl"}>Surety Bond</Heading>
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
                                        <Th>Amount</Th>
                                        <Th>Policy Number</Th>
                                        <Th>Start Date</Th>
                                        <Th>Expiration Date</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {formData.suretyBond.map((item, index) => (
                                        <Tr key={index}>
                                            <Td>{item.insurer}</Td>
                                            <Td>{item.amount}</Td>
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
                                                Click on <Text as={"span"} fontWeight={"600"}>+ Add Surety Bond </Text>to upload documents
                                            </Text>
                                        </Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th colSpan={6}>
                                            <Flex cursor={'pointer'} onClick={onSuretyOpen} gap={2} alignItems={"center"} color={"Primary.Blue"} fontSize={"md"} >
                                                <PlusIcon /><Text>Add Surety Bond</Text>
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
            <AddSuretyModal isOpen={isSuretyOpen} onClose={onSuretyClose} onAdd={handleSuretyBondAdd} />
        </Modal>
    );
};

export default BrokerModal;
