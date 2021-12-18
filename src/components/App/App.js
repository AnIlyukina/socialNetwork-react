import './App.scss';
import Header from './../Header/Header';
import NavBar from './../NavBar/NavBar';
import Profile from './../Profile/Profile';
import Dialogs from './../Dialogs/Dialogs' 
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <NavBar/>
        <main className='app__content'>
          <Routes>
            <Route path= '/profile' element = {<Profile/>}/>
            <Route path='/dialogs' element = {<Dialogs/>}/>
            <Route path= '/news' element = {<News/>}/>
            <Route path='/music' element = {<Music/>}/>
            <Route path='/settings' element = {<Settings/>}/>
          </Routes>
         
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
