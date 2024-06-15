import { Box, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, Text } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import React from 'react'
import { useWizard } from 'react-use-wizard';

const CardDetails = () => {
    const { nextStep } = useWizard();
    return (
        <Box maxH={"500px"} overflow={"auto"}>
            <Box w={"70%"} px={1}>
                <Heading as={'h4'} mb={4} fontSize={'3xl'} color={'Primary.Navy'}>
                    Card Details
                </Heading>
                <Text mb={8} color={'Neutral.800'}>
                    Content draft team underline variant plugin editor. Arrange slice reesizing library underline team ipsum figjam.
                </Text>
                <Box
                    sx={{
                        '.chakra-form__label': {
                            fontSize: 'sm',
                            color: 'Primary.Navy',
                        },
                        '.chakra-input': {
                            fontSize: 'sm',
                        },
                    }}
                >
                    <form>
                        <FormControl mb={6}>
                            <FormLabel>Card Type</FormLabel>
                            <Select
                                name="role"
                                placeholder="Business"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </FormControl>
                        <FormControl mb={6}>
                            <FormLabel>Assign User</FormLabel>
                            <Select
                                name="role"
                                placeholder="Jane Cooper"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </FormControl>
                        <FormControl mb={6}>
                            <FormLabel>Card Account</FormLabel>
                            <Select
                                name="role"
                                placeholder="Checking ••1038 $2,023,267.12"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </FormControl>
                        <Checkbox alignItems={'start'} size={'md'} sx={{
                            '.chakra-checkbox__control': {
                                pos: 'relative',
                                top: '4px',
                            },
                        }}>
                            Card Expiration
                            <Text fontWeight={"400"} color={'Neutral.700'}>6 years by default</Text>
                        </Checkbox>
                        <Heading color={"Primary.Navy"} fontSize={"xl"} my={6}>Card Limit</Heading>
                        <FormControl mb={6}>
                            <FormLabel>Limit Type</FormLabel>
                            <Select
                                name="role"
                                placeholder="Monthly"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </FormControl>
                        <FormControl mb={6}>
                            <FormLabel>Monthly Spending Limit</FormLabel>
                            <Input placeholder='$1,000.00' />
                        </FormControl>
                    </form>
                    <Flex justifyContent={'center'} mt={8} gap={6}>
                        <ButtonTheme
                            type="submit"
                            btnText="Continue"
                            chakraProps={{
                                onClick: () => nextStep(),
                                w: '50%',
                            }}
                            primary
                        />
                    </Flex>
                </Box>

            </Box>
        </Box>
    )
}

export default CardDetails