import React from 'react';
import ReactDOM from 'react-dom/client';
import DarkModeContextProvider from './context/DarkModeContext.tsx';
import App from './App.tsx';
import './index.css';
import SearchQueryContextProvider from './context/SearchQueryContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <DarkModeContextProvider>
            <SearchQueryContextProvider>
                <App />
            </SearchQueryContextProvider>
        </DarkModeContextProvider>
    </React.StrictMode>,
);
