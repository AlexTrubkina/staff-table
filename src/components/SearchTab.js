import { Box, Heading, Input, Flex, Button, Text } from "@chakra-ui/react";
import React from "react";

function SearchTab () {
    return ( 
        <Box backgroundColor="#fff" borderRadius="32px" padding="38px" marginBlock="20px">
            <Flex justifyContent="space-between">
                <Flex gap="30px" alignItems="center">
                    <Heading color="#54D3C2" >
                        2345
                    </Heading>
                    <Text>
                        Контактов
                    </Text>
                    <Input borderRadius="24px" backgroundColor="#F8F8F8" placeholder="Поиск"/>
                </Flex>
                <Button variant="outline" borderRadius="24px" borderColor="#54D3C2" color="#54D3C2">
                    Режим редактирования
                </Button>
            </Flex>

        </Box>

    );
}

export default SearchTab;