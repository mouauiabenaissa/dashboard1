import React, { useContext } from 'react'
import { string } from "prop-types";
import { Row } from "simple-flexbox";
import { SidebarContext } from '../../../Hooks/useSidebar';
import classes from "./IndexNavbar.module.css"
import DropDown from '../../../Components/Dropdown/DropDown';
function IndexNavbar() {


    return (
        <Row
            className={classes.container}
            vertical="center"
            horizontal="space-between"
        >
            <span className={classes.title}>example</span>
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