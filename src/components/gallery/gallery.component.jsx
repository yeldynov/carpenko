import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';

import image1 from '../../assets/images/2.jpg';
import image2 from '../../assets/images/3.jpg';
import image3 from '../../assets/images/8.jpg';
import image4 from '../../assets/images/4.jpg';

import './gallery.styles.scss';
import ProductCard from './product-card.component';

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <div className='gallery-container'>
      <div className='title'>
        <h1>ГАЛЕРЕЯ</h1>
      </div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        pagination={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        <SwiperSlide>
          <div className='slide-container'>
            <ProductCard
              image={image1}
              title='Стіл для чаювання'
              price='999'
              model='Сarpen #8'
              material='Дуб, Клен'
              sizes={['160', '80', '100']}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-container'>
            <ProductCard
              image={image2}
              title='Стіл для чаювання'
              price='999'
              model='Сarpen #8'
              material='Дуб, Клен'
              sizes={['160', '80', '100']}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-container'>
            <ProductCard
              image={image3}
              title='Стіл для чаювання'
              price='999'
              model='Сarpen #8'
              material='Дуб, Клен'
              sizes={[160, 80, 100]}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-container'>
            <ProductCard
              image={image4}
              title='Стіл для чаювання'
              model='Сarpen #8'
              material='Дуб, Клен'
              price='999'
              sizes={['160', '80', '100']}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='thumbs-container'>
        <Swiper
          onSwiper={setThumbsSwiper}
          pagination={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='thumb-slide-gallery'>
              <img src={image1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='thumb-slide-gallery'>
              <img src={image2} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='thumb-slide-gallery'>
              <img src={image3} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='thumb-slide-gallery'>
              <img src={image4} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
