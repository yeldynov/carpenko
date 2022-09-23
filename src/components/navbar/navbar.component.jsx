import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.styles.scss';

function Navbar() {
  const navRef = useRef();

  const showNavbar = (e) => {
    // e.preventDefault();
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header id='home'>
      <h3>CARPENKO</h3>
      <nav ref={navRef}>
        <a href='#home' onClick={showNavbar}>
          Головна
        </a>
        <a href='#about' onClick={showNavbar}>
          Про Нас
        </a>
        <a href='#why-us' onClick={showNavbar}>
          Чому Ми?
        </a>
        <a href='#gallery' onClick={showNavbar}>
          Галерея
        </a>
        <a href='#for-order' onClick={showNavbar}>
          Для Замовлення
        </a>
        <a href='#contact-us' onClick={showNavbar}>
          Анкета
        </a>
        <a href='#testimonials' onClick={showNavbar}>
          Відгуки
        </a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
