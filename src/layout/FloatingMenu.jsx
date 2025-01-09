import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiGooglelens } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-menu">
      <div className={`menu-icon d-flex gap-2`} onClick={toggleMenu}>
        <NavLink to="/dashboard" className="menu-item f-14">
          <LuLayoutDashboard className="f-18" />
          &nbsp; Dashboard
        </NavLink>
        <NavLink to="/camera-feed" className="menu-item f-14">
          <SiGooglelens className="f-18" />
          &nbsp; Camera Feed
        </NavLink>
      </div>
    </div>
  );
};

export default FloatingMenu;
