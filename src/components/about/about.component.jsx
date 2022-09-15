import './about.styles.scss';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-nav-container'>
        <div className='about-logo'>
          <span className='white-part-about-nav'>CARPEN</span>
          <span className='red-part-about-nav'>KO</span>
        </div>
        <div className='about-social-right'>
          <span>
            <i className='fa-brands fa-youtube'></i>
            <i className='fa-brands fa-telegram'></i>
            <i className='fa-brands fa-instagram'></i>
          </span>
        </div>
      </div>
      <div className='about-body-container'>
        <div className='about-top-title'>
          <h3>ПРО НАС</h3>
        </div>
        <div className='about-columns-container'>
          <div className='about-columns-left'>
            <h1>
              Декілька слів <br /> про нашу <br /> команду
            </h1>
          </div>
          <div className='about-columns-right'>
            Carpenko - українська команда, що об'єднала талановитих дизайнерів
            та теслярів. <br />
            Ми просто одержимі красивими та практичними речами з дерева. <br />
            Захоплюємося нашими віковими традиціями, <br /> а також досліджуємо
            Схід та Захід. <br />
            Головне для нас - щирість у праці та увага до дрібниць. <br />
            Ми не бажаємо просто змінити побут, <br /> ми хочему змінити життя.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
