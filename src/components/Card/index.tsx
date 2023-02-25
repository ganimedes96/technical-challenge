import { CardContent, SectionContainer } from "./styles"


interface CardProps {
    text: string
    title: string
    titleId: string
    paragraphId: string

}

export const Card = ({ text, title, titleId, paragraphId }: CardProps) => {
    return (
        <SectionContainer>
            <h1 data-testid={titleId}>{title}</h1>
            <CardContent>
                <p data-testid={paragraphId}>{text}</p>
            </CardContent>
        </SectionContainer>
    )
}