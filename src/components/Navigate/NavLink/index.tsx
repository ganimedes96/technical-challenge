
import {NavLink} from 'react-router-dom'

interface NavProps {
    path: string
    text: string
}

export const Link = ({path, text}:NavProps) => {
    return (
        <NavLink 
            data-testid="home-nav" 
            to={path} 
            title='Home'
        >
            <h3>{text}</h3>
        </NavLink>
            
    )
}