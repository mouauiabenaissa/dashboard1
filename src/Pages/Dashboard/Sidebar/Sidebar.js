import React from "react";
import { useNavigate } from "react-router-dom";
import LogoComponent from "./LogoComponent/Logo";
import MenuList from "./MenuList/MenuList"
import MenuItem from "./MenuItem/MenuItem";
import IconLogout from "../../../Assets/icons/icon-logout";
import { createUseStyles, useTheme } from "react-jss";


const useStyles = createUseStyles({
    separator: {
        borderTop: "5px solid #2a2a29",
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.5,
    },
});
function Sidebar() {
    const navigate = useNavigate();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        navigate("/");
    }

    function convertSlugToUrl(slug, parameters) {
        let url = slug;
        Object.entries(parameters).forEach(([key, value]) => {
            url = url.replace(`:${key}`, value);
        });
        return url;
    }

    function onClick(slug, parameters = {}) {
        navigate(convertSlugToUrl(slug, parameters));
    }

    return (
        <MenuList isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id="/medicine"
                items={["/medicine/name", "/medicine/category"]}
                title="Find Medicine"
            >
                <MenuItem
                    id="/medicine/name"
                    title="By Name"
                    level={2}
                    onClick={() => onClick("/medicine/name")}
                />
                <MenuItem
                    id="/medicine/category"
                    title="By Category"
                    level={2}
                    onClick={() => onClick("/medicine/category")}
                />
            </MenuItem>
            <MenuItem
                id="/nearestpharmacy"
                title="Nearest Pharmacy"
                onClick={() => onClick("/nearestpharmacy")}
            />
            <div className={classes.separator}></div>
            <MenuItem id="logout" title="Logout" icon={IconLogout} onClick={logout} />
        </MenuList>
    );
}

export default Sidebar;
