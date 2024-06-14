import { Box, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { CardIcon, HealeLogoWhite, WifiIcon } from 'modules/shared/Icons';
import React, { useState } from 'react';
import { ApplicationCollabType } from 'type';
import TrackCardModal from './TrackCardModal';

const ActivateCardModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    const { isOpen: isOpenTrackModal, onOpen: onOpenTrackModal, onClose: onCloseTrackModal } = useDisclosure()
    const [pin, setPin] = useState(false);
    return (
        <>
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
                        {pin ?
                            <FormControl>
                                <FormLabel>Set your pIN number</FormLabel>
                                <Input type="text" placeholder="1234" />
                            </FormControl>
                            :
                            <>
                                <Box color={"white"} mb={8} p={8} borderRadius={"22px"} bgGradient={"linear-gradient(90deg, #5976FF 0%, #3446E6 100%)"} boxShadow={"0.94px 0.94px 5.65px 0px rgba(149, 153, 192, 0.22)"}>
                                    <HealeLogoWhite mt={-6} ms={-4} w={44} h={20} />
                                    <Heading fontSize={"lg"} cursor={"pointer"}>Jeff Bridges</Heading>
                                    <Flex mt={20} justifyContent={"space-between"} alignItems={"center"}>
                                        <Box cursor="pointer">
                                            <Text>
                                                •••• •••• •••• 1234
                                            </Text>
                                            <Flex gap={4}>
                                                <Text>EXP: 01/26</Text>
                                                <Text>CVC: 123</Text>
                                            </Flex>
                                        </Box>
                                        <WifiIcon w={8} h={8} />
                                    </Flex>
                                </Box>
                                <FormControl>
                                    <FormLabel>Confirm Your CVV</FormLabel>
                                    <Input type="text" placeholder="123" />
                                </FormControl>
                            </>
                        }
                    </ModalBody>
                    <ModalFooter gap={4} p={0} mt={8}>
                        <ButtonTheme invert btnText='Back' chakraProps={{ w: "100%", onClick: onClose }} />
                        {pin ?
                            <ButtonTheme primary btnText='Activate' chakraProps={{ w: "100%", onClick: onOpenTrackModal }} />
                            :
                            <ButtonTheme primary btnText='Continue' chakraProps={{ w: "100%", onClick: () => setPin(!pin) }} />
                        }
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <TrackCardModal isOpen={isOpenTrackModal} onClose={onCloseTrackModal} />
        </>
    )
}

export default ActivateCardModal;
