import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { I18nProvider, LOCALES } from './i18n'

import Header from './components/Header/Index';
import Footer from './components/Footer';
import Congresso from './pages/congresso'


function App() {
  const [locale, setLocale] = useState(LOCALES.PORTUGUES);

  return (
    <I18nProvider locale={locale}>
      <div className="App">
          
          <Header />
          <Congresso />
          <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
