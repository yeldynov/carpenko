import banner from '../../assets/images/1.jpg';

import './header.styles.scss';

const HeaderOld = () => {
  return (
    <div className='bg-img' style={{ backgroundImage: `url(${banner})` }}>
      <div className='container'>
        <div className='topnav'>
          <a href='#home'>ГОЛОВНА</a>
          <a href='#news'>ПРО НАС</a>
          <a href='#contact'>ЧОМУ МИ?</a>
          <a href='#gallery'>ГАЛЕРЕЯ</a>
          <a href='#to-order'>ДЛЯ ЗАМОВЛЕННЯ</a>
          <a href='#anketa'>АНКЕТА</a>
          <a href='#testimonials'>ВІДГУКИ</a>
        </div>
      </div>
      <div className='main-title-container'>
        <div className='main-text'>CARPENKO</div>
        <div className='secondary-text'>
          Вишукане поєднання світових технологій
          <br />
          та справжньої української майстерності
        </div>
      </div>
    </div>
  );
};

export default HeaderOld;
