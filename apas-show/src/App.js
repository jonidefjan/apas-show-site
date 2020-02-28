import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { I18nProvider, LOCALES } from './i18n'


import translate from './i18n/translate'

import Header from './components/Header/Index';
import Main from './pages/main/index';
import Footer from './components/Footer';


function App() {
  const [locale, setLocale] = useState(LOCALES.PORTUGUES);

  return (
    <I18nProvider locale={locale}>
      <div className="App">
          {translate("congresso")}
          <Header />
          <Main />
          <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
