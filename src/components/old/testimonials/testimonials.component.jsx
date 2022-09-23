import Card from '../../card/card.component';

import Slider from 'react-slick';
import test1 from '../../assets/testimonials/t1.jpg';

import AsidePic from '../../assets/images/7.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './testimonials.styles.scss';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='testimonials-container-row'>
      <div className='left-carousel-column carousel'>
        <Card>
          <h5>Ваші відгуки про нашу продукцію</h5>
          <Slider {...settings}>
            <div>
              <div className='item carousel-item active'>
                <div className='img-box'>
                  <img src={test1} alt='' />
                </div>
                <p className='testimonial'>
                  Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                  id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                  luctus turpis at accumsan tincidunt. Phasellus risus risus,
                  volutpat vel tellus ac, tincidunt fringilla massa. Etiam
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
        </Card>
      </div>
      <div className='aside-pic-column'>
        <img src={AsidePic} alt='' />
      </div>
    </div>
  );
};

export default Testimonials;
