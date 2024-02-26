
import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';
import logo from '../../assets/logo.svg'
import { Login } from '../Login/Login'
import { useState } from 'react';

export const Nav = () => {
    const [loginForm, setLoginForm] = useState()
    const activeStyle = ({ isActive, isPending }) => {
        return {
            color: isActive ? '#DF9962' : '',
        }
    }



    function handelLogin() {
        setLoginForm(<Login />)
    }

    return (
        <nav className={style.nav}>
            <img src={logo} alt="Logo" />
            <ul>
                <li>
                    <NavLink to='/' style={activeStyle}>Forside</NavLink>
                </li>
                <li>
                    <NavLink to='/forestillingerogevents' style={activeStyle}>Forestillinger & Events</NavLink>
                </li>
                <li>
                    <NavLink to='/skuespillere' style={activeStyle}>Skuespillere</NavLink>
                </li>
                <li>
                    {loginForm && loginForm ? loginForm : <NavLink onClick={handelLogin} style={activeStyle}>Login</NavLink>}
                </li>
            </ul>
        </nav>
    )
}



