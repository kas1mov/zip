import { NavLink } from "react-router-dom";
import { BurgerIcon } from "../../assets/icon/icon";
import { useState } from "react";
import { AppDrawer } from "../Drawer/drawer";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="header__page">
      <div className="container">
        <div className="header">
          <div className="header__img">Equip</div>
          <button
            className="header__burger"
            type="primary"
            onClick={showDrawer}
          >
            <BurgerIcon />
          </button>
          <AppDrawer onClose={onClose} open={open}/>
          <div className="header__menu">
            <NavLink className="header__menu__home" to={"/"}>
              Home
            </NavLink>
            <NavLink className="header__menu__about" to={"/about"}>
              About
            </NavLink>
            <NavLink className="header__menu__contact" to={"/contact"}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
