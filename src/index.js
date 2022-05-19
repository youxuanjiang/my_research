import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pages from './pages';
// StrictMode Render Your Pages Twice (Dev方便)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Pages />
);
