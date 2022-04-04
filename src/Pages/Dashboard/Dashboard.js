import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Column, Row } from "simple-flexbox";
import Sidebar from "./Sidebar/Sidebar";
import IndexNavbar from "./IndexNavbar/IndexNavbar";
import { SidebarContext } from "../../Context/SidebarContext";
import classes from "./Dashboard.module.css"
import useWindowSize from "../../Hooks/useWindowSize"
import FindMedicineByName from "./Pages/FindMedicineByName/FindMedicineByName";

function Dashboard() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (

        <SidebarContext>
            <Row className={classes.container}>
                <Sidebar />
                <Column flexGrow={1} className={classes.mainBlock}>
                    <IndexNavbar />
                    <div className={classes.contentBlock}>
                        <Routes>
                            <Route
                                exact
                                path="/medicine"
                                render={() => <div>medicine</div>}
                            />
                            <Route
                                exact
                                path="/medicine/name"
                                element={<FindMedicineByName />}
                            />
                            <Route
                                exact
                                path="/medicine/category"
                                render={() => <div>category</div>}
                            />
                            <Route
                                exact
                                path="/nearestpharmacy"
                                render={() => <div>nearest</div>}
                            />
                        </Routes>
                    </div>
                </Column>
            </Row>
        </SidebarContext>
    );
}

export default Dashboard;
