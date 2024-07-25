import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './page/home/index';
import reportWebVitals from './reportWebVitals';
import { SpeedInsights } from "@vercel/speed-insights/react"

import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Analytics />
    <SpeedInsights />
    </React.StrictMode>
);


reportWebVitals();
