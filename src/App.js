import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router';



function App(props) {
  
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <div className='content'>
          <Routes>
            <Route index element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} onPostChange={props.onPostChange} />} />
            <Route path="profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} onPostChange={props.onPostChange}/>} />
            <Route path="messages" element={<Messages messagesPage={props.state.messagesPage} addMessage={props.addMessage} onMessageChange={props.onMessageChange} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



