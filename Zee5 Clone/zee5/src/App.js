import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Routes/HomePage';
import Footer from './Components/LandingPage/Footer';
import Image from './Components/LandingPage/Shows/Image';
import LoginPage from './Components/Routes/LoginPage';
import ShowList from './Components/LandingPage/ShowAndMovies/MovieList';
import RegisterPage from './Components/Routes/RegisterPage';
import Music from './Components/Routes/Music';
import AllRoutes from './Components/Routes/AllRoutes';
import PremiumOffer from './Components/Routes/Plan';
import Payment from './Components/Routes/Payment';
import SecondNavbar from './Components/LandingPage/SecondNavbar';


function App() 
{
  return (
    <div className="App">
     <AllRoutes />
     {/* <PremiumOffer /> */}
     {/* <Payment /> */}
     {/* <SecondNavbar /> */}
    </div>
  );
}

export default App;
