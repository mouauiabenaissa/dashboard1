import React, { useContext } from 'react'
import { string } from "prop-types";
import { Row } from "simple-flexbox";
import { SidebarContext } from '../../../Hooks/useSidebar';
import classes from "./IndexNavbar.module.css"
import DropDown from '../../../Components/Dropdown/DropDown';
function IndexNavbar() {
    const { currentItem } = useContext(SidebarContext);
    let title = 'titles'

    switch (true) {

        case ["/medicine", "/medicine/name", "/medicine/category"].includes(
            currentItem
        ):
            title = "Find Medicine";
            break;
        case currentItem === "/nearestpharmacy":
            title = "Nearest Pharmacy";
            break;

        default:
            title = "";
    }
    return (
        <Row
            className={classes.container}
            vertical="center"
            horizontal="space-between"
        >
            <span className={classes.title}>{title}</span>
            <Row vertical="center">
                <DropDown
                    label={
                        <>
                            <span className={classes.name}>Example</span> {/* tjibou ml base */}
                            <img src="https://avatars.dicebear.com/api/initials/Example.svg" alt="avatar" className={classes.avatar} />
                        </>
                    }
                    options={[
                        {
                            label: "Logout",
                            onClick: () => console.log("logout"),
                        },
                    ]}
                    position={{
                        top: 52,
                        right: -6,
                    }}
                />
            </Row>
        </Row>
    )
}

IndexNavbar.propTypes = {
    title: string,
};

export default IndexNavbar