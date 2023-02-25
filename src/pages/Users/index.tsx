import { Card } from "../../components/Card"
import { MainContainer, SectionContent } from "./styles"
import users from '../../assets/rafiki.svg'

export const Users = () => {
    return (
        <MainContainer>
            <Card
                titleId="users-title"
                paragraphId="users-paragraph"
                title="Pessoa Usuária"
                text="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
            />
            <SectionContent>
                <img data-testid="img-users" src={users} alt="Pessoas mexendo no celular" />
            </SectionContent>
       
        </MainContainer>
    )
}