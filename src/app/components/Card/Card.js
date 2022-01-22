import style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={style.container} style={props.customStyle}>
      {props.children}
    </div>
  );
};

export default Card;
