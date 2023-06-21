import { Heading } from "@chakra-ui/react";
import React, {useState} from "react";
import SearchTab from "../components/SearchTab";
import LayoutPage from "../layout/LayOutPage";
import StaffTable from "../components/Table";

function HomeScreen() {

    const [editMode, setEditMode] = useState(false);

    const handleEditMode = () => editMode ? setEditMode(false) : setEditMode(true);

    return (
        <LayoutPage>
            <Heading textAlign="start" fontSize="xl">
                Общая база сотрудников
            </Heading>
            <SearchTab handleEditMode={handleEditMode}/>
            <StaffTable editMode={editMode}/>
        </LayoutPage>
    );
}

export default HomeScreen;