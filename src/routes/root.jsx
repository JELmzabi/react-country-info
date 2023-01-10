import { useContext } from 'react';
import Header from '../Component/Header/Header';
import { ThemeContext } from '../Context/ThemeContext';

import "./root.css"
import { Outlet } from 'react-router-dom';

const App = () => {
    const { isDarkModeActive } = useContext(ThemeContext)
    return (
            <div className={`App ${isDarkModeActive ? "dark" : "light"}`}>
                <Header />
                <Outlet />
            </div>
    )
}

export default App;
