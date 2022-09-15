import Card from '../card/card.component';
import SignUpForm from '../sign-up-form/sign-up-form.component';
import './anketa.styles.scss';

const Anketa = () => {
  return (
    <div className='anketa-container'>
      <div className='anketa-nav-container'>
        <div className='anketa-logo'>
          <h1>АНКЕТА</h1>
        </div>
      </div>
      <div className='anketa-body-container'>
        <div className='anketa-row'>
          <div className='anketa-column left'>
            <SignUpForm />
          </div>
          <div className='anketa-column right'>
            <Card classN='transparent'>
              <h1>
                <b>Наші Контакти</b>
              </h1>

              <div className='info-group'>
                <h4>E-MAIL</h4>
                <h5>info@gmail.com</h5>
                <br />
              </div>
              <div className='info-group'>
                <h4>Номер Телефону</h4>
                <h5>099-987-65-432</h5>
                <br />
              </div>
              <div className='info-group'>
                <h4>Наша адреса</h4>
                <h5>Україна, м. Харків, пл. Свободи, 25</h5>
                <br />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anketa;
