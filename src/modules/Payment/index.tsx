import { Badge, Box, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import ButtonTheme from 'modules/shared/ButtonTheme'
import UnPaidInvoicesTable from './component/UnPaidInvoicesTable'
import { FlyIcon, UserIcon } from 'modules/shared/Icons';
import NeedsApprovalTable from './component/NeedsApprovalTable'
import ScheduleTable from './component/ScheduleTable'
import SentTable from './component/SentTable'
import EmptyTable from './component/EmptyTable'

const Payment = () => {
  const approval_table_head: string[] = ["Submitted on", "Recipient", "Requested by", "Amount"];
  const approval_table_rows = [
    {
      rowSpan: '1',
      submit_on: "jan 1",
      reciptant: "Aliyah McMahon",
      requestedby: "Guy H.",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
    },
    {
      rowSpan: '1',
      submit_on: "jan 1",
      reciptant: "Aliyah McMahon",
      requestedby: "Guy H.",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
    },
    {
      rowSpan: '1',
      submit_on: "jan 1",
      reciptant: "Aliyah McMahon",
      requestedby: "Cody F.",
      amount: '-$1,010.00 USD',
      requestedbybadge: 'you',
      iconUser: UserIcon,
    },
  ]
  const unpaidinv_table_head: string[] = ["Created On", "Sent By", "Invoice #", "Due Date", "Amount"];
  const unpaidinv_table_rows = [
    {
      rowSpan: '1',
      created_On: "jan 1",
      sent_by: "Jason Green",
      invoice: "INV12345",
      due_date: "Feb 5",
      amount: '-$1,010.00 USD',
      paymentbadge: 'Over Due',

    },
    {
      rowSpan: '1',
      created_On: "jan 2",
      sent_by: "Jason Green",
      invoice: "INV12345",
      due_date: "Feb 6",
      amount: '-$1,010.00 USD',
    },
    {
      rowSpan: '1',
      created_On: "jan 3",
      sent_by: "Jason Green",
      invoice: "INV12345",
      due_date: "Feb 5",
      amount: '-$1,010.00 USD',
      paymentbadge: 'Over Due',
    },
    {
      rowSpan: '1',
      created_On: "jan 5",
      sent_by: "Jason Green",
      invoice: "INV12345",
      due_date: "Feb 5",
      amount: '-$1,010.00 USD',

    },

  ]
  const sch_table_head: string[] = ["Next payment", "Recipient", "Payment method", "Amount"];
  const sch_table_rows = [
    {
      rowSpan: '1',
      next_payment: "jan 1",
      recipient: "Jack Black",
      payment_method: "Wire",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
      iconPayment: FlyIcon,
      detailspendignbadge: 'Details Pending',
    },
    {
      rowSpan: '2',
      next_payment: "Pending",
      recipient: "Jason Green",
      payment_method: "INV12345",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
      iconPayment: FlyIcon,
    },
    {

      next_payment: "jan 2",
      recipient: "Jason Green",
      payment_method: "INV12345",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
      iconPayment: FlyIcon,
    },
    {
      rowSpan: '1',
      next_payment: "jan 2",
      recipient: "Jason Green",
      payment_method: "INV12345",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
      iconPayment: FlyIcon,
    },

  ]
  const sent_table_head: string[] = ["Sent On", "To", "Account", "Payment method", "Amount"];
  const sent_table_rows = [
    {
      rowSpan: '1',
      sent_on: "jan 2",
      recipient: "Jack Black",
      account: "checking",
      payment_method: "Wire",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
      iconPayment: FlyIcon,
    },
    {
      rowSpan: '2',
      sent_on: "jan 1",
      recipient: "Jack Black",
      account: "checking",
      payment_method: "Wire",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
      iconPayment: FlyIcon,
    },
    {


      sent_on: "jan 1",
      recipient: "Jack Black",
      account: "checking",
      payment_method: "Wire",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
      iconPayment: FlyIcon,
    },
    {
      rowSpan: '1',
      sent_on: "jan 1",
      recipient: "Jack Black",
      account: "checking",
      payment_method: "Wire",
      amount: '-$1,010.00 USD',
      iconUser: UserIcon,
      iconPayment: FlyIcon,
    },

  ]
  return (
    <Box>
      <Flex >
        <Heading as="h2" size="md" > Payment</Heading>
        <Spacer />
        <ButtonTheme btnText='Create Payment' primary />
      </Flex>
      <Tabs variant='enclosed'>
        <TabList w={'75%'} border="1px" borderColor="gray.200" borderRadius="full">
          <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{ backgroundColor: 'Neutral.200', color: 'Primary.Blue' }} borderRadius="full" borderWidth={0}>
            <Flex alignItems={'center'} >Unpaid Invoices  <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex>
          </Tab>
          <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{ backgroundColor: 'Neutral.200', color: 'Primary.Blue' }} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Needs Approval <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
          <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{ backgroundColor: 'Neutral.200', color: 'Primary.Blue' }} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Scheduled <Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
          <Tab flex="1" color={'Neutral.700'} fontWeight={'normal'} fontSize={'md'} _selected={{ backgroundColor: 'Neutral.200', color: 'Primary.Blue' }} borderRadius="full" borderWidth={0}><Flex alignItems={'center'} >Sent<Badge backgroundColor={'Neutral.100'} w={'6'} py={'1'} color={'Neutral.700'} fontWeight={'normal'} mx={'2'} borderRadius="full">3</Badge></Flex></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UnPaidInvoicesTable tableRows={unpaidinv_table_rows} tableHead={unpaidinv_table_head} />
          </TabPanel>
          <TabPanel>
            <NeedsApprovalTable tableRows={approval_table_rows} tableHead={approval_table_head} />
          </TabPanel>
          <TabPanel>
            <ScheduleTable tableRows={sch_table_rows} tableHead={sch_table_head} />
          </TabPanel>
          <TabPanel>
            <EmptyTable title="No unpaid invoices" desc="When you have an invoice that needs payment, you'll see it here" />
            <SentTable tableRows={sent_table_rows} tableHead={sent_table_head} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Payment