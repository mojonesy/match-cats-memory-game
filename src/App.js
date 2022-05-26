import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <div>
        <Home />
      </div>
      
      <div className="footer">
        <footer 
          style={{marginBottom: "30px"}}>
          © Molly Jones 2022
        </footer>
      </div>
    </div>
  );
}

export default App;
