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
                <main className='container'>
                    <Outlet />
                </main>
            </div>
    )
}

export default App;
