import { NavLink } from 'react-router-dom'
import style from './Button.module.scss'

export const Button = ({ text, bgColor, path }) => {

    return (
        <div className={style.button}>
            <button style={{ backgroundColor: bgColor }}><NavLink to={path}> {text} </NavLink></button>
        </div>
    )
}