import { ButtonContainer, ButtonVariant } from "./styles"

interface ButtonProps {
    variant?: ButtonVariant
    textColor?: ButtonVariant
    text: string
}

export const Button = ({
    variant = 'primary',
    text,
    textColor='primary'
} : ButtonProps) => {
    return (
        <ButtonContainer 
            variant={variant} 
            textColor={textColor}
        >
            {text}
        </ButtonContainer>)
}