import './App.css';

import Header from './components/header/header.component';
import About from './components/about/about.component';
import WhyUs from './components/why-us/why-us.component';
import Gallery from './components/gallery/gallery.component';
import ForOrder from './components/for-order/for-order.component';
import Anketa from './components/anketa/anketa.component';
import Testimonials from './components/testimonials/testimonials.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <About />
      <WhyUs />
      <ForOrder />
      <Footer />
    </div>
  );
};

export default App;
