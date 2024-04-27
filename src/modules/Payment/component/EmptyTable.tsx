import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { NoNotiIcon } from 'modules/shared/Icons';


const EmpltyTable = ({ title, desc }: { title: string, desc: string }) => {
  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} my={10}>
      <NoNotiIcon w={"188px"} h={"140px"} />
      <Box w={"360px"} textAlign={"center"}>
        <Text as={'h6'} mt={6} fontSize={'2xl'}>{title}</Text>
        <Text as={'p'} fontSize={'md'}>{desc}</Text>
      </Box>
    </Flex>
  )
}

export default EmpltyTable