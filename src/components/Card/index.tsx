import { CardContent, SectionContainer } from "./styles"


interface CardProps {
    text: string
    title: string
}

export const Card = ({ text, title }: CardProps) => {
    return (
        <SectionContainer>
            <h1>{title}</h1>
            <CardContent>
                <p>{text}</p>
            </CardContent>
        </SectionContainer>
    )
}