import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./resourses/css/custom.css";
import AppRoute from './Routes/AppRoute';
import { TaskContextProvider } from './Context/taskContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<TaskContextProvider>
<AppRoute/>
</TaskContextProvider>
</BrowserRouter>
);
