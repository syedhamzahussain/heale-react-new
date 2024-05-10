import { Box, Checkbox, Flex, Heading, Text } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme'
import React, { useState } from 'react'
import { useWizard } from 'react-use-wizard';
import TransactionDetail from './TransactionDetail';

const ConfirmTransaction = () => {
    const { nextStep } = useWizard();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }
    return (
        <Box w={"60%"}>
            <Heading fontSize={"3xl"} mb={4} color={"Primary.Navy"}>Please review the details below carefully before proceeding</Heading>
            <Text color={"Neutral.800"} mb={8}>Review the transaction you wish to dispute below</Text>
            <Heading fontSize={"xl"} color={"Primary.Navy"}>Transaction(s) in Dispute</Heading>
            <TransactionDetail />
            <Checkbox onChange={handleCheckboxChange}>This is the correct transaction</Checkbox>
            <Flex gap={4} mt={8}>
                <ButtonTheme
                    type="submit"
                    btnText="Continue"
                    chakraProps={{
                        onClick: () => nextStep(),
                        w: "50%",
                        m: "0 auto"
                    }}
                    primary
                    isDisabled={!isChecked}
                />
            </Flex>
        </Box>
    )
}

export default ConfirmTransaction