import {Routes, Route,} from 'react-router-dom';
import './App.css';
import {React,}  from 'react';

//Components
import Paragraph from './components/Accordion Product Page/paragraph';

//Pages
import Tshirts from './pages/Mens/Tshirts';
import Summerneverends from './pages/Summer Never Ends';
import Muse_TShirt from './pages/Product Pages/Muse T-Shirt';
import Accordion from './components/Accordion Product Page/Accordion';
import Payment from './components/Accordion Product Page/payment';
import Hoodies_Sweatshirts from './pages/Mens/Hoodies & Sweatshirts';
import Shorts from './pages/Mens/Shorts';
import Pants from './pages/Mens/Pants';
import WomensPants from './pages/Womens/Pants';
import Tshirts_Tops from './pages/Womens/T-Shirts & Tops';
import Movie_Hoodie from './pages/Product Pages/Movie Hoodie';
import Shoppingbag from './pages/Shopping Bag/Shopping Bag';
import Checkout from './pages/Shopping Bag/Checkout';
import Footer from './components/Footer';
import OurCanvas from './pages/Our Canvas/Our Canvas';



function App() {
  return (
    <>
    <Movie_Hoodie/>
    </>
  );
}

export default App;
