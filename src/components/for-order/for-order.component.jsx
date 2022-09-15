import './for-order.styles.scss';

const ForOrder = () => {
  return (
    <div className='for-order-container'>
      <div className='for-order-nav-container'>
        <div className='for-order-logo'>
          <h1>ДЛЯ ЗАМОВЛЕННЯ</h1>
        </div>
      </div>
      <div className='for-order-body-container'>
        <div className='for-order-row'>
          <div className='for-order-column'>
            <h2>Ваш Вибір</h2>
            <hr />
            <h4>
              Перше. Найважливіше. Оберіть модель меблів у галереї вище.
              Звертайте увагу на розміри та матеріали. Розуміємо, по фото важко
              інколи оцінити якість, тому ви завжди можете зв'язатися з нами
              через соц. мережі або по телефону.
            </h4>
          </div>
          <div className='for-order-column'>
            <h2>Виробництво</h2>
            <hr />
            <h4>
              Заповніть будь ласка анкету нижче. <br />
              Здається що це формальність, кілька простих питань. <br />
              Але кожен споживач важливий для нас. <br />
              Тому, приємно познайомитись!
            </h4>
          </div>
          <div className='for-order-column'>
            <h2>Наша Справа</h2>
            <hr />
            <h4>
              Після отримання анкети ми телефонуємо до Вас для уточнення деталей
              замолення. Після цього максимально швидко відправляємо меблі і
              вуаля, ви вже п'єте каву сидячи за новим столом.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForOrder;
