import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import { Route,Routes } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className='wrapper'>
      {/* <BrowserRouter> */}
        <Header />
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="messages" element={<Messages />} />
          </Routes>
        </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;



