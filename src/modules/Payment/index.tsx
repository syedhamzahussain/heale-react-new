import { Avatar, Badge, Box, Flex,Button,Tabs, TabList, TabPanels, Tab, TabPanel, Grid, Heading, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, color } from '@chakra-ui/react'
import CustomCard from 'modules/shared/CustomCard'
import { HighIcon, InfoIcon, LowIcon, PersonalIcon, RightArrow, SwitchIcon } from 'modules/shared/Icons'
import React from 'react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import UnPaidInvoices from './component/UnPaidInvoices'
import { FlyIcon, UserIcon } from 'modules/shared/Icons';

const Payment = () => {
  const table_head: string[] = ["sent On", "To", "Account", "Payment Method" , "Amount"];
  const table_rows   = [
    {
       rowSpan: '1',
       sent_On: "Pending",
       to: "Aliyah McMahon",
       account: "Checking",
       payment_method: "Wire",
       amount:'-$1,010.00 USD',
       iconUser: UserIcon,
       iconpayment: FlyIcon,
       paymentbadge: 'Over Due',
       requestedbadge: 'you',
    },
    {
       sent_On: "Feb 1",
       to: "Aliyah McMahon",
       account: "Checking",
       payment_method: "Wire",
       amount:'-$1,010.00 USD',
       rowSpan: '2',
       iconUser: UserIcon,
       iconpayment: FlyIcon,
    },
    {
       rowSpan: '1',
       sent_On: "",
       to: "Aliyah McMahon",
       account: "Checking",
       payment_method: "Wire",
       amount:'-$1,010.00 USD',
       iconUser: UserIcon,
       iconpayment: FlyIcon,
    },
    {
       rowSpan: '1',
       sent_On: "Feb 23",
       to: "Jordi O’Donnell",
       account: "Checking",
       payment_method: "Transfer",
       amount:'-$1,010.00 USD',
       iconUser: UserIcon,
       iconpayment: FlyIcon,
    },
    {
       rowSpan: '1',
       sent_On: "Feb 29",
       to: "Bluewave, Inc",
       account: "Checking",
       payment_method: "Transfer",
       amount:'-$1,010.00 USD',
       iconUser: UserIcon,
       iconpayment: FlyIcon,
    },
  ]
    return (
      <Box>
        <Flex >
          <Heading as="h2" size="md" > Payment</Heading>
          <Spacer />
          <ButtonTheme btnText='Create Payment'  primary />
        </Flex>
        <Tabs variant='enclosed'>
          <TabList w={'75%'} border="1px" borderColor="gray.200" borderRadius="full">
            <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{backgroundColor: 'Neutral.200', color: 'Primary.Blue'}} borderRadius="full" borderWidth={0}> 
                 <Flex alignItems={'center'} >Unpaid Invoices  <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex>
            </Tab>
            <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{backgroundColor: 'Neutral.200', color: 'Primary.Blue'}} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Needs Approval <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
            <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{backgroundColor: 'Neutral.200', color: 'Primary.Blue'}} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Scheduled <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
            <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{backgroundColor: 'Neutral.200', color: 'Primary.Blue'}} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Sent<Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
               <UnPaidInvoices tableRows={table_rows} tableHead={table_head} />
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