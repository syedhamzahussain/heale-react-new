import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { EmptyTableIcon } from 'modules/shared/Icons';


const EmpltyTable = ({ emptyMesg }: { emptyMesg: any }) => {
  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} my={'20'}>
      <EmptyTableIcon w={'300'} h={'300'} />
      <Text as={'h6'} fontSize={'2xl'}>{emptyMesg}</Text>
      <Text as={'p'} fontSize={'md'}>When you have an invoice that needs payment,</Text>
      <Text as={'p'} fontSize={'md'}>you'll see it here</Text>
    </Flex>
  )
}

export default EmpltyTable