import { Box, Flex, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Select, Stack, Text, Textarea } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme'
import React, { ChangeEvent, useState } from 'react'
import { useWizard } from 'react-use-wizard';

const Questions = () => {
    const { nextStep, previousStep } = useWizard();
    const [dispute, setDispute] = useState('');
    const maxLength = 140;

    const handleDispute = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxLength) {
            setDispute(inputValue);
        }
    };
    return (
        <Box w={"60%"}>
            <Heading fontSize={"3xl"} mb={4} color={"Primary.Navy"}>Please Answer the Following Questions</Heading>
            <Text color={"Neutral.800"} mb={8}>To dispute a transaction, we first have some questions for you</Text>
            <FormControl mb={4}>
                <FormLabel>Reason for Dispute</FormLabel>
                <Select placeholder='Select'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Has your credit card been with you the entire time?</FormLabel>
                <RadioGroup>
                    <Stack direction='row' gap={8}>
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Is the card currently in your possession?</FormLabel>
                <RadioGroup>
                    <Stack direction='row' gap={8}>
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Did anyone that was authorized on the account possibly make the transaction?</FormLabel>
                <RadioGroup>
                    <Stack direction='row' gap={8}>
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Do you recognize the transaction?</FormLabel>
                <RadioGroup>
                    <Stack direction='row' gap={8}>
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Enter Dispute Amount</FormLabel>
                <Input placeholder='Enter the amount' />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Enter Dispute Amount</FormLabel>
                <Box pos={"relative"}>
                    <Textarea value={dispute} onChange={handleDispute} fontSize={"sm"} resize={"none"} size={"lg"} rows={4}
                        maxLength={maxLength} />
                    <Text fontSize={"xs"} color={"Neutral.700"} bottom={2} right={2} pos={"absolute"}>{dispute.length}/{maxLength}</Text>
                </Box>
            </FormControl>
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
                    btnText="Continue"
                    chakraProps={{
                        onClick: () => nextStep(),
                        w: "50%",
                    }}
                    primary
                />
            </Flex>
        </Box>
    )
}

export default Questions