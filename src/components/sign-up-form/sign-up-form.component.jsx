import { useState } from 'react';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import Card from '../card/card.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  phone: '',
  message: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, phone, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      console.log('user creation encountered an error', error);
    }
  };

  return (
    <div className='sign-up-container'>
      <Card>
        <h2>Заповнити Анкету:</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Ваше Ім'я"
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />

          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />

          <FormInput
            label='Номер Телефону'
            type='phone'
            required
            onChange={handleChange}
            name='phone'
            value={phone}
          />

          <FormInput
            label='Ваше повідомлення'
            type='text'
            required
            onChange={handleChange}
            name='message'
            value={message}
          />
          <Button type='submit'>Відправити анкету</Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUpForm;
