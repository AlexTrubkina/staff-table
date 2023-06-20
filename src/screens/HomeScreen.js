import { Heading } from "@chakra-ui/react";
import React from "react";
import SearchTab from "../components/SearchTab";
import LayoutPage from "../layout/LayOutPage";

function HomeScreen() {
    return (
        <LayoutPage>
            <Heading textAlign="start" fontSize="xl">
                Общая база сотрудников
            </Heading>
            <SearchTab/>
        </LayoutPage>
    );
}

export default HomeScreen;