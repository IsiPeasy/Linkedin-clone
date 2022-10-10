import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="
          title="linkedin"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="data:image/png;base64,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"
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
