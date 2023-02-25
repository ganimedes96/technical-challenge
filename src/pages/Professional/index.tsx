import { Card } from "../../components/Card"
import { MainContainer, SectionContent } from "./styles"
import professional from '../../assets/profissional.svg'

export const Professional = () => {
    return (
        <MainContainer>
            <Card
                titleId="professional-title"
                paragraphId="professional-paragraph"
                title="Profissional"
                text="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
            />
            <SectionContent>
                <img data-testid="img-professional" src={professional} alt="Pessoas mexendo no celular" />
            </SectionContent>
       
        </MainContainer>
    )
}