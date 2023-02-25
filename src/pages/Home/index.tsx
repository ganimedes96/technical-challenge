import ImgHome from '../../assets/rafiki1.svg'
import { Button } from '../../components/Button'
import { MainContainer, SectionContent } from './styles'

export const Home = () => {
    return (
        <MainContainer>
            <SectionContent>
                <h1 data-testid='title'>Boas vindas a Lacrei  Saúde</h1>
                <p data-testid='about-home'>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
                
                <div>
                    
                    <Button 
                        testId="users"
                        variant='primary' 
                        textColor='secondary' 
                        text='Pessoa Usuária'
                        link='/users'
                        
                    />
                    <Button 
                        testId='professional'
                        variant='secondary'
                        textColor='primary' 
                        text='Profissional'
                        link='/professional'
                    />
                </div>
            </SectionContent>
            <SectionContent>
                <img data-testid='img-home' src={ImgHome} alt="Imagem de uma doutora" />
            </SectionContent>
        </MainContainer>
    )
}