import { Box, Heading, Icon, Link, Text, keyframes } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { LoaderIcon } from 'modules/shared/Icons';
import React from 'react'
import { useWizard } from 'react-use-wizard';
import { MessageBoxType } from 'type';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const MessageBox = ({ icon, title, desc, btnText, trust, loader }: MessageBoxType) => {
    const { nextStep } = useWizard();
    const spinAnimation = `${spin} infinite 3s linear`;
    return (
        <Box w={"100%"} p={3} textAlign={"center"}>
            <Icon as={icon} w={16} h={16} />
            <Heading as={"h4"} mt={4} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>{title}</Heading>
            <Text mb={btnText || loader ? 8 : 0} color={"Neutral.800"}>{desc}</Text>
            {btnText &&
                <ButtonTheme btnText={btnText} chakraProps={{
                    onClick: () => nextStep(),
                    width: "full"
                }} primary />
            }
            {trust &&
                <Link color='Primary.Blue' my={3} display={'inline-block'}>Don't Trust</Link>
            }
            {
                loader &&
                <LoaderIcon animation={spinAnimation} w={8} h={8} />
            }
        </Box>
    )
}

export default MessageBox