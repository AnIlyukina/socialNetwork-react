import './App.scss';
import Header from './../Header/Header';
import NavBar from './../NavBar/NavBar';
import Profile from './../Profile/Profile';

function App() {

  return (
    <div className="app">
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
