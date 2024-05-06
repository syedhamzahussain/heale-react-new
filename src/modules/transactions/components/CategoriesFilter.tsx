import { Box, Checkbox, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import { SearchIcon } from 'modules/shared/Icons'
import React from 'react'

const CategoriesFilter = () => {
    return (
        <Box>
            <InputGroup mb={6}>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input h={"10 !important"} borderRadius={8} border={"1px solid"} borderColor={"Neutral.200"} type='text' placeholder='Search for a category' />
            </InputGroup>
            <Box pb={3} borderBottom={"1px solid"} borderColor={"Neutral.100"}>
                <Text color={"Neutral.700"} fontSize={"xs"}>Categories</Text>
            </Box>
            <Stack spacing={4} mt={4}>
                <Checkbox>Category</Checkbox>
                <Checkbox>Category</Checkbox>
                <Checkbox>Category</Checkbox>
                <Checkbox>Category</Checkbox>
                <Checkbox>Category</Checkbox>
            </Stack>
        </Box>
    )
}

export default CategoriesFilter