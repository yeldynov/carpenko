import logo1 from '../../assets/logos/digital-art.png';
import logo2 from '../../assets/logos/saw.png';
import logo3 from '../../assets/logos/box.png';

import './why-us.styles.scss';

const WhyUs = () => {
  return (
    <div id='why-us' className='team-section-why-us'>
      <div className='container'>
        <div className='row'>
          <div className='title'>
            <h1>Чому обирають нас? </h1>
          </div>
        </div>
        <div className='team-card'>
          <div className='card'>
            <div className='image-section'>
              <img src={logo1} alt='some-image' />
            </div>
            <div className='content'>
              <h3>Дизайн</h3>
              <p>
                Сучасні форми, що поєднують у собі східні,скандинавські та
                українські мотиви.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='image-section'>
              <img src={logo2} alt='some-image' />
            </div>
            <div className='content'>
              <h3>Виробництво</h3>
              <p>
                Сучасне точне обладнання, талановиті майстри, що знають свою
                справу.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='image-section'>
              <img src={logo3} alt='some-image' />
            </div>
            <div className='content'>
              <h3>Доставка</h3>
              <p>Доставка поштою у будь-який куточок України чи світу.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
