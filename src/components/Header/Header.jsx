import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import css from "./Header.module.css";

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/home";

    return (
    <header className={`${css.header} ${isHomePage ? css.headerHome : ""}`}>
        <Logo />
        <Nav/>
    </header>
  );
};

export default Header;