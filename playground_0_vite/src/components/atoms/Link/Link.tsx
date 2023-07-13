import React, { ReactNode, FC } from 'react';
import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';

export interface Props {
  className?: string;
  text?: string;
  children?: ReactNode;
  url: string;
}

export const ClassBuilder2 = (className?: string) => {
  const classList = new ClassBuilder();
  classList.addClass('--ac-link');
  classList.addClass(className);
  return classList;
};

const Link: FC<Props> = ({text, url, className, children, ...props}: Props) => {
  const classList = ClassBuilder2(className);
  
  return (
    <a href={url} className={classList.build()} {...props}>{text}{children}</a>
  )
}

export default Link