import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ButtonTheme from 'modules/shared/ButtonTheme';
import React from 'react';
import { VerificationBoxType } from 'type';

const VerificationBox = ({ status, title, onClick, questions }: VerificationBoxType) => {

    let questionsInfo = questions[title.toLowerCase()];

    return (
        <Flex gap={8} flexDir='column' bgColor={"white"} borderRadius={8} p={4} border={"1px solid"} borderColor={"Neutral.200"}>
            {status ?
                <Box w={"max-content"} border={"1px solid transparent"} bgColor={"rgba(3, 204, 176, 0.1)"} borderRadius={"40px"} py={1} px={2} color={"Secondary.Turquoise"}>Completed</Box> :
                <Box w={"max-content"} border={"1px solid"} borderColor={"Neutral.600"} borderRadius={"40px"} py={1} px={2} color={"Neutral.600"}>Not Started</Box>}
            <Box>
                <Heading fontSize={"sm"} color={"Primary.Navy"}>{title}</Heading>
                <Text fontSize={"sm"} color={"Neutral.700"}>{`${questionsInfo.filled} / ${questionsInfo.total}`} questions completed</Text>
            </Box>
            <ButtonTheme primary btnText={!status ? 'Start' : 'Edit'} chakraProps={{
                fontSize: "sm",
                w: "max-content",
                onClick: onClick
            }} />
        </Flex>
    );
};

export default VerificationBox;
