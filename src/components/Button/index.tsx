import { NavLink } from "react-router-dom"
import { ButtonContainer, ButtonVariant } from "./styles"

interface ButtonProps {
    variant?: ButtonVariant
    textColor?: ButtonVariant
    text: string
    link: string
}


export const Button = ({
    variant = 'primary',
    textColor='primary',
    text,
    link
} : ButtonProps) => {
    return (
        <NavLink to={link}>
            <ButtonContainer 
                variant={variant} 
                textColor={textColor}
            >
                {text}
            </ButtonContainer>)

        </NavLink>
}