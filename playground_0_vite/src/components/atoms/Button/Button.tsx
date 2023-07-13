import React, { ReactNode, ButtonHTMLAttributes, FC } from 'react';
import ButtonVariants from './ButtonVariants';
import ClassCollector from '../../../helpers/ClassManager/ClassCollector';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  className?: string;
  children?: ReactNode;
  onClick: () => void;
}

const Button: FC<Props> = ({variant, className, children, onClick, ...props}: Props) => {
  const classList = new ClassCollector();

  classList.addVariants(ButtonVariants, variant)
  classList.addClass(className);

  return (
    <button className={classList.build()} onClick={onClick} {...props}>{children}</button>
  )
}

export default Button