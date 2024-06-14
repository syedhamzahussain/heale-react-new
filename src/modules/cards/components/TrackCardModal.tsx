import { Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { CardIcon } from 'modules/shared/Icons';
import React from 'react';
import { ApplicationCollabType } from 'type';

const TrackCardModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"}>
                    <Flex gap={2} alignItems={"center"}>
                        <CardIcon />
                        <Heading fontSize={"xl"} color={"Primary.Navy"}>Activate Card</Heading>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Image src='/Imageplaceholder.png' alt='image' w={'550px'} /><Heading my={4} fontSize={"2xl"} color={"Primary.Navy"}>Woohoo! Your card has been activated</Heading>
                    <Heading my={4} fontSize={"2xl"} color={"Primary.Navy"}>Your card is still being processed. Please check back later to see a status update.</Heading>
                    <Text color={"Neutral.800"}>Your physical card should arrive in the mail within (5) business days.</Text>
                </ModalBody>
                <ModalFooter gap={4} p={0} mt={8}>
                    <a href="/dashboard/cards" style={{
                        width: "100%"
                    }}>
                        <ButtonTheme primary btnText='Go to Cards' chakraProps={{ w: "100%" }} />
                    </a>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default TrackCardModal;
