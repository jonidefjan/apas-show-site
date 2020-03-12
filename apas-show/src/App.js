import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { I18nProvider, LOCALES } from './i18n'

import Header from './components/Header/Index';
import Footer from './components/Footer';
import Congresso from './pages/congresso';
import Home from './pages/home'
import Mapa from './pages/mapa'

import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  const [locale, setLocale] = useState(LOCALES.PORTUGUES);

  return (
    <Router>
      <I18nProvider locale={locale}>
        <div className="App">
            
            <Header />
            
            <Switch>
              <Route path="/congresso">
                <Congresso />
              </Route>
              <Route path="/mapa">
                <Mapa />
              </Route>
              <Route path="/" exact={true}> 
                <Home />
              </Route>
            </Switch>
            
            <Footer />

        </div>
      </I18nProvider>
    </Router>
  );
}

export default App;
