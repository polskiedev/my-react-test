import React, { ReactNode, ButtonHTMLAttributes, FC } from 'react';
import ButtonVariants from './ButtonVariants';
import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  className?: string;
  children?: ReactNode;
  onClick: () => void;
}

const Button: FC<Props> = ({variant, className, children, onClick, ...props}: Props) => {
  const classList = new ClassBuilder();

  classList.addVariants(ButtonVariants, variant)
  classList.addClass(className);

  return (
    <button className={classList.build()} onClick={onClick} {...props}>{children}</button>
  )
}

export default Button