import About from './components/about/About';
//import Counter from './components/Counter';
import Request from './components/Request';
import Hero from './components/Hero';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Info from './components/Info';

import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({duration:1500})
    AOS.refresh()
  },[] )
 
  return (
    <div className="App">
    
      <Nav />
     <Hero />
    <About />
     {/* <Counter /> */}
     <Info />
     <Request />
     <Footer />  
    </div>
  );
}

export default App;


