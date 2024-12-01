import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {i18n} from "./i18n.ts";
import {AppRouter} from "./Routes.tsx";
import {I18nextProvider} from "react-i18next";
import {BrowserRouter as Router} from "react-router-dom";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={ i18n }>
      <Router>
        <AppRouter />
      </Router>
    </I18nextProvider>
  </StrictMode>,
)
