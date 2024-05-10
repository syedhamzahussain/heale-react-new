import { Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { SwitchIcon } from 'modules/shared/Icons'
import React from 'react'
import { Wizard } from 'react-use-wizard'
import { ApplicationCollabType } from 'type'
import WizardHeaderDisputeModal from './DisputeTransactionWizard/WizardHeaderDisputeModal'
import ConfirmTransaction from './DisputeTransactionWizard/ConfirmTransaction'
import Questions from './DisputeTransactionWizard/Questions'
import Review from './DisputeTransactionWizard/Review'
import DisputeTransactionSuccess from './DisputeTransactionSuccess'

const DisputeTransactionModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    const { isOpen: isOpenDisputeSuccess, onOpen: onOpenDisputeSuccess, onClose: onCloseDisputeSuccess } = useDisclosure()
    const handleCloseDispute = () => {
        onOpenDisputeSuccess()
        onClose()
    };
    return (
        <>
            <Modal size={"5xl"} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent p={10}>
                    <ModalHeader borderBottom={"1px solid"} borderColor={"Neutral.200"} alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"} >
                        <SwitchIcon sx={{
                            path: {
                                stroke: "Neutral.700"
                            }
                        }} w={4} h={4} />
                        <Heading fontSize={"xl"} color={"Primary.Navy"}>Dispute Transaction</Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={0}>
                        <Flex mt={8} gap={8}>
                            <Wizard startIndex={0} header={<WizardHeaderDisputeModal />}>
                                <ConfirmTransaction />
                                <Questions />
                                <Review onClose={handleCloseDispute} />
                            </Wizard>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <DisputeTransactionSuccess isOpen={isOpenDisputeSuccess} onClose={onCloseDisputeSuccess} />
        </>
    )
}

export default DisputeTransactionModal