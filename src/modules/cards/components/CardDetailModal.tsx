import { Box, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Progress, Text, Tooltip } from '@chakra-ui/react'
import { CardIcon, HealeLogoWhite, WifiIcon } from 'modules/shared/Icons'
import React, { useState } from 'react'
import { ApplicationCollabType } from 'type'

const CardDetailModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    const [showCardNumber, setShowCardNumber] = useState(false);
    const cardNumber = "4222 2222 2222 2222"

    const maskedCardNumber = cardNumber.replace(/.(?=.{4})/g, '•');

    const handleToggle = () => {
        setShowCardNumber(!showCardNumber);
    };
    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader borderBottom={"1px solid"} borderColor={"Neutral.200"} alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"} >
                    <Flex gap={2} alignItems={"center"}>
                        <CardIcon />
                        <Heading fontSize={"xl"} color={"Primary.Navy"}>Card Details</Heading>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Box mt={8}>
                        <Text mb={2} fontSize={"sm"} color={"Neutral.700"}>Jeff Bridges</Text>
                        <Heading mb={2} fontSize={"3xl"} color={"Primary.Navy"}>$1,500.00 USD</Heading>
                        <Flex mb={2} justifyContent={"space-between"}>
                            <Text fontSize={"sm"} color={"Neutral.700"}>Spent this month</Text>
                            <Text fontSize={"sm"} color={"Neutral.700"}>$2,000 limit</Text>
                        </Flex>
                        <Progress rounded={8} sx={{
                            ".css-1jrtelv": {
                                bgColor: "Primary.Blue"
                            }
                        }} size='md' value={90} />
                    </Box>
                    <Box color={"white"} mt={8} p={8} borderRadius={"22px"} bgGradient={"linear-gradient(90deg, #5976FF 0%, #3446E6 100%)"} boxShadow={"0.94px 0.94px 5.65px 0px rgba(149, 153, 192, 0.22)"}>
                        <HealeLogoWhite mt={-6} ms={-4} w={44} h={20} />
                        <Heading fontSize={"lg"}>Jeff Bridges</Heading>
                        <Flex mt={20} justifyContent={"space-between"} alignItems={"center"}>
                            <Box>
                                <Tooltip
                                    py={2}
                                    px={3}
                                    borderRadius={8}
                                    fontSize="xs"
                                    placement="top"
                                    hasArrow
                                    label={showCardNumber ? 'Click to hide' : 'Click to reveal'}
                                    bg="Primary.Navy"
                                    color="white"
                                >
                                    <Text cursor="pointer" onClick={handleToggle}>
                                        {showCardNumber ? cardNumber : maskedCardNumber}
                                    </Text>
                                </Tooltip>
                                <Flex gap={2}>
                                    <Text>EXP ••/••</Text>
                                    <Text>CVC •••</Text>
                                </Flex>
                            </Box>
                            <WifiIcon w={8} h={8} />
                        </Flex>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CardDetailModal