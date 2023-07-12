import React, { ButtonHTMLAttributes, FC } from 'react';
import ButtonVariants from './ButtonVariants';
import useVariants from '../../../hooks/useVariants';

interface Props  extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: FC<Props> = ({className, ...props}) => {
  const classList = [useVariants(ButtonVariants)];
  if(!!className) classList.join(className);
  
  return (
    <button className={classList.join(" ")} {...props}>Button</button>
  )
}

export default Button