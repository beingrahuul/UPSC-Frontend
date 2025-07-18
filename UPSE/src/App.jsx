// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// context 
import { DateProvider } from './context/DateContext';
import { UserProvider } from './context/UserContext';

// pages
import Home from './Page/Home.jsx';

// components
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <DateProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </DateProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;