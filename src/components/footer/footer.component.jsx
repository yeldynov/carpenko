import inst1 from '../../assets/images/8.jpg';
import inst2 from '../../assets/images/3.jpg';
import inst3 from '../../assets/images/4.jpg';
import inst4 from '../../assets/images/5.jpg';
import inst5 from '../../assets/images/6.jpg';
import inst6 from '../../assets/images/7.jpg';

import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='footer-cta pt-5 pb-5'></div>
        <div className='footer-content pt-5 pb-5'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 mb-50'>
              <div className='footer-widget'>
                <div className='footer-logo'>
                  <a href='index.html'>
                    <div className='about-logo'>
                      <span className='white-part-about-nav'>CARPEN</span>
                      <span className='red-part-about-nav'>KO</span>
                    </div>
                  </a>
                </div>
                <div className='footer-text'>
                  <p>
                    Українська команда, що об'єднала талановитих дизайнерів та
                    теслярів.
                    <br />
                    099-876-43-21
                    <br />
                    info@gmail.com
                  </p>
                </div>
                <div className='footer-social-icon'>
                  <span>Підпишіться на Нас</span>
                  <a href='#'>
                    <i className='fab fa-facebook-f facebook-bg'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-telegram twitter-bg'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-youtube google-bg'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-2 col-md-6 mb-30'>
              <div className='footer-widget'>
                <div className='footer-widget-heading'>
                  <h3>Меню</h3>
                </div>
                <ul>
                  <li>
                    <a href='#home'>Нагору</a>
                  </li>
                  <li>
                    <a href='#about'>Про Нас</a>
                  </li>
                  <li>
                    <a href='#why-us'>Чому ми?</a>
                  </li>
                  <li>
                    <a href='#gallery'>Галерея</a>
                  </li>
                  <li>
                    <a href='#anketa'>Анкета</a>
                  </li>
                  <li>
                    <a href='#'>Відгуки клієнтів</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-2 col-lg-2 col-md-6 mb-30'>
              <div className='widget_gallery gallery-grid-4'>
                <div className='footer-widget-heading'>
                  <h3>Instagram</h3>
                </div>
                <ul className='magnific-image'>
                  <li>
                    <a className='magnific-anchor'>
                      <img src={inst1} alt='second image' />
                    </a>
                  </li>
                  <li>
                    <a className='magnific-anchor'>
                      <img src={inst2} alt='second image' />
                    </a>
                  </li>
                  <li>
                    <a className='magnific-anchor'>
                      <img src={inst2} alt='second image' />
                    </a>
                  </li>
                  <li>
                    <a className='magnific-anchor'>
                      <img src={inst4} alt='second image' />
                    </a>
                  </li>
                  <li>
                    <a className='magnific-anchor'>
                      <img src={inst5} alt='second image' />
                    </a>
                  </li>
                  <li>
                    <a className='magnific-anchor'>
                      <img src={inst6} alt='second image' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 mb-50'>
              <div className='footer-widget'>
                <div className='footer-widget-heading'>
                  <h3>Підписатися на новини</h3>
                </div>
                <div className='footer-text mb-25'>
                  <p>
                    Не пропустіть важливі оновлення асортименту, підпишіться на
                    новини.
                  </p>
                </div>
                <div className='subscribe-form'>
                  <form action='#'>
                    <input type='text' placeholder='Ваша Email-Адреса' />
                    <button>
                      <i className='fab fa-telegram-plane'></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-6 text-center text-lg-left'>
              <div className='copyright-text'>
                <p>
                  Copyright &copy; 2022, Всі права захищені.{' '}
                  <a href='https://github.com/yeldynov' target='_blank'>
                    SY Design
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
