import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { MainLayout } from './layout/MainLayout';
import { FirstPage } from './pages/FirstPage/FirstPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ShowsAndEventsPage } from './pages/ShowsAndEventsPage/ShowsAndEventsPage';
import { ActorsPage } from './pages/ActorsPage/ActorsPage';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { DetailsActorPage } from './pages/DetailsPage/DetailsActorPage';
function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<FirstPage />} />
                        <Route path='/forestillingerogevents' element={<ShowsAndEventsPage />} />
                        <Route path='/skuespillere' element={<ActorsPage />} />
                        <Route path='/detaljer/:id' element={<DetailsPage />} />
                        <Route path='/skuespiller/:id' element={<DetailsActorPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        {/* <Route path='/*' element={<ErrorPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App