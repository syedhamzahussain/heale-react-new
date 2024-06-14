import { Box, Flex, Grid, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Progress, Text, Tooltip } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { CardIcon, HealeLogoWhite, WifiIcon } from 'modules/shared/Icons';
import React, { useState } from 'react';
import { CardModalType } from 'type';

const CardDetailModal = ({ isOpen, onClose, onOpenReset, onOpenLostDamage, onOpenEditName, onOpenActiveCard }: CardModalType) => {
    const [showCardDetails, setShowCardDetails] = useState(false);
    const [freezeCard, setFreezeCard] = useState(false);
    const [activeCard, setActiveCard] = useState(false);
    const cardNumber = "4242 4242 4242 4242";
    const cardDate = "01/26";
    const cardCVC = "123";

    const handleToggle = () => {
        setShowCardDetails(!showCardDetails);
    };

    const handleResetModal = () => {
        onClose();
        onOpenReset();
    };

    const handleLostDamageModal = () => {
        onClose();
        onOpenLostDamage();
    };

    const handleEditNameModal = () => {
        onClose();
        onOpenEditName();
    };

    const handleActiveCardModal = () => {
        onClose();
        onOpenActiveCard();
    };

    return (
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent p={10}>
                <ModalHeader borderBottom={"1px solid"} borderColor={"Neutral.200"} alignItems={"center"} gap={2} px={0} pt={0} pb={8} display={"flex"}>
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
                                bgColor: freezeCard || activeCard ? "transparent" : "Primary.Blue"
                            }
                        }} size='md' value={90} />
                    </Box>
                    <Box color={"white"} mt={8} p={8} borderRadius={"22px"} opacity={freezeCard || activeCard ? "50%" : "100%"} bgGradient={"linear-gradient(90deg, #5976FF 0%, #3446E6 100%)"} boxShadow={"0.94px 0.94px 5.65px 0px rgba(149, 153, 192, 0.22)"}>
                        <HealeLogoWhite mt={-6} ms={-4} w={44} h={20} />
                        <Heading fontSize={"lg"} cursor={"pointer"} onClick={() => setActiveCard(!activeCard)}>Jeff Bridges</Heading>
                        <Flex mt={20} justifyContent={"space-between"} alignItems={"center"}>
                            <Tooltip
                                py={2}
                                px={3}
                                borderRadius={8}
                                fontSize="xs"
                                placement="top"
                                hasArrow
                                label={showCardDetails ? 'Click to hide' : 'Click to reveal'}
                                bg="Primary.Navy"
                                color="white"
                            >
                                <Box cursor="pointer" onClick={handleToggle}>
                                    <Text>
                                        {showCardDetails ? cardNumber : "•••• •••• •••• 4242"}
                                    </Text>
                                    <Flex gap={4}>
                                        <Text>EXP: {showCardDetails ? cardDate : "••/••"}</Text>
                                        <Text>CVC: {showCardDetails ? cardCVC : "•••"}</Text>
                                    </Flex>
                                </Box>
                            </Tooltip>
                            <WifiIcon w={8} h={8} />
                        </Flex>
                    </Box>
                    {activeCard ?
                        <Box m={"auto"} mt={8} textAlign={"center"} w={"235px"}>
                            <Text mb={8} fontSize={"sm"} color={"Neutral.700"} >A card was sent to you on Feb 4. Please activate your card upon arrival.</Text>
                            <ButtonTheme small btnText='Send Replacement' />
                        </Box>
                        :
                        <Flex mt={8} gap={2}>
                            <ButtonTheme small btnText='Reset PIN' chakraProps={{ onClick: handleResetModal }} />
                            <ButtonTheme small btnText='Lost or Damaged Card' chakraProps={{ onClick: handleLostDamageModal }} />
                            <ButtonTheme small primary={freezeCard ? true : false} btnText={freezeCard ? 'Un Freeze Card' : 'Freeze Card'} chakraProps={{ onClick: () => setFreezeCard(!freezeCard) }} />
                            <ButtonTheme small btnText='Edit Nickname' chakraProps={{ onClick: handleEditNameModal }} />
                        </Flex>
                    }
                    <Box my={8}>
                        <Text fontSize={"sm"} color={"Neutral.700"}>Weekly Spending Limit</Text>
                        <Heading fontSize={"md"} color={"Primary.Navy"}>$350.00</Heading>
                    </Box>
                    <Grid gap={2} gridTemplateColumns={"repeat(2,1fr)"} borderTop={"1px solid"} borderColor={"Neutral.200"} pt={8}>
                        <Box>
                            <Box mb={4}>
                                <Text color={"Neutral.700"} fontSize={"sm"}>Card Type</Text>
                                <Heading color={"Primary.Navy"} fontSize={"md"}>Business</Heading>
                            </Box>
                            <Box mb={4}>
                                <Text color={"Neutral.700"} fontSize={"sm"}>Added on</Text>
                                <Heading color={"Primary.Navy"} fontSize={"md"}>May 25</Heading>
                            </Box>
                            <Box mb={4}>
                                <Text color={"Neutral.700"} fontSize={"sm"}>Billing Address</Text>
                                <Heading color={"Primary.Navy"} fontSize={"md"}>525 Brannon Street Unit 24
                                    Los Angeles, CA 90026</Heading>
                            </Box>
                        </Box>
                        <Box>
                            <Box mb={4}>
                                <Text color={"Neutral.700"} fontSize={"sm"}>Business</Text>
                                <Heading color={"Primary.Navy"} fontSize={"md"}>Knight-Swift</Heading>
                            </Box>
                            <Box mb={4}>
                                <Text color={"Neutral.700"} fontSize={"sm"}>Created by</Text>
                                <Heading color={"Primary.Navy"} fontSize={"md"}>Jane Brown</Heading>
                            </Box>
                            <Box mb={4}>
                                <Text color={"Neutral.700"} fontSize={"sm"}>Type</Text>
                                <Heading color={"Primary.Navy"} fontSize={"md"}>Virtual</Heading>
                            </Box>
                        </Box>
                    </Grid>
                    <Box mt={8}>
                        <Heading fontSize={"sm"} color={"Primary.Navy"} mb={2}>Account</Heading>
                        <Box py={3} px={4} border={"1px solid"} borderColor={"Neutral.200"} borderRadius={"8px"}>
                            <Text color={"Primary.Navy"}>Checking ••1038</Text>
                            <Text color={"Neutral.700"}>$2,023,267.12</Text>
                        </Box>
                    </Box>
                </ModalBody>
                <ModalFooter gap={4} p={0} mt={8}>
                    <ButtonTheme invert btnText='Cancel Card' chakraProps={{
                        w: "100%"
                    }} />
                    {activeCard ?
                        <ButtonTheme primary btnText='Activate Card' chakraProps={{
                            w: "100%",
                            onClick: handleActiveCardModal
                        }} />
                        :
                        <ButtonTheme primary btnText='View all Transaction' chakraProps={{
                            w: "100%"
                        }} />
                    }
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CardDetailModal;
