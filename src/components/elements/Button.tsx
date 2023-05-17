import { ButtonHTMLAttributes, HTMLProps } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ children, className, ...rest }) => {
  const buttonClassName = `bg-yellow-300 px-5 py-3 rounded-md text-sky-400 uppercase font-semibold ${
    className || ''
  }`;

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
