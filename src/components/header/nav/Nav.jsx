import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='login'>Log in</NavLink>
               
        </div>
    );
};

export default Nav;