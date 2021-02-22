
import './App.css';
import Navbar from './header/Navbar';
import MainArea from './main/MainArea';
import Sidebar from './main/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-body">
        
        <Sidebar />
        <MainArea />
        </div>
    </div>
  );
}

export default App;
