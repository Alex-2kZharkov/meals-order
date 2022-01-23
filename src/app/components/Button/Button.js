import style from './Button.module.css';

const Button = ({ handler, children }) => {
  return (
    <button className={style.button} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
