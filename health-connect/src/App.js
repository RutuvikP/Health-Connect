import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer'
import SingleVitaminsPage from './Pages/SingleVitaminsPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <SingleVitaminsPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
