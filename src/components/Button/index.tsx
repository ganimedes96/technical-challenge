import { NavLink } from "react-router-dom"
import { ButtonContainer, ButtonVariant } from "./styles"
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    variant?: ButtonVariant
    textColor?: ButtonVariant
    text: string
    link: string
    testId: string
}


export const Button = ({
    variant = 'primary',
    textColor='primary',
    text,
    link,
    testId
} : ButtonProps) => {
    const navigate = useNavigate()
    return (
       
            <ButtonContainer
                data-testid={testId}
                onClick={() => navigate(link)} 
                variant={variant} 
                textColor={textColor}
            >
                {text}
            </ButtonContainer>

        
    )
}