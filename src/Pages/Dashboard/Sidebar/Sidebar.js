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
                id="/ideas1"
                items={["/ideas1/ideas11", "/ideas1/ideas12"]}
                title="ideas1"
            >
                <MenuItem
                    id="/ideas1/ideas11"
                    title="ideas11"
                    level={2}
                    onClick={() => onClick("/ideas1/ideas11")}
                />
                <MenuItem
                    id="/ideas1/ideas12"
                    title="ideas12"
                    level={2}
                    onClick={() => onClick("/ideas1/ideas12")}
                />
            </MenuItem>
            <MenuItem
                id="ideas2"
                title="ideas2"
                onClick={() => onClick("/ideas2")}
            />
            <MenuItem
                id="/ideas3"
                title="ideas3"
                onClick={() => onClick("/ideas3")}
            />
            <div className={classes.separator}></div>
            <MenuItem id="logout" title="Logout" icon={IconLogout} onClick={logout} />
        </MenuList>
    );
}

export default Sidebar;
