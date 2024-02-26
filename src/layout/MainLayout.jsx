import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Outlet } from 'react-router-dom';


export const MainLayout = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

