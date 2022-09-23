import './App.css';

import Gallery from './components/gallery/gallery.component';
import Footer from './components/footer/footer.component';
import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import WhyUs from './components/why-us/why-us.component';
import ForOrder from './components/for-order/for-order.component';
import ContactUs from './components/contact-us/contact-us.component';
import ProductCard from './components/gallery/product-card.component';
import Testimonials from './components/testimonials/testimonials.component';
import Test2 from './components/test2/test2.component';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <WhyUs />
      <Gallery />
      <ForOrder />
      <ContactUs />
      <Test2 />
      <Footer />
    </div>
  );
};

export default App;
