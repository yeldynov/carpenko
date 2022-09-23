import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import aboutImage from '../../assets/images/6.jpg';

import './about.styles.scss';

const About = () => {
  return (
    <div id='about' className='about-section'>
      <div className='about-container'>
        <div className='about-content-section'>
          <div className='about-title'>
            <h1>ПРО НАС</h1>
          </div>
          <div className='about-content'>
            <h3>Декілька слів про нашу команду</h3>
            <p>
              Carpenko - українська команда, що об'єднала талановитих дизайнерів
              та теслярів. Ми просто одержимі красивими та практичними речами з
              дерева. Захоплюємося нашими віковими традиціями, а також
              досліджуємо Схід та Захід. Головне для нас - щирість у праці та
              увага до дрібниць. Ми не бажаємо просто змінити побут, ми хочему
              змінити життя.
            </p>
            <div className='about-button'>
              <a href='#'>Читати більше</a>
            </div>
            <div className='about-social'>
              <a href='#'>
                <i>
                  <FaFacebook />
                </i>
              </a>
              <a href='#'>
                <i>
                  <FaInstagram />
                </i>
              </a>
              <a href='#'>
                <i>
                  <FaYoutube />
                </i>
              </a>
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

export default About;
