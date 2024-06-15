import { Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { CardIcon } from 'modules/shared/Icons';
import React from 'react';
import { Wizard } from 'react-use-wizard';
import { CreateCardModalType } from 'type';
import CardWizardHeader from './CardWizard/CardWizardHeader';
import CardDetails from './CardWizard/CardDetails';
import CustomizeCard from './CardWizard/CustomizeCard';
import ReviewCard from './CardWizard/ReviewCard';

const CreateCardModal = ({ isOpen, onClose, onOpenActiveCard }: CreateCardModalType) => {
    const handleActiveCardModal = () => {
        onClose();
        onOpenActiveCard();
    };
    return (
        <Modal size={"6xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"}>
                    <Flex gap={2} alignItems={"center"}>
                        <CardIcon />
                        <Heading fontSize={"xl"} color={"Primary.Navy"}>Create Card</Heading>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Flex gap={8}>
                        <Wizard header={<CardWizardHeader />}>
                            <CardDetails />
                            <CustomizeCard />
                            <ReviewCard onClick={handleActiveCardModal} />
                        </Wizard>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CreateCardModal;
