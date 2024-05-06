import { Checkbox, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const StatusFilter = () => {
    return (
        <Stack spacing={4}>
            <Checkbox alignItems={"start"}>
                Posted
                <Text fontSize={"sm"} color={"Neutral.700"}>Placeholder</Text>
            </Checkbox>
            <Checkbox alignItems={"start"}>
                Pending
                <Text fontSize={"sm"} color={"Neutral.700"}>Placeholder</Text>
            </Checkbox>
            <Checkbox alignItems={"start"}>
                Failed
                <Text fontSize={"sm"} color={"Neutral.700"}>Placeholder</Text>
            </Checkbox>
            <Checkbox alignItems={"start"}>
                Canceled
                <Text fontSize={"sm"} color={"Neutral.700"}>Placeholder</Text>
            </Checkbox>
            <Checkbox alignItems={"start"}>
                Blocked
                <Text fontSize={"sm"} color={"Neutral.700"}>Placeholder</Text>
            </Checkbox>
        </Stack>
    )
}

export default StatusFilter