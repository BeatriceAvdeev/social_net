import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router';
import { addPost } from './Data/state';



function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <div className='content'>
          <Routes>
            <Route index element={<Profile profilePage={props.state.profilePage} addPost={addPost} />} />
            <Route path="profile" element={<Profile profilePage={props.state.profilePage} addPost={addPost} />} />
            <Route path="messages" element={<Messages messagesPage={props.state.messagesPage} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



