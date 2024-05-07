import { Box, Flex, FormControl, FormLabel, Heading, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text } from '@chakra-ui/react'
import { ClipBoardIcon, CloseIcon, SwitchIcon, ThreeDotsIcon } from 'modules/shared/Icons'
import React from 'react'
import { ApplicationCollabType } from 'type'

const DisputeTransactionModal = ({ isOpen, onClose }: ApplicationCollabType) => {
    return (
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
                    <Flex justifyContent={"space-between"} alignItems={"center"} py={8} borderBottom={"1px solid"} borderColor={"Neutral.200"}>
                        <Heading color={"Primary.Navy"} fontSize={"3xl"}>-$7,476.82 USD</Heading>
                        <Menu placement="bottom-end">
                            <MenuButton>
                                <ThreeDotsIcon />
                            </MenuButton>
                            <MenuList overflow={"hidden"} borderRadius={16} boxShadow={"1px 1px 6px 0px rgba(149, 153, 192, 0.4)"} py={0} sx={{
                                ".chakra-menu__menuitem": {
                                    p: 4,
                                }
                            }}>
                                <MenuItem gap={3}>
                                    <CloseIcon w={5} h={5} />
                                    <Text color={"Primary.Navy"} fontWeight={"600"}>
                                        Dispute Transaction
                                    </Text>
                                </MenuItem>
                                <MenuItem gap={3}>
                                    <ClipBoardIcon w={5} h={5} />
                                    <Text color={"Primary.Navy"} fontWeight={"600"}>
                                        Copy Link to Transaction
                                    </Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Box pt={8} sx={{
                        ".chakra-form__label": {
                            fontSize: "sm",
                            color: "Primary.Navy"
                        },
                        ".chakra-input": {
                            fontSize: "sm",
                        }
                    }}>
                        <FormControl mb={4}>
                            <FormLabel>HEALE Category</FormLabel>
                            <Select placeholder='Select'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default DisputeTransactionModal