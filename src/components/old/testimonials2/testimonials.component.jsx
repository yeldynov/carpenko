import { Swiper, SwiperSlide } from 'swiper/react';

import test1 from '../../assets/testimonials/t1.jpg';
import quoteMark from '../../assets/testimonials/quote.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';

import './testimonials.styles.scss';

const Testimonials = () => {
  return (
    <>
      <h1>Ваші Відгуки про Нашу Продукцію</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='testimonialBox'>
            <img src={quoteMark} alt='quote' className='quote' />
            <div className='content'>
              <p>
                "Я цікавлюся дизайном вже давно, останнім часом я захоплююся
                японським та скандинавським стилем в оформленні інтер'єрівю Але
                проблема в тому, ща я просто не могла знай щось подібне в
                Україні. Аж ось випадково натрапила на щось новеньке і не
                помилилася. Саме цей відгук я пишу на столі, котрий зроблений
                без жодного цвяха. Дякую Вам! Не зупиняйтеся. Нових ідей та
                успіхів."
              </p>
              <div className='details'>
                <div className='imgBx'>
                  <img src={test1} alt='testimonial' />
                </div>
                <h3>
                  Вікторія Ліснянська <br /> <span>Дизайнерка, Викладач</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonialBox'>
            <img src={quoteMark} alt='quote' className='quote' />
            <div className='content'>
              <p>
                "Я цікавлюся дизайном вже давно, останнім часом я захоплююся
                японським та скандинавським стилем в оформленні інтер'єрівю Але
                проблема в тому, ща я просто не могла знай щось подібне в
                Україні. Аж ось випадково натрапила на щось новеньке і не
                помилилася. Саме цей відгук я пишу на столі, котрий зроблений
                без жодного цвяха. Дякую Вам! Не зупиняйтеся. Нових ідей та
                успіхів."
              </p>
              <div className='details'>
                <div className='imgBx'>
                  <img src={test1} alt='testimonial' />
                </div>
                <h3>
                  Вікторія Ліснянська <br /> <span>Дизайнерка, Викладач</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonialBox'>
            <img src={quoteMark} alt='quote' className='quote' />
            <div className='content'>
              <p>
                "Я цікавлюся дизайном вже давно, останнім часом я захоплююся
                японським та скандинавським стилем в оформленні інтер'єрівю Але
                проблема в тому, ща я просто не могла знай щось подібне в
                Україні. Аж ось випадково натрапила на щось новеньке і не
                помилилася. Саме цей відгук я пишу на столі, котрий зроблений
                без жодного цвяха. Дякую Вам! Не зупиняйтеся. Нових ідей та
                успіхів."
              </p>
              <div className='details'>
                <div className='imgBx'>
                  <img src={test1} alt='testimonial' />
                </div>
                <h3>
                  Вікторія Ліснянська <br /> <span>Дизайнерка, Викладач</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
