import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import {Home} from './pages/Home'
import {Professional} from './pages/Professional'
import {Users} from './pages/Users'


export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout/> }>
                <Route path='/' element={ <Home /> }/>
                <Route path='/users' element={ <Users /> }/>
                <Route path='/professional' element={ <Professional /> }/>
            </Route>
        </Routes>
    )
}