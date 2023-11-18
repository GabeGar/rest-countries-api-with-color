import { Outlet } from 'react-router-dom';
import Header from './Header';

const AppLayout = () => {
    return (
        <div className="h-[100dvh] min-h-[100dvh] bg-colorBg">
            <Header />

            <main className="px-5">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
