import Logo from "./Logo";
import Menu from "./Menu";
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navBar">
            <Logo></Logo>
            <Menu></Menu>
        </div>
    );
}

export default NavBar;