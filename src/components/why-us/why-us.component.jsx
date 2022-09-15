import designLogo from '../../assets/logos/digital-art.png';
import productionLogo from '../../assets/logos/saw.png';
import boxLogo from '../../assets/logos/box.png';

import './why-us.styles.scss';

const WhyUs = () => {
  return (
    <div className='why-us-container'>
      <div className='why-us-nav-container'>
        <div className='why-us-logo'>
          <h1>ЧОМУ ОБИРАЮТЬ НАС?</h1>
        </div>
      </div>
      <div className='why-us-body-container'>
        <div className='why-us-row'>
          <div className='why-us-column'>
            <img src={designLogo} alt='design' />
            <h2>Дизайн</h2>
            <hr />
            <h4>
              Сучасні форми, що поєднують у собі східні,скандинавські та
              українські мотиви.
            </h4>
          </div>
          <div className='why-us-column'>
            <img src={productionLogo} alt='design' />
            <h2>Виробництво</h2>
            <hr />
            <h4>
              Сучасне точне обладнання, талановиті майстри, що знають свою
              справу.
            </h4>
          </div>
          <div className='why-us-column'>
            <img src={boxLogo} alt='design' />
            <h2>Доставка</h2>
            <hr />
            <h4>Доставка поштою у будь-який куточок України чи світу.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
