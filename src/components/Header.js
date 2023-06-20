import React from "react";
import { Tabs, TabList, Tab} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <NavLink to="/">
                        База анкет сотрудников
                    </NavLink>
                    
                </Tab>
                <Tab>
                    <NavLink to="/">
                        Общая база сотрудников
                    </NavLink>
                    
                </Tab>
                <Tab>
                    <NavLink to="/">
                        База сотрудников
                    </NavLink>
                </Tab>
            </TabList>
        </Tabs>
    );
}

export default Header;
