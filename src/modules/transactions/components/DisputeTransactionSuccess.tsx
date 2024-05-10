import { Box, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme';
import { CloudDownloadIcon, FlyIcon } from 'modules/shared/Icons';
import { ApplicationCollabType } from 'type'

const imageSrc = require('./../../../assets/imgs/Image.png');

const DisputeTransactionSuccess = ({ isOpen, onClose }: ApplicationCollabType) => {
    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Image src={imageSrc} />
                    <Box pt={8}>
                        <Heading mb={4} fontSize={"2xl"} color={"Primary.Navy"}>Your transaction dispute has been submitted</Heading>
                        <Text color={"Neutral.800"} mb={8}>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Text>
                        <Box py={8} mb={8} borderY={"1px solid"} borderColor={"Neutral.200"}>
                            <Flex justifyContent={"space-between"} alignItems={"center"}>
                                <Text fontSize={"sm"} color={"Neutral.700"}>Transaction Dispute</Text>
                                <Flex gap={2}>
                                    <CloudDownloadIcon w={5} h={5} sx={{
                                        path: {
                                            stroke: "Neutral.700"
                                        }
                                    }} />
                                    <FlyIcon w={5} h={5} sx={{
                                        path: {
                                            stroke: "Neutral.700"
                                        }
                                    }} />
                                </Flex>
                            </Flex>
                            <Heading color={"Primary.Navy"} fontSize={"3xl"}>-$7,476.82 USD</Heading>
                        </Box>
                        <ButtonTheme btnText='Go to Transactions' primary chakraProps={{
                            w: "100%"
                        }} />
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default DisputeTransactionSuccess