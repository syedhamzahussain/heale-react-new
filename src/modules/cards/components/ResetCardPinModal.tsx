import { Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { CardIcon } from 'modules/shared/Icons';
import React from 'react';
import { ApplicationCollabType } from 'type';

const ResetCardPinModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"}>
                    <Flex gap={2} alignItems={"center"}>
                        <CardIcon />
                        <Heading fontSize={"xl"} color={"Primary.Navy"}>Reset PIN</Heading>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <FormControl>
                        <FormLabel>Reset your PIN number</FormLabel>
                        <Input type="text" placeholder="4-digits" />
                    </FormControl>
                </ModalBody>
                <ModalFooter gap={4} p={0} mt={8}>
                    <ButtonTheme invert btnText='Back' chakraProps={{ w: "100%", onClick: onClose }} />
                    <ButtonTheme primary btnText='Confirm' chakraProps={{ w: "100%" }} />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ResetCardPinModal;
