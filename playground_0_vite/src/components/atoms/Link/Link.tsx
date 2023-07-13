import React, { ReactNode, FC } from 'react';
import ClassCollector from '../../../helpers/ClassManager/ClassCollector';

export interface Props {
  className?: string;
  text?: string;
  children?: ReactNode;
  url: string;
}

export const ClassBuilder = (className?: string) => {
  const classList = new ClassCollector();
  classList.addClass('--ac-link');
  classList.addClass(className);
  return classList;
};

const Link: FC<Props> = ({text, url, className, children, ...props}: Props) => {
  const classList = ClassBuilder(className);
  
  return (
    <a href={url} className={classList.build()} {...props}>{text}{children}</a>
  )
}

export default Link