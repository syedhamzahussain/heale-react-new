import { Box, Flex, FormControl, FormLabel, Heading, Icon, List, ListItem, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, Textarea, Tooltip, useDisclosure } from '@chakra-ui/react'
import { ClipBoardIcon, CloseIcon, ConvertIcon, DocIcon, RadioIcon, RadioIconChecked, ThreeDotsIcon, TrashIcon, UploadIcon } from 'modules/shared/Icons'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { TransactionDetailType } from 'type'
import DisputeTransactionModal from './DisputeTransactionModal'

const TransactionDetailModal = ({ isOpen, onClose, account, icon, title }: TransactionDetailType) => {
    const { isOpen: isOpenDispute, onOpen: onOpenDispute, onClose: onCloseDispute } = useDisclosure()
    const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setAcceptedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleDelete = (fileName: string) => {
        setAcceptedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
    };

    const files = acceptedFiles.map(file => (
        <ListItem
            justifyContent="space-between"
            bgColor="Neutral.100"
            px={4}
            py={2}
            borderRadius={8}
            display="flex"
            key={file.name}
        >
            <Flex gap={2} alignItems="center">
                <DocIcon />
                <Text>{file.name}</Text>
            </Flex>
            <Flex gap={4} alignItems="center">
                <ConvertIcon
                    sx={{
                        path: {
                            stroke: 'Primary.Navy',
                        },
                    }}
                />
                <TrashIcon
                    onClick={() => handleDelete(file.name)}
                    sx={{
                        path: {
                            stroke: 'Primary.Navy',
                        },
                        cursor: 'pointer',
                    }}
                />
            </Flex>
        </ListItem>
    ));
    const [note, setNote] = useState('');
    const [desc, setDesc] = useState('');
    const maxLength = 140;

    const handleNotes = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxLength) {
            setNote(inputValue);
        }
    };
    const handleDesc = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxLength) {
            setDesc(inputValue);
        }
    };

    const handleDisputeModal = () => {
        onOpenDispute()
        onClose()
    };
    return (
        <>
            <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent p={10}>
                    <ModalHeader borderBottom={"1px solid"} borderColor={"Neutral.200"} alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"} >
                        <Icon sx={{
                            path: {
                                stroke: "Neutral.700"
                            }
                        }} as={icon} w={4} h={4} />
                        <Heading fontSize={"xl"} color={"Primary.Navy"}>{title}</Heading>
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
                                    <MenuItem gap={3} onClick={handleDisputeModal}>
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
                        <Box py={8} borderBottom={"1px solid"} borderColor={"Neutral.200"}>
                            <Flex alignItems={"start"} gap={2} pb={4} pos={"relative"} _after={{
                                content: "''",
                                pos: "absolute",
                                w: "2px",
                                h: "65%",
                                bgColor: "Neutral.200",
                                left: "8px",
                                bottom: "0",
                            }}>
                                <Box>
                                    {account === "P2P" ? <RadioIconChecked /> : <RadioIcon mb={1} />}
                                </Box>
                                <Box>
                                    <Tooltip py={2} px={3} borderRadius={8} fontSize={"xs"} placement='top' hasArrow label='View all Transactions' bg='Primary.Navy' color='white'>
                                        <Text _hover={{
                                            textDecor: "underline"
                                        }} fontWeight={"600"} cursor={"pointer"} color={account === "P2P" ? "Primary.Blue" : "Primary.Navy"}>From P2P</Text>
                                    </Tooltip>
                                    <Text color={"Neutral.700"}>P2P ••••C1cb</Text>
                                    <Text color={"Neutral.700"}>Feb 1 at 11:21 AM</Text>
                                </Box>
                            </Flex>
                            <Flex alignItems={"start"} gap={2}
                            >
                                <Box>
                                    {account === "Checking" ? <RadioIconChecked /> : <RadioIcon mb={1} />}
                                </Box>
                                <Box>
                                    <Tooltip py={2} px={3} borderRadius={8} fontSize={"xs"} placement='top' hasArrow label='View all Transactions' bg='Primary.Navy' color='white'>
                                        <Text _hover={{
                                            textDecor: "underline"
                                        }} fontWeight={"600"} cursor={"pointer"} color={account === "Checking" ? "Primary.Blue" : "Neutral.700"}>To Checking</Text>
                                    </Tooltip>
                                    <Text color={"Neutral.700"}>Checking ••••4758</Text>
                                    <Text color={"Neutral.700"}>Feb 1 at 11:21 AM</Text>
                                </Box>
                            </Flex>
                        </Box>
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
                            <FormControl mb={4}>
                                <FormLabel>Notes</FormLabel>
                                <Box pos={"relative"}>
                                    <Textarea value={note} onChange={handleNotes} fontSize={"sm"} placeholder='Add a note' resize={"none"} size={"lg"} rows={4}
                                        maxLength={maxLength} />
                                    <Text fontSize={"xs"} color={"Neutral.700"} bottom={2} right={2} pos={"absolute"}>{note.length}/{maxLength}</Text>
                                </Box>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Bank Description</FormLabel>
                                <Box pos={"relative"}>
                                    <Textarea value={desc}
                                        onChange={handleDesc}
                                        fontSize={"sm"}
                                        placeholder='HEALECHE_FSFEFXFCF234D REF#58702'
                                        resize={"none"}
                                        size={"lg"}
                                        rows={4}
                                        maxLength={maxLength} />
                                    <Text fontSize={"xs"} color={"Neutral.700"} bottom={2} right={2} pos={"absolute"}>{desc.length}/{maxLength}</Text>
                                </Box>
                            </FormControl>
                            <Flex {...getRootProps()} cursor={'pointer'} gap={3}
                                bgColor={'Neutral.100'}
                                direction="column"
                                width="100%"
                                height="120px"
                                border="1px solid"
                                borderColor={"Neutral.200"}
                                borderRadius={20}
                                alignItems="center"
                                justifyContent="center">
                                <input {...getInputProps()} />
                                <UploadIcon w={6} h={6} />
                                <Text>Drag and drop your W9 files here, or click to <Text as={"span"} color={"Primary.Blue"}>browse</Text></Text>
                            </Flex>
                            <List>{files}</List>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal >
            <DisputeTransactionModal isOpen={isOpenDispute} onClose={onCloseDispute} />
        </>
    )
}

export default TransactionDetailModal