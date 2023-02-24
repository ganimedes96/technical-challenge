import {Outlet} from 'react-router-dom'
import { Footer } from '../../components/Footer'
import {Header} from '../../components/Header'
import { LayoutContainer } from './styles'

export const DefaultLayout = () => {
    return (
        <>
            <Header/>
            <LayoutContainer>
                <div>
                    <Outlet/>
                    <Footer/>      
                </div>
            </LayoutContainer>
        </>
    )
}