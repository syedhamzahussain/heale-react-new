import { Box, FormControl, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'
import { ApplicationCollabType } from 'type'

const ApplicationCollabModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    return (
        <Modal size={"4xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader p={0} mb={8} textAlign={"center"}>
                    <Heading fontSize={"xl"} mb={4} color={"Primary.Navy"}>Add Application Collaborator</Heading>
                    <Text fontSize={"md"} fontWeight={"500"} color={"Neutral.800"}>Enter your team members details and invite them to collaborate.</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0} mb={8}>
                    <Box pos={"relative"} py={10} px={6} border={"1px solid"} borderColor={"Neutral.200"} borderRadius={8} borderTop={"4px solid"} borderTopColor={"Primary.Blue"}>
                        <Box p={"3px 16px 3px 16px"} pos={"absolute"} fontSize={"xs"} top={0} color={"white"} bgColor={"Primary.Blue"} borderRadius={"0px 0px 4px 4px"}>User 1</Box>
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Select placeholder='Driver'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                    </Box>
                </ModalBody>

                <ModalFooter gap={8} flexDir={"column"} p={0}>
                    <ButtonTheme invert btnText='Create a another user' chakraProps={{
                        w: "100%"
                    }} />
                    <ButtonTheme primary btnText='Add Collaborator' chakraProps={{
                        w: "100%"
                    }} />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ApplicationCollabModal