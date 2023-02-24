import ImgHome from '../../assets/rafiki1.svg'
import { Button } from '../../components/Button'
import { MainContainer, SectionContent } from './styles'

export const Home = () => {
    return (
        <MainContainer>
            <SectionContent>
                <h1>Boas vindas a Lacrei  Saúde</h1>
                <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
                
                <div>
                    <Button 
                        variant='primary' 
                        textColor='secondary' 
                        text='Pessoa Usuária'
                        link='/users'
                    />
                    <Button 
                        variant='secondary'
                        textColor='primary' 
                        text='Profissional'
                        link='/professional'
                    />
                </div>
            </SectionContent>
            <SectionContent>
                <img src={ImgHome} alt="Imagem de uma doutora" />
            </SectionContent>
        </MainContainer>
    )
}