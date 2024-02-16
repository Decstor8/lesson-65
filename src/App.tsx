// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageComponents from './containers/Components/Components';

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PageComponents />} />
            </Routes>
        </div>
    );
};

export default App;
