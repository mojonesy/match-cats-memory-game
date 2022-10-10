import './App.css';
import AboutModal from './components/AboutModal';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {

  const openModal = () => {
    document.body.classList.toggle("modal-open");
    document.body.classList.toggle("nav-open");
  }

  return (
    <div className="App">
      <Nav openModal={openModal} />
      <Home />
      <AboutModal />
      
      <div className="footer">
        <footer>
          © Molly Jones 2022
        </footer>
      </div>
    </div>
  );
}

export default App;
