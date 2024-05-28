import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Cards from './Components/Cards/Cards'
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <About></About>
        <Cards></Cards>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
