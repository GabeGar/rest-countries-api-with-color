import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './components/ui/AppLayout';
import Home from './pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
