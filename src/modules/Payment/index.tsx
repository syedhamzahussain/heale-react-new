import { Avatar, Badge, Box, Flex,Button,Tabs, TabList, TabPanels, Tab, TabPanel, Grid, Heading, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, color } from '@chakra-ui/react'
import CustomCard from 'modules/shared/CustomCard'
import { HighIcon, InfoIcon, LowIcon, PersonalIcon, RightArrow, SwitchIcon } from 'modules/shared/Icons'
import React from 'react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import UnpaidInvoices from './component/UnpaidInvoices'

const Payment = () => {
    return (
      <Box>
        <Flex >
          <Heading as="h2" size="md" > Payment</Heading>
          <Spacer />
          <ButtonTheme btnText='Create Payment'  primary />
        </Flex>
        <Tabs variant='enclosed'>
          <TabList w={'60.55%'} border="1px" borderColor="gray.200" borderRadius="full">
            <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{backgroundColor: 'Neutral.200', color: 'Primary.Blue'}} borderRadius="full" borderWidth={0}> 
                 <Flex alignItems={'center'} >Unpaid Invoices  <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex>
            </Tab>
            <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{backgroundColor: 'Neutral.200', color: 'Primary.Blue'}} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Needs Approval <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
            <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{backgroundColor: 'Neutral.200', color: 'Primary.Blue'}} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Scheduled <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
            <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{backgroundColor: 'Neutral.200', color: 'Primary.Blue'}} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Sent<Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
               <UnpaidInvoices />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    )
}

export default Payment