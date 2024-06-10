import { Box, Flex, FormControl, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { CardIcon } from 'modules/shared/Icons';
import React, { useState } from 'react';
import { ApplicationCollabType } from 'type';

const LostDamagedCardModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    const [issue, setIssue] = useState(false)
    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"}>
                    <Flex gap={2} alignItems={"center"}>
                        <CardIcon />
                        <Heading fontSize={"xl"} color={"Primary.Navy"}>Lost or Damaged Card</Heading>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    {issue ?
                        <Box>
                            <Text mb={8} color={"Neutral.700"}>Please confirm your shipping address and we’ll send you a new card.</Text>
                            <Box border={"1px solid"} borderColor={"Neutral.100"} borderRadius={8} p={6}>
                                <Flex justifyContent={"space-between"} mb={6}>
                                    <Heading fontSize={"md"} color={"Primary.Navy"}>Shipping address</Heading>
                                    <ButtonTheme btnText='Edit' small />
                                </Flex>
                                <Text w={"170px"} fontSize={"sm"} color={"Primary.Navy"}>525 Brannon Street Unit 24
                                    Los Angeles, CA 90026</Text>
                            </Box>
                        </Box> :
                        <FormControl>
                            <FormLabel>What happened to your card?</FormLabel>
                            <Select placeholder='Select'>
                                <option value='option1'>Lost physical card</option>
                            </Select>
                        </FormControl>
                    }
                </ModalBody>
                <ModalFooter gap={4} p={0} mt={8}>
                    <ButtonTheme invert btnText='Back' chakraProps={{ w: "100%", onClick: onClose }} />
                    <ButtonTheme primary btnText={issue ? 'Confirm' : 'Next'} chakraProps={{ w: "100%", onClick: () => setIssue(!issue) }} />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default LostDamagedCardModal;
