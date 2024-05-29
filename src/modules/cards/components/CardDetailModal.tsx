import { Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { ApplicationCollabType } from 'type'

const CardDetailModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    return (
        <Modal size={"5xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader borderBottom={"1px solid"} borderColor={"Neutral.200"} alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"} >

                    <Heading fontSize={"xl"} color={"Primary.Navy"}>Dispute Transaction</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CardDetailModal