import image1 from '../../assets/images/2.jpg';

import './product-card.styles.scss';

const ProductCard = ({ image, title, model, material, price, sizes }) => {
  return (
    <div className='main-product-container'>
      <div className='product-container'>
        <div className='imgBx'>
          <img src={image} alt='' />
        </div>
        <div className='details'>
          <div className='content'>
            <h2>{title}</h2>
            <br />
            <h4>Модель: {model}</h4>
            <br />
            <h4>Сировина: {material}</h4>
            <br />
            <h4>Розміри:</h4>
            <h5>Довжина {sizes[0]}см</h5>
            <h5>Ширина {sizes[1]}см</h5>
            <h5>Висота {sizes[2]}см</h5>
            <br />
            <h3>Ціна: {price} ГРН</h3>
            <br />
            <br />
            <button>Замовити</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
