import React, { ReactNode, ButtonHTMLAttributes, FC } from 'react';
import ButtonVariants from './ButtonVariants';
import ClassManipulator from '../../../helpers/ClassManipulator';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  className?: string;
  children?: ReactNode;
}

const Button: FC<Props> = ({variant, className, children, ...props}: Props) => {
  const classList = new ClassManipulator();

  classList.addVariants(ButtonVariants, variant)
  classList.addClass(className);

  return (
    <button className={classList.getList()} {...props}>{children}</button>
  )
}

export default Button