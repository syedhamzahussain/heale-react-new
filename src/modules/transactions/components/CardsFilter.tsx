import { Box, Checkbox, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import { SearchIcon } from 'modules/shared/Icons'
import React from 'react'

const CardsFilter = () => {
    return (
        <Box>
            <InputGroup mb={6}>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input h={"10 !important"} borderRadius={8} border={"1px solid"} borderColor={"Neutral.200"} type='text' placeholder='Search for cardholders' />
            </InputGroup>
            <Box pb={3} borderBottom={"1px solid"} borderColor={"Neutral.100"}>
                <Text color={"Neutral.700"} fontSize={"xs"}>Your Cards</Text>
            </Box>
            <Stack spacing={4} mt={4}>
                <Checkbox>Jeff B. ••1270</Checkbox>
                <Checkbox>Jeff B. ••1270</Checkbox>
            </Stack>
            <Box pb={3} mt={4} borderBottom={"1px solid"} borderColor={"Neutral.100"}>
                <Text color={"Neutral.700"} fontSize={"xs"}>Everyone’s Cards</Text>
            </Box>
            <Stack spacing={4} mt={4}>
                <Checkbox>Guy H. ••2137</Checkbox>
                <Checkbox>Cody F. ••1123</Checkbox>
            </Stack>
        </Box>
    )
}

export default CardsFilter