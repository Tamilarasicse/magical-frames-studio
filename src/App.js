import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from './images/banner1.jpg';
import bannerImage1 from './images/banner2.jpg';
import birthdayImage from './images/birthday.jpg';
import Gallery from "./Gallery"; 
import Priceguide from "./Priceguide";
import Others from "./Others";
import About from "./About"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Marriageprice from './Marrigeprice';




function ExampleCarouselImage({ imageSrc }) {
  return (
    <div>
      <img 
        src={imageSrc} 
        style={{
          display: 'block',
          margin: '0',
          padding: '0',
          border: 'none',
        }}
        alt="example"
      />
    </div>
  );
}
    
function App() {

  return (
    <div className="App">
      <div class="header">
        <img src={require('./images/1-removebg-preview (1) .png')} ></img>
      </div>
      <div class="nav">
        <ul>
          <li>
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">Price Guide</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="banner">
        <Carousel controls={false}
          wrap={true}
          interval={1000}
          autoPlay        >
          <Carousel.Item>
            <ExampleCarouselImage imageSrc={bannerImage} />
            </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage imageSrc={birthdayImage} />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage imageSrc={bannerImage1} />
          </Carousel.Item>
        </Carousel>

      </div>
      <div className='G'>
      <h1>Gallery</h1>
      
      </div>
      <Gallery />
   
    <Priceguide />   
    <h1 className='O'>Other Shoots</h1>  
    <p className='PO'>“We specialize in capturing your special moments, and we’re here to document your other events too.
       Let us help preserve your memories beautifully.”</p>
    <Others />
  <h1 className='O'>About Us</h1>
        <About />
   
{/* 
<BrowserRouter>
<Routes>
  <Route index element={<App/>}></Route>
  <Route path='Marriageprice'element={<Marriageprice />}></Route>


</Routes>
</BrowserRouter> */}


    </div>
  );
}

export default App;
