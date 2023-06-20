import React from "react";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import Header from "../components/Header";

function LayoutPage({ children }) {
    return ( 
        <ChakraProvider>
            <Container  maxW="1200px">
            <Header/>
                <Box
                    borderRadius="20px"
                    backgroundColor="#F5F5F5" 
                    padding="30px"
                >
                    {children}
                </Box>
            </Container>
        </ChakraProvider> 
    );
}

export default LayoutPage;