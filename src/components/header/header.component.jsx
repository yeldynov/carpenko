import './header.styles.scss';

const Header = () => {
  return (
    <div className='main-image'>
      <div className='header-container'>
        <h1>
          <span>Carpenko</span>
        </h1>
        <span className='cen'>
          Вишукане поєднання світових технологій <br /> та справжньої
          української майстерності
        </span>
        <a className='button' href='#'>
          Замовити
        </a>
      </div>
    </div>
  );
};

export default Header;
