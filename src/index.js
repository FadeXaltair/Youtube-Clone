import react from 'react';
import reactDom from 'react-dom/client';
import {createRoot} from 'react-dom/client';

import App from './App'
import './index.css';   

const container = document.getElementById('root');
const root = reactDom.createRoot(container);

root.render(<App />);
