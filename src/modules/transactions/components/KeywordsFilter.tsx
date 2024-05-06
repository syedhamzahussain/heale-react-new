import { Box, Checkbox, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import { SearchIcon } from 'modules/shared/Icons'
import React from 'react'

const KeywordsFilter = () => {
    return (
        <Box>
            <InputGroup mb={6}>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input h={"10 !important"} borderRadius={8} border={"1px solid"} borderColor={"Neutral.200"} type='text' placeholder='Search for recipients, business, etc.' />
            </InputGroup>
            <Box pb={3} borderBottom={"1px solid"} borderColor={"Neutral.100"}>
                <Text color={"Neutral.700"} fontSize={"xs"}>Recent</Text>
            </Box>
            <Stack spacing={4} mt={4}>
                <Checkbox>Bluewave, Inc</Checkbox>
                <Checkbox>NexGen Transport</Checkbox>
                <Checkbox>RapidReach Logistics</Checkbox>
                <Checkbox>Summit Freight Services</Checkbox>
                <Checkbox>GlobalTrans Logistics</Checkbox>
            </Stack>
        </Box>
    )
}

export default KeywordsFilter