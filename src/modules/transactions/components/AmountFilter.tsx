import { Box, Flex, FormControl, FormLabel, Input, Radio, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const AmountFilter = () => {
    return (
        <Box>
            <Box pb={3} borderBottom={"1px solid"} borderColor={"Neutral.100"}>
                <Text color={"Neutral.700"} fontSize={"xs"}>Direction</Text>
            </Box>
            <Stack spacing={3} mt={6}>
                <Radio value='1'>Any</Radio>
                <Radio value='2'>In</Radio>
                <Radio value='3'>Out</Radio>
            </Stack>
            <Flex mt={4} gap={6}>
                <FormControl>
                    <FormLabel>Min Amount</FormLabel>
                    <Input
                        type="text"
                        placeholder="= $0.00"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Max Amount</FormLabel>
                    <Input
                        type="text"
                        placeholder="= $0.00"
                    />
                </FormControl>
            </Flex>
        </Box>
    )
}

export default AmountFilter