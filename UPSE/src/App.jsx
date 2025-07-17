// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//context 
import { DateProvider } from './context/DateContext';

//pages
import Home from './Page/Home.jsx';

//components
import Navbar from './components/Navbar.jsx';



const App = () => {

  return (
    <BrowserRouter>
      <DateProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DateProvider>
    </BrowserRouter>
  );
};

export default App;