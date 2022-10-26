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

  if (loading) return <h2 className='loading-msg'>Loading...</h2>;
  if (error) return `Error: ${error.message}`;
  return (
    <div className="App">
      
      <Nav openModal={openModal} />
      <Home />
      <AboutModal 
        loading={loading}
        data={data}
        error={error} 
      />

      <div className="footer">
        <footer>
          © Molly Jones 2022
        </footer>
      </div>
    </div>
  );
}

export default App;
