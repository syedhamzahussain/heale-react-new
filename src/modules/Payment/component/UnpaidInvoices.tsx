import React from 'react'
import { Avatar, Badge, Box, Flex,Button,Tabs, TabList, TabPanels, Tab, TabPanel, Grid, Heading, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, color } from '@chakra-ui/react'
import { FlyIcon, UserIcon } from 'modules/shared/Icons';
const UnPaidInvoices = ({tableRows, tableHead, ...props}: { tableRows: any[]; tableHead: string[]}) => {
 
  return (
      <TableContainer sx={{
          "th": {
              color: "Neutral.700",
              fontSize: "sm",
              textTransform: "capitalize",
              fontWeight: "400"
          },
          "td": {
              color: "Primary.Navy",
              fontSize: "sm",
              textTransform: "capitalize",
              fontWeight: "600",
              ".chakra-badge": {
                  textTransform: "capitalize"
              }
          }
      }}>
      <Table variant='simple'>
          <Thead>
              <Tr>
                  {tableHead.map((head:any)=> {
                    return(
                        <Th key={head}>{head}</Th>
                    );
                  })}
              </Tr>
          </Thead>
          <Tbody>
                {tableRows.map((row:any)=> {
                    return(
                        <Tr key={row}>
                          {row.sent_On ? 
                           <Td rowSpan={row.rowSpan || undefined} verticalAlign={'baseline'}>{row.sent_On}</Td>
                            :  ''
                          }
                          <Td>
                            <Flex gap={2} alignItems={"center"}>
                                {row.iconUser? <UserIcon  w={8} h={8}/> : ''}
                                {row.to}
                            </Flex>
                          </Td>
                          <Td>
                             <Flex gap={2} alignItems={"center"}>
                                  {row.iconpayment? <FlyIcon  w={6} h={6}/> : ''}
                                  {row.payment_method}
                                  {row.paymentbadge ? <Badge colorScheme='red' rounded={'full'}>{row.paymentbadge}</Badge> : ''}
                            </Flex>
                          
                          </Td>
                          <Td>
                            <Flex gap={2} alignItems={"center"}>
                              {row.account}
                            </Flex>
                          </Td>
                          <Td>
                              {row.amount}
                          </Td>
                        </Tr>
                    );
                  })}
          </Tbody>
      </Table>
  </TableContainer>
  )
}

export default UnPaidInvoices;