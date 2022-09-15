import { useRef, useState } from 'react'
import classes from './Checkout.module.css'

const isEmpty = (value) => value.trim() === ''
const isFiveChars = (value) => value.trim().length === 5

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  })

  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid

    if (!formIsValid) {
      return
    }

    // вызывается чтобы отправить данные родительскому элементу Cart.js
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    })
  }

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Ваше Имя</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && <p>Пожалуйста, введите корректное имя.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Улица</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidity.street && (
          <p>Пожалуйста, введите корректную улицу</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="postal">Почтовый индекс</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!formInputsValidity.postalCode && (
          <p>Пожалуйста, введите корректный почтовый индекс (5 символов).</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="city">Город</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && (
          <p>Пожалуйста, введите корректный город.</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Отмена
        </button>
        <button className={classes.submit}>Подтвердить</button>
      </div>
    </form>
  )
}

export default Checkout
