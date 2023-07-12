import React, { ReactNode, FC } from 'react';
import ClassCollector from '../../../helpers/ClassCollector';

export interface Props {
  className?: string;
  text?: string;
  children?: ReactNode;
  url: string;
}

const Link: FC<Props> = ({text, url, className, children, ...props}: Props) => {
  const classList = new ClassCollector();
  classList.addClass('--ac-link');
  classList.addClass(className);

  return (
    <a href={url} className={classList.getList()} {...props}>{text}{children}</a>
  )
}

export default Link