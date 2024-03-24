import { Box, Heading, Icon, Progress, Flex, Link, Text, keyframes } from '@chakra-ui/react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import { HealeLogo } from 'modules/shared/Icons';
import React from 'react'
import { useWizard } from 'react-use-wizard';
import { SuccessType } from 'type';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const Success = ({ icon, title, desc,percentage}: SuccessType) => {
    return (
        <Box w={"100%"} p={3} textAlign={"center"}>
          <Icon as={icon} w={24} h={24} display={'block'} m={'auto'}/>
          <Box>
            <Progress color={'Primary.Blue'} borderRadius={5} size='sm' value={72} w={'80%'} display={'inline-block'}/>
            <Text display={'inline-block'} fontSize={'xs'} color={'Neutral.700'} ml="2">{percentage}</Text>
          </Box>
            <Heading as={"h4"} mt={4} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>{title}</Heading>
            <Text color={"Neutral.800"}>{desc}</Text>
        </Box>
    )
}

export default Success