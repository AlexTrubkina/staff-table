import React from "react";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Text
} from "@chakra-ui/react";

import { Select } from "@chakra-ui/react";

import { tableHeadings, workersData } from "../data/tableData";

function StaffTable() {
    return (
        <TableContainer backgroundColor="#fff" borderRadius="32px">
            <Table variant="simple">
                <Thead>
                    <Tr>
                        {tableHeadings.map((heading) => (
                            <Th color="#54D3C2" key={heading} fontWeight="700">
                                {heading}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {workersData.map((worker) => (
                        <Tr>
                            <Td>{worker.number}</Td>
                            <Td>{worker.id}</Td>
                            <Td>{worker.tel}</Td>
                            <Td>{worker.sex}</Td>
                            <Td>{worker.birthday}</Td>
                            <Td>{worker.metro}</Td>
                            <Td>{worker.address}</Td>
                            <Td>{worker.bank}</Td>
                            <Td>{worker.card}</Td>
                            <Td>{worker.citizenship}</Td>
                            <Td>{worker.passport}</Td>
                        </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>показано 21 - 30 из 88 результатов </Th>
                        <Th>пагинация</Th>
                        <Th>
                            <Flex gap="10px" alignItems="center">
                                <Text>отображать на странице</Text>
                                <Select>
                                    <option value="option1">10</option>
                                    <option value="option2">15</option>
                                    <option value="option3">20</option>
                                </Select>
                            </Flex>
                        </Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}

export default StaffTable;
