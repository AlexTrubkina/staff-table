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
                >
                    {children}
                </Box>
            </Container>
        </ChakraProvider> 
    );
}

export default LayoutPage;