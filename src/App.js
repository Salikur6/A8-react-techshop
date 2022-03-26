// import logo from './logo.svg';
import './App.css';
import Articals from './components/Articals/Articals';
import Header from './components/Header/Header';
import LaptopCards from './components/LaptopCards/LaptopCards';

function App() {
  return (
    <div className='body'>
      <div className='container'>
        <Header></Header>
        <LaptopCards></LaptopCards>
        <Articals></Articals>
      </div>
    </div>
  );
}

export default App;
