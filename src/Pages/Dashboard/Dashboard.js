import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Column, Row } from "simple-flexbox";
import Sidebar from "./Sidebar/Sidebar";
import IndexNavbar from "./IndexNavbar/IndexNavbar";
import { SidebarContext } from "../../Context/SidebarContext";
import classes from "./Dashboard.module.css"
import useWindowSize from "../../Hooks/useWindowSize"
import Ideas2 from "./pages/ideas2Example/Ideas2";

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
                                path="/ideas1"
                                render={() => <div>ideas1</div>}

                            />
                            <Route
                                exact
                                path="/ideas1/ideas11"
                                render={() => <div>ideas11</div>}
                            />
                            <Route
                                exact
                                path="/ideas1/ideas12"
                                render={() => <div>ideas12</div>}
                            />
                            <Route
                                path="/ideas2"
                                element={<Ideas2 />}
                            />
                            <Route
                                exact
                                path="/ideas3"
                                render={() => <div>ideas3</div>}
                            />
                        </Routes>
                    </div>
                </Column>
            </Row>
        </SidebarContext>
    );
}

export default Dashboard;
