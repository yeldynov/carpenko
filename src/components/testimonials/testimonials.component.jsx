import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import aboutImage from '../../assets/images/6.jpg';

import Slider from 'react-slick';
import test1 from '../../assets/testimonials/t1.jpg';

import AsidePic from '../../assets/images/7.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../test2/test2.styles.scss';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id='about' className='about-section'>
      <div className='about-container'>
        <div className='about-content-section'>
          <div className='about-content'>
            <div className='testimonials-container'>
              <div className='testimonials-nav-container'></div>
              <div className='testimonials-body-container'>
                <div className='testimonials-row'>
                  <h3>ВАШІ ВІДГУКИ ПРО НАШУ ПРОДУКЦІЮ</h3>
                  <div className='left-carousel-column carousel'>
                    <Slider {...settings}>
                      <div className='item-box'>
                        <div className='item carousel-item active'>
                          <div className='img-box'>
                            <img src={test1} alt='' />
                          </div>
                          <p className='testimonial'>
                            Phasellus vitae suscipit justo. Mauris pharetra
                            feugiat ante id lacinia. Etiam faucibus mauris id
                            tempor egestas. Duis luctus turpis at accumsan
                            tincidunt. Phasellus risus risus, volutpat vel
                            tellus ac, tincidunt fringilla massa. Etiam
                            hendrerit dolor eget rutrum.
                          </p>
                          <p className='overview'>
                            <b>Paula Wilsons</b> Seo Analyst
                          </p>
                          <div className='star-rating'> </div>
                        </div>
                      </div>
                      <div>
                        <h3>2</h3>
                      </div>
                      <div>
                        <h3>3</h3>
                      </div>
                      <div>
                        <h3>4</h3>
                      </div>
                      <div>
                        <h3>5</h3>
                      </div>
                      <div>
                        <h3>6</h3>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='about-image-section'>
          <img src={aboutImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
