import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMePage from './AboutMePage';
import NavigationCircle from './NavigationCircle';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import { ContextProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <NavigationCircle />
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/resume' element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)