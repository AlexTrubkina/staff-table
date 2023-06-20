import React from "react";

import { Button, IconButton, Flex } from '@chakra-ui/react'

import { ChevronLeftIcon, ChevronRightIcon  } from "@chakra-ui/icons";

export function PaginationNext() {
    return ( 
        <IconButton backgroundColor="transparent" aria-label='pagination next' icon={<ChevronRightIcon />} />
    );
}

export function PaginationPrev() {
    return ( 
        <IconButton backgroundColor="transparent" aria-label='pagination prev' icon={<ChevronLeftIcon />} />
    );
}

export function PaginationButton({page}) {
    return (
        <Button backgroundColor="transparent">
            {page}
        </Button>
    );

}

export function PaginationConatiner({children}) {
    return (
        <Flex gap="10px">
            {children}
        </Flex>
    );
}

