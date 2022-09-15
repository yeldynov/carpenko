import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div
      className={`${classes.card}`}
      style={
        props.classN && {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          border: '1px solid black',
          height: '35rem',
        }
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
