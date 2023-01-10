import ThemeSwitcher from "../../Elements/ThemeSwitcher/ThemeSwitcher";
import "./Header.css";

const Header = (props) => {
    return (
        <header>
            <div className="container header-wrapper">
                <h1 className="logo">Where in the world?</h1>
                <ThemeSwitcher />
            </div>
        </header>
    );
}

export default Header;