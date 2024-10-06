import { MyPageHeader, MyPageHeaderProps } from "my-ui-library"

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

type IAvatarMenuList = MyPageHeaderProps["avatarMenuList"];
type IIconMenuList = MyPageHeaderProps["iconMenuList"];

const avatarMenuList: IAvatarMenuList = [
    {
        name: "Profile",
        icon: Person4OutlinedIcon,
        link: "/profile",
    },
    {
        name: "Account",
        icon: SettingsOutlinedIcon,
        link: "/account",
    },
    {
        name: "Logout",
        icon: LogoutOutlinedIcon,
        link: "/logout",
        hasDivider: true,
    },
];

const iconMenuList: IIconMenuList = [
    {
        name: "Co-pilot",
        icon: AutoAwesomeOutlinedIcon,
        link: "/co-pilot",
    },
    {
        name: "Dashboard",
        icon: WidgetsOutlinedIcon,
        link: "/dashboard",
    },
    {
        name: "Notification",
        icon: NotificationsOutlinedIcon,
        link: "/notification",
    },
];

const handleMenuItemClick = (menu: IAvatarMenuList[0]) => {
    console.log("Clicked Menu Item", menu);
};

const handleOnSearch = (query: string) => {
    console.log("Search Query", query);
};

const props = {
    avatarMenuList,
    onAvatarMenuItemClick: handleMenuItemClick,
    iconMenuList,
    onIconMenuItemClick: handleMenuItemClick,
    onSearch: handleOnSearch,
}

export const Header = () => {

    return <MyPageHeader {...props} />
}

export default Header;