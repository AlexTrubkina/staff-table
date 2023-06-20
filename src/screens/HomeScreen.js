import { Heading } from "@chakra-ui/react";
import React from "react";
import SearchTab from "../components/SearchTab";
import LayoutPage from "../layout/LayOutPage";
import StaffTable from "../components/Table";

function HomeScreen() {
    return (
        <LayoutPage>
            <Heading textAlign="start" fontSize="xl">
                Общая база сотрудников
            </Heading>
            <SearchTab/>
            <StaffTable />
        </LayoutPage>
    );
}

export default HomeScreen;