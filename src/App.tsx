import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PropertiesRegistration from './components/PropertiesRegistration';
import PropertiesSearch from './components/PropertiesSearch';
import CustomersRegistration from './components/CustomersRegistration';

const App: React.FC = () =>
{
  return (
    <Router>
      <Navigation />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/properties/registration" element={<PropertiesRegistration />} />
          <Route path="/properties/search" element={<PropertiesSearch />} />
          <Route path="/customers/registration" element={<CustomersRegistration />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
