import './for-order.styles.scss';

const ForOrder = () => {
  return (
    <div id='for-order' className='team-section-for-order'>
      <div className='container'>
        <div className='row'>
          <div className='title'>
            <h1>Для Замовлення</h1>
          </div>
        </div>
        <div className='team-card'>
          <div className='card'>
            <div className='content'>
              <h3>Ваш вибір</h3>
              <p>
                Перше. Найважливіше. Оберіть модель меблів у галереї вище.
                Звертайте увагу на розміри та матеріали. Розуміємо, по фото
                важко інколи оцінити якість, тому ви завжди можете зв'язатися з
                нами через соц. мережі або по телефону.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h3>Знайомство</h3>
              <p>
                Заповніть будь ласка анкету нижче. Здається що це формальність,
                кілька простих питань. Але кожен споживач важливий для нас.
                Тому, приємно познайомитись!
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h3>Наша Справа</h3>
              <p>
                Після отримання анкети ми телефонуємо до Вас для уточнення
                деталей замолення. Після цього максимально швидко відправляємо
                меблі і вуаля, ви вже п'єте каву сидячи за новим столом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForOrder;
