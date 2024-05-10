import { Box, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'
import { useWizard } from 'react-use-wizard';
import TransactionDetail from './TransactionDetail';

const Review = ({ onClose }: { onClose: () => void }) => {
    const { previousStep } = useWizard();
    return (
        <Box w={"60%"}>
            <Heading fontSize={"3xl"} mb={4} color={"Primary.Navy"}>Review Details</Heading>
            <Text color={"Neutral.800"} mb={8}>Review the details of your transaction dispute below prior to submitting</Text>
            <Heading fontSize={"xl"} mb={4} color={"Primary.Navy"}>Transaction(s) in Dispute</Heading>
            <TransactionDetail />
            <Heading fontSize={"xl"} py={4} mt={6} borderTop={"1px solid"} borderColor={"Neutral.200"} color={"Primary.Navy"}>Questions</Heading>
            <List spacing={6}>
                {Array.from({ length: 5 }).map((i, j) => {
                    return (
                        <ListItem key={j} display={"flex"} alignItems={"start"} gap={4}>
                            <Flex alignItems={"center"} justifyContent={"center"} bgColor={"Neutral.100"} borderRadius={"full"} w={8} h={8} fontWeight="bold" color={"Primary.Blue"}>{j + 1}</Flex>
                            <Box>
                                <Heading fontSize={"sm"} color={"Primary.Navy"}>Reason For Dispute</Heading>
                                <Text color={"Neutral.700"}>I did not authorize the transaction(s)</Text>
                            </Box>
                        </ListItem>
                    )
                })}
            </List>
            <Flex gap={4} mt={8}>
                <ButtonTheme
                    type="submit"
                    btnText="Back"
                    chakraProps={{
                        onClick: () => previousStep(),
                        w: "50%",
                    }}
                    invert
                />
                <ButtonTheme
                    type="submit"
                    btnText="Submit"
                    chakraProps={{
                        w: "50%",
                        onClick: onClose
                    }}
                    primary
                />
            </Flex>
        </Box>
    )
}

export default Review