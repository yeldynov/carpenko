import { useState } from 'react';

import {
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMailBulk,
  FaPhoneAlt,
} from 'react-icons/fa';

import './contact-us-styles.scss';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const ContactUs = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, phone, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formFields);

    // TODO: Add to DB, or send somewhere....
    resetFormFields();
  };

  return (
    <div className='contactUs'>
      <div className='title'>
        <h1 id='contact-us'>ЗВ'ЯЖІТЬСЯ З НАМИ</h1>
      </div>
      <div className='box'>
        <div className='contact form'>
          <h3>Заповніть Анкету</h3>
          <form onSubmit={handleSubmit}>
            <div className='formBox'>
              <div className='row50'>
                <div className='inputBox'>
                  <span>Ваше Ім'я</span>
                  <input
                    type='text'
                    placeholder='Сергій'
                    required
                    onChange={handleChange}
                    name='firstName'
                    value={firstName}
                  />
                </div>
                <div className='inputBox'>
                  <span>Ваше Прізвище</span>
                  <input
                    type='text'
                    placeholder='Вавілов'
                    required
                    onChange={handleChange}
                    name='lastName'
                    value={lastName}
                  />
                </div>
              </div>

              <div className='row50'>
                <div className='inputBox'>
                  <span>Ваш Email</span>
                  <input
                    type='email'
                    placeholder='serhiivavilov@gmail.com'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                  />
                </div>
                <div className='inputBox'>
                  <span>Ваш Номер Телефону</span>
                  <input
                    type='text'
                    placeholder='+380 97 13 54 123'
                    required
                    onChange={handleChange}
                    name='phone'
                    value={phone}
                  />
                </div>
              </div>

              <div className='row100'>
                <div className='inputBox'>
                  <span>Ваше Повідомлення</span>
                  <textarea
                    placeholder='Напишіть Ваше повідомлення тут...'
                    required
                    onChange={handleChange}
                    name='message'
                    value={message}
                  ></textarea>
                </div>
              </div>

              <div className='row100'>
                <div className='inputBox'>
                  <input type='submit' value='Відправити Анкету' />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className='contact info'>
          <h3>Наші Контакти</h3>
          <div className='infoBox'>
            <div>
              <span>
                <FaMapMarkerAlt />
              </span>
              <p>
                м. Харків, пл. Свободи, 25
                <br /> УКРАЇНА
              </p>
            </div>
            <div>
              <span>
                <FaMailBulk />
              </span>
              <a href='mailto:info@gmail.com'>info@gmail.com</a>
            </div>
            <div>
              <span>
                <FaPhoneAlt />
              </span>
              <a href='tel:+3009998765432'>+380 99 987 65 432</a>
            </div>
            <ul className='sci'>
              <li>
                <a href='#'>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='contact map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.3542359833577!2d36.232623815696044!3d50.00471537941638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e0a7674541%3A0xddd77b559bc31be0!2z0L_Quy4g0KHQstC-0LHQvtC00YssIDI1LCDQpdCw0YDRjNC60L7Qsiwg0KXQsNGA0YzQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjEwMDA!5e0!3m2!1sru!2sua!4v1663499342651!5m2!1sru!2sua'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
