import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';


// Empty Page Components
const PropertiesRegistration = () => <div><h1>Properties Registration</h1></div>;
const PropertiesSearch = () => <div><h1>Properties Search and Listing</h1></div>;
const CustomersRegistration = () => <div><h1>Customers Registration</h1></div>;

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
