import { Box, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { RequestIcon } from 'modules/shared/Icons'
import React from 'react'
import { ApplicationCollabType } from 'type'

const TransactionRequestModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    return (
        <Modal size={"3xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader p={0}>
                    <Flex alignItems={"center"} gap={2}>
                        <RequestIcon w={16} h={16} />
                        <Heading fontSize={"xl"} mb={4} color={"Primary.Navy"}>Payment Request</Heading>
                    </Flex>
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
                    }}>
                        <FormControl>
                            <FormLabel>Insurer</FormLabel>
                            <Input type='text' placeholder='1523020' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Type</FormLabel>
                            <Select placeholder='Select'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                    </Box>
                </ModalBody>

                <ModalFooter gap={8} p={0}>
                    <ButtonTheme primary btnText='Upload' chakraProps={{
                        w: "100%"
                    }} />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default TransactionRequestModal