import React from 'react'
import { Badge, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { FlyIcon, UserIcon } from 'modules/shared/Icons';
const NeedsApprovalTable = ({ tableRows, tableHead, ...props }: { tableRows: any[]; tableHead: string[] }) => {

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
            {tableHead.map((head: any) => {
              return (
                <Th key={head}>{head}</Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {tableRows.map((row: any) => {
            return (
              <Tr key={row}>
                {row.submit_on ?
                  <Td rowSpan={row.rowSpan || undefined} verticalAlign={'baseline'}>{row.submit_on}</Td>
                  : ''
                }
                <Td>
                  <Flex gap={2} alignItems={"center"}>
                    {row.iconUser ? <UserIcon w={8} h={8} /> : ''}
                    {row.reciptant}
                  </Flex>
                </Td>
                <Td>
                  <Flex gap={2} alignItems={"center"}>
                    {row.iconpayment ? <FlyIcon w={6} h={6} /> : ''}
                    {row.requestedby}
                    {row.requestedbybadge ? <Badge colorScheme='blue' rounded={'full'}>{row.requestedbybadge}</Badge> : ''}
                  </Flex>

                </Td>
                <Td>
                  <Flex gap={2} alignItems={"center"}>
                    {row.amount}
                  </Flex>
                </Td>

              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default NeedsApprovalTable;