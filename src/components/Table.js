import React from "react";

import {
    Table,
    Thead,
    Tbody,
    Box,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Text,
} from "@chakra-ui/react";

import { Select } from "@chakra-ui/react";

import { tableHeadings, workersData } from "../data/tableData";
import {
    PaginationButton,
    PaginationConatiner,
    PaginationNext,
    PaginationPrev,
} from "./Pagination";

function StaffTable() {
    const pages = Math.ceil(workersData.length / 10);

    const isPagesMoreThanOne = pages > 1 ? true : false;

    let paginationButtons = [];

    let workersOnPage = isPagesMoreThanOne && workersData.slice(0, 10);

    for (let number = 1; number <= pages; number++) {
        paginationButtons.push(
            <PaginationButton
                key={number}
                page={number}
            />       
        );
    }

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
                    {workersOnPage.map((worker) => (
                        <Tr key={worker.id}>
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
            </Table>
            <Flex
                justifyContent="space-between"
                marginBlock="20px"
                marginInline="20px"
            >
                <Box>показано 21 - 30 из 88 результатов </Box>

                {isPagesMoreThanOne && (
                    <PaginationConatiner>
                        <PaginationPrev />
                            {paginationButtons}
                        <PaginationNext />
                    </PaginationConatiner>
                )}

                <Flex gap="10px" alignItems="center">
                    <Text>отображать на странице</Text>
                    <Select>
                        <option value="option1">10</option>
                        <option value="option2">15</option>
                        <option value="option3">20</option>
                    </Select>
                </Flex>
            </Flex>
        </TableContainer>
    );
}

export default StaffTable;