
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiList } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
        <nav>
      <NavLink to="/">
        <AiOutlineHome />
      </NavLink>
      <NavLink to="/projects">
        <FiList />
      </NavLink>
      <NavLink to="/contact">
        <BiMessageSquareDetail />
      </NavLink>
      <NavLink to="/about">
        <AiOutlineUser />
      </NavLink>
     
      
      
    </nav>
    
    </div>
  );
};

export default Nav;
