import { Drawer } from "antd";
import { NavLink } from "react-router-dom";
// import { useState } from 'react';
export const AppDrawer = ({ onClose, open }) => {
  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer placement="right" onClose={onClose} open={open}>
        <div className="menu">
          <NavLink className="menu__home" to={"/"}>
            Home
          </NavLink>
          <NavLink className="menu__about" to={"/about"}>
            About
          </NavLink>
          <NavLink className="menu__contact" to={"/contact"}>
            Contact Us
          </NavLink>
        </div>
      </Drawer>
    </>
  );
};
