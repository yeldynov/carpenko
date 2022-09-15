import banner from '../../assets/banner.jpg';

import './header.styles.scss';

const Header = () => {
  return (
    <div className='bg-img' style={{ backgroundImage: `url(${banner})` }}>
      <div className='container'>
        <div className='topnav'>
          <a href='#home'>ГОЛОВНА</a>
          <a href='#news'>ПРО НАС</a>
          <a href='#contact'>ЧОМУ МИ?</a>
          <a href='#about'>ГАЛЕРЕЯ</a>
          <a href='#about'>ДЛЯ ЗАМОВЛЕННЯ</a>
          <a href='#about'>АНКЕТА</a>
          <a href='#about'>ВІДГУКИ</a>
        </div>
      </div>
      <div className='main-title-container'>
        <div className='main-text'>
          CARPENKO
        </div>
        <div className="secondary-text">
          Вишукане поєднання світових технологій
          <br />
          та справжньої української майстерності
        </div>
      </div>
    </div>
  );
};

export default Header;
