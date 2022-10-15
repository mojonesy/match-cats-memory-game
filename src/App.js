import React from 'react';
import { useFetch } from './utils/useFetch';
import './App.css';
import AboutModal from './components/AboutModal';
import Home from './components/Home';
import Nav from './components/Nav';


function App() {
  const { loading, data, error } = useFetch();
  console.log(data);

  const openModal = () => {
    document.body.classList.toggle("modal-open");
    document.body.classList.toggle("nav-open");
  }

  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;
  return (
    <div className="App">
      <Nav openModal={openModal} />
      <Home />
      <AboutModal data={data} />
      
      <div className="footer">
        <footer>
          © Molly Jones 2022
        </footer>
      </div>
    </div>
  );
}

export default App;
