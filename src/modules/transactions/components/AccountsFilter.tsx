import { Box, Checkbox, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const AccountsFilter = () => {
    return (
        <Box>
            <Box pb={3} borderBottom={"1px solid"} borderColor={"Neutral.100"}>
                <Text color={"Neutral.700"} fontSize={"xs"}>Sent From</Text>
            </Box>
            <Stack spacing={4} mt={4}>
                <Checkbox>Checking ••••3849</Checkbox>
                <Checkbox>P2P ••••C1cb</Checkbox>
                <Checkbox>HEALE ••••W9qb</Checkbox>
            </Stack>
        </Box>
    )
}

export default AccountsFilter