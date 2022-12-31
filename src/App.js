import './App.css';
import Navbar from './Components/molecules/Navbar/Navbar';
import Main from './Components/organisms/Main/Main';
import Welcome from './Components/organisms/Welcome/Welcome';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Main />
    </div>
  );
}

export default App;
