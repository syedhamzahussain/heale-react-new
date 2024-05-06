import { Checkbox, Stack } from '@chakra-ui/react'
import React from 'react'

const MethodFilter = () => {
    return (
        <Stack spacing={4}>
            <Checkbox>ACH</Checkbox>
            <Checkbox>Wire</Checkbox>
            <Checkbox>P2P</Checkbox>
            <Checkbox>Cards</Checkbox>
            <Checkbox>Transfer</Checkbox>
            <Checkbox>Payment Request</Checkbox>
        </Stack>
    )
}

export default MethodFilter